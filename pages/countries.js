import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const countries = [
  { name: "India", flag: "🇮🇳", capital: "New Delhi", currency: "Indian Rupee", continent: "Asia" },
  { name: "United States", flag: "🇺🇸", capital: "Washington, D.C.", currency: "US Dollar", continent: "North America" },
  { name: "United Kingdom", flag: "🇬🇧", capital: "London", currency: "Pound Sterling", continent: "Europe" },
  { name: "Japan", flag: "🇯🇵", capital: "Tokyo", currency: "Japanese Yen", continent: "Asia" },
  { name: "China", flag: "🇨🇳", capital: "Beijing", currency: "Chinese Yuan", continent: "Asia" },
  { name: "Australia", flag: "🇦🇺", capital: "Canberra", currency: "Australian Dollar", continent: "Oceania" },
  { name: "Canada", flag: "🇨🇦", capital: "Ottawa", currency: "Canadian Dollar", continent: "North America" },
  { name: "France", flag: "🇫🇷", capital: "Paris", currency: "Euro", continent: "Europe" },
  { name: "Germany", flag: "🇩🇪", capital: "Berlin", currency: "Euro", continent: "Europe" },
  { name: "Italy", flag: "🇮🇹", capital: "Rome", currency: "Euro", continent: "Europe" },
  { name: "Spain", flag: "🇪🇸", capital: "Madrid", currency: "Euro", continent: "Europe" },
  { name: "Brazil", flag: "🇧🇷", capital: "Brasília", currency: "Brazilian Real", continent: "South America" },
  { name: "Mexico", flag: "🇲🇽", capital: "Mexico City", currency: "Mexican Peso", continent: "North America" },
  { name: "South Korea", flag: "🇰🇷", capital: "Seoul", currency: "South Korean Won", continent: "Asia" },
  { name: "Singapore", flag: "🇸🇬", capital: "Singapore", currency: "Singapore Dollar", continent: "Asia" },
  { name: "Thailand", flag: "🇹🇭", capital: "Bangkok", currency: "Thai Baht", continent: "Asia" },
  { name: "Malaysia", flag: "🇲🇾", capital: "Kuala Lumpur", currency: "Malaysian Ringgit", continent: "Asia" },
  { name: "Indonesia", flag: "🇮🇩", capital: "Jakarta", currency: "Indonesian Rupiah", continent: "Asia" },
  { name: "Nepal", flag: "🇳🇵", capital: "Kathmandu", currency: "Nepalese Rupee", continent: "Asia" },
  { name: "Sri Lanka", flag: "🇱🇰", capital: "Sri Jayawardenepura Kotte", currency: "Sri Lankan Rupee", continent: "Asia" },
  { name: "United Arab Emirates", flag: "🇦🇪", capital: "Abu Dhabi", currency: "UAE Dirham", continent: "Asia" },
  { name: "Saudi Arabia", flag: "🇸🇦", capital: "Riyadh", currency: "Saudi Riyal", continent: "Asia" },
  { name: "South Africa", flag: "🇿🇦", capital: "Pretoria", currency: "South African Rand", continent: "Africa" },
  { name: "Egypt", flag: "🇪🇬", capital: "Cairo", currency: "Egyptian Pound", continent: "Africa" },
  { name: "Nigeria", flag: "🇳🇬", capital: "Abuja", currency: "Nigerian Naira", continent: "Africa" },
  { name: "Kenya", flag: "🇰🇪", capital: "Nairobi", currency: "Kenyan Shilling", continent: "Africa" },
  { name: "New Zealand", flag: "🇳🇿", capital: "Wellington", currency: "New Zealand Dollar", continent: "Oceania" },
  { name: "Switzerland", flag: "🇨🇭", capital: "Bern", currency: "Swiss Franc", continent: "Europe" },
  { name: "Russia", flag: "🇷🇺", capital: "Moscow", currency: "Russian Ruble", continent: "Europe / Asia" },
  { name: "Greece", flag: "🇬🇷", capital: "Athens", currency: "Euro", continent: "Europe" },
  { name: "Turkey", flag: "🇹🇷", capital: "Ankara", currency: "Turkish Lira", continent: "Europe / Asia" },
  { name: "Argentina", flag: "🇦🇷", capital: "Buenos Aires", currency: "Argentine Peso", continent: "South America" },
  { name: "Chile", flag: "🇨🇱", capital: "Santiago", currency: "Chilean Peso", continent: "South America" },
  { name: "Peru", flag: "🇵🇪", capital: "Lima", currency: "Peruvian Sol", continent: "South America" },
  { name: "Colombia", flag: "🇨🇴", capital: "Bogotá", currency: "Colombian Peso", continent: "South America" },
];

