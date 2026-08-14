import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const places = [
  {
    name: "Taj Mahal",
    country: "India",
    location: "Agra, Uttar Pradesh",
    image: "🕌",
  },
  {
    name: "Eiffel Tower",
    country: "France",
    location: "Paris",
    image: "🗼",
  },
  {
    name: "Great Wall of China",
    country: "China",
    location: "China",
    image: "🏯",
  },
  {
    name: "Statue of Liberty",
    country: "United States",
    location: "New York",
    image: "🗽",
  },
  {
    name: "Sydney Opera House",
    country: "Australia",
    location: "Sydney",
    image: "🏛️",
  },
  {
    name: "Burj Khalifa",
    country: "United Arab Emirates",
    location: "Dubai",
    image: "🏙️",
  },
  {
    name: "Colosseum",
    country: "Italy",
    location: "Rome",
    image: "🏟️",
  },
  {
    name: "Pyramids of Giza",
    country: "Egypt",
    location: "Giza",
    image: "🔺",
  },
  {
    name: "Christ the Redeemer",
    country: "Brazil",
    location: "Rio de Janeiro",
    image: "🗿",
  },
  {
    name: "Mount Everest",
    country: "Nepal",
    location: "Himalayas",
    image: "🏔️",
  },
  {
    name: "Big Ben",
    country: "United Kingdom",
    location: "London",
    image: "🕰️",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    location: "Cusco Region",
    image: "🏔️",
  },
  {
    name: "Leaning Tower of Pisa",
    country: "Italy",
    location: "Pisa",
    image: "🏛️",
  },
  {
    name: "Niagara Falls",
    country: "Canada / United States",
    location: "North America",
    image: "💦",
  },
  {
    name: "Golden Temple",
    country: "India",
    location: "Amritsar, Punjab",
    image: "🛕",
  },
  {
    name: "Gateway of India",
    country: "India",
    location: "Mumbai, Maharashtra",
    image: "🏛️",
  },
  {
    name: "Charminar",
    country: "India",
    location: "Hyderabad, Telangana",
    image: "🕌",
  },
  {
    name: "Mysore Palace",
    country: "India",
    location: "Mysuru, Karnataka",
    image: "🏰",
  },
  {
    name: "Hawa Mahal",
    country: "India",
    location: "Jaipur, Rajasthan",
    image: "🏰",
  },
  {
    name: "Konark Sun Temple",
    country: "India",
    location: "Odisha",
    image: "☀️",
  },
  {
    name: "Meenakshi Temple",
    country: "India",
    location: "Madurai, Tamil Nadu",
    image: "🛕",
  },
  {
    name: "Victoria Memorial",
    country: "India",
    location: "Kolkata, West Bengal",
    image: "🏛️",
  },
  {
    name: "India Gate",
    country: "India",
    location: "New Delhi",
    image: "🇮🇳",
  },
  {
    name: "Red Fort",
    country: "India",
    location: "New Delhi",
    image: "🏰",
  },
];

export default function FamousPlaces() {
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const filteredPlaces = places.filter((place) =>
    `${place.name} ${place.country} ${place.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const current = places[question];

  function checkAnswer(answer) {
    if (answer === current.country) {
      setScore((old) => old + 1);
      setMessage("🎉 Correct! Amazing!");
    } else {
      setMessage(`😊 Correct answer: ${current.country}`);
    }
  }

  function nextQuestion() {
    setQuestion(
      (old) => (old + 1) % places.length
    );

    setMessage("");
  }

  return (
    <>
      <Head>
        <title>Famous Places | Chinnaari Kids</title>

        <meta
          name="description"
          content="Discover famous places around the world and India with fun learning and quizzes for kids."
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

            <Link href="/indian-states">
              🇮🇳 Indian States
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

          <div className="heroIcon">
            🗺️
          </div>

          <h1>
            Famous Places
          </h1>

          <p>
            Explore amazing places from India
            and around the world!
          </p>

          <div className="heroIcons">
            🕌 🗼 🏰 🏔️ 🏯 🗿
          </div>

        </section>

        {/* SEARCH */}

        <section className="searchBox">

          <input
            type="text"
            placeholder="🔍 Search place, country or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <p>
            Showing {filteredPlaces.length} places
          </p>

        </section>

        {/* PLACES */}

        <section className="placesGrid">

          {filteredPlaces.map((place) => (

            <div
              className="placeCard"
              key={place.name}
            >

              <div className="placeImage">
                {place.image}
              </div>

              <h2>
                {place.name}
              </h2>

              <div className="country">
                🌍 {place.country}
              </div>

              <div className="location">
                📍 {place.location}
              </div>

            </div>

          ))}

        </section>

        {/* QUIZ */}

        <section className="quiz">

          <div className="quizHeader">

            <span>
              🧠 Famous Places Quiz
            </span>

            <span>
              ⭐ Score: {score}
            </span>

          </div>

          <h2>
            Which country is this place in?
          </h2>

          <div className="question">

            <div className="questionImage">
              {current.image}
            </div>

            <h2>
              {current.name}
            </h2>

            <p>
              📍 Can you guess the country?
            </p>

          </div>

          <div className="answers">

            {[
              current.country,
              places[
                (question + 1) % places.length
              ].country,
              places[
                (question + 2) % places.length
              ].country,
              places[
                (question + 3) % places.length
              ].country,
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
              Explore Our Amazing World
            </h2>

            <p>
              Our world has beautiful buildings,
              mountains, temples, monuments,
              waterfalls and many wonderful places.
            </p>

            <p className="telugu">
              ప్రపంచంలో ఎన్నో అద్భుతమైన
              ప్రదేశాలు ఉన్నాయి. వాటి గురించి
              తెలుసుకుందాం!
            </p>

          </div>

        </section>

        {/* NAVIGATION */}

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

          <Link href="/capitals">
            🏛️ Capitals
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
              #dff5ff,
              #fff0c9,
              #eee0ff
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
          border-color: #7cc8ff;
        }

        .searchBox p {
          color: #777;
        }

        .placesGrid {
          max-width: 1100px;
          margin: 25px auto 50px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 18px;
        }

        .placeCard {
          padding: 25px 15px;
          text-align: center;
          background: white;
          border-radius: 25px;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
          transition: .2s;
        }

        .placeCard:hover {
          transform: translateY(-7px);
        }

        .placeImage {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background:
            linear-gradient(
              135deg,
              #e6f7ff,
              #fff1d4
            );
          font-size: 70px;
        }

        .placeCard h2 {
          font-size: 18px;
          margin: 15px 0 10px;
        }

        .country {
          padding: 9px;
          border-radius: 15px;
          background: #eee7ff;
          font-weight: bold;
          font-size: 14px;
        }

        .location {
          margin-top: 10px;
          color: #666;
          font-size: 13px;
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
              #ffe7d3,
              #e6e0ff
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
          font-size: 27px;
        }

        .question {
          display: inline-block;
          min-width: 280px;
          padding: 25px 45px;
          border-radius: 25px;
          background: white;
        }

        .questionImage {
          font-size: 75px;
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

        @media (max-width: 900px) {

          .placesGrid {
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

          .placesGrid {
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

          .placesGrid {
            grid-template-columns: 1fr;
          }

          .answers {
            grid-template-columns: 1fr;
          }

          .question {
            min-width: auto;
            width: 100%;
          }

        }

      `}</style>
    </>
  );
      }
