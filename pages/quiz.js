
Today 9:08 AM

Flags related Yekkada undi 


Pasted text.txt
Document


Pasted text.txt
Document

👍 Okay. ఇప్పుడు quiz.js లో sound function replace చేయడానికి exact code ఇస్తాను.

function playSound(type) { నుంచి ఆ function ముగిసే వరకు మొత్తం delete చేసి, దాని స్థానంలో ఇది paste చేయండి:

function playSound(type) {

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.3
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.3);
  }

  else if (type === "click") {
    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      800,
      audio.currentTime
    );

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

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

  else if (type === "win") {
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

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

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
తర్వాత
Save → Commit changes → Vercel deploy → /quiz

మొదట ఒక answer button click చేసి test చేయండి. 🔊

If still no sound, అప్పుడు browser autoplay restriction కోసం ఒక “🔊 Enable Sounds” button add చేద్దాం — అది mobileలో మరింత reliable.


Code sagame copy avuthundi

అవును 👍 Mobileలో పెద్ద code మొత్తం copy అవ్వడం లేదు. మొత్తం function copy చేయించకుండా చిన్న చిన్న partsగా చేద్దాం.

మీ quiz.jsలో const audio = new AudioContext(); అని search చేయండి.

దాన్ని ఈ ఒక్క lineతో replace చేయండి:

const audio = new AudioContext();
audio.resume();
అంతే. ఇంకేమీ మార్చొద్దు.

తర్వాత Save → Commit → Vercel deploy చేయండి.

ఇది కూడా sound ఇవ్వకపోతే, తర్వాత code మార్చకుండా 🔊 Enable Sounds button పెడదాం.


Two parts ga pettu

Sure 👍 2 parts ga isthanu. pages/quiz.js ni complete ga replace cheyyandi.

Part 1/2 — copy first
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
    q: "Which flower is the national flower of India?",
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

    oscillator.frequency.setValueAtTime(
      523,
      audio.currentTime
    );

    oscillator.frequency.setValueAtTime(
      659,
      audio.currentTime + 0.12
    );

    oscillator.frequency.setValueAtTime(
      784,
      audio.currentTime + 0.24
    );

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.3,
      audio.currentTime + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.45
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.45);
  }

  if (type === "wrong") {
    oscillator.type = "square";

    oscillator.frequency.setValueAtTime(
      180,
      audio.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      80,
      audio.currentTime + 0.3
    );

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

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

    oscillator.frequency.value = 700;

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

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

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

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

  if (finished) {
    return (
      <>
        <Head>
          <title>Quiz Result | Chinnaari Kids</title>
        </Head>

        <main className="page">
          <header className="header">
            <Link href="/" className="logo">
              🌈 Chinnaari Kids
            </Link>

            <nav>
              <Link href="/">Home</Link>
              <Link href="/flags">🏳️ Flags</Link>
              <Link href="/world">🌎 World</Link>
            </nav>
          </header>

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

            <br />

            <Link href="/" className="homeButton">
              🏠 Home
            </Link>
          </section>
        </main>

        <style jsx>{`
          .page {
            min-height: 100vh;
            background: #fffaf3;
            font-family: Arial, sans-serif;
          }

          .header {
            padding: 16px 6%;
            background: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }

          .logo {
            text-decoration: none;
            color: #333;
            font-size: 21px;
            font-weight: bold;
          }

          nav {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }

          nav a {
            color: #333;
            text-decoration: none;
            font-weight: bold;
            font-size: 13px;
          }

          .result {
            max-width: 650px;
            margin: 80px auto;
            padding: 45px 20px;
            text-align: center;
            background: white;
            border-radius: 30px;
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.08);
          }

          .trophy {
            font-size: 90px;
          }

          .result h1 {
            font-size: 35px;
          }

          .scoreBox {
            display: inline-block;
            margin: 15px;
            padding: 18px 35px;
            border-radius: 25px;
            background: #fff0c9;
            font-size: 40px;
            font-weight: bold;
          }

          .restart,
          .homeButton {
            display: inline-block;
            margin: 10px;
            padding: 13px 24px;
            border-radius: 25px;
            border: none;
            background: #4caf50;
            color: white;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
          }

          .homeButton {
            background: #ff9800;
          }
        `}</style>
      </>
    );
  }
      <>
        <Head>
          <title>Quiz | Chinnaari Kids</title>

          <meta
            name="description"
            content="Fun educational quiz for children"
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
              <Link href="/world">🌎 World</Link>
            </nav>
          </header>

          <section className="hero">
            <div className="emoji">
              🧠❓🎯
            </div>

            <h1>Mega Quiz</h1>

            <p>
              Learn • Think • Play • Discover
            </p>
          </section>

          <section className="quizCard">

            <div className="top">
              <div>
                {question.emoji} Question{" "}
                {current + 1}
              </div>

              <div>
                ⭐ Score: {score}
              </div>
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

                    {correct && (
                      <span>✅</span>
                    )}

                    {wrong && (
                      <span>❌</span>
                    )}
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
            z-index: 20;
            box-shadow:
              0 2px 12px rgba(0,0,0,0.08);
          }

          .logo {
            color: #333;
            text-decoration: none;
            font-size: 21px;
            font-weight: bold;
          }

          nav {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            justify-content: center;
          }

          nav a {
            color: #333;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
          }

          .hero {
            padding: 55px 20px;
            text-align: center;
            background:
              linear-gradient(
                135deg,
                #e1f5ff,
                #fff0c9,
                #f6ddff
              );
          }

          .emoji {
            font-size: 55px;
          }

          .hero h1 {
            font-size: 43px;
            margin: 12px 0;
          }

          .hero p {
            font-size: 18px;
            color: #555;
          }

          .quizCard {
            max-width: 850px;
            margin: 40px auto 70px;
            padding: 30px;
            background: white;
            border-radius: 30px;
            box-shadow:
              0 6px 25px rgba(0,0,0,0.08);
          }

          .top {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            padding-bottom: 20px;
            font-weight: bold;
          }

          .question {
            padding: 35px 20px;
            text-align: center;
            border-radius: 25px;
            background:
              linear-gradient(
                135deg,
                #f0f8ff,
                #fff7dc
              );
            margin-bottom: 25px;
          }

          .question h2 {
            font-size: 25px;
            line-height: 1.5;
            margin: 0;
          }

          .options {
            display: grid;
            grid-template-columns:
              repeat(2, 1fr);
            gap: 15px;
          }

          .option {
            min-height: 62px;
            border: 2px solid #e5e5e5;
            border-radius: 20px;
            background: white;
            padding: 15px;
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
            background: #e2f8e2 !important;
            border-color: #4caf50 !important;
          }

          .wrong {
            background: #ffe3e3 !important;
            border-color: #f44336 !important;
          }

          .feedback {
            margin-top: 20px;
            padding: 15px;
            text-align: center;
            border-radius: 20px;
            font-weight: bold;
          }

          .good {
            background: #e2f8e2;
          }

          .bad {
            background: #ffe3e3;
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

          @media (max-width: 700px) {

            .header {
              flex-direction: column;
            }

            .options {
              grid-template-columns: 1fr;
            }

            .quizCard {
              margin: 25px 10px 50px;
              padding: 20px;
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

            .emoji {
              font-size: 42px;
            }

            .hero h1 {
              font-size: 30px;
            }

            .top {
              font-size: 13px;
            }

          }

        `}</style>
      </>
    );
}
            
