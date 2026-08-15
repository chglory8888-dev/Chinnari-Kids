import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    q: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
    answer: "New Delhi",
    emoji: "🇮🇳",
  },
  {
    q: "Which is the largest country?",
    options: ["India", "Russia", "China", "Brazil"],
    answer: "Russia",
    emoji: "🌍",
  },
  {
    q: "Which animal is called the King of the Jungle?",
    options: ["Tiger", "Lion", "Elephant", "Bear"],
    answer: "Lion",
    emoji: "🦁",
  },
  {
    q: "Which bird is famous for colorful feathers?",
    options: ["Crow", "Peacock", "Sparrow", "Duck"],
    answer: "Peacock",
    emoji: "🦚",
  },
  {
    q: "Which fruit is yellow and curved?",
    options: ["Apple", "Banana", "Orange", "Grape"],
    answer: "Banana",
    emoji: "🍌",
  },
  {
    q: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    emoji: "📅",
  },
  {
    q: "Which planet do we live on?",
    options: ["Mars", "Earth", "Venus", "Jupiter"],
    answer: "Earth",
    emoji: "🌎",
  },
  {
    q: "What comes after A?",
    options: ["B", "C", "D", "E"],
    answer: "B",
    emoji: "🔤",
  },
  {
    q: "What is 2 + 3?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    emoji: "➕",
  },
  {
    q: "Which is the national flower of India?",
    options: ["Rose", "Lotus", "Sunflower", "Jasmine"],
    answer: "Lotus",
    emoji: "🌸",
  },
];

