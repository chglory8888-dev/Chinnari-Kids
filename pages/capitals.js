import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const capitals = [
  { country: "India", flag: "🇮🇳", capital: "New Delhi", icon: "🏛️" },
  { country: "Japan", flag: "🇯🇵", capital: "Tokyo", icon: "🗼" },
  { country: "France", flag: "🇫🇷", capital: "Paris", icon: "🗼" },
  { country: "United Kingdom", flag: "🇬🇧", capital: "London", icon: "🎡" },
  { country: "United States", flag: "🇺🇸", capital: "Washington, D.C.", icon: "🏛️" },
  { country: "China", flag: "🇨🇳", capital: "Beijing", icon: "🏯" },
  { country: "Australia", flag: "🇦🇺", capital: "Canberra", icon: "🏛️" },
  { country: "Canada", flag: "🇨🇦", capital: "Ottawa", icon: "🏛️" },
  { country: "Germany", flag: "🇩🇪", capital: "Berlin", icon: "🏛️" },
  { country: "Italy", flag: "🇮🇹", capital: "Rome", icon: "🏛️" },
  { country: "Spain", flag: "🇪🇸", capital: "Madrid", icon: "🏰" },
  { country: "Brazil", flag: "🇧🇷", capital: "Brasília", icon: "🏛️" },
  { country: "Russia", flag: "🇷🇺", capital: "Moscow", icon: "🏰" },
  { country: "South Korea", flag: "🇰🇷", capital: "Seoul", icon: "🏙️" },
  { country: "Thailand", flag: "🇹🇭", capital: "Bangkok", icon: "🛕" },
  { country: "Nepal", flag: "🇳🇵", capital: "Kathmandu", icon: "🏔️" },
  { country: "Egypt", flag: "🇪🇬", capital: "Cairo", icon: "🔺" },
  { country: "South Africa", flag: "🇿🇦", capital: "Pretoria", icon: "🏛️" },
  { country: "Mexico", flag: "🇲🇽", capital: "Mexico City", icon: "🏙️" },
  { country: "Singapore", flag: "🇸🇬", capital: "Singapore", icon: "🏙️" },
  { country: "Malaysia", flag: "🇲🇾", capital: "Kuala Lumpur", icon: "🏙️" },
  { country: "Indonesia", flag: "🇮🇩", capital: "Jakarta", icon: "🏙️" },
  { country: "New Zealand", flag: "🇳🇿", capital: "Wellington", icon: "🏛️" },
  { country: "Greece", flag: "🇬🇷", capital: "Athens", icon: "🏛️" },
  { country: "UAE", flag: "🇦🇪", capital: "Abu Dhabi", icon: "🏙️" },
  { country: "Saudi Arabia", flag: "🇸🇦", capital: "Riyadh", icon: "🏙️" },
  { country: "Turkey", flag: "🇹🇷", capital: "Ankara", icon: "🏛️" },
  { country: "Argentina", flag: "🇦🇷", capital: "Buenos Aires", icon: "🏙️" },
  { country: "Peru", flag: "🇵🇪", capital: "Lima", icon: "🏙️" },
  { country: "Kenya", flag: "🇰🇪", capital: "Nairobi", icon: "🌳" },
];

