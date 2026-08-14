import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const countries = [
  {
    name: "India",
    flag: "🇮🇳",
    capital: "New Delhi",
    currency: "Indian Rupee",
    symbol: "₹",
    continent: "Asia",
    place: "Taj Mahal",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    capital: "Washington, D.C.",
    currency: "US Dollar",
    symbol: "$",
    continent: "North America",
    place: "Statue of Liberty",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    capital: "London",
    currency: "Pound Sterling",
    symbol: "£",
    continent: "Europe",
    place: "Big Ben",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    capital: "Tokyo",
    currency: "Japanese Yen",
    symbol: "¥",
    continent: "Asia",
    place: "Mount Fuji",
  },
  {
    name: "China",
    flag: "🇨🇳",
    capital: "Beijing",
    currency: "Chinese Yuan",
    symbol: "¥",
    continent: "Asia",
    place: "Great Wall of China",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    capital: "Canberra",
    currency: "Australian Dollar",
    symbol: "$",
    continent: "Oceania",
    place: "Sydney Opera House",
  },
  {
    name: "France",
    flag: "🇫🇷",
    capital: "Paris",
    currency: "Euro",
    symbol: "€",
    continent: "Europe",
    place: "Eiffel Tower",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    capital: "Berlin",
    currency: "Euro",
    symbol: "€",
    continent: "Europe",
    place: "Brandenburg Gate",
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    capital: "Rome",
    currency: "Euro",
    symbol: "€",
    continent: "Europe",
    place: "Colosseum",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    capital: "Ottawa",
    currency: "Canadian Dollar",
    symbol: "$",
    continent: "North America",
    place: "Niagara Falls",
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    capital: "Brasília",
    currency: "Brazilian Real",
    symbol: "R$",
    continent: "South America",
    place: "Christ the Redeemer",
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    capital: "Pretoria",
    currency: "South African Rand",
    symbol: "R",
    continent: "Africa",
    place: "Table Mountain",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    capital: "Seoul",
    currency: "South Korean Won",
    symbol: "₩",
    continent: "Asia",
    place: "Gyeongbokgung Palace",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    capital: "Singapore",
    currency: "Singapore Dollar",
    symbol: "$",
    continent: "Asia",
    place: "Marina Bay Sands",
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    currency: "UAE Dirham",
    symbol: "د.إ",
    continent: "Asia",
    place: "Burj Khalifa",
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    capital: "Cairo",
    currency: "Egyptian Pound",
    symbol: "£",
    continent: "Africa",
    place: "Pyramids of Giza",
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    capital: "Athens",
    currency: "Euro",
    symbol: "€",
    continent: "Europe",
    place: "Acropolis",
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
    capital: "Mexico City",
    currency: "Mexican Peso",
    symbol: "$",
    continent: "North America",
    place: "Chichen Itza",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    capital: "Wellington",
    currency: "New Zealand Dollar",
    symbol: "$",
    continent: "Oceania",
    place: "Milford Sound",
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    capital: "Bern",
    currency: "Swiss Franc",
    symbol: "CHF",
    continent: "Europe",
    place: "Matterhorn",
  },
];

