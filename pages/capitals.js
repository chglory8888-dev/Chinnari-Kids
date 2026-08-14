import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const capitals = [
  {
    country: "India",
    flag: "🇮🇳",
    capital: "New Delhi",
    continent: "Asia",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    capital: "Washington, D.C.",
    continent: "North America",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    capital: "London",
    continent: "Europe",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    capital: "Tokyo",
    continent: "Asia",
  },
  {
    country: "China",
    flag: "🇨🇳",
    capital: "Beijing",
    continent: "Asia",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    capital: "Canberra",
    continent: "Oceania",
  },
  {
    country: "France",
    flag: "🇫🇷",
    capital: "Paris",
    continent: "Europe",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    capital: "Berlin",
    continent: "Europe",
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    capital: "Rome",
    continent: "Europe",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    capital: "Ottawa",
    continent: "North America",
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    capital: "Brasília",
    continent: "South America",
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    capital: "Pretoria",
    continent: "Africa",
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    capital: "Seoul",
    continent: "Asia",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    capital: "Singapore",
    continent: "Asia",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    continent: "Asia",
  },
  {
    country: "Egypt",
    flag: "🇪🇬",
    capital: "Cairo",
    continent: "Africa",
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    capital: "Athens",
    continent: "Europe",
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    capital: "Mexico City",
    continent: "North America",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    capital: "Wellington",
    continent: "Oceania",
  },
  {
    country: "Switzerland",
    flag: "🇨🇭",
    capital: "Bern",
    continent: "Europe",
  },
  {
    country: "Nepal",
    flag: "🇳🇵",
    capital: "Kathmandu",
    continent: "Asia",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    capital: "Bangkok",
    continent: "Asia",
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
    capital: "Jakarta",
    continent: "Asia",
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    capital: "Kuala Lumpur",
    continent: "Asia",
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    capital: "Moscow",
    continent: "Europe / Asia",
  },
];

