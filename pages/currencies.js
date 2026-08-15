import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const currencies = [
  { country: "India", flag: "🇮🇳", currency: "Indian Rupee", code: "INR", symbol: "₹", capital: "New Delhi" },
  { country: "United States", flag: "🇺🇸", currency: "US Dollar", code: "USD", symbol: "$", capital: "Washington, D.C." },
  { country: "United Kingdom", flag: "🇬🇧", currency: "Pound Sterling", code: "GBP", symbol: "£", capital: "London" },
  { country: "Japan", flag: "🇯🇵", currency: "Japanese Yen", code: "JPY", symbol: "¥", capital: "Tokyo" },
  { country: "China", flag: "🇨🇳", currency: "Chinese Yuan", code: "CNY", symbol: "¥", capital: "Beijing" },
  { country: "Australia", flag: "🇦🇺", currency: "Australian Dollar", code: "AUD", symbol: "$", capital: "Canberra" },
  { country: "Canada", flag: "🇨🇦", currency: "Canadian Dollar", code: "CAD", symbol: "$", capital: "Ottawa" },
  { country: "France", flag: "🇫🇷", currency: "Euro", code: "EUR", symbol: "€", capital: "Paris" },
  { country: "Germany", flag: "🇩🇪", currency: "Euro", code: "EUR", symbol: "€", capital: "Berlin" },
  { country: "Italy", flag: "🇮🇹", currency: "Euro", code: "EUR", symbol: "€", capital: "Rome" },
  { country: "Spain", flag: "🇪🇸", currency: "Euro", code: "EUR", symbol: "€", capital: "Madrid" },
  { country: "Brazil", flag: "🇧🇷", currency: "Brazilian Real", code: "BRL", symbol: "R$", capital: "Brasília" },
  { country: "South Korea", flag: "🇰🇷", currency: "South Korean Won", code: "KRW", symbol: "₩", capital: "Seoul" },
  { country: "Singapore", flag: "🇸🇬", currency: "Singapore Dollar", code: "SGD", symbol: "$", capital: "Singapore" },
  { country: "Thailand", flag: "🇹🇭", currency: "Thai Baht", code: "THB", symbol: "฿", capital: "Bangkok" },
  { country: "Malaysia", flag: "🇲🇾", currency: "Malaysian Ringgit", code: "MYR", symbol: "RM", capital: "Kuala Lumpur" },
  { country: "Indonesia", flag: "🇮🇩", currency: "Indonesian Rupiah", code: "IDR", symbol: "Rp", capital: "Jakarta" },
  { country: "Nepal", flag: "🇳🇵", currency: "Nepalese Rupee", code: "NPR", symbol: "रू", capital: "Kathmandu" },
  { country: "Sri Lanka", flag: "🇱🇰", currency: "Sri Lankan Rupee", code: "LKR", symbol: "Rs", capital: "Sri Jayawardenepura Kotte" },
  { country: "UAE", flag: "🇦🇪", currency: "UAE Dirham", code: "AED", symbol: "د.إ", capital: "Abu Dhabi" },
  { country: "Saudi Arabia", flag: "🇸🇦", currency: "Saudi Riyal", code: "SAR", symbol: "﷼", capital: "Riyadh" },
  { country: "South Africa", flag: "🇿🇦", currency: "South African Rand", code: "ZAR", symbol: "R", capital: "Pretoria" },
  { country: "Egypt", flag: "🇪🇬", currency: "Egyptian Pound", code: "EGP", symbol: "£", capital: "Cairo" },
  { country: "Switzerland", flag: "🇨🇭", currency: "Swiss Franc", code: "CHF", symbol: "CHF", capital: "Bern" },
  { country: "Russia", flag: "🇷🇺", currency: "Russian Ruble", code: "RUB", symbol: "₽", capital: "Moscow" },
  { country: "Turkey", flag: "🇹🇷", currency: "Turkish Lira", code: "TRY", symbol: "₺", capital: "Ankara" },
  { country: "Mexico", flag: "🇲🇽", currency: "Mexican Peso", code: "MXN", symbol: "$", capital: "Mexico City" },
  { country: "Argentina", flag: "🇦🇷", currency: "Argentine Peso", code: "ARS", symbol: "$", capital: "Buenos Aires" },
  { country: "New Zealand", flag: "🇳🇿", currency: "New Zealand Dollar", code: "NZD", symbol: "$", capital: "Wellington" },
  { country: "Vietnam", flag: "🇻🇳", currency: "Vietnamese Dong", code: "VND", symbol: "₫", capital: "Hanoi" },
];