export default function Capitals() {
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const filtered = capitals.filter((item) =>
    `${item.country} ${item.capital}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = capitals[question];

  function answer(value) {
    if (value === current.capital) {
      setScore((s) => s + 1);
      setMessage("🎉 Correct! Great job!");
    } else {
      setMessage(`😊 Correct answer: ${current.capital}`);
    }
  }

  function nextQuestion() {
    setQuestion((q) => (q + 1) % capitals.length);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>World Capitals | Chinnaari Kids</title>
        <meta
          name="description"
          content="Learn countries and their capitals with fun cards and quizzes for kids."
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
            <Link href="/countries">🌍 Countries</Link>
            <Link href="/indian-states">🇮🇳 States</Link>
            <Link href="/currencies">💰 Currencies</Link>
            <Link href="/famous-places">🗺️ Places</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="heroIcon">🏛️</div>

          <h1>World Capitals</h1>

          <p>
            Learn countries and their capital cities!
          </p>

          <div className="heroIcons">
            🏛️ 🏙️ 🏰 🗼 🏯
          </div>
        </section>

        <section className="searchBox">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search country or capital..."
          />

          <p>
            Showing {filtered.length} capitals
          </p>
        </section>

        <section className="capitalGrid">
          {filtered.map((item) => (
            <div className="capitalCard" key={item.country}>

              <div className="flag">
                {item.flag}
              </div>

              <div className="cityIcon">
                {item.icon}
              </div>

              <h2>{item.country}</h2>

              <div className="capitalName">
                🏛️ {item.capital}
              </div>

            </div>
          ))}
        </section>

        <section className="quiz">

          <div className="quizTop">
            <span>🧠 Capital Quiz</span>
            <span>⭐ Score: {score}</span>
          </div>

          <h2>
            What is the capital of this country?
          </h2>

          <div className="question">

            <div className="bigFlag">
              {current.flag}
            </div>

            <h2>{current.country}</h2>

            <div className="city">
              🏛️
            </div>

          </div>

          <div className="answers">

            {[
              current.capital,
              capitals[(question + 1) % capitals.length].capital,
              capitals[(question + 2) % capitals.length].capital,
              capitals[(question + 3) % capitals.length].capital,
            ]
              .filter(
                (value, index, array) =>
                  array.indexOf(value) === index
              )
              .sort(() => Math.random() - 0.5)
              .map((value) => (
                <button
                  key={value}
                  onClick={() => answer(value)}
                >
                  🏛️ {value}
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

        <section className="learning">

          <div className="learningIcon">
            🌍
          </div>

          <div>
            <h2>
              What is a Capital City?
            </h2>

            <p>
              A capital city is an important city
              where a country's main government
              offices are located.
            </p>

            <p className="telugu">
              ఒక దేశానికి ముఖ్యమైన ప్రభుత్వ
              కార్యాలయాలు ఉండే ప్రధాన నగరాన్ని
              రాజధాని నగరం అంటారు.
            </p>
          </div>

        </section>

        <section className="links">

          <Link href="/countries">
            🌍 Countries
          </Link>

          <Link href="/indian-states">
            🇮🇳 Indian States
          </Link>

          <Link href="/currencies">
            💰 Currencies
          </Link>

          <Link href="/famous-places">
            🗺️ Famous Places
          </Link>

        </section>

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
          padding: 15px 6%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 15px rgba(0,0,0,.08);
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
              #e1f5ff,
              #eee2ff,
              #fff0c9
            );
        }

        .heroIcon {
          font-size: 90px;
        }

        .hero h1 {
          font-size: 45px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .heroIcons {
          margin-top: 20px;
          font-size: 35px;
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
          border-color: #91ceff;
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
          gap: 17px;
        }

        .capitalCard {
          background: white;
          padding: 22px 15px;
          text-align: center;
          border-radius: 25px;
          box-shadow: 0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .capitalCard:hover {
          transform: translateY(-6px);
        }

        .flag {
          font-size: 55px;
        }

        .cityIcon {
          font-size: 42px;
          margin-top: 8px;
        }

        .capitalCard h2 {
          font-size: 18px;
          margin: 10px 0;
        }

        .capitalName {
          padding: 10px;
          background: #e9f4ff;
          border-radius: 15px;
          font-weight: bold;
          font-size: 14px;
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
              #ffe6d5,
              #e6e0ff
            );
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
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
          font-size: 27px;
        }

        .question {
          display: inline-block;
          min-width: 280px;
          padding: 25px 45px;
          background: white;
          border-radius: 25px;
        }

        .bigFlag {
          font-size: 85px;
        }

        .city {
          font-size: 45px;
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
          background: #fff0dc;
          transform: scale(1.02);
        }

        .message {
          margin: 20px;
          font-size: 18px;
          font-weight: bold;
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

        .learning {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,.06);
        }

        .learningIcon {
          font-size: 65px;
        }

        .learning p {
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

          .learning {
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

          .hero h1 {
            font-size: 31px;
          }

          .heroIcon {
            font-size: 70px;
          }

          .heroIcons {
            font-size: 27px;
            letter-spacing: 2px;
          }

          .capitalGrid {
            grid-template-columns: 1fr;
          }

          .answers {
            grid-template-columns: 1fr;
          }

          .question {
            width: 100%;
            min-width: 0;
          }
        }

      `}</style>
    </>
  );
}
