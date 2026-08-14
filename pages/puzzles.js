import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const puzzles = [
  {
    question: "🍎 Which one is a fruit?",
    options: ["🍎 Apple", "🚗 Car", "🐶 Dog"],
    answer: "🍎 Apple",
  },
  {
    question: "🐱 Which animal says Meow?",
    options: ["🐶 Dog", "🐱 Cat", "🦁 Lion"],
    answer: "🐱 Cat",
  },
  {
    question: "🔢 What comes after 2?",
    options: ["1", "3", "5"],
    answer: "3",
  },
  {
    question: "🌈 Which one is a colour?",
    options: ["Red", "Chair", "Book"],
    answer: "Red",
  },
  {
    question: "☀️ What gives us light during the day?",
    options: ["Moon", "Sun", "Star"],
    answer: "Sun",
  },
];

export default function Puzzles() {
  const [current, setCurrent] = useState(0);
  const [stars, setStars] = useState(0);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);

  const puzzle = puzzles[current];

  function checkAnswer(option) {
    if (message) return;

    if (option === puzzle.answer) {
      setStars((value) => value + 5);
      setMessage("🎉 Correct! +5 Stars ⭐");
    } else {
      setMessage("😊 Try again!");
    }
  }

  function nextPuzzle() {
    setMessage("");

    if (current < puzzles.length - 1) {
      setCurrent((value) => value + 1);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setStars(0);
    setMessage("");
    setFinished(false);
  }

  return (
    <>
      <Head>
        <title>Kids Puzzles | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational puzzles for kids."
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
            <Link href="/dashboard">🌟 Dashboard</Link>
            <Link href="/stories">📚 Stories</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
            <Link href="/learn">🔤 Learn</Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroIcon">
            🧩
          </div>

          <h1>
            Puzzle Time!
          </h1>

          <p>
            Think, choose and earn stars! ⭐
          </p>

        </section>

        {!finished ? (
          <section className="gameBox">

            <div className="progress">
              Puzzle {current + 1} of {puzzles.length}
            </div>

            <div className="stars">
              ⭐ {stars} Stars
            </div>

            <div className="question">
              {puzzle.question}
            </div>

            <div className="options">

              {puzzle.options.map((option) => (
                <button
                  key={option}
                  onClick={() => checkAnswer(option)}
                  className="option"
                >
                  {option}
                </button>
              ))}

            </div>

            {message && (
              <div
                className={
                  message.includes("Correct")
                    ? "message correct"
                    : "message wrong"
                }
              >
                {message}
              </div>
            )}

            {message.includes("Correct") && (
              <button
                onClick={nextPuzzle}
                className="nextButton"
              >
                {current === puzzles.length - 1
                  ? "🏆 Finish"
                  : "➡️ Next Puzzle"}
              </button>
            )}

          </section>
        ) : (
          <section className="result">

            <div className="trophy">
              🏆
            </div>

            <h2>
              Amazing Job! 🎉
            </h2>

            <p>
              You completed all the puzzles!
            </p>

            <div className="finalStars">
              ⭐ {stars} Stars
            </div>

            <div className="resultButtons">

              <button
                onClick={restart}
                className="restart"
              >
                🔄 Play Again
              </button>

              <Link
                href="/dashboard"
                className="dashboard"
              >
                🌟 Dashboard
              </Link>

            </div>

          </section>
        )}

        <section className="tip">

          <div>
            💡
          </div>

          <div>
            <h3>
              Little Learning Tip
            </h3>

            <p>
              Think carefully before choosing your
              answer. Every puzzle helps your brain grow! 🧠
            </p>
          </div>

        </section>

        <footer>

          <h3>
            🌈 Chinnaari Kids
          </h3>

          <p>
            Learn • Play • Discover
          </p>

          <Link href="/">
            🏠 Back to Home
          </Link>

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
          gap: 15px;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        .hero {
          text-align: center;

          padding: 45px 20px;

          background:
            linear-gradient(
              135deg,
              #e5ddff,
              #dff4ff
            );
        }

        .heroIcon {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 40px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .gameBox {
          max-width: 700px;

          margin: 45px auto;

          padding: 35px 25px;

          background: white;

          border-radius: 30px;

          text-align: center;

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.08);
        }

        .progress {
          color: #777;

          font-weight: bold;
        }

        .stars {
          display: inline-block;

          margin-top: 12px;

          padding: 8px 16px;

          border-radius: 20px;

          background: #fff0b8;

          font-weight: bold;
        }

        .question {
          margin: 35px 0;

          font-size: 30px;

          font-weight: bold;
        }

        .options {
          display: grid;

          gap: 15px;
        }

        .option {
          border: 3px solid transparent;

          padding: 17px;

          border-radius: 20px;

          background: #eef7ff;

          font-size: 19px;

          font-weight: bold;

          cursor: pointer;

          transition:
            transform 0.2s,
            background 0.2s;
        }

        .option:hover {
          transform: scale(1.02);

          background: #dff0ff;
        }

        .message {
          margin-top: 25px;

          padding: 15px;

          border-radius: 18px;

          font-size: 19px;

          font-weight: bold;
        }

        .correct {
          background: #dcf6d9;

          color: #237a25;
        }

        .wrong {
          background: #ffe0e0;

          color: #b83232;
        }

        .nextButton {
          margin-top: 20px;

          border: none;

          padding: 14px 25px;

          border-radius: 25px;

          background: #4caf50;

          color: white;

          font-size: 16px;

          font-weight: bold;

          cursor: pointer;
        }

        .result {
          max-width: 650px;

          margin: 50px auto;

          padding: 45px 25px;

          text-align: center;

          background: white;

          border-radius: 30px;

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.08);
        }

        .trophy {
          font-size: 90px;
        }

        .result h2 {
          font-size: 32px;
        }

        .result p {
          color: #666;

          font-size: 18px;
        }

        .finalStars {
          display: inline-block;

          margin: 15px;

          padding: 12px 22px;

          border-radius: 25px;

          background: #fff0b8;

          font-size: 22px;

          font-weight: bold;
        }

        .resultButtons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 20px;
        }

        .restart,
        .dashboard {
          padding: 13px 21px;

          border-radius: 25px;

          border: none;

          text-decoration: none;

          font-weight: bold;

          cursor: pointer;
        }

        .restart {
          background: #ff6b6b;

          color: white;
        }

        .dashboard {
          background: #ffd84d;

          color: #333;
        }

        .tip {
          max-width: 700px;

          margin: 0 auto 50px;

          padding: 25px;

          display: flex;

          align-items: center;

          gap: 20px;

          border-radius: 25px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e0f6ff
            );
        }

        .tip > div:first-child {
          font-size: 45px;
        }

        .tip h3 {
          margin-top: 0;
        }

        .tip p {
          margin-bottom: 0;

          color: #555;

          line-height: 1.6;
        }

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
          margin: 10px;
        }

        footer a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 850px) {

          .header {
            flex-direction: column;
            gap: 15px;
          }

          nav {
            justify-content: center;
          }

        }

        @media (max-width: 600px) {

          .logo {
            font-size: 21px;
          }

          nav {
            gap: 10px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .question {
            font-size: 24px;
          }

          .gameBox,
          .result,
          .tip {
            margin-left: 20px;
            margin-right: 20px;
          }

          .tip {
            flex-direction: column;
            text-align: center;
          }

        }

      `}</style>
    </>
  );
                  }