export default function Currencies() {
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const filtered = currencies.filter((item) =>
    `${item.country} ${item.currency} ${item.code}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = currencies[question];

  function checkAnswer(answer) {
    if (answer === current.currency) {
      setScore((old) => old + 1);
      setMessage("🎉 Correct! Excellent!");
    } else {
      setMessage(`😊 Correct answer: ${current.currency}`);
    }
  }

  function nextQuestion() {
    setQuestion((old) => (old + 1) % currencies.length);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Currencies of the World | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn world currencies, currency symbols and codes with fun quizzes for kids."
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
            <Link href="/capitals">🏛️ Capitals</Link>
            <Link href="/famous-places">🗺️ Places</Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroIcon">💰</div>

          <h1>
            Currencies of the World
          </h1>

          <p>
            Learn countries, currencies, symbols and codes!
          </p>

          <div className="moneyIcons">
            ₹ $ € £ ¥ ₩ ₽ ₺
          </div>

        </section>

        <section className="searchBox">

          <input
            type="text"
            placeholder="🔍 Search country, currency or code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

              <div className="currencyName">
                💰 {item.currency}
              </div>

              <div className="code">
                Code: {item.code}
              </div>

              <div className="capital">
                🏛️ {item.capital}
              </div>

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
            What is the currency of this country?
          </h2>

          <div className="question">

            <div className="bigFlag">
              {current.flag}
            </div>

            <h2>
              {current.country}
            </h2>

            <div className="bigSymbol">
              {current.symbol}
            </div>

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
              .filter(
                (answer, index, array) =>
                  array.indexOf(answer) === index
              )
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

        <section className="learning">

          <div className="learningIcon">
            💰
          </div>

          <div>

            <h2>
              What is Currency?
            </h2>

            <p>
              Currency is the money used by people
              in a country to buy things and services.
            </p>

            <p className="telugu">
              ఒక దేశంలో వస్తువులు మరియు సేవలను
              కొనడానికి ఉపయోగించే డబ్బును
              కరెన్సీ అంటారు.
            </p>

          </div>

        </section>

        <section className="links">

          <Link href="/countries">
            🌍 Countries
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
              #fff1c9,
              #e4f4ff,
              #eee2ff
            );
        }

        .heroIcon {
          font-size: 90px;
        }

        .hero h1 {
          font-size: 43px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .moneyIcons {
          margin-top: 20px;
          font-size: 38px;
          letter-spacing: 7px;
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
          border-color: #ffc65c;
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
          gap: 17px;
        }

        .currencyCard {
          background: white;
          padding: 23px 15px;
          text-align: center;
          border-radius: 25px;
          box-shadow: 0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .currencyCard:hover {
          transform: translateY(-6px);
        }

        .flag {
          font-size: 55px;
        }

        .currencyCard h2 {
          font-size: 18px;
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
          background: #fff1c9;
          font-size: 28px;
          font-weight: bold;
        }

        .currencyName {
          padding: 10px;
          border-radius: 15px;
          background: #e8f5ff;
          font-size: 13px;
          font-weight: bold;
        }

        .code {
          margin-top: 9px;
          font-size: 13px;
          color: #777;
        }

        .capital {
          margin-top: 8px;
          font-size: 12px;
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
              #fff0c9,
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
          font-size: 80px;
        }

        .bigSymbol {
          font-size: 45px;
          font-weight: bold;
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
            font-size: 35px;
          }

          .currencyGrid {
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
            font-size: 30px;
          }

          .heroIcon {
            font-size: 70px;
          }

          .moneyIcons {
            font-size: 27px;
            letter-spacing: 3px;
          }

          .currencyGrid {
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