export default function Countries() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("All");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const continents = [
    "All",
    "Asia",
    "Europe",
    "Africa",
    "North America",
    "South America",
    "Oceania",
  ];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      `${country.name} ${country.capital} ${country.currency}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesContinent =
      continent === "All" ||
      country.continent.includes(continent);

    return matchesSearch && matchesContinent;
  });

  const current = countries[question];

  function checkAnswer(answer) {
    if (answer === current.name) {
      setScore((old) => old + 1);
      setMessage("🎉 Correct! Excellent!");
    } else {
      setMessage(`😊 Correct answer: ${current.name}`);
    }
  }

  function nextQuestion() {
    setQuestion((old) => (old + 1) % countries.length);
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Countries & Flags | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn countries, flags, capitals, currencies and continents with fun quizzes for kids."
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

            <Link href="/indian-states">
              🇮🇳 States
            </Link>

            <Link href="/capitals">
              🏛️ Capitals
            </Link>

            <Link href="/currencies">
              💰 Currencies
            </Link>

            <Link href="/famous-places">
              🗺️ Places
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="worldIcon">
            🌍
          </div>

          <h1>
            Countries of the World
          </h1>

          <p>
            Learn country names, flags, capitals
            and currencies!
          </p>

          <div className="flags">
            🇮🇳 🇺🇸 🇬🇧 🇯🇵 🇫🇷 🇦🇺 🇧🇷
          </div>

        </section>

        {/* SEARCH */}

        <section className="searchArea">

          <input
            type="text"
            placeholder="🔍 Search country, capital or currency..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filters">

            {continents.map((item) => (
              <button
                key={item}
                className={
                  continent === item
                    ? "active"
                    : ""
                }
                onClick={() => setContinent(item)}
              >
                {item === "All" && "🌍 "}
                {item === "Asia" && "🌏 "}
                {item === "Europe" && "🇪🇺 "}
                {item === "Africa" && "🌍 "}
                {item === "North America" && "🌎 "}
                {item === "South America" && "🌎 "}
                {item === "Oceania" && "🌊 "}
                {item}
              </button>
            ))}

          </div>

          <p>
            Showing {filteredCountries.length} countries
          </p>

        </section>

        {/* COUNTRY CARDS */}

        <section className="countryGrid">

          {filteredCountries.map((country) => (

            <div
              className="countryCard"
              key={country.name}
            >

              <div className="flag">
                {country.flag}
              </div>

              <h2>
                {country.name}
              </h2>

              <div className="info capital">
                🏛️ {country.capital}
              </div>

              <div className="info currency">
                💰 {country.currency}
              </div>

              <div className="continentText">
                🌍 {country.continent}
              </div>

            </div>

          ))}

        </section>

        {/* QUIZ */}

        <section className="quiz">

          <div className="quizTop">

            <span>
              🧠 Country Quiz
            </span>

            <span>
              ⭐ Score: {score}
            </span>

          </div>

          <h2>
            Which country has this flag?
          </h2>

          <div className="question">

            <div className="bigFlag">
              {current.flag}
            </div>

            <p>
              Look carefully at the flag!
            </p>

          </div>

          <div className="answers">

            {[
              current.name,
              countries[
                (question + 1) % countries.length
              ].name,
              countries[
                (question + 2) % countries.length
              ].name,
              countries[
                (question + 3) % countries.length
              ].name,
            ]
              .filter(
                (answer, index, array) =>
                  array.indexOf(answer) === index
              )
              .sort(() => Math.random() - 0.5)
              .map((answer) => (

                <button
                  key={answer}
                  onClick={() => checkAnswer(answer)}
                >
                  🌍 {answer}
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

        {/* LEARNING */}

        <section className="learning">

          <div className="learningIcon">
            🌍
          </div>

          <div>

            <h2>
              Let's Explore the World!
            </h2>

            <p>
              Every country has its own flag,
              language, culture, food and traditions.
              Learning about countries helps us
              understand our amazing world.
            </p>

            <p className="telugu">
              ప్రతి దేశానికి ప్రత్యేకమైన జెండా,
              సంస్కృతి, ఆహారం మరియు సంప్రదాయాలు
              ఉంటాయి.
            </p>

          </div>

        </section>

        {/* LINKS */}

        <section className="links">

          <Link href="/indian-states">
            🇮🇳 Indian States
          </Link>

          <Link href="/capitals">
            🏛️ Capitals
          </Link>

          <Link href="/currencies">
            💰 Currencies
          </Link>

          <Link href="/famous-places">
            🗺️ Famous Places
          </Link>

          <Link href="/world-quiz">
            🧠 World Quiz
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
              #dff6ff,
              #eee4ff,
              #fff0c8
            );
        }

        .worldIcon {
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

        .flags {
          margin-top: 20px;
          font-size: 35px;
          letter-spacing: 5px;
        }

        .searchArea {
          max-width: 1000px;
          margin: 35px auto 20px;
          padding: 0 20px;
          text-align: center;
        }

        .searchArea input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #ddd;
          border-radius: 30px;
          outline: none;
          font-size: 16px;
          background: white;
        }

        .searchArea input:focus {
          border-color: #8ecfff;
        }

        .filters {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 18px 0;
        }

        .filters button {
          border: none;
          padding: 10px 15px;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          font-weight: bold;
        }

        .filters button:hover,
        .filters button.active {
          background: #333;
          color: white;
        }

        .searchArea p {
          color: #777;
        }

        .countryGrid {
          max-width: 1100px;
          margin: 25px auto 50px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 16px;
        }

        .countryCard {
          padding: 25px 15px;
          text-align: center;
          background: white;
          border-radius: 25px;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .countryCard:hover {
          transform: translateY(-6px);
        }

        .flag {
          font-size: 65px;
        }

        .countryCard h2 {
          font-size: 19px;
          margin: 12px 0;
        }

        .info {
          padding: 9px;
          margin-top: 8px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: bold;
        }

        .capital {
          background: #e6f4ff;
        }

        .currency {
          background: #fff0ce;
        }

        .continentText {
          margin-top: 12px;
          font-size: 13px;
          color: #777;
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
              #ffe4ed,
              #e5e0ff
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
          font-size: 27px;
        }

        .question {
          display: inline-block;
          padding: 25px 55px;
          border-radius: 25px;
          background: white;
        }

        .bigFlag {
          font-size: 100px;
        }

        .question p {
          color: #777;
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
          box-shadow:
            0 6px 20px rgba(0,0,0,.06);
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

        @media (max-width: 950px) {

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

          .countryGrid {
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

          .worldIcon {
            font-size: 70px;
          }

          .flags {
            font-size: 26px;
            letter-spacing: 2px;
          }

          .countryGrid {
            grid-template-columns: 1fr;
          }

          .answers {
            grid-template-columns: 1fr;
          }

          .question {
            width: 100%;
            padding: 25px 20px;
          }

        }

      `}</style>
    </>
  );
                  }
