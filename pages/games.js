import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const memoryItems = ["🍎", "🐶", "⭐", "🚗", "🌈", "🦋"];

const oddItems = [
  ["🍎", "🍎", "🍎", "🍌"],
  ["🐶", "🐶", "🐱", "🐶"],
  ["🔵", "🔵", "🔴", "🔵"]
];

function speak(text, lang = "en-IN") {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = lang;
  speech.rate = 0.8;
  speech.pitch = 1.1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

function playBeep(type) {
  if (typeof window === "undefined") return;

  try {
    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) return;

    const context = new AudioContext();

    const oscillator =
      context.createOscillator();

    const gain = context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);

    if (type === "correct") {
      oscillator.frequency.value = 700;
      gain.gain.value = 0.12;
    } else {
      oscillator.frequency.value = 220;
      gain.gain.value = 0.1;
    }

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      context.close();
    }, 180);
  } catch (error) {
    console.log("Sound unavailable");
  }
}

export default function Games() {
  const [game, setGame] = useState("memory");

  const [memoryCards, setMemoryCards] =
    useState([
      ...memoryItems,
      ...memoryItems
    ]);

  const [flipped, setFlipped] = useState([]);

  const [matched, setMatched] = useState([]);

  const [target, setTarget] = useState(5);

  const [numberScore, setNumberScore] =
    useState(0);

  const [oddRound, setOddRound] =
    useState(0);

  const [oddScore, setOddScore] =
    useState(0);

  const [message, setMessage] =
    useState("");

  function shuffleCards() {
    const shuffled = [...memoryCards].sort(
      () => Math.random() - 0.5
    );

    setMemoryCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMessage("");

    speak(
      "New memory game. Find the matching pairs.",
      "en-IN"
    );
  }

  function flipCard(index) {
    if (
      flipped.includes(index) ||
      matched.includes(index) ||
      flipped.length === 2
    ) {
      return;
    }

    const newFlipped = [
      ...flipped,
      index
    ];

    setFlipped(newFlipped);

    speak(memoryCards[index] === "🐶"
      ? "Dog"
      : memoryCards[index] === "🍎"
      ? "Apple"
      : memoryCards[index] === "⭐"
      ? "Star"
      : memoryCards[index] === "🚗"
      ? "Car"
      : memoryCards[index] === "🌈"
      ? "Rainbow"
      : "Butterfly"
    );

    if (newFlipped.length === 2) {
      const first =
        memoryCards[newFlipped[0]];

      const second =
        memoryCards[newFlipped[1]];

      if (first === second) {
        playBeep("correct");

        setMatched((old) => [
          ...old,
          ...newFlipped
        ]);

        setFlipped([]);

        speak(
          "Great! Matching pair!",
          "en-IN"
        );
      } else {
        playBeep("wrong");

        setTimeout(() => {
          setFlipped([]);
        }, 700);
      }
    }
  }

  function numberName(number) {
    const names = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine"
    ];

    return names[number];
  }

  function tapNumber(number) {
    speak(
      numberName(number),
      "en-IN"
    );

    if (number === target) {
      playBeep("correct");

      setNumberScore(
        (value) => value + 1
      );

      setMessage(
        "🎉 Correct! Great job!"
      );

      speak(
        `${numberName(number)}. Correct! Great job!`,
        "en-IN"
      );

      const next =
        Math.floor(
          Math.random() * 9
        ) + 1;

      setTarget(next);
    } else {
      playBeep("wrong");

      setMessage(
        "😊 Try again!"
      );

      speak(
        "Try again!",
        "en-IN"
      );
    }
  }

  function oddName(item) {
    if (item === "🍎")
      return "Apple";

    if (item === "🍌")
      return "Banana";

    if (item === "🐶")
      return "Dog";

    if (item === "🐱")
      return "Cat";

    if (item === "🔵")
      return "Blue";

    if (item === "🔴")
      return "Red";

    return "Item";
  }

  function chooseOdd(item) {
    speak(
      oddName(item),
      "en-IN"
    );

    const answers = [
      "🍌",
      "🐱",
      "🔴"
    ];

    const answer =
      answers[oddRound];

    if (item === answer) {
      playBeep("correct");

      setOddScore(
        (value) => value + 1
      );

      setMessage(
        "🎉 Correct! Excellent!"
      );

      speak(
        "Correct! Excellent!",
        "en-IN"
      );

      setTimeout(() => {
        if (
          oddRound <
          oddItems.length - 1
        ) {
          setOddRound(
            (value) => value + 1
          );

          setMessage("");
        } else {
          setMessage(
            "🏆 Game Complete!"
          );

          speak(
            "Game complete! Well done!",
            "en-IN"
          );
        }
      }, 700);
    } else {
      playBeep("wrong");

      setMessage(
        "💪 Nice try! Try again."
      );

      speak(
        "Nice try. Try again.",
        "en-IN"
      );
    }
  }

  function resetOddGame() {
    setOddRound(0);
    setOddScore(0);
    setMessage("");

    speak(
      "Odd one out. Find the different item.",
      "en-IN"
    );
  }

  return (
    <>
      <Head>
        <title>
          Kids Games | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun educational games for children."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

        <header className="header">

          <Link
            href="/"
            className="logo"
          >
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">
              Home
            </Link>

            <Link href="/dashboard">
              🌟 Dashboard
            </Link>

            <Link href="/stories">
              📚 Stories
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/colours">
              🎨 Colours
            </Link>

            <Link href="/learn">
              🔤 Learn
            </Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroEmoji">
            🎮✨
          </div>

          <h1>
            Let's Play & Learn!
          </h1>

          <p>
            Listen, play and learn new things.
          </p>

        </section>

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

              speak(
                "Memory Match",
                "en-IN"
              );
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

              speak(
                "Number Tap",
                "en-IN"
              );
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

              speak(
                "Odd One Out",
                "en-IN"
              );
            }}
          >
            🕵️ Odd One Out
          </button>

        </section>

        {game === "memory" && (

          <section className="gameBox">

            <div className="gameIcon">
              🧠
            </div>

            <h2>
              Memory Match
            </h2>

            <p>
              Tap a card and listen to its name.
              Find the matching pairs!
            </p>

            <div className="memoryGrid">

              {memoryCards.map(
                (item, index) => {

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
                      {visible
                        ? item
                        : "❓"}
                    </button>
                  );
                }
              )}

            </div>

            {matched.length ===
              memoryCards.length && (

              <div className="success">
                🎉 Amazing!
                <br />
                ⭐ You matched everything!
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

        {game === "numbers" && (

          <section className="gameBox">

            <div className="gameIcon">
              🔢
            </div>

            <h2>
              Number Tap
            </h2>

            <p>
              Find number
              {" "}
              <strong>
                {target}
              </strong>
            </p>

            <div className="numberHint">
              🔊 Tap any number to hear it!
            </div>

            <div className="numberGrid">

              {numbers.map(
                (number) => (

                  <button
                    key={number}
                    className="numberButton"
                    onClick={() =>
                      tapNumber(number)
                    }
                  >
                    {number}
                  </button>
                )
              )}

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

        {game === "odd" && (

          <section className="gameBox">

            <div className="gameIcon">
              🕵️
            </div>

            <h2>
              Odd One Out
            </h2>

            <p>
              Find the different one!
            </p>

            <div className="oddItems">

              {oddItems[oddRound].map(
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

            {message ===
              "🏆 Game Complete!" && (

              <button
                className="resetButton"
                onClick={resetOddGame}
              >
                🔄 Play Again
              </button>
            )}

          </section>
        )}

        <section className="learning">

          <div className="learningEmoji">
            🌟🧠🔊
          </div>

          <h2>
            Play • Listen • Learn!
          </h2>

          <p>
            Every game helps children improve
            memory, attention and problem-solving.
          </p>

        </section>

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

        .numberHint {
          display: inline-block;
          padding: 9px 15px;
          border-radius: 20px;
          background: #fff0b8;
          font-weight: bold;
          margin-top: 10px;
        }

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
          transition: transform 0.2s;
        }

        .memoryCard:hover {
          transform: scale(1.04);
        }

        .memoryCard.visible {
          background: #fff0b8;
        }

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
        }

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

          .numberButton {
            height: 75px;
            font-size: 25px;
          }
        }

      `}</style>
    </>
  );
}
