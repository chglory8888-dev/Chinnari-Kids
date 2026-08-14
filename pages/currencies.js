import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const currencies = [
  { country: "India", flag: "🇮🇳", currency: "Indian Rupee", symbol: "₹" },
  { country: "United States", flag: "🇺🇸", currency: "US Dollar", symbol: "$" },
  { country: "United Kingdom", flag: "🇬🇧", currency: "Pound Sterling", symbol: "£" },
  { country: "Japan", flag: "🇯🇵", currency: "Japanese Yen", symbol: "¥" },
  { country: "China", flag: "🇨🇳", currency: "Chinese Yuan", symbol: "¥" },
  { country: "Australia", flag: "🇦🇺", currency: "Australian Dollar", symbol: "$" },
  { country: "Canada", flag: "🇨🇦", currency: "Canadian Dollar", symbol: "$" },
  { country: "France", flag: "🇫🇷", currency: "Euro", symbol: "€" },
  { country: "Germany", flag: "🇩🇪", currency: "Euro", symbol: "€" },
  { country: "Italy", flag: "🇮🇹", currency: "Euro", symbol: "€" },
  { country: "Spain", flag: "🇪🇸", currency: "Euro", symbol: "€" },
  { country: "Switzerland", flag: "🇨🇭", currency: "Swiss Franc", symbol: "CHF" },
  { country: "South Korea", flag: "🇰🇷", currency: "South Korean Won", symbol: "₩" },
  { country: "Singapore", flag: "🇸🇬", currency: "Singapore Dollar", symbol: "$" },
  { country: "UAE", flag: "🇦🇪", currency: "UAE Dirham", symbol: "د.إ" },
  { country: "Saudi Arabia", flag: "🇸🇦", currency: "Saudi Riyal", symbol: "﷼" },
  { country: "Thailand", flag: "🇹🇭", currency: "Thai Baht", symbol: "฿" },
  { country: "Malaysia", flag: "🇲🇾", currency: "Malaysian Ringgit", symbol: "RM" },
  { country: "Indonesia", flag: "🇮🇩", currency: "Indonesian Rupiah", symbol: "Rp" },
  { country: "Brazil", flag: "🇧🇷", currency: "Brazilian Real", symbol: "R$" },
  { country: "Mexico", flag: "🇲🇽", currency: "Mexican Peso", symbol: "$" },
  { country: "South Africa", flag: "🇿🇦", currency: "South African Rand", symbol: "R" },
  { country: "Egypt", flag: "🇪🇬", currency: "Egyptian Pound", symbol: "£" },
  { country: "Nepal", flag: "🇳🇵", currency: "Nepalese Rupee", symbol: "रू" },
  { country: "New Zealand", flag: "🇳🇿", currency: "New Zealand Dollar", symbol: "$" },
];

export default function Currencies() {
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const filtered = currencies.filter((item) =>
    `${item.country} ${item.currency}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = currencies[question];

  function checkAnswer(answer) {
    if (answer === current.currency) {
      setScore((old) => old + 1);
      setMessage("🎉 Correct! Great job!");
    } else {
      setMessage(`😊 Answer: ${current.currency}`);
    }
  }

  function nextQuestion() {
    setQuestion(
      (old) => (old + 1) % currencies.length
    );
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Currencies | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn world currencies, symbols and countries with fun quizzes for kids."
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

            <Link href="/countries">
              🚩 Countries
            </Link>

            <Link href="/capitals">
              🏛️ Capitals
            </Link>

            <Link href="/world-explorer">
              🌍 World Explorer
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>
          </nav>

        </header>

        <section className="hero">

          <div className="money">
            💰
          </div>

          <h1>
            World Currencies
          </h1>

          <p>
            Discover the money used around the world!
          </p>

          <div className="symbols">
            ₹ &nbsp; $ &nbsp; € &nbsp; £ &nbsp; ¥ &nbsp; ₩
          </div>

        </section>

        <section className="searchBox">

          <input
            type="text"
            placeholder="🔍 Search country or currency..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <p>
            Showing {filtered.length} currencies
          </p>

        </section>

        <section className="currencyGrid">

          {filtered.map((item) => (

            <div
              className="currencyCard"
              key={item.country}
            >

              <div className="flag">
                {item.flag}
              </div>

              <h2>
                {item.country}
              </h2>

              <div className="symbol">
                {item.symbol}
              </div>

              <h3>
                {item.currency}
              </h3>

            </div>

          ))}

        </section>

        <section className="quiz">

          <div className="quizTop">

            <span>
              🧠 Currency Quiz
            </span>

            <span>
              ⭐ Score: {score}
            </span>

          </div>

          <h2>
            What currency does this country use?
          </h2>

          <div className="question">

            <div className="questionFlag">
              {current.flag}
            </div>

            <h2>
              {current.country}
            </h2>

          </div>

          <div className="answers">

            {[
              current.currency,
              currencies[
                (question + 1) % currencies.length
              ].currency,
              currencies[
                (question + 2) % currencies.length
              ].currency,
              currencies[
                (question + 3) % currencies.length
              ].currency,
            ]
              .sort(() => Math.random() - 0.5)
              .map((answer) => (

                <button
                  key={answer}
                  onClick={() =>
                    checkAnswer(answer)
                  }
                >
                  💰 {answer}
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

        <section className="tip">

          <div className="tipIcon">
            💡
          </div>

          <div>

            <h2>
              What is Currency?
            </h2>

            <p>
              Currency is the money people use
              to buy things and pay for services.
            </p>

            <p className="telugu">
              కరెన్సీ అంటే ఒక దేశంలో
              ఉపయోగించే డబ్బు.
            </p>

          </div>

        </section>

        <section className="links">

          <Link href="/countries">
            🚩 Countries
          </Link>

          <Link href="/capitals">
            🏛️ Capitals
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
              #fff0c7,
              #e4f5ff,
              #e9ddff
            );
        }

        .money {
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

        .symbols {
          margin-top: 20px;
          font-size: 35px;
          font-weight: bold;
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
          border-color: #ffb347;
        }

        .searchBox p {
          color: #777;
        }

        .currencyGrid {
          max-width: 1100px;
          margin: 25px auto 50px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 16px;
        }

        .currencyCard {
          text-align: center;
          padding: 25px 15px;
          border-radius: 25px;
          background: white;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .currencyCard:hover {
          transform: translateY(-6px);
        }

        .flag {
          font-size: 55px;
        }

        .currencyCard h2 {
          font-size: 19px;
          margin: 10px 0;
        }

        .symbol {
          width: 65px;
          height: 65px;
          margin: 10px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff0c7;
          font-size: 28px;
          font-weight: bold;
        }

        .currencyCard h3 {
          font-size: 16px;
          color: #666;
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
              #e8e0ff,
              #dff7ff
            );
          box-shadow:
            0 8px 30px rgba(0,0,0,.08);
        }

        .quizTop {
          display: flex;
          justify-content: space-between;
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
          padding: 20px 40px;
          border-radius: 25px;
          background: white;
        }

        .questionFlag {
          font-size: 75px;
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
          background: #fff0d6;
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

          .currencyGrid {
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

          .currencyGrid {
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

          .hero h1 {
            font-size: 31px;
          }

          .money {
            font-size: 70px;
          }

          .symbols {
            font-size: 26px;
          }

          .currencyGrid {
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
