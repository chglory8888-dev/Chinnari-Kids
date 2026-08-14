import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const puzzles = [
  {
    id: 1,
    question: "Which animal says Moo? 🐄",
    options: ["🐱 Cat", "🐄 Cow", "🐶 Dog", "🦁 Lion"],
    answer: "🐄 Cow",
  },
  {
    id: 2,
    question: "Which one is a fruit? 🍎",
    options: ["🚗 Car", "🏠 House", "🍎 Apple", "⚽ Ball"],
    answer: "🍎 Apple",
  },
  {
    id: 3,
    question: "What comes after 4? 🔢",
    options: ["3", "5", "7", "9"],
    answer: "5",
  },
  {
    id: 4,
    question: "Which colour is the sun usually shown as? ☀️",
    options: ["🟣 Purple", "🔵 Blue", "🟡 Yellow", "🟢 Green"],
    answer: "🟡 Yellow",
  },
  {
    id: 5,
    question: "Which animal can fly? 🪽",
    options: ["🐘 Elephant", "🐟 Fish", "🐦 Bird", "🐄 Cow"],
    answer: "🐦 Bird",
  },
  {
    id: 6,
    question: "How many sides does a triangle have? 🔺",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
];

export default function Puzzles() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const puzzle = puzzles[current];

  function chooseAnswer(option) {
    if (selected !== null) return;

    setSelected(option);

    if (option === puzzle.answer) {
      setScore((value) => value + 1);
    }
  }

  function nextPuzzle() {
    if (current < puzzles.length - 1) {
      setCurrent((value) => value + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <>
      <Head>
        <title>Kids Puzzles | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational puzzles and quizzes for children."
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
            <Link href="/dashboard">🌟 Dashboard</Link>
            <Link href="/stories">📚 Stories</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
            <Link href="/learn">🔤 Learn</Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroIcon">
            🧩✨
          </div>

          <h1>
            Puzzle Time!
          </h1>

          <p>
            Think, choose and learn!
          </p>

          {!finished && (
            <div className="progress">
              Question {current + 1} of {puzzles.length}
            </div>
          )}

        </section>

        {/* PUZZLE */}

        {!finished && (

          <section className="puzzleBox">

            <div className="score">
              ⭐ Score: {score}
            </div>

            <h2>
              {puzzle.question}
            </h2>

            <div className="options">

              {puzzle.options.map((option) => {

                let className = "option";

                if (selected !== null) {

                  if (option === puzzle.answer) {
                    className += " correct";
                  } else if (option === selected) {
                    className += " wrong";
                  }

                }

                return (
                  <button
                    key={option}
                    className={className}
                    onClick={() => chooseAnswer(option)}
                  >
                    {option}
                  </button>
                );
              })}

            </div>

            {selected !== null && (

              <div className="feedback">

                {selected === puzzle.answer ? (
                  <>
                    <div className="feedbackEmoji">
                      🎉
                    </div>

                    <h3>
                      Correct! Great Job!
                    </h3>

                    <p>
                      You earned a point! ⭐
                    </p>
                  </>
                ) : (
                  <>
                    <div className="feedbackEmoji">
                      💪
                    </div>

                    <h3>
                      Nice Try!
                    </h3>

                    <p>
                      The correct answer is{" "}
                      <strong>
                        {puzzle.answer}
                      </strong>
                    </p>
                  </>
                )}

                <button
                  className="nextButton"
                  onClick={nextPuzzle}
                >
                  {current === puzzles.length - 1
                    ? "🏆 See Result"
                    : "Next Puzzle ➡️"}
                </button>

              </div>

            )}

          </section>
        )}

        {/* RESULT */}

        {finished && (

          <section className="result">

            <div className="trophy">
              🏆
            </div>

            <h2>
              Puzzle Complete!
            </h2>

            <p className="resultScore">
              You got{" "}
              <strong>
                {score}
              </strong>{" "}
              out of{" "}
              <strong>
                {puzzles.length}
              </strong>
              !
            </p>

            {score === puzzles.length ? (

              <p className="message">
                🌟 Perfect Score! You are amazing!
              </p>

            ) : score >= 4 ? (

              <p className="message">
                🎉 Excellent work! Keep learning!
              </p>

            ) : score >= 2 ? (

              <p className="message">
                😊 Good job! Try again and improve!
              </p>

            ) : (

              <p className="message">
                💪 Keep practicing. You can do it!
              </p>

            )}

            <div className="resultButtons">

              <button
                onClick={restart}
                className="restartButton"
              >
                🔄 Play Again
              </button>

              <Link
                href="/games"
                className="gamesButton"
              >
                🎮 More Games
              </Link>

            </div>

          </section>

        )}

        {/* TIP */}

        <section className="tip">

          <div className="tipIcon">
            🧠
          </div>

          <div>

            <h2>
              Think Like a Little Detective!
            </h2>

            <p>
              Read the question carefully, look at
              all the choices and then make your answer.
              Every mistake helps you learn! 🌟
            </p>

          </div>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

          <Link href="/stories">
            📚 Stories
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/learn">
            🔤 Learn
          </Link>

          <Link href="/games">
            🎮 Games
          </Link>

        </section>

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
          gap: 15px;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;

          font-size: 14px;
          font-weight: 600;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        /* HERO */

        .hero {
          text-align: center;

          padding: 45px 20px;

          background:
            linear-gradient(
              135deg,
              #e6ddff,
              #dff5ff
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

        .progress {
          display: inline-block;

          margin-top: 10px;

          padding: 9px 18px;

          border-radius: 25px;

          background: white;

          font-weight: bold;
        }

        /* PUZZLE BOX */

        .puzzleBox {
          max-width: 800px;

          margin: 50px auto;

          padding: 40px 25px;

          text-align: center;

          border-radius: 32px;

          background: white;

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .score {
          display: inline-block;

          padding: 9px 18px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        .puzzleBox h2 {
          margin: 30px 0;

          font-size: 27px;

          line-height: 1.5;
        }

        .options {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 15px;
        }

        .option {
          min-height: 70px;

          border: 3px solid transparent;

          border-radius: 20px;

          background: #f2efff;

          font-size: 18px;

          font-weight: bold;

          cursor: pointer;

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .option:hover {
          transform: translateY(-4px);

          box-shadow:
            0 7px 18px
            rgba(0,0,0,0.1);
        }

        .option.correct {
          background: #dff7dc;

          border-color: #4caf50;
        }

        .option.wrong {
          background: #ffdede;

          border-color: #ff6b6b;
        }

        /* FEEDBACK */

        .feedback {
          margin-top: 25px;

          padding: 25px;

          border-radius: 25px;

          background: #fff8df;
        }

        .feedbackEmoji {
          font-size: 50px;
        }

        .feedback h3 {
          font-size: 24px;

          margin: 10px 0;
        }

        .feedback p {
          color: #666;
        }

        .nextButton {
          border: none;

          padding: 13px 23px;

          border-radius: 25px;

          background: #4caf50;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* RESULT */

        .result {
          max-width: 700px;

          margin: 55px auto;

          padding: 45px 25px;

          text-align: center;

          border-radius: 32px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e1f5ff
            );

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .trophy {
          font-size: 90px;
        }

        .result h2 {
          font-size: 32px;
        }

        .resultScore {
          font-size: 22px;
        }

        .message {
          font-size: 18px;

          line-height: 1.6;

          color: #555;
        }

        .resultButtons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 25px;
        }

        .restartButton,
        .gamesButton {
          padding: 13px 22px;

          border: none;

          border-radius: 25px;

          font-weight: bold;

          text-decoration: none;

          cursor: pointer;
        }

        .restartButton {
          background: #ff6b6b;

          color: white;
        }

        .gamesButton {
          background: #4caf50;

          color: white;
        }

        /* TIP */

        .tip {
          max-width: 800px;

          margin: 0 auto 45px;

          padding: 30px;

          display: flex;

          align-items: center;

          gap: 20px;

          border-radius: 28px;

          background: white;

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.06);
        }

        .tipIcon {
          font-size: 55px;
        }

        .tip h2 {
          margin-top: 0;
        }

        .tip p {
          margin-bottom: 0;

          color: #666;

          line-height: 1.7;
        }

        /* NAVIGATION */

        .navigation {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin: 20px 20px 55px;
        }

        .navigation a {
          padding: 13px 20px;

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
          margin: 9px;
        }

        /* TABLET */

        @media (max-width: 850px) {

          .header {
            flex-direction: column;

            gap: 15px;
          }

          nav {
            justify-content: center;
          }

        }

        /* MOBILE */

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

          .puzzleBox {
            margin: 30px 15px;

            padding: 30px 18px;
          }

          .options {
            grid-template-columns: 1fr;
          }

          .puzzleBox h2 {
            font-size: 23px;
          }

          .tip {
            margin-left: 20px;
            margin-right: 20px;

            flex-direction: column;

            text-align: center;
          }

        }

      `}</style>
    </>
  );
                 }