export default function Capitals() {
  const [search, setSearch] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [message, setMessage] = useState("");

  const filtered = capitals.filter((item) =>
    item.country
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    item.capital
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = capitals[question];

  function checkAnswer(answer) {
    if (answer === current.capital) {
      setScore((old) => old + 1);
      setMessage("🎉 Correct! Excellent!");
    } else {
      setMessage(
        `😊 Try again! Answer: ${current.capital}`
      );
    }
  }

  function nextQuestion() {
    setQuestion(
      (old) => (old + 1) % capitals.length
    );
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>World Capitals | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn world capitals with flags and fun quizzes for kids."
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

            <Link href="/world-explorer">
              🌍 World Explorer
            </Link>

            <Link href="/countries">
              🚩 Countries
            </Link>

            <Link href="/numbers">
              🔢 Numbers
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroIcon">
            🏛️
          </div>

          <h1>
            World Capitals
          </h1>

          <p>
            Learn countries and their capital cities!
          </p>

          <div className="heroFlags">
            🇮🇳 🇺🇸 🇬🇧 🇯🇵 🇫🇷 🌍
          </div>

        </section>

        {/* SEARCH */}

        <section className="searchBox">

          <input
            type="text"
            placeholder="🔍 Search country or capital..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <p>
            Showing {filtered.length} places
          </p>

        </section>

        {/* CAPITAL CARDS */}

        <section className="capitalGrid">

          {filtered.map((item) => (

            <div
              className="capitalCard"
              key={item.country}
            >

              <div className="flag">
                {item.flag}
              </div>

              <h2>
                {item.country}
              </h2>

              <div className="arrow">
                ↓
              </div>

              <h3>
                🏛️ {item.capital}
              </h3>

              <span>
                🌎 {item.continent}
              </span>

            </div>

          ))}

        </section>

        {/* QUIZ */}

        <section className="quiz">

          <div className="quizTop">

            <span>
              🧠 Capital Quiz
            </span>

            <span>
              ⭐ Score: {score}
            </span>

          </div>

          <h2>
            What is the capital of...
          </h2>

          <div className="questionCountry">

            <div className="questionFlag">
              {current.flag}
            </div>

            <h2>
              {current.country}
            </h2>

          </div>

          <p>
            Choose the correct capital:
          </p>

          <div className="answers">

            {[
              current.capital,
              capitals[
                (question + 1) % capitals.length
              ].capital,
              capitals[
                (question + 2) % capitals.length
              ].capital,
              capitals[
                (question + 3) % capitals.length
              ].capital,
            ]
              .sort(() => Math.random() - 0.5)
              .map((answer) => (

                <button
                  key={answer}
                  onClick={() =>
                    checkAnswer(answer)
                  }
                >
                  🏛️ {answer}
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
            🌍
          </div>

          <div>

            <h2>
              Little Explorer Tip
            </h2>

            <p>
              A capital city is an important city
              where a country's government is based.
            </p>

            <p className="telugu">
              రాజధాని అంటే దేశం లేదా రాష్ట్రానికి
              ముఖ్యమైన పరిపాలనా నగరం.
            </p>

          </div>

        </section>

        {/* NAVIGATION */}

        <section className="links">

          <Link href="/countries">
            🚩 Countries
          </Link>

          <Link href="/currencies">
            💰 Currencies
          </Link>

          <Link href="/indian-states">
            🇮🇳 Indian States
          </Link>

          <Link href="/famous-places">
            🗺️ Famous Places
          </Link>

          <Link href="/world-quiz">
            🧠 World Quiz
          </Link>

          <Link href="/world-explorer">
            🌍 World Explorer
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
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow:
            0 2px 15px rgba(0,0,0,.08);
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
          padding: 55px 20px;
          background:
            linear-gradient(
              135deg,
              #e3e8ff,
              #e1f6ff,
              #fff0c9
            );
        }

        .heroIcon {
          font-size: 90px;
        }

        .hero h1 {
          font-size: 45px;
          margin: 12px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .heroFlags {
          margin-top: 20px;
          font-size: 38px;
          letter-spacing: 5px;
        }

        .searchBox {
          max-width: 800px;
          margin: 35px auto 15px;
          padding: 0 20px;
          text-align: center;
        }

        .searchBox input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #ddd;
          border-radius: 30px;
          outline: none;
          font-size: 16px;
          background: white;
        }

        .searchBox input:focus {
          border-color: #8b8cff;
        }

        .searchBox p {
          color: #777;
        }

        .capitalGrid {
          max-width: 1100px;
          margin: 25px auto 50px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 16px;
        }

        .capitalCard {
          padding: 25px 15px;
          border-radius: 25px;
          background: white;
          text-align: center;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .capitalCard:hover {
          transform: translateY(-6px);
        }

        .flag {
          font-size: 58px;
        }

        .capitalCard h2 {
          font-size: 19px;
          margin: 10px 0;
        }

        .arrow {
          color: #999;
          font-size: 20px;
        }

        .capitalCard h3 {
          font-size: 18px;
          color: #555;
          margin: 8px 0;
        }

        .capitalCard span {
          display: inline-block;
          padding: 5px 10px;
          background: #f1f1f1;
          border-radius: 15px;
          font-size: 12px;
        }

        .quiz {
          max-width: 900px;
          margin: 30px auto 55px;
          padding: 35px 25px;
          text-align: center;
          border-radius: 32px;
          background:
            linear-gradient(
              135deg,
              #ffe3ed,
              #e6e0ff
            );
          box-shadow:
            0 8px 30px rgba(0,0,0,.08);
        }

        .quizTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .quizTop span {
          padding: 9px 15px;
          border-radius: 20px;
          background: white;
          font-weight: bold;
        }

        .quiz h2 {
          font-size: 28px;
        }

        .questionCountry {
          display: inline-block;
          padding: 20px 40px;
          border-radius: 25px;
          background: white;
          box-shadow:
            0 5px 15px rgba(0,0,0,.06);
        }

        .questionFlag {
          font-size: 75px;
        }

        .questionCountry h2 {
          margin: 8px 0;
        }

        .answers {
          max-width: 650px;
          margin: 20px auto;
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 12px;
        }

        .answers button {
          border: none;
          padding: 15px;
          border-radius: 20px;
          background: white;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
        }

        .answers button:hover {
          background: #fff0f0;
          transform: scale(1.02);
        }

        .message {
          margin: 20px;
          font-weight: bold;
          font-size: 18px;
        }

        .next {
          border: none;
          padding: 13px 23px;
          border-radius: 25px;
          background: #4caf50;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .tip {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-radius: 30px;
          background: white;
          box-shadow:
            0 6px 20px rgba(0,0,0,.06);
        }

        .tipIcon {
          font-size: 60px;
        }

        .tip p {
          color: #666;
          line-height: 1.6;
        }

        .telugu {
          font-weight: bold;
        }

        .links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 20px 20px 50px;
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

        @media (max-width: 900px) {

          .capitalGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

        }

        @media (max-width: 700px) {

          .header {
            flex-direction: column;
          }

          .hero h1 {
            font-size: 36px;
          }

          .capitalGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .tip {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
          }

        }

        @media (max-width: 500px) {

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .heroIcon {
            font-size: 70px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .heroFlags {
            font-size: 28px;
            letter-spacing: 2px;
          }

          .capitalGrid {
            grid-template-columns: 1fr;
          }

          .answers {
            grid-template-columns: 1fr;
          }

        }

      `}</style>
    </>
  );
    }
