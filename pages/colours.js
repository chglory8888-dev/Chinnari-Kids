import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const colours = [
  { name: "Red", emoji: "🔴", telugu: "ఎరుపు" },
  { name: "Blue", emoji: "🔵", telugu: "నీలం" },
  { name: "Green", emoji: "🟢", telugu: "ఆకుపచ్చ" },
  { name: "Yellow", emoji: "🟡", telugu: "పసుపు" },
  { name: "Orange", emoji: "🟠", telugu: "నారింజ" },
  { name: "Purple", emoji: "🟣", telugu: "ఊదా" },
];

const quiz = [
  {
    question: "Which colour is RED?",
    options: ["🔴", "🔵", "🟢", "🟡"],
    answer: "🔴",
  },
  {
    question: "Which colour is BLUE?",
    options: ["🟢", "🟡", "🔵", "🔴"],
    answer: "🔵",
  },
  {
    question: "Which colour is GREEN?",
    options: ["🟣", "🟢", "🟠", "🔴"],
    answer: "🟢",
  },
  {
    question: "Which colour is YELLOW?",
    options: ["🔵", "🟡", "🟣", "🟢"],
    answer: "🟡",
  },
];

export default function Colours() {
  const [mode, setMode] = useState("learn");

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState("");

  function startQuiz() {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setMessage("");
    setMode("quiz");
  }

  function chooseAnswer(option) {
    if (option === quiz[current].answer) {
      setScore((value) => value + 1);
      setMessage("🎉 Correct! Well done!");
    } else {
      setMessage("💡 Nice try! Keep learning!");
    }

    setTimeout(() => {
      setMessage("");

      if (current === quiz.length - 1) {
        setFinished(true);
      } else {
        setCurrent((value) => value + 1);
      }
    }, 800);
  }

  function restartQuiz() {
    startQuiz();
  }

  return (
    <>
      <Head>
        <title>Learn Colours for Kids | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn colours for kids with fun English and Telugu colour names, examples and a simple colour quiz."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

        {/* HEADER */}

        <header className="header">

          <Link href="/" className="logo">
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">Home</Link>

            <Link href="/stories">
              📚 Stories
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link
              href="/colours"
              className="active"
            >
              🎨 Colours
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="rainbow">
            🌈
          </div>

          <h1>
            Let's Learn Colours!
          </h1>

          <p>
            Learn colours in English & Telugu 🎨
          </p>

        </section>

        {/* TABS */}

        <div className="tabs">

          <button
            className={mode === "learn" ? "selected" : ""}
            onClick={() => setMode("learn")}
          >
            🎨 Learn Colours
          </button>

          <button
            className={mode === "quiz" ? "selected" : ""}
            onClick={startQuiz}
          >
            🧠 Colour Quiz
          </button>

        </div>

        {/* LEARN */}

        {mode === "learn" && (
          <section className="learning">

            <h2>
              🌟 Colours Around Us
            </h2>

            <p className="intro">
              Tap and learn the colour names!
            </p>

            <div className="colourGrid">

              {colours.map((colour) => (
                <div
                  className="colourCard"
                  key={colour.name}
                >

                  <div className="bigColour">
                    {colour.emoji}
                  </div>

                  <h3>
                    {colour.name}
                  </h3>

                  <p>
                    {colour.telugu}
                  </p>

                </div>
              ))}

            </div>

            <div className="learnMessage">

              <span>
                🌟
              </span>

              <div>
                <h3>
                  Ready for a challenge?
                </h3>

                <p>
                  Test how many colours you remember!
                </p>

                <button onClick={startQuiz}>
                  🧠 Start Colour Quiz
                </button>
              </div>

            </div>

          </section>
        )}

        {/* QUIZ */}

        {mode === "quiz" && !finished && (
          <section className="quizBox">

            <div className="quizTop">

              <span>
                🎨 Colour Quiz
              </span>

              <span>
                {current + 1} / {quiz.length}
              </span>

            </div>

            <h2>
              {quiz[current].question}
            </h2>

            <div className="quizOptions">

              {quiz[current].options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() =>
                      chooseAnswer(option)
                    }
                  >
                    {option}
                  </button>
                )
              )}

            </div>

            {message && (
              <div className="message">
                {message}
              </div>
            )}

            <button
              className="backButton"
              onClick={() => setMode("learn")}
            >
              ← Back to Colours
            </button>

          </section>
        )}

        {/* RESULT */}

        {mode === "quiz" && finished && (
          <section className="result">

            <div className="trophy">
              🏆🎨
            </div>

            <h2>
              Colour Champion!
            </h2>

            <p>
              Your score
            </p>

            <div className="score">
              {score} / {quiz.length}
            </div>

            <p>
              Keep learning and exploring colours! 🌈
            </p>

            <div className="resultButtons">

              <button onClick={restartQuiz}>
                🔄 Play Again
              </button>

              <button
                onClick={() => setMode("learn")}
              >
                🎨 Learn Again
              </button>

            </div>

          </section>
        )}

        {/* COLOUR FACT */}

        <section className="fact">

          <div className="factEmoji">
            🌈
          </div>

          <div>

            <h2>
              🌟 Did You Know?
            </h2>

            <p>
              Colours make our world beautiful!
              Children can learn colours by looking
              at fruits, flowers, toys and things around
              them.
            </p>

          </div>

        </section>

        {/* HOME */}

        <div className="homeButton">

          <Link href="/">
            🏠 Back to Home
          </Link>

        </div>

        {/* FOOTER */}

        <footer>

          <h3>
            🌈 Chinnaari Kids
          </h3>

          <p>
            Learn • Play • Discover
          </p>

          <p>
            © 2026 Chinnaari Kids
          </p>

        </footer>

      </main>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          background: #fffaf3;
          color: #333;
          font-family: Arial, sans-serif;
        }

        /* HEADER */

        .header {
          min-height: 70px;
          padding: 14px 6%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background: white;

          box-shadow:
            0 2px 15px rgba(0,0,0,0.08);

          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          color: #333;
          text-decoration: none;

          font-size: 24px;
          font-weight: 800;

          white-space: nowrap;
        }

        nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-weight: 600;
        }

        nav a:hover,
        nav a.active {
          color: #ff6b6b;
        }

        /* HERO */

        .hero {
          text-align: center;

          padding: 55px 20px;

          background:
            linear-gradient(
              135deg,
              #ffe0ea,
              #dff4ff
            );
        }

        .rainbow {
          font-size: 75px;
        }

        .hero h1 {
          font-size: 42px;
          margin: 15px 0 10px;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        /* TABS */

        .tabs {
          display: flex;

          justify-content: center;

          gap: 12px;

          margin: 35px 20px 10px;

          flex-wrap: wrap;
        }

        .tabs button {
          border: none;

          padding: 14px 22px;

          border-radius: 25px;

          background: white;

          box-shadow:
            0 3px 12px
            rgba(0,0,0,0.08);

          font-weight: bold;

          cursor: pointer;
        }

        .tabs button.selected {
          background: #ff6b6b;
          color: white;
        }

        /* LEARNING */

        .learning {
          max-width: 1050px;

          margin: 30px auto 55px;

          padding: 30px 20px;

          text-align: center;
        }

        .learning h2 {
          font-size: 30px;
        }

        .intro {
          color: #666;
        }

        .colourGrid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 22px;

          margin-top: 30px;
        }

        .colourCard {
          padding: 28px 15px;

          background: white;

          border-radius: 25px;

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.07);

          transition:
            transform 0.2s;
        }

        .colourCard:hover {
          transform: translateY(-7px);
        }

        .bigColour {
          font-size: 75px;
        }

        .colourCard h3 {
          margin: 12px 0 5px;

          font-size: 22px;
        }

        .colourCard p {
          margin: 0;

          font-size: 18px;

          color: #666;
        }

        /* LEARN MESSAGE */

        .learnMessage {
          max-width: 750px;

          margin: 40px auto 0;

          padding: 25px;

          display: flex;

          align-items: center;

          gap: 20px;

          text-align: left;

          border-radius: 25px;

          background:
            linear-gradient(
              135deg,
              #e8ddff,
              #dff6ff
            );
        }

        .learnMessage > span {
          font-size: 60px;
        }

        .learnMessage h3 {
          margin: 0 0 5px;
        }

        .learnMessage p {
          margin: 5px 0 12px;

          color: #555;
        }

        .learnMessage button {
          border: none;

          padding: 12px 18px;

          border-radius: 22px;

          background: #4caf50;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* QUIZ */

        .quizBox {
          max-width: 700px;

          margin: 50px auto;

          padding: 40px 30px;

          background: white;

          border-radius: 30px;

          text-align: center;

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.08);
        }

        .quizTop {
          display: flex;

          justify-content: space-between;

          color: #666;

          font-weight: bold;
        }

        .quizBox h2 {
          font-size: 28px;

          margin: 45px 0 30px;
        }

        .quizOptions {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 15px;
        }

        .quizOptions button {
          border: none;

          padding: 25px;

          border-radius: 22px;

          background: #f1edff;

          font-size: 50px;

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .quizOptions button:hover {
          transform: scale(1.05);
        }

        .message {
          margin-top: 25px;

          padding: 15px;

          border-radius: 18px;

          background: #fff0b8;

          font-weight: bold;
        }

        .backButton {
          margin-top: 25px;

          border: none;

          padding: 12px 20px;

          border-radius: 25px;

          background: #333;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* RESULT */

        .result {
          max-width: 650px;

          margin: 60px auto;

          padding: 45px 25px;

          background: white;

          border-radius: 30px;

          text-align: center;

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.08);
        }

        .trophy {
          font-size: 75px;
        }

        .result h2 {
          font-size: 32px;
        }

        .score {
          font-size: 45px;

          font-weight: 800;

          margin: 20px;
        }

        .result p {
          color: #555;

          font-size: 18px;
        }

        .resultButtons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 25px;
        }

        .resultButtons button {
          border: none;

          padding: 13px 20px;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* FACT */

        .fact {
          max-width: 950px;

          margin: 20px auto 50px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0bd,
              #e0f4ff
            );
        }

        .factEmoji {
          font-size: 70px;
        }

        .fact h2 {
          margin-top: 0;
        }

        .fact p {
          line-height: 1.7;

          color: #555;
        }

        /* HOME */

        .homeButton {
          text-align: center;

          margin: 40px 0 55px;
        }

        .homeButton a {
          display: inline-block;

          padding: 13px 22px;

          border-radius: 25px;

          background: #333;

          color: white;

          text-decoration: none;

          font-weight: bold;
        }

        /* FOOTER */

        footer {
          padding: 35px 20px;

          text-align: center;

          background: #333;

          color: white;
        }

        footer h3 {
          margin-top: 0;
        }

        footer p {
          margin: 8px;
        }

        /* TABLET */

        @media (max-width: 800px) {

          .header {
            flex-direction: column;

            gap: 15px;
          }

          nav {
            justify-content: center;

            gap: 12px;
          }

          nav a {
            font-size: 13px;
          }

          .colourGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .fact {
            margin-left: 20px;
            margin-right: 20px;

            flex-direction: column;

            text-align: center;
          }

        }

        /* MOBILE */

        @media (max-width: 550px) {

          .hero h1 {
            font-size: 34px;
          }

          .colourGrid {
            grid-template-columns: 1fr;
          }

          .quizBox {
            margin: 35px 20px;

            padding: 30px 20px;
          }

          .quizBox h2 {
            font-size: 23px;
          }

          .quizOptions {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .quizOptions button {
            font-size: 40px;
          }

          .learnMessage {
            flex-direction: column;

            text-align: center;
          }

        }

      `}</style>
    </>
  );
    }
