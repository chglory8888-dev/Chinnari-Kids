import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const states = [
  {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    symbol: "🌾",
    place: "Tirumala",
  },
  {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    symbol: "🏔️",
    place: "Tawang Monastery",
  },
  {
    name: "Assam",
    capital: "Dispur",
    symbol: "🦏",
    place: "Kaziranga National Park",
  },
  {
    name: "Bihar",
    capital: "Patna",
    symbol: "🏛️",
    place: "Mahabodhi Temple",
  },
  {
    name: "Chhattisgarh",
    capital: "Raipur",
    symbol: "🌳",
    place: "Chitrakote Falls",
  },
  {
    name: "Goa",
    capital: "Panaji",
    symbol: "🏖️",
    place: "Baga Beach",
  },
  {
    name: "Gujarat",
    capital: "Gandhinagar",
    symbol: "🦁",
    place: "Statue of Unity",
  },
  {
    name: "Haryana",
    capital: "Chandigarh",
    symbol: "🌾",
    place: "Sultanpur National Park",
  },
  {
    name: "Himachal Pradesh",
    capital: "Shimla",
    symbol: "🏔️",
    place: "Rohtang Pass",
  },
  {
    name: "Jharkhand",
    capital: "Ranchi",
    symbol: "🌲",
    place: "Hundru Falls",
  },
  {
    name: "Karnataka",
    capital: "Bengaluru",
    symbol: "🏰",
    place: "Mysore Palace",
  },
  {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    symbol: "🌴",
    place: "Alappuzha Backwaters",
  },
  {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    symbol: "🐯",
    place: "Khajuraho",
  },
  {
    name: "Maharashtra",
    capital: "Mumbai",
    symbol: "🏙️",
    place: "Gateway of India",
  },
  {
    name: "Manipur",
    capital: "Imphal",
    symbol: "🌺",
    place: "Loktak Lake",
  },
  {
    name: "Meghalaya",
    capital: "Shillong",
    symbol: "🌧️",
    place: "Living Root Bridges",
  },
  {
    name: "Mizoram",
    capital: "Aizawl",
    symbol: "⛰️",
    place: "Phawngpui",
  },
  {
    name: "Nagaland",
    capital: "Kohima",
    symbol: "🪶",
    place: "Dzukou Valley",
  },
  {
    name: "Odisha",
    capital: "Bhubaneswar",
    symbol: "🛕",
    place: "Konark Sun Temple",
  },
  {
    name: "Punjab",
    capital: "Chandigarh",
    symbol: "🌾",
    place: "Golden Temple",
  },
  {
    name: "Rajasthan",
    capital: "Jaipur",
    symbol: "🏰",
    place: "Hawa Mahal",
  },
  {
    name: "Sikkim",
    capital: "Gangtok",
    symbol: "🏔️",
    place: "Nathula Pass",
  },
  {
    name: "Tamil Nadu",
    capital: "Chennai",
    symbol: "🛕",
    place: "Meenakshi Temple",
  },
  {
    name: "Telangana",
    capital: "Hyderabad",
    symbol: "🏙️",
    place: "Charminar",
  },
  {
    name: "Tripura",
    capital: "Agartala",
    symbol: "🌳",
    place: "Ujjayanta Palace",
  },
  {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    symbol: "🕌",
    place: "Taj Mahal",
  },
  {
    name: "Uttarakhand",
    capital: "Dehradun",
    symbol: "🏔️",
    place: "Valley of Flowers",
  },
  {
    name: "West Bengal",
    capital: "Kolkata",
    symbol: "🐅",
    place: "Victoria Memorial",
  },
];

