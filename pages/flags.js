import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const flagQuiz = [
  ["🇮🇳", "Which country does this flag belong to?", ["India", "Japan", "France", "Brazil"], "India"],
  ["🇯🇵", "Which country does this flag belong to?", ["China", "Japan", "Korea", "Thailand"], "Japan"],
  ["🇺🇸", "Which country does this flag belong to?", ["USA", "Canada", "Mexico", "Brazil"], "USA"],
  ["🇬🇧", "Which country does this flag belong to?", ["France", "UK", "Germany", "Italy"], "UK"],
  ["🇫🇷", "Which country does this flag belong to?", ["France", "Spain", "Italy", "Belgium"], "France"],
  ["🇩🇪", "Which country does this flag belong to?", ["Germany", "Austria", "Poland", "Belgium"], "Germany"],
  ["🇮🇹", "Which country does this flag belong to?", ["Italy", "Ireland", "Mexico", "France"], "Italy"],
  ["🇨🇦", "Which country does this flag belong to?", ["Canada", "USA", "Denmark", "Sweden"], "Canada"],
  ["🇦🇺", "Which country does this flag belong to?", ["Australia", "New Zealand", "UK", "Fiji"], "Australia"],
  ["🇧🇷", "Which country does this flag belong to?", ["Brazil", "Portugal", "Argentina", "Mexico"], "Brazil"],
  ["🇨🇳", "Which country does this flag belong to?", ["China", "Japan", "Vietnam", "Korea"], "China"],
  ["🇰🇷", "Which country does this flag belong to?", ["Japan", "South Korea", "China", "Singapore"], "South Korea"],
  ["🇷🇺", "Which country does this flag belong to?", ["Russia", "Ukraine", "Serbia", "Romania"], "Russia"],
  ["🇮🇩", "Which country does this flag belong to?", ["Indonesia", "Monaco", "Poland", "Singapore"], "Indonesia"],
  ["🇲🇽", "Which country does this flag belong to?", ["Mexico", "Italy", "Ireland", "India"], "Mexico"]
];

