import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const colours = [
  { name: "Red", telugu: "ఎరుపు", emoji: "🔴", color: "#ff4d4d" },
  { name: "Blue", telugu: "నీలం", emoji: "🔵", color: "#4d9cff" },
  { name: "Yellow", telugu: "పసుపు", emoji: "🟡", color: "#ffd43b" },
  { name: "Green", telugu: "ఆకుపచ్చ", emoji: "🟢", color: "#45c95a" },
  { name: "Orange", telugu: "నారింజ", emoji: "🟠", color: "#ff922b" },
  { name: "Purple", telugu: "ఊదా", emoji: "🟣", color: "#9b5de5" },
];

export default function Colours() {
  const [selected, setSelected] = useState(null);
  const [stars, setStars] = useState(0);

  function chooseColour(index) {
    setSelected(index);

    if (selected !== index) {
      setStars((value) => value + 2);
    }
  }

  return (
    <>
      <Head>
        <title>Learn Colours | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn basic colours in English and Telugu with Chinnaari Kids."
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

          <div className="rainbow">
            🌈
          </div>

          <h1>
            Let's Learn Colours! 🎨
          </h1>

          <p>
            Click a colour and discover its name.
          </p>

          <div className="starBox">
            ⭐ {stars} Stars
          </div>

        </section>

        {/* COLOUR CARDS */}

        <section className="colourSection">

          <h2>
            🌟 Choose a Colour
          </h2>

          <p className="subtitle">
            Tap any colour to learn!
          </p>

          <div className="colourGrid">

            {colours.map((item, index) => (

              <button
                key={item.name}
                className={
                  selected === index
                    ? "colourCard selected"
                    : "colourCard"
                }
                onClick={() => chooseColour(index)}
              >

                <div
                  className="colourCircle"
                  style={{
                    background: item.color,
                  }}
                />

                <h3>
                  {item.emoji} {item.name}
                </h3>

                <p>
                  {item.telugu}
                </p>

                <span>
                  Tap to Learn
                </span>

              </button>

            ))}

          </div>

        </section>

        {/* SELECTED COLOUR */}

        {selected !== null && (

          <section className="learningCard">

            <div
              className="bigCircle"
              style={{
                background: colours[selected].color,
              }}
            />

            <div>

              <span className="badge">
                ⭐ Great Choice!
              </span>

              <h2>
                {colours[selected].emoji}{" "}
                {colours[selected].name}
              </h2>

              <p>
                Telugu:
                <strong>
                  {" "}
                  {colours[selected].telugu}
                </strong>
              </p>

              <p>
                You found a beautiful colour! 🎉
              </p>

            </div>

          </section>

        )}

        {/* COLOUR TIP */}

        <section className="tip">

          <div className="tipEmoji">
            💡
          </div>

          <div>

            <h2>
              Little Colour Tip
            </h2>

            <p>
              Colours are everywhere! Look around
              your home and try to find something
              red, blue, yellow or green. 🌈
            </p>

          </div>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

          <Link href="/dashboard">
            🌟 Dashboard
          </Link>

          <Link href="/learn">
            🔤 Continue Learning
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
              #ffe1ea,
              #e0f5ff
            );
        }

        .rainbow {
          font-size: 75px;
        }

        .hero h1 {
          font-size: 40px;

          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;

          color: #555;
        }

        .starBox {
          display: inline-block;

          margin-top: 10px;

          padding: 9px 18px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        /* COLOURS */

        .colourSection {
          max-width: 1050px;

          margin: auto;

          padding: 50px 20px;

          text-align: center;
        }

        .colourSection h2 {
          font-size: 30px;

          margin-bottom: 5px;
        }

        .subtitle {
          color: #666;

          margin-bottom: 30px;
        }

        .colourGrid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .colourCard {
          border: none;

          padding: 25px 15px;

          border-radius: 28px;

          background: white;

          cursor: pointer;

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.07);

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .colourCard:hover {
          transform: translateY(-7px);

          box-shadow:
            0 10px 28px
            rgba(0,0,0,0.12);
        }

        .colourCard.selected {
          transform: translateY(-5px);

          box-shadow:
            0 0 0 4px #ffd84d,
            0 10px 28px
            rgba(0,0,0,0.12);
        }

        .colourCircle {
          width: 110px;

          height: 110px;

          margin: auto;

          border-radius: 50%;

          box-shadow:
            inset 0 -7px 12px
            rgba(0,0,0,0.12),
            0 5px 12px
            rgba(0,0,0,0.12);
        }

        .colourCard h3 {
          font-size: 22px;

          margin: 18px 0 5px;
        }

        .colourCard p {
          margin: 0 0 12px;

          font-size: 18px;

          color: #666;
        }

        .colourCard span {
          font-size: 13px;

          color: #888;
        }

        /* LEARNING CARD */

        .learningCard {
          max-width: 800px;

          margin: 0 auto 45px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 30px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e0f6ff
            );

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.07);
        }

        .bigCircle {
          min-width: 130px;

          height: 130px;

          border-radius: 50%;

          box-shadow:
            inset 0 -8px 15px
            rgba(0,0,0,0.12),
            0 7px 15px
            rgba(0,0,0,0.12);
        }

        .badge {
          display: inline-block;

          padding: 7px 14px;

          border-radius: 20px;

          background: white;

          font-size: 13px;

          font-weight: bold;
        }

        .learningCard h2 {
          font-size: 30px;

          margin: 12px 0;
        }

        .learningCard p {
          color: #555;

          line-height: 1.6;
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

        .tipEmoji {
          font-size: 55px;
        }

        .tip h2 {
          margin-top: 0;
        }

        .tip p {
          color: #666;

          line-height: 1.7;

          margin-bottom: 0;
        }

        /* NAVIGATION */

        .navigation {
          display: flex;

          justify-content: center;

          gap: 15px;

          flex-wrap: wrap;

          margin: 20px 20px 55px;
        }

        .navigation a {
          padding: 13px 22px;

          border-radius: 25px;

          background: #333;

          color: white;

          text-decoration: none;

          font-weight: bold;
        }

        .navigation a:last-child {
          background: #4caf50;
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

          .colourGrid {
            grid-template-columns:
              repeat(2, 1fr);
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

          .colourGrid {
            grid-template-columns: 1fr;
          }

          .learningCard {
            margin-left: 20px;
            margin-right: 20px;

            flex-direction: column;

            text-align: center;

            padding: 30px 20px;
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
