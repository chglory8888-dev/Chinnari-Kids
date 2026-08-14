import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const colours = [
  { name: "Red", telugu: "ఎరుపు", value: "#ff4d4d", emoji: "🍎" },
  { name: "Blue", telugu: "నీలం", value: "#4d8cff", emoji: "🫐" },
  { name: "Yellow", telugu: "పసుపు", value: "#ffd633", emoji: "🌞" },
  { name: "Green", telugu: "ఆకుపచ్చ", value: "#4caf50", emoji: "🍃" },
  { name: "Orange", telugu: "నారింజ", value: "#ff8c32", emoji: "🍊" },
  { name: "Pink", telugu: "గులాబీ", value: "#ff7eb6", emoji: "🌸" },
  { name: "Purple", telugu: "ఊదా", value: "#9b59b6", emoji: "🍇" },
  { name: "Brown", telugu: "గోధుమ", value: "#9b6b43", emoji: "🧸" },
  { name: "Black", telugu: "నలుపు", value: "#222222", emoji: "🖤" },
  { name: "White", telugu: "తెలుపు", value: "#ffffff", emoji: "☁️" },
];

export default function Colours() {
  const [selected, setSelected] = useState(0);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const current = colours[selected];

  function chooseColour(index) {
    setSelected(index);
    setMessage("");
  }

  function speak(text) {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 0.75;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
    }
  }

  function answer(index) {
    if (index === question) {
      setScore((value) => value + 1);
      setMessage("🎉 Correct! Great job!");
    } else {
      setMessage("😊 Try again!");
    }
  }

  function nextQuestion() {
    const next = (question + 1) % colours.length;

    setQuestion(next);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Colours Learning | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn colours for kids with fun activities, pictures and simple colour games."
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
            <Link href="/numbers">🔢 Numbers</Link>
            <Link href="/abc">🔤 ABC</Link>
            <Link href="/telugu">🇮🇳 తెలుగు</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="rainbow">
            🌈
          </div>

          <h1>
            🎨 Learn Colours!
          </h1>

          <p>
            చూడండి • గుర్తించండి • నేర్చుకోండి
          </p>

          <span>
            ♾️ Unlimited Practice
          </span>

        </section>

        {/* COLOUR CARDS */}

        <section className="colourSection">

          <h2>
            🌈 Choose a Colour
          </h2>

          <div className="colourGrid">

            {colours.map((colour, index) => (

              <button
                key={colour.name}
                className={
                  selected === index
                    ? "colourCard selected"
                    : "colourCard"
                }
                onClick={() =>
                  chooseColour(index)
                }
              >

                <div
                  className="colourCircle"
                  style={{
                    backgroundColor:
                      colour.value,
                  }}
                />

                <div className="colourEmoji">
                  {colour.emoji}
                </div>

                <h3>
                  {colour.name}
                </h3>

                <p>
                  {colour.telugu}
                </p>

              </button>

            ))}

          </div>

        </section>

        {/* SELECTED COLOUR */}

        <section className="selectedBox">

          <div
            className="bigColour"
            style={{
              backgroundColor:
                current.value,
            }}
          />

          <div>

            <h2>
              {current.name}
            </h2>

            <h3>
              {current.telugu}
            </h3>

            <div className="selectedEmoji">
              {current.emoji}
            </div>

            <button
              className="listen"
              onClick={() =>
                speak(
                  `${current.name}, ${current.telugu}`
                )
              }
            >
              🔊 Say Colour
            </button>

          </div>

        </section>

        {/* GAME */}

        <section className="game">

          <div className="gameTop">

            <span>
              ⭐ Score: {score}
            </span>

            <span>
              Question {question + 1}
            </span>

          </div>

          <h2>
            🧠 Which colour is this?
          </h2>

          <p>
            Tap the correct colour!
          </p>

          <div
            className="questionColour"
            style={{
              backgroundColor:
                colours[question].value,
            }}
          />

          <div className="answers">

            {colours.map((colour, index) => (

              <button
                key={colour.name}
                onClick={() =>
                  answer(index)
                }
                style={{
                  backgroundColor:
                    colour.value,
                }}
                className={
                  colour.name === "White"
                    ? "answer whiteAnswer"
                    : "answer"
                }
              >
                {colour.name}
              </button>

            ))}

          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

          <button
            className="next"
            onClick={nextQuestion}
          >
            Next Question ➡️
          </button>

        </section>

        {/* LEARNING TIP */}

        <section className="tip">

          <div className="tipIcon">
            🧠
          </div>

          <div>

            <h2>
              Little Learner Tip
            </h2>

            <p>
              Look around your home and find
              something that has the same colour!
            </p>

          </div>

        </section>

        {/* OTHER LEARNING */}

        <section className="links">

          <Link href="/numbers">
            🔢 Numbers
          </Link>

          <Link href="/abc">
            🔤 ABC
          </Link>

          <Link href="/telugu">
            🇮🇳 Telugu
          </Link>

          <Link href="/games">
            🎮 Games
          </Link>

          <Link href="/puzzles">
            🧩 Puzzles
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

        .header {
          min-height: 70px;
          padding: 15px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          background: white;
          box-shadow: 0 2px 15px rgba(0,0,0,.08);
          position: sticky;
          top: 0;
          z-index: 10;
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
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        .hero {
          text-align: center;
          padding: 45px 20px;
          background: linear-gradient(
            135deg,
            #ffe1ec,
            #e3f4ff
          );
        }

        .rainbow {
          font-size: 65px;
        }

        .hero h1 {
          font-size: 42px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .hero span {
          display: inline-block;
          padding: 9px 18px;
          background: white;
          border-radius: 25px;
          font-weight: bold;
        }

        .colourSection {
          max-width: 1000px;
          margin: 35px auto;
          padding: 0 20px;
          text-align: center;
        }

        .colourGrid {
          display: grid;
          grid-template-columns:
            repeat(5, 1fr);
          gap: 15px;
        }

        .colourCard {
          border: 3px solid transparent;
          padding: 20px 10px;
          border-radius: 25px;
          background: white;
          cursor: pointer;
          box-shadow: 0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .colourCard:hover {
          transform: translateY(-5px);
        }

        .colourCard.selected {
          border-color: #ff6b6b;
          transform: translateY(-5px);
        }

        .colourCircle {
          width: 75px;
          height: 75px;
          margin: auto;
          border-radius: 50%;
          border: 3px solid #ddd;
        }

        .colourEmoji {
          font-size: 38px;
          margin-top: 10px;
        }

        .colourCard h3 {
          margin: 8px 0 3px;
        }

        .colourCard p {
          margin: 0;
          color: #777;
        }

        .selectedBox {
          max-width: 850px;
          margin: 40px auto;
          padding: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          text-align: center;
          border-radius: 30px;
          background: white;
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
        }

        .bigColour {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 6px solid white;
          box-shadow:
            0 5px 25px rgba(0,0,0,.15);
        }

        .selectedBox h2 {
          font-size: 35px;
          margin: 5px;
        }

        .selectedBox h3 {
          font-size: 22px;
          color: #777;
        }

        .selectedEmoji {
          font-size: 65px;
          margin: 10px;
        }

        .listen {
          border: none;
          padding: 13px 22px;
          border-radius: 25px;
          background: #dff2ff;
          font-weight: bold;
          cursor: pointer;
        }

        .game {
          max-width: 850px;
          margin: 40px auto;
          padding: 35px 25px;
          text-align: center;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #eee5ff,
            #e1f8ff
          );
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
        }

        .gameTop {
          display: flex;
          justify-content: space-between;
        }

        .gameTop span {
          padding: 9px 16px;
          border-radius: 20px;
          background: white;
          font-weight: bold;
        }

        .questionColour {
          width: 150px;
          height: 150px;
          margin: 25px auto;
          border-radius: 50%;
          border: 6px solid white;
          box-shadow:
            0 5px 20px rgba(0,0,0,.15);
        }

        .answers {
          display: grid;
          grid-template-columns:
            repeat(5, 1fr);
          gap: 10px;
        }

        .answer {
          border: none;
          padding: 13px 5px;
          border-radius: 20px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          text-shadow:
            0 1px 2px rgba(0,0,0,.5);
        }

        .whiteAnswer {
          color: #333;
          border: 2px solid #ddd;
          text-shadow: none;
        }

        .message {
          margin: 20px;
          font-size: 20px;
          font-weight: bold;
        }

        .next {
          border: none;
          padding: 13px 25px;
          border-radius: 25px;
          background: #4caf50;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .tip {
          max-width: 850px;
          margin: 35px auto 50px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,.06);
        }

        .tipIcon {
          font-size: 55px;
        }

        .tip p {
          color: #666;
          line-height: 1.7;
        }

        .links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 30px 20px 50px;
        }

        .links a {
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

        footer p {
          margin: 8px;
        }

        @media (max-width: 800px) {

          .header {
            flex-direction: column;
          }

          .colourGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .selectedBox {
            margin: 30px 15px;
            flex-direction: column;
            gap: 20px;
          }

          .game {
            margin: 30px 15px;
          }

          .answers {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 500px) {

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 34px;
          }

          .colourGrid {
            grid-template-columns: 1fr 1fr;
          }

          .colourCircle {
            width: 60px;
            height: 60px;
          }

          .bigColour {
            width: 140px;
            height: 140px;
          }

          .tip {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
          }

        }

      `}</style>

    </>
  );
                  }
