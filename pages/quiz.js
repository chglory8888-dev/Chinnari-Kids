import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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
  const [soundOn, setSoundOn] = useState(true);

  const question = questions[currentQuestion];

  // -----------------------------
  // TEXT TO SPEECH
  // -----------------------------
  function speak(text) {
    if (!soundOn) return;

    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    // Telugu / English detection
    const hasTelugu = /[\u0C00-\u0C7F]/.test(text);

    speech.lang = hasTelugu ? "te-IN" : "en-IN";

    speech.rate = 0.8;
    speech.pitch = 1.05;
    speech.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    if (hasTelugu) {
      const teluguVoice = voices.find(
        (voice) =>
          voice.lang &&
          voice.lang.toLowerCase().startsWith("te")
      );

      if (teluguVoice) {
        speech.voice = teluguVoice;
      }
    } else {
      const englishVoice = voices.find(
        (voice) =>
          voice.lang &&
          voice.lang.toLowerCase().startsWith("en-in")
      );

      if (englishVoice) {
        speech.voice = englishVoice;
      }
    }

    window.speechSynthesis.speak(speech);
  }

  // -----------------------------
  // SOUND EFFECT
  // -----------------------------
  function playSound(type) {
    if (!soundOn) return;

    if (typeof window === "undefined") return;

    try {
      const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

      if (!AudioContext) return;

      const audioContext = new AudioContext();

      const oscillator =
        audioContext.createOscillator();

      const gainNode =
        audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (type === "correct") {
        oscillator.frequency.setValueAtTime(
          523.25,
          audioContext.currentTime
        );

        oscillator.frequency.setValueAtTime(
          659.25,
          audioContext.currentTime + 0.12
        );

        oscillator.frequency.setValueAtTime(
          783.99,
          audioContext.currentTime + 0.24
        );

        gainNode.gain.setValueAtTime(
          0.2,
          audioContext.currentTime
        );

        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.45
        );

        oscillator.start();

        oscillator.stop(
          audioContext.currentTime + 0.45
        );
      } else {
        oscillator.frequency.setValueAtTime(
          220,
          audioContext.currentTime
        );

        oscillator.frequency.setValueAtTime(
          160,
          audioContext.currentTime + 0.18
        );

        gainNode.gain.setValueAtTime(
          0.2,
          audioContext.currentTime
        );

        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.35
        );

        oscillator.start();

        oscillator.stop(
          audioContext.currentTime + 0.35
        );
      }
    } catch (error) {
      console.log("Sound error:", error);
    }
  }

  // -----------------------------
  // ANSWER
  // -----------------------------
  function handleAnswer(option) {
    if (selected) return;

    // First speak the selected word
    speak(option);

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
    }, 1800);
  }

  // -----------------------------
  // RESTART
  // -----------------------------
  function restartQuiz() {
    window.speechSynthesis?.cancel();

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
          content="Telugu and English learning quiz for kids"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="quiz-page">

        <div className="quiz-card">

          <div className="top-bar">

            <Link href="/" className="home-link">
              🏠 Home
            </Link>

            <button
              className="sound-button"
              onClick={() =>
                setSoundOn((prev) => !prev)
              }
            >
              {soundOn
                ? "🔊 Voice ON"
                : "🔇 Voice OFF"}
            </button>

          </div>

          <h1>🎯 Chinnaari Quiz</h1>

          {!finished ? (
            <>
              <p className="progress">
                Question {currentQuestion + 1} /{" "}
                {questions.length}
              </p>

              <div className="question-box">

                <h2>{question.question}</h2>

                <button
                  className="listen-button"
                  onClick={() =>
                    speak(question.question)
                  }
                >
                  🔊 Listen
                </button>

              </div>

              <div className="options">

                {question.options.map((option) => {

                  let className = "option";

                  if (selected) {

                    if (
                      option === question.answer
                    ) {
                      className += " correct";
                    } else if (
                      option === selected
                    ) {
                      className += " wrong";
                    }
                  }

                  return (
                    <button
                      key={option}
                      className={className}
                      onClick={() =>
                        handleAnswer(option)
                      }
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

              <h2>
                Quiz Complete!
              </h2>

              <div className="score">
                {score} / {questions.length}
              </div>

              {score === questions.length ? (
                <p className="message">
                  🌟 Perfect Score!
                </p>
              ) : score >= 3 ? (
                <p className="message">
                  👏 Very Good!
                </p>
              ) : (
                <p className="message">
                  😊 Good Try!
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

          padding: 25px 15px;

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

        .top-bar {
          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 10px;
        }

        .home-link {
          text-decoration: none;

          color: #7b2cbf;

          font-weight: bold;
        }

        .sound-button {
          border: none;

          border-radius: 12px;

          padding: 9px 12px;

          background: #f1f1f1;

          font-weight: bold;

          cursor: pointer;
        }

        h1 {
          color: #ff6b35;

          font-size: 34px;

          margin: 20px 0;
        }

        .progress {
          color: #777;

          font-weight: bold;
        }

        .question-box {
          background: #fff8e7;

          border-radius: 20px;

          padding: 15px;

          margin: 20px 0 25px;
        }

        h2 {
          color: #333;

          font-size: 24px;
        }

        .listen-button {
          border: none;

          border-radius: 12px;

          padding: 10px 18px;

          background: #ffca3a;

          color: #333;

          font-weight: bold;

          cursor: pointer;
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
        }

        .result h2 {
          color: #7b2cbf;
        }

        .score {
          font-size: 48px;

          font-weight: bold;

          color: #ff6b35;

          margin: 15px;
        }

        .message {
          font-size: 20px;

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
        }

        @media (max-width: 480px) {

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
          }

          .top-bar {
            align-items: stretch;
          }

          .sound-button {
            font-size: 12px;
          }
        }

      `}</style>
    </>
  );
}
