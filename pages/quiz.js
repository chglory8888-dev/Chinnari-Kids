import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

const questions = [
  {
    question: "🐱 పిల్లి ఎలా అరుస్తుంది?",
    options: ["మ్యావ్ మ్యావ్", "భౌ భౌ", "కూ కూ", "కొక్కరోకో"],
    answer: "మ్యావ్ మ్యావ్",
  },
  {
    question: "🐶 కుక్క ఎలా అరుస్తుంది?",
    options: ["మ్యావ్ మ్యావ్", "భౌ భౌ", "కూ కూ", "కొక్కరోకో"],
    answer: "భౌ భౌ",
  },
  {
    question: "🐦 పక్షి ఎలా అరుస్తుంది?",
    options: ["భౌ భౌ", "మ్యావ్ మ్యావ్", "కూ కూ", "ఏమి కాదు"],
    answer: "కూ కూ",
  },
  {
    question: "🌞 మనకు వెలుతురు ఇచ్చేది ఏది?",
    options: ["చంద్రుడు", "సూర్యుడు", "చెట్టు", "పువ్వు"],
    answer: "సూర్యుడు",
  },
  {
    question: "🍎 ఆపిల్ ఏ రంగులో ఉంటుంది?",
    options: ["ఎరుపు", "నలుపు", "నీలం", "తెలుపు"],
    answer: "ఎరుపు",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const correctSound = useRef(null);
  const wrongSound = useRef(null);

  const question = questions[currentQuestion];

  function playSound(type) {
    const sound =
      type === "correct"
        ? correctSound.current
        : wrongSound.current;

    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  }

  function handleAnswer(option) {
    if (selected) return;

    setSelected(option);

    if (option === question.answer) {
      playSound("correct");
      setScore((prev) => prev + 1);
    } else {
      playSound("wrong");
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelected("");
      } else {
        setFinished(true);
      }
    }, 1000);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  }

  return (
    <>
      <Head>
        <title>Chinnaari Quiz</title>

        <meta
          name="description"
          content="Fun Telugu quiz for kids"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      {/* Sound Files */}
      <audio
        ref={correctSound}
        src="/sounds/correct.mp3"
        preload="auto"
      />

      <audio
        ref={wrongSound}
        src="/sounds/wrong.mp3"
        preload="auto"
      />

      <main className="quiz-page">
        <div className="quiz-card">

          <Link href="/" className="home-link">
            🏠 Home
          </Link>

          <h1>🎯 Chinnaari Quiz</h1>

          {!finished ? (
            <>
              <p className="progress">
                Question {currentQuestion + 1} /{" "}
                {questions.length}
              </p>

              <div className="question-box">
                <h2>{question.question}</h2>
              </div>

              <div className="options">
                {question.options.map((option) => {
                  let className = "option";

                  if (selected) {
                    if (option === question.answer) {
                      className += " correct";
                    } else if (option === selected) {
                      className += " wrong";
                    }
                  }

                  return (
                    <button
                      key={option}
                      className={className}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selected}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="result">

              <div className="trophy">
                🏆
              </div>

              <h2>Quiz Complete!</h2>

              <div className="score">
                {score} / {questions.length}
              </div>

              {score === questions.length ? (
                <p className="message">
                  🌟 Super! You are a Star!
                </p>
              ) : score >= 3 ? (
                <p className="message">
                  👏 Very Good! Keep Learning!
                </p>
              ) : (
                <p className="message">
                  😊 Good Try! Try Again!
                </p>
              )}

              <button
                className="restart"
                onClick={restartQuiz}
              >
                🔄 Play Again
              </button>

            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .quiz-page {
          min-height: 100vh;
          padding: 30px 15px;
          background: linear-gradient(
            135deg,
            #fff3b0,
            #ffd6e8,
            #c8f7ff
          );

          display: flex;
          justify-content: center;
          align-items: center;

          font-family: Arial, sans-serif;
        }

        .quiz-card {
          width: 100%;
          max-width: 600px;

          background: white;

          border-radius: 25px;

          padding: 30px 20px;

          text-align: center;

          box-shadow:
            0 10px 30px
            rgba(0, 0, 0, 0.15);
        }

        .home-link {
          display: inline-block;

          margin-bottom: 10px;

          text-decoration: none;

          color: #7b2cbf;

          font-weight: bold;

          font-size: 16px;
        }

        .home-link:hover {
          text-decoration: underline;
        }

        h1 {
          color: #ff6b35;

          font-size: 34px;

          margin: 10px 0 20px;
        }

        .progress {
          color: #777;

          font-size: 16px;

          font-weight: bold;

          margin-bottom: 20px;
        }

        .question-box {
          background: #fff8e7;

          border-radius: 20px;

          padding: 10px 15px;

          margin-bottom: 25px;
        }

        h2 {
          color: #333;

          font-size: 24px;

          margin: 20px 0;
        }

        .options {
          display: grid;

          gap: 14px;
        }

        .option {
          width: 100%;

          border: none;

          border-radius: 15px;

          padding: 15px;

          font-size: 18px;

          font-weight: bold;

          cursor: pointer;

          background: #f1f1f1;

          color: #333;

          transition: 0.2s;
        }

        .option:hover:not(:disabled) {
          transform: scale(1.02);

          background: #e5d4ff;
        }

        .option:disabled {
          cursor: default;
        }

        .option.correct {
          background: #9be7a7;

          color: #075b16;
        }

        .option.wrong {
          background: #ffaaa5;

          color: #8b0000;
        }

        .result {
          padding: 20px 0;
        }

        .trophy {
          font-size: 75px;

          animation: bounce 1s infinite;
        }

        .result h2 {
          color: #7b2cbf;

          font-size: 30px;
        }

        .score {
          font-size: 48px;

          font-weight: bold;

          color: #ff6b35;

          margin: 15px 0;
        }

        .message {
          font-size: 20px;

          color: #444;

          font-weight: bold;
        }

        .restart {
          margin-top: 20px;

          border: none;

          border-radius: 15px;

          padding: 15px 25px;

          font-size: 18px;

          font-weight: bold;

          cursor: pointer;

          background: #7b2cbf;

          color: white;

          transition: 0.2s;
        }

        .restart:hover {
          background: #5a189a;

          transform: scale(1.03);
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 480px) {
          .quiz-page {
            padding: 20px 10px;
          }

          .quiz-card {
            padding: 25px 15px;
          }

          h1 {
            font-size: 28px;
          }

          h2 {
            font-size: 20px;
          }

          .option {
            font-size: 16px;

            padding: 14px;
          }

          .score {
            font-size: 42px;
          }
        }
      `}</style>
    </>
  );
}
