import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const alphabet = [
  ["A", "🍎", "Apple"],
  ["B", "⚽", "Ball"],
  ["C", "🐱", "Cat"],
  ["D", "🐶", "Dog"],
  ["E", "🐘", "Elephant"],
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
  ["6", "⭐".repeat(6)],
  ["7", "⭐".repeat(7)],
  ["8", "⭐".repeat(8)],
  ["9", "⭐".repeat(9)],
  ["10", "⭐".repeat(10)],
];

export default function Learn() {
  const [stars, setStars] = useState(0);
  const [active, setActive] = useState(null);
  const [completed, setCompleted] = useState({
    abc: false,
    telugu: false,
    numbers: false,
  });

  function earnStar(type, value) {
    const key = `${type}-${value}`;

    if (active !== key) {
      setStars((old) => old + 1);
      setActive(key);
    }
  }

  function completeSection(type) {
    if (!completed[type]) {
      setStars((old) => old + 5);

      setCompleted((old) => ({
        ...old,
        [type]: true,
      }));
    }
  }

  return (
    <>
      <Head>
        <title>Learn ABC, Telugu & Numbers | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn ABC, Telugu vowels and numbers with fun activities for kids."
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
            🔤
          </div>

          <h1>
            Little Learning Zone! 🌟
          </h1>

          <p>
            Learn letters, Telugu vowels and numbers
            while collecting stars!
          </p>

          <div className="stars">
            ⭐ {stars} Stars
          </div>

        </section>

        {/* ABC */}

        <section className="section">

          <div className="sectionTitle">

            <span className="sectionIcon">
              🔤
            </span>

            <div>
              <h2>
                Learn ABC
              </h2>

              <p>
                Tap each letter to learn!
              </p>
            </div>

          </div>

          <div className="abcGrid">

            {alphabet.map(([letter, emoji, word]) => {

              const key = `abc-${letter}`;

              return (
                <button
                  key={letter}
                  className={
                    active === key
                      ? "abcCard active"
                      : "abcCard"
                  }
                  onClick={() =>
                    earnStar("abc", letter)
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
              );
            })}

          </div>

          <button
            className="completeButton"
            onClick={() => completeSection("abc")}
          >
            {completed.abc
              ? "✅ ABC Completed"
              : "🏆 Complete ABC +5 Stars"}
          </button>

        </section>

        {/* TELUGU */}

        <section className="section teluguSection">

          <div className="sectionTitle">

            <span className="sectionIcon">
              అ
            </span>

            <div>
              <h2>
                తెలుగు అచ్చులు
              </h2>

              <p>
                తెలుగు అచ్చులను నేర్చుకుందాం!
              </p>
            </div>

          </div>

          <div className="teluguGrid">

            {teluguLetters.map(([letter, word]) => {

              const key = `telugu-${letter}`;

              return (
                <button
                  key={letter}
                  className={
                    active === key
                      ? "teluguCard active"
                      : "teluguCard"
                  }
                  onClick={() =>
                    earnStar("telugu", letter)
                  }
                >

                  <strong>
                    {letter}
                  </strong>

                  <span>
                    {word}
                  </span>

                </button>
              );
            })}

          </div>

          <button
            className="completeButton"
            onClick={() => completeSection("telugu")}
          >
            {completed.telugu
              ? "✅ తెలుగు Completed"
              : "🏆 Complete Telugu +5 Stars"}
          </button>

        </section>

        {/* NUMBERS */}

        <section className="section">

          <div className="sectionTitle">

            <span className="sectionIcon">
              🔢
            </span>

            <div>
              <h2>
                Learn Numbers
              </h2>

              <p>
                Count the objects!
              </p>
            </div>

          </div>

          <div className="numberGrid">

            {numbers.map(([number, objects]) => {

              const key = `number-${number}`;

              return (
                <button
                  key={number}
                  className={
                    active === key
                      ? "numberCard active"
                      : "numberCard"
                  }
                  onClick={() =>
                    earnStar("number", number)
                  }
                >

                  <strong>
                    {number}
                  </strong>

                  <span>
                    {objects}
                  </span>

                </button>
              );
            })}

          </div>

          <button
            className="completeButton"
            onClick={() => completeSection("numbers")}
          >
            {completed.numbers
              ? "✅ Numbers Completed"
              : "🏆 Complete Numbers +5 Stars"}
          </button>

        </section>

        {/* MOTIVATION */}

        <section className="motivation">

          <div className="motivationEmoji">
            🧠✨
          </div>

          <h2>
            Amazing Learning!
          </h2>

          <p>
            Every new letter and number you learn
            makes your brain stronger! 💪
          </p>

          <Link
            href="/dashboard"
            className="dashboardButton"
          >
            🌟 View My Stars
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

          <div className="footerLinks">

            <Link href="/">
              Home
            </Link>

            <Link href="/dashboard">
              Dashboard
            </Link>

            <Link href="/games">
              Games
            </Link>

            <Link href="/puzzles">
              Puzzles
            </Link>

            <Link href="/colours">
              Colours
            </Link>

          </div>

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
              #e8ddff,
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
          line-height: 1.6;
        }

        .stars {
          display: inline-block;

          margin-top: 10px;

          padding: 9px 18px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        /* SECTIONS */

        .section {
          max-width: 1050px;

          margin: 45px auto;

          padding: 30px 20px;

          text-align: center;
        }

        .sectionTitle {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 15px;

          margin-bottom: 30px;
        }

        .sectionIcon {
          width: 65px;
          height: 65px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 20px;

          background: #fff0b8;

          font-size: 38px;
          font-weight: bold;
        }

        .sectionTitle h2 {
          margin: 0;

          font-size: 30px;
        }

        .sectionTitle p {
          margin: 6px 0 0;

          color: #666;
        }

        /* ABC */

        .abcGrid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 15px;
        }

        .abcCard {
          min-height: 170px;

          border: none;

          border-radius: 25px;

          background: #e9ddff;

          cursor: pointer;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 7px;

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .abcCard:hover,
        .abcCard.active {
          transform: translateY(-5px);

          box-shadow:
            0 0 0 4px #ffd84d,
            0 8px 20px
            rgba(0,0,0,0.1);
        }

        .abcCard strong {
          font-size: 45px;
        }

        .abcCard span {
          font-size: 38px;
        }

        .abcCard small {
          font-size: 16px;
          font-weight: bold;
        }

        /* TELUGU */

        .teluguSection {
          background: #fff0f5;

          border-radius: 30px;
        }

        .teluguGrid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 15px;
        }

        .teluguCard {
          min-height: 125px;

          border: none;

          border-radius: 22px;

          background: white;

          cursor: pointer;

          box-shadow:
            0 4px 15px
            rgba(0,0,0,0.06);

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .teluguCard:hover,
        .teluguCard.active {
          transform: translateY(-5px);

          box-shadow:
            0 0 0 4px #ffb6c8;
        }

        .teluguCard strong {
          display: block;

          font-size: 42px;

          margin-bottom: 8px;
        }

        .teluguCard span {
          font-size: 15px;

          color: #666;
        }

        /* NUMBERS */

        .numberGrid {
          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          gap: 15px;
        }

        .numberCard {
          min-height: 150px;

          border: none;

          border-radius: 23px;

          background: #e0f2ff;

          cursor: pointer;

          padding: 15px;

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .numberCard:hover,
        .numberCard.active {
          transform: translateY(-5px);

          box-shadow:
            0 0 0 4px #80cfff;
        }

        .numberCard strong {
          display: block;

          font-size: 40px;

          margin-bottom: 10px;
        }

        .numberCard span {
          display: block;

          font-size: 16px;

          line-height: 1.5;

          word-break: break-word;
        }

        /* COMPLETE */

        .completeButton {
          margin-top: 25px;

          border: none;

          padding: 14px 23px;

          border-radius: 25px;

          background: #4caf50;

          color: white;

          font-weight: bold;

          font-size: 15px;

          cursor: pointer;
        }

        .completeButton:hover {
          transform: scale(1.04);
        }

        /* MOTIVATION */

        .motivation {
          max-width: 800px;

          margin: 30px auto 55px;

          padding: 40px 25px;

          text-align: center;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #dff5ff
            );

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.07);
        }

        .motivationEmoji {
          font-size: 65px;
        }

        .motivation h2 {
          font-size: 30px;
        }

        .motivation p {
          color: #555;

          font-size: 17px;

          line-height: 1.7;
        }

        .dashboardButton {
          display: inline-block;

          margin-top: 10px;

          padding: 14px 23px;

          border-radius: 25px;

          background: #ff6b6b;

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

        .footerLinks {
          display: flex;

          justify-content: center;

          gap: 18px;

          flex-wrap: wrap;

          margin: 18px 0;
        }

        .footerLinks a {
          color: white;

          text-decoration: none;

          font-size: 14px;
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

          .abcGrid {
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

          .sectionTitle {
            flex-direction: column;
          }

          .abcGrid {
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

          .section {
            margin: 25px auto;
          }

        }

      `}</style>
    </>
  );
          }