function playSound(type) {
  if (typeof window === "undefined") return;

  const AudioContext =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return;

  const audio = new AudioContext();

  if (audio.state === "suspended") {
    audio.resume();
  }

  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.connect(gain);
  gain.connect(audio.destination);

  if (type === "correct") {
    oscillator.type = "sine";
    oscillator.frequency.value = 700;

    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.3,
      audio.currentTime + 0.03
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.35
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.35);
  }

  if (type === "wrong") {
    oscillator.type = "square";
    oscillator.frequency.value = 160;

    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.2,
      audio.currentTime + 0.02
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.3
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.3);
  }

  if (type === "click") {
    oscillator.type = "sine";
    oscillator.frequency.value = 800;

    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.2,
      audio.currentTime + 0.01
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.1
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.1);
  }

  if (type === "win") {
    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      523,
      audio.currentTime
    );

    oscillator.frequency.setValueAtTime(
      659,
      audio.currentTime + 0.15
    );

    oscillator.frequency.setValueAtTime(
      784,
      audio.currentTime + 0.3
    );

    oscillator.frequency.setValueAtTime(
      1046,
      audio.currentTime + 0.45
    );

    gain.gain.setValueAtTime(0.001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.3,
      audio.currentTime + 0.03
    );
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.8
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.8);
  }
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function chooseAnswer(option) {
    if (answered) return;

    setSelected(option);
    setAnswered(true);

    if (option === question.answer) {
      setScore((old) => old + 1);
      playSound("correct");
    } else {
      playSound("wrong");
    }
  }

  function nextQuestion() {
    playSound("click");

    if (current === questions.length - 1) {
      playSound("win");
      setFinished(true);
      return;
    }

    setCurrent((old) => old + 1);
    setSelected("");
    setAnswered(false);
  }

  function restartQuiz() {
    playSound("click");
    setCurrent(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
  }

  return (
    <>
      <Head>
        <title>Chinnaari Kids Quiz</title>
        <meta
          name="description"
          content="Fun educational quiz for kids"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">
        <header className="header">
          <Link href="/" className="logo">
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/flags">🏳️ Flags</Link>
            <Link href="/world">🌍 World</Link>
          </nav>
        </header>

        {!finished ? (
          <section className="quizBox">
            <div className="hero">
              <div className="heroEmoji">
                🧠❓🎯
              </div>

              <h1>Mega Quiz</h1>

              <p>
                Learn • Think • Play • Discover
              </p>
            </div>

            <div className="info">
              <span>
                {question.emoji} Question {current + 1}
              </span>

              <span>
                ⭐ Score: {score}
              </span>
            </div>

            <div className="question">
              <h2>{question.q}</h2>
            </div>

            <div className="options">
              {question.options.map((option) => {
                const correct =
                  answered &&
                  option === question.answer;

                const wrong =
                  answered &&
                  option === selected &&
                  option !== question.answer;

                return (
                  <button
                    key={option}
                    className={
                      correct
                        ? "option correct"
                        : wrong
                        ? "option wrong"
                        : "option"
                    }
                    onClick={() =>
                      chooseAnswer(option)
                    }
                  >
                    <span>{option}</span>

                    {correct && <span>✅</span>}

                    {wrong && <span>❌</span>}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div
                className={
                  selected === question.answer
                    ? "feedback good"
                    : "feedback bad"
                }
              >
                {selected === question.answer
                  ? "🎉 Correct! Great job!"
                  : `😊 Correct answer: ${question.answer}`}
              </div>
            )}

            {answered && (
              <button
                className="next"
                onClick={nextQuestion}
              >
                {current === questions.length - 1
                  ? "🏆 See Result"
                  : "Next ➡️"}
              </button>
            )}
          </section>
        ) : (
          <section className="result">
            <div className="trophy">🏆</div>

            <h1>Quiz Complete!</h1>

            <div className="scoreBox">
              {score} / {questions.length}
            </div>

            <h2>
              {score === questions.length
                ? "🎉 Perfect Score!"
                : score >= 7
                ? "🌟 Excellent!"
                : score >= 5
                ? "👏 Good Job!"
                : "💪 Keep Learning!"}
            </h2>

            <button
              className="restart"
              onClick={restartQuiz}
            >
              🔄 Play Again
            </button>

            <Link href="/" className="home">
              🏠 Home
            </Link>
          </section>
        )}
      </main>
        <style jsx>{`
          .page {
            min-height: 100vh;
            background: #fffaf3;
            color: #333;
            font-family: Arial, sans-serif;
          }

          .header {
            min-height: 70px;
            padding: 15px 6%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            position: sticky;
            top: 0;
            z-index: 10;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }

          .logo {
            color: #333;
            text-decoration: none;
            font-size: 21px;
            font-weight: bold;
          }

          nav {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          nav a {
            color: #333;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
          }

          .quizBox {
            max-width: 850px;
            margin: 35px auto 60px;
            padding: 25px;
          }

          .hero {
            text-align: center;
            padding: 35px 15px;
            border-radius: 30px;
            background: linear-gradient(
              135deg,
              #e1f5ff,
              #fff0c9,
              #f6ddff
            );
          }

          .heroEmoji {
            font-size: 52px;
          }

          .hero h1 {
            font-size: 42px;
            margin: 10px 0;
          }

          .hero p {
            margin: 0;
            color: #555;
            font-size: 17px;
          }

          .info {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            margin: 25px 0 15px;
            font-weight: bold;
          }

          .question {
            padding: 30px 20px;
            margin-bottom: 20px;
            text-align: center;
            background: white;
            border-radius: 25px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
          }

          .question h2 {
            margin: 0;
            font-size: 24px;
            line-height: 1.5;
          }

          .options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .option {
            min-height: 60px;
            padding: 14px 18px;
            border: 2px solid #e5e5e5;
            border-radius: 20px;
            background: white;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: 0.2s;
          }

          .option:hover {
            transform: translateY(-2px);
            border-color: #ffad42;
            background: #fff9ed;
          }

          .correct {
            background: #e1f7e1 !important;
            border-color: #4caf50 !important;
          }

          .wrong {
            background: #ffe2e2 !important;
            border-color: #f44336 !important;
          }

          .feedback {
            margin-top: 20px;
            padding: 15px;
            border-radius: 20px;
            text-align: center;
            font-weight: bold;
          }

          .good {
            background: #e1f7e1;
          }

          .bad {
            background: #ffe2e2;
          }

          .next {
            display: block;
            margin: 25px auto 0;
            padding: 14px 28px;
            border: none;
            border-radius: 25px;
            background: #4caf50;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }

          .next:hover {
            transform: translateY(-2px);
          }

          .result {
            max-width: 650px;
            margin: 70px auto;
            padding: 45px 20px;
            background: white;
            border-radius: 30px;
            text-align: center;
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
          }

          .trophy {
            font-size: 85px;
          }

          .result h1 {
            font-size: 35px;
          }

          .scoreBox {
            display: inline-block;
            padding: 18px 35px;
            margin: 15px;
            border-radius: 25px;
            background: #fff0c9;
            font-size: 40px;
            font-weight: bold;
          }

          .restart,
          .home {
            display: inline-block;
            margin: 10px;
            padding: 13px 25px;
            border: none;
            border-radius: 25px;
            background: #4caf50;
            color: white;
            text-decoration: none;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
          }

          .home {
            background: #ff9800;
          }

          @media (max-width: 700px) {
            .header {
              flex-direction: column;
            }

            .quizBox {
              margin: 20px 8px 40px;
              padding: 12px;
            }

            .options {
              grid-template-columns: 1fr;
            }

            .hero h1 {
              font-size: 34px;
            }

            .question h2 {
              font-size: 21px;
            }
          }

          @media (max-width: 450px) {
            nav {
              gap: 8px;
            }

            nav a {
              font-size: 11px;
            }

            .heroEmoji {
              font-size: 42px;
            }

            .hero h1 {
              font-size: 30px;
            }

            .info {
              font-size: 13px;
            }
          }
        `}</style>
      </>
    );
  }
}
