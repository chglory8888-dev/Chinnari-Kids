import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const memoryItems = ["🍎", "🐶", "⭐", "🚗", "🌈", "🦋"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddItems = [
  {
    items: ["🍎", "🍎", "🍎", "🍌"],
    answer: "🍌",
  },
  {
    items: ["🐶", "🐶", "🐱", "🐶"],
    answer: "🐱",
  },
  {
    items: ["🔵", "🔵", "🔴", "🔵"],
    answer: "🔴",
  },
];

export default function Games() {
  const [game, setGame] = useState("memory");

  const [memoryCards, setMemoryCards] = useState([
    ...memoryItems,
    ...memoryItems,
  ]);

  const [flipped, setFlipped] = useState([]);

  const [matched, setMatched] = useState([]);

  const [target, setTarget] = useState(5);

  const [numberScore, setNumberScore] = useState(0);

  const [oddRound, setOddRound] = useState(0);

  const [oddScore, setOddScore] = useState(0);

  const [message, setMessage] = useState("");

  function shuffleCards() {
    const shuffled = [...memoryCards].sort(
      () => Math.random() - 0.5
    );

    setMemoryCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMessage("");
  }

  function flipCard(index) {
    if (
      flipped.includes(index) ||
      matched.includes(index) ||
      flipped.length === 2
    ) {
      return;
    }

    const newFlipped = [...flipped, index];

    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const first = memoryCards[newFlipped[0]];
      const second = memoryCards[newFlipped[1]];

      if (first === second) {
        setMatched((old) => [
          ...old,
          ...newFlipped,
        ]);

        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 700);
      }
    }
  }

  function tapNumber(number) {
    if (number === target) {
      setNumberScore((value) => value + 1);
      setMessage("🎉 Great! You found the correct number!");

      const next =
        Math.floor(Math.random() * 9) + 1;

      setTarget(next);
    } else {
      setMessage("😊 Try again!");
    }
  }

  function chooseOdd(item) {
    if (item === oddItems[oddRound].answer) {
      setOddScore((value) => value + 1);
      setMessage("🎉 Correct! Excellent!");
    } else {
      setMessage("💪 Nice try!");
    }

    setTimeout(() => {
      if (oddRound < oddItems.length - 1) {
        setOddRound((value) => value + 1);
        setMessage("");
      } else {
        setMessage("🏆 Game Complete!");
      }
    }, 700);
  }

  function resetOddGame() {
    setOddRound(0);
    setOddScore(0);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Kids Games | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational games for kids including memory, numbers and odd-one-out games."
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

          <div className="heroEmoji">
            🎮✨
          </div>

          <h1>
            Let's Play & Learn!
          </h1>

          <p>
            Fun games that make learning exciting.
          </p>

        </section>

        {/* GAME MENU */}

        <section className="gameMenu">

          <button
            className={
              game === "memory"
                ? "menuButton active"
                : "menuButton"
            }
            onClick={() => {
              setGame("memory");
              setMessage("");
            }}
          >
            🧠 Memory Match
          </button>

          <button
            className={
              game === "numbers"
                ? "menuButton active"
                : "menuButton"
            }
            onClick={() => {
              setGame("numbers");
              setMessage("");
            }}
          >
            🔢 Number Tap
          </button>

          <button
            className={
              game === "odd"
                ? "menuButton active"
                : "menuButton"
            }
            onClick={() => {
              setGame("odd");
              setMessage("");
            }}
          >
            🕵️ Odd One Out
          </button>

        </section>

        {/* MEMORY GAME */}

        {game === "memory" && (

          <section className="gameBox">

            <div className="gameIcon">
              🧠
            </div>

            <h2>
              Memory Match
            </h2>

            <p>
              Find the matching pairs!
            </p>

            <div className="memoryGrid">

              {memoryCards.map((item, index) => {

                const visible =
                  flipped.includes(index) ||
                  matched.includes(index);

                return (
                  <button
                    key={index}
                    className={
                      visible
                        ? "memoryCard visible"
                        : "memoryCard"
                    }
                    onClick={() =>
                      flipCard(index)
                    }
                  >
                    {visible ? item : "❓"}
                  </button>
                );
              })}

            </div>

            {matched.length === memoryCards.length && (

              <div className="success">
                🎉 Amazing! You matched everything!
                <br />
                ⭐ Great memory!
              </div>

            )}

            <button
              className="resetButton"
              onClick={shuffleCards}
            >
              🔄 New Game
            </button>

          </section>

        )}

        {/* NUMBER GAME */}

        {game === "numbers" && (

          <section className="gameBox">

            <div className="gameIcon">
              🔢
            </div>

            <h2>
              Number Tap
            </h2>

            <p>
              Find number{" "}
              <strong>
                {target}
              </strong>
              !
            </p>

            <div className="numberGrid">

              {numbers.map((number) => (

                <button
                  key={number}
                  className="numberButton"
                  onClick={() =>
                    tapNumber(number)
                  }
                >
                  {number}
                </button>

              ))}

            </div>

            <div className="scoreBox">
              ⭐ Score: {numberScore}
            </div>

            {message && (
              <div className="message">
                {message}
              </div>
            )}

          </section>

        )}

        {/* ODD ONE OUT */}

        {game === "odd" && (

          <section className="gameBox">

            <div className="gameIcon">
              🕵️
            </div>

            <h2>
              Odd One Out
            </h2>

            <p>
              Find the one that is different!
            </p>

            <div className="oddItems">

              {oddItems[oddRound].items.map(
                (item, index) => (

                  <button
                    key={index}
                    className="oddButton"
                    onClick={() =>
                      chooseOdd(item)
                    }
                  >
                    {item}
                  </button>

                )
              )}

            </div>

            <div className="scoreBox">
              ⭐ Score: {oddScore}
            </div>

            {message && (
              <div className="message">
                {message}
              </div>
            )}

            {oddRound === oddItems.length - 1 &&
              message === "🏆 Game Complete!" && (

                <button
                  className="resetButton"
                  onClick={resetOddGame}
                >
                  🔄 Play Again
                </button>

            )}

          </section>

        )}

        {/* LEARNING MESSAGE */}

        <section className="learning">

          <div className="learningEmoji">
            🌟🧠🎯
          </div>

          <h2>
            Play • Think • Learn!
          </h2>

          <p>
            Every game helps children improve
            memory, attention and problem-solving skills.
          </p>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

          <Link href="/puzzles">
            🧩 Puzzles
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/learn">
            🔤 Learn
          </Link>

          <Link href="/stories">
            📚 Stories
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
              #ffe0ec,
              #e3ddff
            );
        }

        .heroEmoji {
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

        /* MENU */

        .gameMenu {
          max-width: 1000px;

          margin: 35px auto 0;

          padding: 0 20px;

          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;
        }

        .menuButton {
          border: none;

          padding: 13px 20px;

          border-radius: 25px;

          background: white;

          box-shadow:
            0 4px 15px
            rgba(0,0,0,0.06);

          font-weight: bold;

          cursor: pointer;
        }

        .menuButton.active {
          background: #ff6b6b;

          color: white;
        }

        /* GAME BOX */

        .gameBox {
          max-width: 800px;

          margin: 25px auto 50px;

          padding: 40px 25px;

          text-align: center;

          border-radius: 32px;

          background: white;

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .gameIcon {
          font-size: 65px;
        }

        .gameBox h2 {
          font-size: 30px;

          margin: 10px 0;
        }

        .gameBox > p {
          color: #666;

          font-size: 17px;
        }

        /* MEMORY */

        .memoryGrid {
          max-width: 520px;

          margin: 30px auto;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 12px;
        }

        .memoryCard {
          height: 100px;

          border: none;

          border-radius: 20px;

          background: #e7ddff;

          font-size: 38px;

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .memoryCard:hover {
          transform: scale(1.04);
        }

        .memoryCard.visible {
          background: #fff0b8;
        }

        /* NUMBER */

        .numberGrid {
          max-width: 500px;

          margin: 30px auto;

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 15px;
        }

        .numberButton {
          height: 90px;

          border: none;

          border-radius: 20px;

          background: #dff2ff;

          font-size: 30px;

          font-weight: bold;

          cursor: pointer;
        }

        .numberButton:hover {
          transform: translateY(-5px);

          background: #c9ebff;
        }

        /* ODD */

        .oddItems {
          display: flex;

          justify-content: center;

          gap: 15px;

          margin: 35px auto;

          flex-wrap: wrap;
        }

        .oddButton {
          width: 100px;

          height: 100px;

          border: none;

          border-radius: 25px;

          background: #e5f7df;

          font-size: 45px;

          cursor: pointer;
        }

        .oddButton:hover {
          transform: scale(1.08);
        }

        /* SCORE */

        .scoreBox {
          display: inline-block;

          margin-top: 15px;

          padding: 10px 18px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        .message {
          margin-top: 18px;

          padding: 13px;

          border-radius: 20px;

          background: #fff8df;

          font-weight: bold;
        }

        .success {
          margin: 20px auto;

          padding: 18px;

          border-radius: 22px;

          background: #dcf6d9;

          color: #247529;

          font-weight: bold;

          line-height: 1.7;
        }

        .resetButton {
          margin-top: 20px;

          padding: 13px 22px;

          border: none;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* LEARNING */

        .learning {
          max-width: 800px;

          margin: 0 auto 50px;

          padding: 40px 25px;

          text-align: center;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #dff5ff
            );
        }

        .learningEmoji {
          font-size: 55px;
        }

        .learning h2 {
          font-size: 28px;
        }

        .learning p {
          color: #555;

          line-height: 1.7;

          font-size: 17px;
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

          .gameBox {
            margin-left: 15px;
            margin-right: 15px;

            padding: 30px 18px;
          }

          .memoryGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .memoryCard {
            height: 80px;

            font-size: 30px;
          }

          .numberGrid {
            gap: 10px;
          }

          .numberButton {
            height: 75px;

            font-size: 25px;
          }

        }

      `}</style>
    </>
  );
                }
