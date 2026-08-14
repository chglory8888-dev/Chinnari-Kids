import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const alphabet = [
  ["A", "🍎", "Apple"],
  ["B", "⚽", "Ball"],
  ["C", "🐱", "Cat"],
  ["D", "🐶", "Dog"],
  ["E", "🥚", "Egg"],
  ["F", "🐟", "Fish"],
  ["G", "🍇", "Grapes"],
  ["H", "🏠", "House"],
  ["I", "🍦", "Ice Cream"],
  ["J", "🧃", "Juice"],
  ["K", "🪁", "Kite"],
  ["L", "🦁", "Lion"],
];

const teluguLetters = [
  ["అ", "అమ్మ"],
  ["ఆ", "ఆవు"],
  ["ఇ", "ఇల్లు"],
  ["ఈ", "ఈగ"],
  ["ఉ", "ఉడుత"],
  ["ఊ", "ఊయల"],
  ["ఎ", "ఎలుక"],
  ["ఏ", "ఏనుగు"],
  ["ఐ", "ఐదు"],
  ["ఒ", "ఒంటె"],
  ["ఓ", "ఓడ"],
  ["ఔ", "ఔషధం"],
];

const numbers = [
  ["1", "🍎"],
  ["2", "🍎🍎"],
  ["3", "🍎🍎🍎"],
  ["4", "🍎🍎🍎🍎"],
  ["5", "🍎🍎🍎🍎🍎"],
  ["6", "⭐️⭐️⭐️⭐️⭐️⭐️"],
  ["7", "⭐️⭐️⭐️⭐️⭐️⭐️⭐️"],
  ["8", "🟢🟢🟢🟢🟢🟢🟢🟢"],
  ["9", "🔵🔵🔵🔵🔵🔵🔵🔵🔵"],
  ["10", "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️"],
];

