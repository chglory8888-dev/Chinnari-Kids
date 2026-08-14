import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const puzzles = [
  {
    type: "Number Puzzle",
    emoji: "🔢",
    question: "What comes next?",
    display: "2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    answer: "10",
  },
  {
    type: "Letter Puzzle",
    emoji: "🔤",
    question: "What letter comes next?",
    display: "A, B, C, ?",
    options: ["D", "E", "F", "G"],
    answer: "D",
  },
  {
    type: "Animal Puzzle",
    emoji: "🐾",
    question: "Which animal says MOO?",
    display: "🐮 ?",
    options: ["Cow", "Dog", "Cat", "Lion"],
    answer: "Cow",
  },
  {
    type: "Shape Puzzle",
    emoji: "🔷",
    question: "Which shape has 3 sides?",
    display: "🔺 ?",
    options: ["Circle", "Square", "Triangle", "Rectangle"],
    answer: "Triangle",
  },
];

export default function Puzzles() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState("");

  function chooseAnswer(option) {
    const puzzle = puzzles[current];

    if (option === puzzle.answer) {
      setScore((value) => value + 1);
      setMessage("🎉 Correct! Great job!");
    } else {
      setMessage(
        `💡 Nice try! Correct answer: ${puzzle.answer}`
      );
    }

    setTimeout(() => {
      setMessage("");

      if (current === puzzles.length - 1) {
        setFinished(true);
      } else {
        setCurrent((value) => value + 1);
      }
    }, 900);
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Fun Puzzles for Kids | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational puzzles for kids including numbers, letters, animals and shapes."
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

            <Link href="/puzzles" className="active">
              🧩 Puzzles
            </Link>

            <Link href="/colours">
              🎨 Colours
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroEmoji">
            🧩✨
          </div>

          <h1>
            Fun Puzzles!
          </h1>

          <p>
            Think, solve and learn something new! 🧠
          </p>

        </section>

        {/* PUZZLE */}

        {!finished && (
          <section className="puzzleBox">

            <div className="top">

              <span>
                {puzzles[current].emoji}{" "}
                {puzzles[current].type}
              </span>

              <span>
                {current + 1} / {puzzles.length}
              </span>

            </div>

            <div className="puzzleContent">

              <h2>
                {puzzles[current].question}
              </h2>

              <div className="puzzleDisplay">
                {puzzles[current].display}
              </div>

              <div className="options">

                {puzzles[current].options.map(
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

            </div>

          </section>
        )}

        {/* RESULT */}

        {finished && (
          <section className="result">

            <div className="trophy">
              🏆
            </div>

            <h2>
              Puzzle Champion!
            </h2>

            <p>
              You completed all the puzzles! 🌟
            </p>

            <div className="score">
              {score} / {puzzles.length}
            </div>

            <p>
              Keep learning and keep playing! ❤️
            </p>

            <div className="buttons">

              <button onClick={restart}>
                🔄 Play Again
              </button>

              <Link href="/games">
                🎮 More Games
              </Link>

            </div>

          </section>
        )}

        {/* LEARNING MESSAGE */}

        <section className="learning">

          <div className="learningEmoji">
            🧠
          </div>

          <div>

            <h2>
              Puzzles make your brain stronger! 🌟
            </h2>

            <p>
              Solving simple puzzles helps children
              improve thinking, memory and problem-solving
              skills.
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
              #fff0c7,
              #e4ddff
            );
        }

        .heroEmoji {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 43px;
          margin: 15px 0 10px;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        /* PUZZLE BOX */

        .puzzleBox {
          max-width: 750px;

          margin: 55px auto;

          padding: 35px;

          background: white;

          border-radius: 30px;

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.08);
        }

        .top {
          display: flex;

          justify-content: space-between;

          gap: 15px;

          font-weight: bold;

          color: #666;
        }

        .puzzleContent {
          text-align: center;
        }

        .puzzleContent h2 {
          font-size: 28px;
          margin: 45px 0 25px;
        }

        .puzzleDisplay {
          display: inline-block;

          padding: 20px 30px;

          margin-bottom: 30px;

          border-radius: 20px;

          background: #eee5ff;

          font-size: 32px;

          font-weight: bold;
        }

        .options {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 15px;
        }

        .options button {
          border: none;

          padding: 18px;

          border-radius: 20px;

          background: #dff3ff;

          font-size: 18px;

          font-weight: bold;

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .options button:hover {
          transform: scale(1.04);
        }

        .message {
          margin-top: 25px;

          padding: 15px;

          border-radius: 18px;

          background: #fff0bd;

          font-weight: bold;

          line-height: 1.5;
        }

        /* RESULT */

        .result {
          max-width: 650px;

          margin: 65px auto;

          padding: 50px 30px;

          background: white;

          border-radius: 30px;

          text-align: center;

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.08);
        }

        .trophy {
          font-size: 80px;
        }

        .result h2 {
          font-size: 32px;
        }

        .result p {
          font-size: 18px;

          color: #555;

          line-height: 1.6;
        }

        .score {
          font-size: 42px;

          font-weight: 800;

          margin: 20px 0;
        }

        .buttons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 25px;
        }

        .buttons button,
        .buttons a {
          border: none;

          padding: 13px 20px;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          text-decoration: none;

          font-weight: bold;

          cursor: pointer;
        }

        /* LEARNING */

        .learning {
          max-width: 1000px;

          margin: 20px auto 50px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #e0f6ff,
              #e8ddff
            );

          box-shadow:
            0 6px 20px
            rgba(0,0,0,0.06);
        }

        .learningEmoji {
          font-size: 70px;
        }

        .learning h2 {
          margin-top: 0;

          font-size: 27px;
        }

        .learning p {
          color: #555;

          font-size: 17px;

          line-height: 1.7;
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

          .learning {
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

          .puzzleBox {
            margin: 35px 20px;

            padding: 25px 20px;
          }

          .puzzleContent h2 {
            font-size: 23px;
          }

          .puzzleDisplay {
            font-size: 25px;
          }

          .options {
            grid-template-columns: 1fr 1fr;
          }

          .learning {
            padding: 25px 20px;
          }

        }

      `}</style>
    </>
  );
    }