export default function FlagsQuiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = flagQuiz[index];

  function answer(option) {
    if (answered) return;

    setSelected(option);
    setAnswered(true);

    if (option === current[2][0]) {
      setScore((value) => value + 1);
    }
  }

  function next() {
    if (index === flagQuiz.length - 1) {
      setFinished(true);
      return;
    }

    setIndex((value) => value + 1);
    setSelected("");
    setAnswered(false);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
  }

  return (
    <>
      <Head>
        <title>Flags Quiz | Chinnaari Kids</title>
        <meta
          name="description"
          content="Learn world flags and countries with a fun quiz."
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
            <Link href="/quiz">🧠 Quiz</Link>
            <Link href="/world">🌍 World Explorer</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="titleEmoji">🌍🏳️🎯</div>

          <h1>Flags Quiz</h1>

          <p>
            Learn the flags of the world!
          </p>

          <div className="miniFlags">
            🇮🇳 🇺🇸 🇬🇧 🇯🇵 🇫🇷 🇩🇪 🇧🇷
          </div>
        </section>

        {!finished ? (
          <section className="quizCard">

            <div className="top">
              <span>
                Question {index + 1}
              </span>

              <span>
                ⭐ Score: {score}
              </span>
            </div>

            <div className="progress">
              <div
                style={{
                  width: `${((index + 1) / flagQuiz.length) * 100}%`
                }}
              />
            </div>

            <div className="flagBox">
              <div className="flag">
                {current[0]}
              </div>

              <h2>{current[1]}</h2>
            </div>

            <div className="options">

              {current[2].map((option) => {

                const correct =
                  answered &&
                  option === current[2][0];

                const wrong =
                  answered &&
                  option === selected &&
                  option !== current[2][0];

                return (
                  <button
                    key={option}
                    onClick={() => answer(option)}
                    className={
                      correct
                        ? "option correct"
                        : wrong
                        ? "option wrong"
                        : "option"
                    }
                  >
                    {option}

                    {correct && <span> ✅</span>}
                    {wrong && <span> ❌</span>}
                  </button>
                );
              })}

            </div>

            {answered && (
              <div
                className={
                  selected === current[2][0]
                    ? "message good"
                    : "message bad"
                }
              >
                {selected === current[2][0]
                  ? "🎉 Correct! Great job!"
                  : `😊 Correct answer: ${current[2][0]}`}
              </div>
            )}

            {answered && (
              <button
                className="next"
                onClick={next}
              >
                {index === flagQuiz.length - 1
                  ? "🏆 See Result"
                  : "Next ➡️"}
              </button>
            )}

          </section>
        ) : (
          <section className="result">

            <div className="trophy">🏆</div>

            <h2>Quiz Complete!</h2>

            <div className="score">
              {score} / {flagQuiz.length}
            </div>

            <p>
              {score === flagQuiz.length
                ? "🌟 Perfect! You know your flags!"
                : score >= 10
                ? "👏 Excellent work!"
                : score >= 6
                ? "😊 Good job! Keep learning!"
                : "💪 Keep practicing!"}
            </p>

            <button
              className="restart"
              onClick={restart}
            >
              🔄 Play Again
            </button>

          </section>
        )}
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
          padding: 15px 6%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        }

        .logo {
          color: #333;
          text-decoration: none;
          font-size: 23px;
          font-weight: bold;
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
          font-weight: bold;
        }

        .hero {
          text-align: center;
          padding: 55px 20px;
          background: linear-gradient(
            135deg,
            #dff5ff,
            #fff0c9,
            #f4ddff
          );
        }

        .titleEmoji {
          font-size: 55px;
        }

        .hero h1 {
          font-size: 44px;
          margin: 12px 0;
        }

        .hero p {
          font-size: 19px;
          color: #555;
        }

        .miniFlags {
          margin-top: 20px;
          font-size: 30px;
          letter-spacing: 5px;
        }

        .quizCard {
          max-width: 800px;
          margin: 40px auto;
          padding: 30px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .top {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .progress {
          width: 100%;
          height: 10px;
          background: #eee;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .progress div {
          height: 100%;
          background: #4caf50;
          transition: width 0.3s ease;
        }

        .flagBox {
          padding: 30px 15px;
          background: linear-gradient(
            135deg,
            #f5fbff,
            #fff8e7
          );
          border-radius: 25px;
          margin-bottom: 25px;
        }

        .flag {
          font-size: 110px;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .flagBox h2 {
          font-size: 23px;
        }

        .options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .option {
          min-height: 60px;
          border: 2px solid #e5e5e5;
          background: white;
          border-radius: 18px;
          padding: 15px;
          font-size: 17px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
        }

        .option:hover {
          transform: translateY(-2px);
          border-color: #ffb347;
          background: #fffaf0;
        }

        .correct {
          background: #e3f8e3 !important;
          border-color: #4caf50 !important;
        }

        .wrong {
          background: #ffe4e4 !important;
          border-color: #f44336 !important;
        }

        .message {
          margin: 20px 0;
          padding: 15px;
          border-radius: 20px;
          font-weight: bold;
        }

        .good {
          background: #e3f8e3;
        }

        .bad {
          background: #ffe4e4;
        }

        .next,
        .restart {
          border: none;
          background: #4caf50;
          color: white;
          padding: 14px 28px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .next:hover,
        .restart:hover {
          transform: scale(1.03);
        }

        .result {
          max-width: 700px;
          margin: 50px auto;
          padding: 45px 25px;
          background: white;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .trophy {
          font-size: 90px;
        }

        .result h2 {
          font-size: 35px;
        }

        .score {
          display: inline-block;
          margin: 15px;
          padding: 18px 35px;
          background: #fff0c9;
          border-radius: 25px;
          font-size: 38px;
          font-weight: bold;
        }

        .result p {
          font-size: 20px;
          margin: 15px 0 30px;
        }

        @media (max-width: 650px) {
          .header {
            flex-direction: column;
          }

          .hero h1 {
            font-size: 34px;
          }

          .titleEmoji {
            font-size: 45px;
          }

          .miniFlags {
            font-size: 22px;
            letter-spacing: 2px;
          }

          .quizCard {
            margin: 25px 12px;
            padding: 20px 15px;
          }

          .options {
            grid-template-columns: 1fr;
          }

          .flag {
            font-size: 85px;
          }

          .top {
            font-size: 14px;
          }
        }

        @media (max-width: 400px) {
          nav {
            gap: 9px;
          }

          nav a {
            font-size: 12px;
          }

          .flag {
            font-size: 70px;
          }

          .hero h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}