export default function Learn() {
  const [section, setSection] = useState("abc");

  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedTelugu, setSelectedTelugu] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <>
      <Head>
        <title>Kids Learning | ABC, Telugu & Numbers | Chinnaari</title>

        <meta
          name="description"
          content="Fun learning for kids with English ABC, Telugu vowels and numbers."
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

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/colours">
              🎨 Colours
            </Link>

            <Link href="/learn" className="active">
              🔤 Learn
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroEmoji">
            🧠📚✨
          </div>

          <h1>
            Let's Learn!
          </h1>

          <p>
            ABC • తెలుగు అచ్చులు • Numbers
          </p>

        </section>

        {/* TABS */}

        <div className="tabs">

          <button
            className={section === "abc" ? "selected" : ""}
            onClick={() => {
              setSection("abc");
              setSelectedLetter(null);
            }}
          >
            🔤 ABC
          </button>

          <button
            className={section === "telugu" ? "selected" : ""}
            onClick={() => {
              setSection("telugu");
              setSelectedTelugu(null);
            }}
          >
            తెలుగు అచ్చులు
          </button>

          <button
            className={section === "numbers" ? "selected" : ""}
            onClick={() => {
              setSection("numbers");
              setSelectedNumber(null);
            }}
          >
            🔢 Numbers
          </button>

        </div>

        {/* ABC */}

        {section === "abc" && (
          <section className="content">

            <h2>
              🔤 Learn English Alphabet
            </h2>

            <p className="subtitle">
              Tap a letter to learn!
            </p>

            <div className="letterGrid">

              {alphabet.map(([letter, emoji, word]) => (
                <button
                  className="letterCard"
                  key={letter}
                  onClick={() =>
                    setSelectedLetter({
                      letter,
                      emoji,
                      word,
                    })
                  }
                >

                  <strong>
                    {letter}
                  </strong>

                  <span>
                    {emoji}
                  </span>

                  <small>
                    {word}
                  </small>

                </button>
              ))}

            </div>

            {selectedLetter && (
              <div className="selectedBox">

                <div>
                  {selectedLetter.letter}
                </div>

                <div>
                  {selectedLetter.emoji}
                </div>

                <h3>
                  {selectedLetter.letter} for{" "}
                  {selectedLetter.word}
                </h3>

              </div>
            )}

          </section>
        )}

        {/* TELUGU */}

        {section === "telugu" && (
          <section className="content">

            <h2>
              🇮🇳 తెలుగు అచ్చులు
            </h2>

            <p className="subtitle">
              అచ్చులను సరదాగా నేర్చుకుందాం!
            </p>

            <div className="teluguGrid">

              {teluguLetters.map(([letter, word]) => (
                <button
                  className="teluguCard"
                  key={letter}
                  onClick={() =>
                    setSelectedTelugu({
                      letter,
                      word,
                    })
                  }
                >

                  <strong>
                    {letter}
                  </strong>

                  <span>
                    {word}
                  </span>

                </button>
              ))}

            </div>

            {selectedTelugu && (
              <div className="selectedBox teluguSelected">

                <div>
                  {selectedTelugu.letter}
                </div>

                <h3>
                  {selectedTelugu.letter} —{" "}
                  {selectedTelugu.word}
                </h3>

                <p>
                  చాలా బాగా నేర్చుకుంటున్నారు! 🌟
                </p>

              </div>
            )}

          </section>
        )}

        {/* NUMBERS */}

        {section === "numbers" && (
          <section className="content">

            <h2>
              🔢 Learn Numbers
            </h2>

            <p className="subtitle">
              Count the objects and learn numbers!
            </p>

            <div className="numberGrid">

              {numbers.map(([number, objects]) => (
                <button
                  className="numberCard"
                  key={number}
                  onClick={() =>
                    setSelectedNumber({
                      number,
                      objects,
                    })
                  }
                >

                  <strong>
                    {number}
                  </strong>

                  <span>
                    {objects}
                  </span>

                </button>
              ))}

            </div>

            {selectedNumber && (
              <div className="selectedBox">

                <div className="numberBig">
                  {selectedNumber.number}
                </div>

                <div className="objects">
                  {selectedNumber.objects}
                </div>

                <h3>
                  Number {selectedNumber.number}
                </h3>

                <p>
                  Count carefully! 👏
                </p>

              </div>
            )}

          </section>
        )}

        {/* LEARNING MESSAGE */}

        <section className="learningMessage">

          <div className="brain">
            🧠
          </div>

          <div>
            <h2>
              Learning is Fun! 🌟
            </h2>

            <p>
              Practice a little every day and become
              a super learner!
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
          gap: 15px;
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
              #e4ddff,
              #dff6ff
            );
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

        /* TABS */

        .tabs {
          display: flex;

          justify-content: center;

          gap: 12px;

          margin: 35px 20px;

          flex-wrap: wrap;
        }

        .tabs button {
          border: none;

          padding: 14px 22px;

          border-radius: 25px;

          background: white;

          box-shadow:
            0 3px 12px rgba(0,0,0,0.08);

          font-weight: bold;

          cursor: pointer;
        }

        .tabs button.selected {
          background: #ff6b6b;
          color: white;
        }

        /* CONTENT */

        .content {
          max-width: 1050px;

          margin: auto;

          padding: 10px 20px 55px;

          text-align: center;
        }

        .content h2 {
          font-size: 30px;
        }

        .subtitle {
          color: #666;
          font-size: 17px;
        }

        /* ABC */

        .letterGrid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;

          margin-top: 30px;
        }

        .letterCard {
          border: none;

          min-height: 170px;

          padding: 20px;

          border-radius: 25px;

          background: white;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.07);

          cursor: pointer;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 8px;

          transition:
            transform 0.2s;
        }

        .letterCard:hover {
          transform: translateY(-6px);
        }

        .letterCard strong {
          font-size: 42px;
        }

        .letterCard span {
          font-size: 42px;
        }

        .letterCard small {
          font-size: 16px;
          color: #555;
        }

        /* TELUGU */

        .teluguGrid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;

          margin-top: 30px;
        }

        .teluguCard {
          border: none;

          padding: 25px 15px;

          min-height: 130px;

          border-radius: 25px;

          background: #fff0c2;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.06);

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .teluguCard:hover {
          transform: translateY(-6px);
        }

        .teluguCard strong {
          display: block;

          font-size: 45px;

          margin-bottom: 10px;
        }

        .teluguCard span {
          font-size: 17px;
        }

        /* NUMBERS */

        .numberGrid {
          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          gap: 18px;

          margin-top: 30px;
        }

        .numberCard {
          border: none;

          min-height: 160px;

          padding: 18px;

          border-radius: 25px;

          background: #ddf4ff;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.06);

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .numberCard:hover {
          transform: translateY(-6px);
        }

        .numberCard strong {
          display: block;

          font-size: 42px;

          margin-bottom: 12px;
        }

        .numberCard span {
          font-size: 20px;

          line-height: 1.6;
        }

        /* SELECTED */

        .selectedBox {
          max-width: 600px;

          margin: 35px auto 0;

          padding: 30px;

          border-radius: 28px;

          background:
            linear-gradient(
              135deg,
              #fff0bf,
              #e5ddff
            );

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.06);
        }

        .selectedBox > div {
          font-size: 60px;
        }

        .selectedBox h3 {
          font-size: 24px;
        }

        .selectedBox p {
          color: #555;
        }

        .teluguSelected {
          background:
            linear-gradient(
              135deg,
              #ffe1ea,
              #fff0bf
            );
        }

        .numberBig {
          font-size: 65px !important;
          font-weight: 800;
        }

        .objects {
          font-size: 24px !important;
          line-height: 1.7;
        }

        /* LEARNING MESSAGE */

        .learningMessage {
          max-width: 900px;

          margin: 10px auto 50px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #dff5ff,
              #e9ddff
            );
        }

        .brain {
          font-size: 70px;
        }

        .learningMessage h2 {
          margin-top: 0;
        }

        .learningMessage p {
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

        @media (max-width: 850px) {

          .header {
            flex-direction: column;
            gap: 15px;
          }

          nav {
            justify-content: center;
          }

          .letterGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .teluguGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .numberGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .learningMessage {
            margin-left: 20px;
            margin-right: 20px;
          }

        }

        /* MOBILE */

        @media (max-width: 550px) {

          .hero h1 {
            font-size: 34px;
          }

          .letterGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .teluguGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .numberGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .learningMessage {
            flex-direction: column;
            text-align: center;
            padding: 25px 20px;
          }

        }

      `}</style>
    </>
  );
            }