export default function IndianStates() {
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const filtered = states.filter((state) =>
    `${state.name} ${state.capital} ${state.place}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = states[question];

  function checkAnswer(answer) {
    if (answer === current.capital) {
      setScore((old) => old + 1);
      setMessage("🎉 Correct! Super!");
    } else {
      setMessage(`😊 Correct answer: ${current.capital}`);
    }
  }

  function nextQuestion() {
    setQuestion(
      (old) => (old + 1) % states.length
    );
    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Indian States & Capitals | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn Indian states, capitals and famous places with fun quizzes for kids."
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

            <Link href="/countries">
              🌍 Countries
            </Link>

            <Link href="/capitals">
              🏛️ Capitals
            </Link>

            <Link href="/currencies">
              💰 Currencies
            </Link>

            <Link href="/world-explorer">
              🌎 Explorer
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="india">
            🇮🇳
          </div>

          <h1>
            Indian States
          </h1>

          <p>
            Learn states, capitals and famous places
            of India!
          </p>

          <div className="miniFlags">
            🏔️ 🌴 🏖️ 🏰 🌾 🐯
          </div>

        </section>

        {/* SEARCH */}

        <section className="searchBox">

          <input
            type="text"
            placeholder="🔍 Search state, capital or place..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <p>
            Showing {filtered.length} states
          </p>

        </section>

        {/* STATES */}

        <section className="stateGrid">

          {filtered.map((state) => (

            <div
              className="stateCard"
              key={state.name}
            >

              <div className="stateIcon">
                {state.symbol}
              </div>

              <h2>
                {state.name}
              </h2>

              <div className="capital">
                🏛️ {state.capital}
              </div>

              <div className="place">
                ⭐ {state.place}
              </div>

            </div>

          ))}

        </section>

        {/* QUIZ */}

        <section className="quiz">

          <div className="quizTop">

            <span>
              🧠 State Capital Quiz
            </span>

            <span>
              ⭐ Score: {score}
            </span>

          </div>

          <h2>
            What is the capital of this state?
          </h2>

          <div className="question">

            <div>
              🇮🇳
            </div>

            <h2>
              {current.name}
            </h2>

            <p>
              {current.symbol} {current.place}
            </p>

          </div>

          <div className="answers">

            {[
              current.capital,
              states[
                (question + 1) % states.length
              ].capital,
              states[
                (question + 2) % states.length
              ].capital,
              states[
                (question + 3) % states.length
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

        {/* LEARNING */}

        <section className="learning">

          <div className="learningIcon">
            🇮🇳
          </div>

          <div>

            <h2>
              Learn About India
            </h2>

            <p>
              India has 28 states and 8 Union Territories.
              Each state has its own culture, traditions,
              food and famous places.
            </p>

            <p className="telugu">
              భారతదేశంలో 28 రాష్ట్రాలు మరియు
              8 కేంద్ర పాలిత ప్రాంతాలు ఉన్నాయి.
            </p>

          </div>

        </section>

        {/* LINKS */}

        <section className="links">

          <Link href="/countries">
            🌍 Countries
          </Link>

          <Link href="/capitals">
            🏛️ World Capitals
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
              #ffe2e2,
              #e0f5ff,
              #fff0c8
            );
        }

        .india {
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

        .miniFlags {
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
          border-color: #ff8a8a;
        }

        .searchBox p {
          color: #777;
        }

        .stateGrid {
          max-width: 1100px;
          margin: 25px auto 50px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 16px;
        }

        .stateCard {
          padding: 25px 15px;
          text-align: center;
          background: white;
          border-radius: 25px;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .stateCard:hover {
          transform: translateY(-6px);
        }

        .stateIcon {
          font-size: 50px;
        }

        .stateCard h2 {
          font-size: 18px;
          margin: 12px 0;
        }

        .capital {
          padding: 10px;
          border-radius: 15px;
          background: #eaf4ff;
          font-weight: bold;
        }

        .place {
          margin-top: 10px;
          color: #666;
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
              #fff0d4,
              #e7e0ff
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
          padding: 20px 45px;
          border-radius: 25px;
          background: white;
        }

        .question > div {
          font-size: 60px;
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
          background: #fff0e0;
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

        @media (max-width: 900px) {

          .stateGrid {
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

          .stateGrid {
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

          .india {
            font-size: 70px;
          }

          .miniFlags {
            font-size: 27px;
            letter-spacing: 2px;
          }

          .stateGrid {
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