export default function Countries() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = countries[selected];
  const quizCountry = countries[quizIndex];

  function selectCountry(index) {
    setSelected(index);
    setMessage("");
  }

  function answerQuiz(name) {
    if (name === quizCountry.name) {
      setScore((value) => value + 1);
      setMessage("🎉 Correct! Amazing!");
    } else {
      setMessage(
        `😊 Try again! The answer is ${quizCountry.name}.`
      );
    }
  }

  function nextQuiz() {
    const next =
      (quizIndex + 1) % countries.length;

    setQuizIndex(next);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Countries & Flags | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn countries, flags, capitals, currencies, continents and famous places with Chinnaari Kids."
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
            <Link href="/">
              Home
            </Link>

            <Link href="/world-explorer">
              🌍 World Explorer
            </Link>

            <Link href="/numbers">
              🔢 Numbers
            </Link>

            <Link href="/abc">
              🔤 ABC
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroFlags">
            🇮🇳 🇺🇸 🇬🇧 🇯🇵 🇫🇷
          </div>

          <h1>
            🚩 Countries & Flags
          </h1>

          <p>
            Explore countries, flags, capitals,
            currencies and amazing places!
          </p>

          <div className="badge">
            🌍 Learn About The World
          </div>

        </section>

        {/* SEARCH */}

        <section className="searchSection">

          <input
            type="text"
            placeholder="🔍 Search a country..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <p>
            Showing {filteredCountries.length} countries
          </p>

        </section>

        {/* COUNTRY CARDS */}

        <section className="countryGrid">

          {filteredCountries.map((country) => {

            const originalIndex =
              countries.findIndex(
                (item) =>
                  item.name === country.name
              );

            return (
              <button
                key={country.name}
                className={
                  selected === originalIndex
                    ? "countryCard selected"
                    : "countryCard"
                }
                onClick={() =>
                  selectCountry(originalIndex)
                }
              >

                <div className="flag">
                  {country.flag}
                </div>

                <h2>
                  {country.name}
                </h2>

                <p>
                  🏛️ {country.capital}
                </p>

                <span>
                  🌎 {country.continent}
                </span>

              </button>
            );
          })}

        </section>

        {/* COUNTRY DETAILS */}

        <section className="details">

          <div className="largeFlag">
            {current.flag}
          </div>

          <div className="detailsContent">

            <h2>
              {current.name}
            </h2>

            <div className="infoGrid">

              <div className="info">
                <span>🏛️</span>
                <strong>Capital</strong>
                <p>{current.capital}</p>
              </div>

              <div className="info">
                <span>💰</span>
                <strong>Currency</strong>
                <p>
                  {current.currency}
                  <br />
                  {current.symbol}
                </p>
              </div>

              <div className="info">
                <span>🌎</span>
                <strong>Continent</strong>
                <p>{current.continent}</p>
              </div>

              <div className="info">
                <span>⭐</span>
                <strong>Famous Place</strong>
                <p>{current.place}</p>
              </div>

            </div>

          </div>

        </section>

        {/* QUIZ */}

        <section className="quiz">

          <div className="quizHeader">

            <span>
              🧠 Flag Quiz
            </span>

            <span>
              ⭐ Score: {score}
            </span>

          </div>

          <h2>
            Which country has this flag?
          </h2>

          <div className="quizFlag">
            {quizCountry.flag}
          </div>

          <div className="quizOptions">

            {countries
              .slice(
                quizIndex % 4,
                (quizIndex % 4) + 4
              )
              .map((country) => (

                <button
                  key={country.name}
                  onClick={() =>
                    answerQuiz(country.name)
                  }
                >
                  {country.name}
                </button>

              ))}

          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

          <button
            className="nextButton"
            onClick={nextQuiz}
          >
            Next Question ➡️
          </button>

        </section>

        {/* FUN FACT */}

        <section className="fact">

          <div>
            🌍
          </div>

          <h2>
            Explore More!
          </h2>

          <p>
            Every country has its own flag,
            culture, language, food and traditions.
          </p>

          <Link
            href="/world-explorer"
            className="backButton"
          >
            🌎 Back to World Explorer
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
              #ffe1eb,
              #e0f3ff,
              #eee4ff
            );
        }

        .heroFlags {
          font-size: 50px;
          letter-spacing: 8px;
        }

        .hero h1 {
          font-size: 45px;
          margin: 18px 0 10px;
        }

        .hero p {
          font-size: 18px;
          color: #555;
          line-height: 1.7;
        }

        .badge {
          display: inline-block;
          padding: 10px 18px;
          background: white;
          border-radius: 25px;
          font-weight: bold;
        }

        .searchSection {
          max-width: 800px;
          margin: 35px auto 15px;
          padding: 0 20px;
          text-align: center;
        }

        .searchSection input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #ddd;
          border-radius: 30px;
          outline: none;
          font-size: 16px;
          background: white;
        }

        .searchSection input:focus {
          border-color: #ff8a8a;
        }

        .searchSection p {
          color: #777;
        }

        .countryGrid {
          max-width: 1100px;
          margin: 25px auto 45px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 15px;
        }

        .countryCard {
          border: 3px solid transparent;
          padding: 22px 10px;
          border-radius: 25px;
          background: white;
          cursor: pointer;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .countryCard:hover {
          transform: translateY(-5px);
        }

        .countryCard.selected {
          border-color: #ff6b6b;
          transform: translateY(-5px);
        }

        .flag {
          font-size: 60px;
        }

        .countryCard h2 {
          font-size: 19px;
          margin: 10px 0 8px;
        }

        .countryCard p {
          color: #666;
          margin: 5px;
        }

        .countryCard span {
          display: inline-block;
          margin-top: 8px;
          padding: 5px 10px;
          background: #f1f1f1;
          border-radius: 15px;
          font-size: 12px;
        }

        .details {
          max-width: 1000px;
          margin: 20px auto 55px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 45px;
          background: white;
          border-radius: 32px;
          box-shadow:
            0 8px 30px rgba(0,0,0,.08);
        }

        .largeFlag {
          font-size: 125px;
          min-width: 180px;
          text-align: center;
        }

        .detailsContent {
          flex: 1;
        }

        .detailsContent h2 {
          font-size: 35px;
          margin-top: 0;
        }

        .infoGrid {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 12px;
        }

        .info {
          padding: 15px;
          border-radius: 18px;
          background: #f7f7f7;
        }

        .info span {
          font-size: 25px;
        }

        .info strong {
          display: block;
          margin-top: 5px;
        }

        .info p {
          margin-bottom: 0;
          color: #666;
          line-height: 1.5;
        }

        .quiz {
          max-width: 900px;
          margin: 20px auto 55px;
          padding: 35px 25px;
          text-align: center;
          border-radius: 32px;
          background:
            linear-gradient(
              135deg,
              #e8e0ff,
              #dff5ff
            );
          box-shadow:
            0 8px 30px rgba(0,0,0,.08);
        }

        .quizHeader {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .quizHeader span {
          padding: 9px 15px;
          border-radius: 20px;
          background: white;
          font-weight: bold;
        }

        .quiz h2 {
          font-size: 28px;
        }

        .quizFlag {
          font-size: 105px;
          margin: 20px;
        }

        .quizOptions {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 12px;
          max-width: 600px;
          margin: auto;
        }

        .quizOptions button {
          border: none;
          padding: 15px;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          font-weight: bold;
          font-size: 15px;
        }

        .quizOptions button:hover {
          background: #ffebeb;
        }

        .message {
          margin: 20px;
          font-size: 18px;
          font-weight: bold;
        }

        .nextButton {
          border: none;
          padding: 13px 22px;
          border-radius: 25px;
          background: #4caf50;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .fact {
          max-width: 800px;
          margin: 30px auto 55px;
          padding: 40px 25px;
          text-align: center;
          background: white;
          border-radius: 30px;
          box-shadow:
            0 6px 25px rgba(0,0,0,.07);
        }

        .fact > div {
          font-size: 65px;
        }

        .fact h2 {
          font-size: 28px;
        }

        .fact p {
          color: #666;
          line-height: 1.7;
        }

        .backButton {
          display: inline-block;
          margin-top: 10px;
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

          .countryGrid {
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

          .details {
            margin-left: 15px;
            margin-right: 15px;
            padding: 30px 20px;
            flex-direction: column;
            text-align: center;
          }

          .infoGrid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 550px) {

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .countryGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .heroFlags {
            font-size: 35px;
            letter-spacing: 3px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .flag {
            font-size: 48px;
          }

          .quizOptions {
            grid-template-columns: 1fr;
          }

          .quizFlag {
            font-size: 80px;
          }

        }

      `}</style>
    </>
  );
      }
