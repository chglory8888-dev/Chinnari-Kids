import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const numberQuestions = [
  {
    question: "What number comes after 4?",
    options: ["3", "5", "6", "8"],
    answer: "5",
  },
  {
    question: "What is 2 + 3?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    question: "How many stars? ⭐⭐⭐⭐⭐",
    options: ["3", "4", "5", "6"],
    answer: "5",
  },
];

const colourQuestions = [
  {
    question: "Which one is RED?",
    options: ["🔵", "🔴", "🟢", "🟡"],
    answer: "🔴",
  },
  {
    question: "Which one is BLUE?",
    options: ["🟡", "🟢", "🔵", "🔴"],
    answer: "🔵",
  },
  {
    question: "Which one is GREEN?",
    options: ["🟢", "🔴", "🟣", "🟡"],
    answer: "🟢",
  },
];

const memoryItems = ["🐶", "🐱", "🐸", "🦁", "🐼", "🐵"];

export default function Games() {
  const [game, setGame] = useState("menu");

  const [numberIndex, setNumberIndex] = useState(0);
  const [numberScore, setNumberScore] = useState(0);
  const [numberMessage, setNumberMessage] = useState("");

  const [colourIndex, setColourIndex] = useState(0);
  const [colourScore, setColourScore] = useState(0);
  const [colourMessage, setColourMessage] = useState("");

  const [memoryCards, setMemoryCards] = useState([]);
  const [memoryOpen, setMemoryOpen] = useState([]);
  const [memoryMatched, setMemoryMatched] = useState([]);
  const [memoryMoves, setMemoryMoves] = useState(0);

  function startNumberGame() {
    setNumberIndex(0);
    setNumberScore(0);
    setNumberMessage("");
    setGame("numbers");
  }

  function answerNumber(option) {
    const current = numberQuestions[numberIndex];

    if (option === current.answer) {
      setNumberScore((score) => score + 1);
      setNumberMessage("🎉 Correct! Great job!");
    } else {
      setNumberMessage(
        `💡 Nice try! The correct answer is ${current.answer}.`
      );
    }

    setTimeout(() => {
      setNumberMessage("");

      if (numberIndex < numberQuestions.length - 1) {
        setNumberIndex((index) => index + 1);
      } else {
        setGame("numberResult");
      }
    }, 900);
  }

  function startColourGame() {
    setColourIndex(0);
    setColourScore(0);
    setColourMessage("");
    setGame("colours");
  }

  function answerColour(option) {
    const current = colourQuestions[colourIndex];

    if (option === current.answer) {
      setColourScore((score) => score + 1);
      setColourMessage("🌟 Correct! You know your colours!");
    } else {
      setColourMessage(
        `💡 Try again next time! The answer was ${current.answer}.`
      );
    }

    setTimeout(() => {
      setColourMessage("");

      if (colourIndex < colourQuestions.length - 1) {
        setColourIndex((index) => index + 1);
      } else {
        setGame("colourResult");
      }
    }, 900);
  }

  function startMemoryGame() {
    const shuffled = [...memoryItems, ...memoryItems]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
      }));

    setMemoryCards(shuffled);
    setMemoryOpen([]);
    setMemoryMatched([]);
    setMemoryMoves(0);
    setGame("memory");
  }

  function flipMemoryCard(index) {
    if (
      memoryOpen.includes(index) ||
      memoryMatched.includes(index) ||
      memoryOpen.length === 2
    ) {
      return;
    }

    const newOpen = [...memoryOpen, index];

    setMemoryOpen(newOpen);

    if (newOpen.length === 2) {
      setMemoryMoves((moves) => moves + 1);

      const first = memoryCards[newOpen[0]];
      const second = memoryCards[newOpen[1]];

      if (first.emoji === second.emoji) {
        setMemoryMatched((matched) => [
          ...matched,
          newOpen[0],
          newOpen[1],
        ]);

        setTimeout(() => {
          setMemoryOpen([]);

          if (
            memoryMatched.length + 2 ===
            memoryCards.length
          ) {
            setGame("memoryResult");
          }
        }, 500);
      } else {
        setTimeout(() => {
          setMemoryOpen([]);
        }, 700);
      }
    }
  }

  function backToMenu() {
    setGame("menu");
  }

  return (
    <>
      <Head>
        <title>Educational Games for Kids | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational games for children including number quizzes, colour learning and memory games."
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

            <Link href="/games" className="active">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/colours">
              🎨 Colours
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroIcon">
            🎮
          </div>

          <h1>
            Fun Learning Games!
          </h1>

          <p>
            Play, think, answer and learn! 🌟
          </p>

        </section>

        {/* GAME MENU */}

        {game === "menu" && (
          <section className="gameSection">

            <h2>
              🎯 Choose a Game
            </h2>

            <p className="intro">
              Pick your favourite learning game!
            </p>

            <div className="gameGrid">

              <button
                className="gameCard numbers"
                onClick={startNumberGame}
              >
                <span className="gameEmoji">
                  🔢
                </span>

                <h3>
                  Number Quiz
                </h3>

                <p>
                  Learn numbers and simple maths.
                </p>

                <strong>
                  Play →
                </strong>
              </button>

              <button
                className="gameCard colours"
                onClick={startColourGame}
              >
                <span className="gameEmoji">
                  🎨
                </span>

                <h3>
                  Colour Quiz
                </h3>

                <p>
                  Learn and identify different colours.
                </p>

                <strong>
                  Play →
                </strong>
              </button>

              <button
                className="gameCard memory"
                onClick={startMemoryGame}
              >
                <span className="gameEmoji">
                  🧠
                </span>

                <h3>
                  Memory Match
                </h3>

                <p>
                  Find matching animals and train your memory.
                </p>

                <strong>
                  Play →
                </strong>
              </button>

            </div>

          </section>
        )}

        {/* NUMBER GAME */}

        {game === "numbers" && (
          <section className="quizBox">

            <div className="quizTop">
              <span>
                🔢 Number Quiz
              </span>

              <span>
                Question {numberIndex + 1} / {numberQuestions.length}
              </span>
            </div>

            <h2>
              {numberQuestions[numberIndex].question}
            </h2>

            <div className="options">

              {numberQuestions[numberIndex].options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => answerNumber(option)}
                  >
                    {option}
                  </button>
                )
              )}

            </div>

            {numberMessage && (
              <div className="message">
                {numberMessage}
              </div>
            )}

          </section>
        )}

        {/* NUMBER RESULT */}

        {game === "numberResult" && (
          <section className="resultBox">

            <div>
              🏆
            </div>

            <h2>
              Great Job!
            </h2>

            <p>
              You got{" "}
              <strong>
                {numberScore}
              </strong>{" "}
              out of{" "}
              {numberQuestions.length}
              !
            </p>

            <div className="resultButtons">

              <button onClick={startNumberGame}>
                🔄 Play Again
              </button>

              <button onClick={backToMenu}>
                🎮 More Games
              </button>

            </div>

          </section>
        )}

        {/* COLOUR GAME */}

        {game === "colours" && (
          <section className="quizBox">

            <div className="quizTop">
              <span>
                🎨 Colour Quiz
              </span>

              <span>
                Question {colourIndex + 1} /{" "}
                {colourQuestions.length}
              </span>
            </div>

            <h2>
              {colourQuestions[colourIndex].question}
            </h2>

            <div className="colourOptions">

              {colourQuestions[colourIndex].options.map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => answerColour(option)}
                  >
                    {option}
                  </button>
                )
              )}

            </div>

            {colourMessage && (
              <div className="message">
                {colourMessage}
              </div>
            )}

          </section>
        )}

        {/* COLOUR RESULT */}

        {game === "colourResult" && (
          <section className="resultBox">

            <div>
              🎨⭐
            </div>

            <h2>
              Colour Champion!
            </h2>

            <p>
              You got{" "}
              <strong>
                {colourScore}
              </strong>{" "}
              out of{" "}
              {colourQuestions.length}
              !
            </p>

            <div className="resultButtons">

              <button onClick={startColourGame}>
                🔄 Play Again
              </button>

              <button onClick={backToMenu}>
                🎮 More Games
              </button>

            </div>

          </section>
        )}

        {/* MEMORY GAME */}

        {game === "memory" && (
          <section className="memorySection">

            <div className="quizTop">
              <span>
                🧠 Memory Match
              </span>

              <span>
                Moves: {memoryMoves}
              </span>
            </div>

            <h2>
              Find the matching animals!
            </h2>

            <div className="memoryGrid">

              {memoryCards.map((card, index) => {

                const isOpen =
                  memoryOpen.includes(index) ||
                  memoryMatched.includes(index);

                return (
                  <button
                    key={card.id}
                    className="memoryCard"
                    onClick={() =>
                      flipMemoryCard(index)
                    }
                  >
                    {isOpen ? card.emoji : "❓"}
                  </button>
                );
              })}

            </div>

          </section>
        )}

        {/* MEMORY RESULT */}

        {game === "memoryResult" && (
          <section className="resultBox">

            <div>
              🧠🏆
            </div>

            <h2>
              Amazing Memory!
            </h2>

            <p>
              You completed the game in{" "}
              <strong>
                {memoryMoves}
              </strong>{" "}
              moves.
            </p>

            <div className="resultButtons">

              <button onClick={startMemoryGame}>
                🔄 Play Again
              </button>

              <button onClick={backToMenu}>
                🎮 More Games
              </button>

            </div>

          </section>
        )}

        {/* HOME BUTTON */}

        <div className="backHome">

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
            0 2px 15px rgba(0, 0, 0, 0.08);

          position: sticky;
          top: 0;
          z-index: 20;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          text-decoration: none;
          color: #333;
          white-space: nowrap;
        }

        nav {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        nav a {
          text-decoration: none;
          color: #444;
          font-weight: 600;
        }

        nav a:hover,
        nav a.active {
          color: #ff6b6b;
        }

        /* HERO */

        .hero {
          padding: 55px 20px;
          text-align: center;

          background:
            linear-gradient(
              135deg,
              #e7ddff,
              #dff5ff
            );
        }

        .heroIcon {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 43px;
          margin: 15px 0 8px;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        /* GAME MENU */

        .gameSection {
          padding: 55px 7%;
          text-align: center;
        }

        .gameSection h2 {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .intro {
          color: #666;
          margin-bottom: 35px;
        }

        .gameGrid {
          max-width: 1100px;
          margin: auto;

          display: grid;
          grid-template-columns:
            repeat(3, 1fr);

          gap: 25px;
        }

        .gameCard {
          border: none;

          padding: 35px 25px;

          border-radius: 28px;

          min-height: 310px;

          cursor: pointer;

          color: #333;

          font-family: inherit;

          box-shadow:
            0 6px 20px
            rgba(0, 0, 0, 0.06);

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .gameCard:hover {
          transform: translateY(-8px);

          box-shadow:
            0 12px 28px
            rgba(0, 0, 0, 0.12);
        }

        .numbers {
          background: #ffe0e8;
        }

        .colours {
          background: #dcf5dc;
        }

        .memory {
          background: #e2ddff;
        }

        .gameEmoji {
          font-size: 65px;
        }

        .gameCard h3 {
          font-size: 24px;
          margin: 15px 0 8px;
        }

        .gameCard p {
          line-height: 1.6;
          color: #555;
        }

        .gameCard strong {
          display: inline-block;
          margin-top: 10px;
        }

        /* QUIZ */

        .quizBox {
          max-width: 700px;

          margin: 60px auto;

          padding: 40px 30px;

          background: white;

          border-radius: 30px;

          text-align: center;

          box-shadow:
            0 7px 25px
            rgba(0, 0, 0, 0.08);
        }

        .quizTop {
          display: flex;
          justify-content: space-between;

          gap: 15px;

          font-weight: bold;

          color: #666;
        }

        .quizBox h2 {
          font-size: 28px;

          line-height: 1.4;

          margin: 45px 0 30px;
        }

        .options {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 15px;
        }

        .options button {
          padding: 18px;

          border: none;

          border-radius: 20px;

          background: #eee5ff;

          font-size: 20px;

          font-weight: bold;

          cursor: pointer;

          transition:
            transform 0.2s,
            background 0.2s;
        }

        .options button:hover {
          transform: scale(1.04);
          background: #ddd0ff;
        }

        .colourOptions {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 15px;
        }

        .colourOptions button {
          border: none;

          background: #f5f5f5;

          border-radius: 20px;

          padding: 20px;

          font-size: 45px;

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .colourOptions button:hover {
          transform: scale(1.08);
        }

        .message {
          margin-top: 25px;

          padding: 15px;

          border-radius: 18px;

          background: #fff0bd;

          font-weight: bold;
        }

        /* MEMORY */

        .memorySection {
          max-width: 650px;

          margin: 50px auto;

          padding: 35px 25px;

          text-align: center;
        }

        .memorySection h2 {
          margin: 30px 0;
        }

        .memoryGrid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 14px;
        }

        .memoryCard {
          aspect-ratio: 1;

          border: none;

          border-radius: 20px;

          background: #e2ddff;

          font-size: 40px;

          cursor: pointer;

          box-shadow:
            0 4px 12px
            rgba(0, 0, 0, 0.08);

          transition:
            transform 0.2s;
        }

        .memoryCard:hover {
          transform: scale(1.05);
        }

        /* RESULT */

        .resultBox {
          max-width: 650px;

          margin: 70px auto;

          padding: 50px 30px;

          text-align: center;

          background: white;

          border-radius: 30px;

          box-shadow:
            0 7px 25px
            rgba(0, 0, 0, 0.08);
        }

        .resultBox > div:first-child {
          font-size: 75px;
        }

        .resultBox h2 {
          font-size: 32px;
        }

        .resultBox p {
          font-size: 18px;
          color: #555;
        }

        .resultButtons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 25px;
        }

        .resultButtons button {
          padding: 13px 20px;

          border: none;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* BACK */

        .backHome {
          text-align: center;

          margin: 40px 0 55px;
        }

        .backHome a {
          display: inline-block;

          padding: 13px 22px;

          background: #333;

          color: white;

          text-decoration: none;

          border-radius: 25px;

          font-weight: b
