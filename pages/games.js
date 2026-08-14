import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const numberQuestions = [
  {
    q: "What number comes after 4?",
    options: ["3", "5", "6", "7"],
    answer: "5",
  },
  {
    q: "What is 2 + 3?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    q: "How many stars? ⭐⭐⭐⭐⭐",
    options: ["3", "4", "5", "6"],
    answer: "5",
  },
];

const colourQuestions = [
  {
    q: "Which one is RED?",
    options: ["🔵", "🔴", "🟢", "🟡"],
    answer: "🔴",
  },
  {
    q: "Which one is BLUE?",
    options: ["🟡", "🟢", "🔵", "🔴"],
    answer: "🔵",
  },
  {
    q: "Which one is GREEN?",
    options: ["🟢", "🔴", "🟣", "🟡"],
    answer: "🟢",
  },
];

const animals = ["🐶", "🐱", "🐸", "🦁"];

export default function Games() {
  const [game, setGame] = useState("menu");

  const [numberIndex, setNumberIndex] = useState(0);
  const [numberScore, setNumberScore] = useState(0);
  const [numberFinished, setNumberFinished] = useState(false);

  const [colourIndex, setColourIndex] = useState(0);
  const [colourScore, setColourScore] = useState(0);
  const [colourFinished, setColourFinished] = useState(false);

  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  function startNumbers() {
    setNumberIndex(0);
    setNumberScore(0);
    setNumberFinished(false);
    setGame("numbers");
  }

  function answerNumber(option) {
    const current = numberQuestions[numberIndex];

    if (option === current.answer) {
      setNumberScore((s) => s + 1);
    }

    if (numberIndex === numberQuestions.length - 1) {
      setNumberFinished(true);
    } else {
      setNumberIndex((i) => i + 1);
    }
  }

  function startColours() {
    setColourIndex(0);
    setColourScore(0);
    setColourFinished(false);
    setGame("colours");
  }

  function answerColour(option) {
    const current = colourQuestions[colourIndex];

    if (option === current.answer) {
      setColourScore((s) => s + 1);
    }

    if (colourIndex === colourQuestions.length - 1) {
      setColourFinished(true);
    } else {
      setColourIndex((i) => i + 1);
    }
  }

  function startMemory() {
    const newCards = [...animals, ...animals]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
      }));

    setCards(newCards);
    setOpenCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGame("memory");
  }

  function openCard(index) {
    if (
      openCards.includes(index) ||
      matchedCards.includes(index) ||
      openCards.length === 2
    ) {
      return;
    }

    const newOpen = [...openCards, index];

    setOpenCards(newOpen);

    if (newOpen.length === 2) {
      setMoves((m) => m + 1);

      const first = cards[newOpen[0]];
      const second = cards[newOpen[1]];

      if (first.emoji === second.emoji) {
        const newMatched = [
          ...matchedCards,
          newOpen[0],
          newOpen[1],
        ];

        setMatchedCards(newMatched);
        setOpenCards([]);

        if (newMatched.length === cards.length) {
          setTimeout(() => {
            setGame("memoryResult");
          }, 500);
        }
      } else {
        setTimeout(() => {
          setOpenCards([]);
        }, 700);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Kids Games | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational games for kids including numbers, colours and memory games."
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
            <Link href="/stories">📚 Stories</Link>
            <Link href="/games" className="active">
              🎮 Games
            </Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroEmoji">
            🎮✨
          </div>

          <h1>
            Fun Learning Games!
          </h1>

          <p>
            Play, think, learn and have fun! 🌟
          </p>

        </section>

        {/* MENU */}

        {game === "menu" && (
          <section className="games">

            <h2>
              🎯 Choose a Game
            </h2>

            <p className="subtitle">
              Pick a game and start learning!
            </p>

            <div className="gameGrid">

              <button
                className="gameCard pink"
                onClick={startNumbers}
              >
                <div>🔢</div>

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
                className="gameCard green"
                onClick={startColours}
              >
                <div>🎨</div>

                <h3>
                  Colour Quiz
                </h3>

                <p>
                  Learn and identify colours.
                </p>

                <strong>
                  Play →
                </strong>
              </button>

              <button
                className="gameCard purple"
                onClick={startMemory}
              >
                <div>🧠</div>

                <h3>
                  Memory Match
                </h3>

                <p>
                  Find matching animals.
                </p>

                <strong>
                  Play →
                </strong>
              </button>

            </div>

          </section>
        )}

        {/* NUMBER GAME */}

        {game === "numbers" && !numberFinished && (
          <section className="gameBox">

            <div className="top">
              <span>🔢 Number Quiz</span>

              <span>
                {numberIndex + 1} / {numberQuestions.length}
              </span>
            </div>

            <h2>
              {numberQuestions[numberIndex].q}
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

            <button
              className="backButton"
              onClick={() => setGame("menu")}
            >
              ← Games
            </button>

          </section>
        )}

        {/* NUMBER RESULT */}

        {game === "numbers" && numberFinished && (
          <section className="result">

            <div className="resultEmoji">
              🏆
            </div>

            <h2>
              Great Job!
            </h2>

            <p>
              Your score:
            </p>

            <strong>
              {numberScore} / {numberQuestions.length}
            </strong>

            <div className="resultButtons">

              <button onClick={startNumbers}>
                🔄 Play Again
              </button>

              <button onClick={() => setGame("menu")}>
                🎮 More Games
              </button>

            </div>

          </section>
        )}

        {/* COLOUR GAME */}

        {game === "colours" && !colourFinished && (
          <section className="gameBox">

            <div className="top">
              <span>🎨 Colour Quiz</span>

              <span>
                {colourIndex + 1} / {colourQuestions.length}
              </span>
            </div>

            <h2>
              {colourQuestions[colourIndex].q}
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

            <button
              className="backButton"
              onClick={() => setGame("menu")}
            >
              ← Games
            </button>

          </section>
        )}

        {/* COLOUR RESULT */}

        {game === "colours" && colourFinished && (
          <section className="result">

            <div className="resultEmoji">
              🎨🏆
            </div>

            <h2>
              Colour Champion!
            </h2>

            <p>
              Your score:
            </p>

            <strong>
              {colourScore} / {colourQuestions.length}
            </strong>

            <div className="resultButtons">

              <button onClick={startColours}>
                🔄 Play Again
              </button>

              <button onClick={() => setGame("menu")}>
                🎮 More Games
              </button>

            </div>

          </section>
        )}

        {/* MEMORY GAME */}

        {game === "memory" && (
          <section className="memory">

            <div className="top">
              <span>🧠 Memory Match</span>

              <span>
                Moves: {moves}
              </span>
            </div>

            <h2>
              Find the matching animals!
            </h2>

            <div className="memoryGrid">

              {cards.map((card, index) => {

                const visible =
                  openCards.includes(index) ||
                  matchedCards.includes(index);

                return (
                  <button
                    key={card.id}
                    className="memoryCard"
                    onClick={() => openCard(index)}
                  >
                    {visible ? card.emoji : "❓"}
                  </button>
                );
              })}

            </div>

            <button
              className="backButton"
              onClick={() => setGame("menu")}
            >
              ← Games
            </button>

          </section>
        )}

        {/* MEMORY RESULT */}

        {game === "memoryResult" && (
          <section className="result">

            <div className="resultEmoji">
              🧠🏆
            </div>

            <h2>
              Amazing Memory!
            </h2>

            <p>
              Completed in:
            </p>

            <strong>
              {moves} moves
            </strong>

            <div className="resultButtons">

              <button onClick={startMemory}>
                🔄 Play Again
              </button>

              <button onClick={() => setGame("menu")}>
                🎮 More Games
              </button>

            </div>

          </section>
        )}

        <div className="homeButton">
          <Link href="/">
            🏠 Back to Home
          </Link>
        </div>

        <footer>
          <h3>🌈 Chinnaari Kids</h3>
          <p>Learn • Play • Discover</p>
          <p>© 2026 Chinnaari Kids</p>
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
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          color: #333;
          text-decoration: none;
          font-size: 24px;
          font-weight: 800;
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

        .hero {
          text-align: center;
          padding: 55px 20px;
          background: linear-gradient(135deg,#e7ddff,#dff5ff);
        }

        .heroEmoji {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 42px;
          margin: 15px 0 10px;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .games {
          padding: 55px 7%;
          text-align: center;
        }

        .games h2 {
          font-size: 32px;
        }

        .subtitle {
          color: #666;
          margin-bottom: 35px;
        }

        .gameGrid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .gameCard {
          border: none;
          border-radius: 28px;
          padding: 35px 25px;
          min-height: 300px;
          cursor: pointer;
          font-family: inherit;
          color: #333;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          transition: transform .2s;
        }

        .gameCard:hover {
          transform: translateY(-7px);
        }

        .gameCard div {
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

        .pink {
          background: #ffe0e8;
        }

        .green {
          background: #ddf5dc;
        }

        .purple {
          background: #e5ddff;
        }

        .gameBox,
        .result,
        .memory {
          max-width: 700px;
          margin: 55px auto;
          padding: 40px 30px;
          background: white;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 7px 25px rgba(0,0,0,0.08);
        }

        .top {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          color: #666;
        }

        .gameBox h2,
        .memory h2 {
          margin: 45px 0 30px;
          font-size: 28px;
        }

        .options {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
        }

        .options button {
          border: none;
          padding: 18px;
          border-radius: 20px;
          background: #eee5ff;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }

        .options button:hover {
          transform: scale(1.03);
        }

        .colourOptions {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .colourOptions button {
          border: none;
          padding: 20px;
          border-radius: 20px;
          background: #f2f2f2;
          font-size: 45px;
          cursor: pointer;
        }

        .memoryGrid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
        }

        .memoryCard {
          aspect-ratio: 1;
          border: none;
          border-radius: 20px;
          background: #e5ddff;
          font-size: 40px;
          cursor: pointer;
        }

        .resultEmoji {
          font-size: 75px;
        }

        .result h2 {
          font-size: 32px;
        }

        .result p {
          font-size: 18px;
        }

        .result strong {
          font-size: 30px;
        }

        .resultButtons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .resultButtons button,
        .backButton {
          border: none;
          padding: 13px 20px;
          border-radius: 25px;
          background: #ff6b6b;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .backButton {
          margin-top: 25px;
          background: #333;
        }

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

        @media (max-width: 850px) {
          .header {
            flex-direction: column;
            gap: 15px;
          }

          nav {
            justify-content: center;
            gap: 12px;
          }

          .gameGrid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero h1 {
            font-size: 34px;
          }

          .gameGrid {
            grid-template-columns: 1fr;
          }

          .gameBox,
          .result,
          .memory {
            margin: 35px 20px;
            padding: 30px 20px;
          }

          .options {
            grid-template-columns: 1fr 1fr;
          }

          .colourOptions {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
                  }
