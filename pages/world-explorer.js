import Head from "next/head";
import Link from "next/link";

const categories = [
  {
    title: "Countries & Flags",
    telugu: "దేశాలు & జెండాలు",
    icon: "🚩",
    description: "Learn countries, flags and fun facts.",
    color: "#ffe0e8",
    link: "/countries",
  },
  {
    title: "Capitals",
    telugu: "రాజధానులు",
    icon: "🏛️",
    description: "Learn countries and their capitals.",
    color: "#e2e8ff",
    link: "/capitals",
  },
  {
    title: "Currencies",
    telugu: "కరెన్సీలు",
    icon: "💰",
    description: "Discover currencies and symbols.",
    color: "#fff0bd",
    link: "/currencies",
  },
  {
    title: "Indian States",
    telugu: "భారత రాష్ట్రాలు",
    icon: "🇮🇳",
    description: "Learn Indian states and capitals.",
    color: "#dff5df",
    link: "/indian-states",
  },
  {
    title: "Famous Places",
    telugu: "ప్రసిద్ధ ప్రదేశాలు",
    icon: "🗺️",
    description: "Explore amazing places around the world.",
    color: "#dff2ff",
    link: "/famous-places",
  },
  {
    title: "Animals",
    telugu: "జంతువులు",
    icon: "🐘",
    description: "Meet animals from around the world.",
    color: "#ffe8cc",
    link: "/animals",
  },
  {
    title: "Birds",
    telugu: "పక్షులు",
    icon: "🐦",
    description: "Discover colourful birds.",
    color: "#e5f4ff",
    link: "/birds",
  },
  {
    title: "Insects",
    telugu: "కీటకాలు",
    icon: "🦋",
    description: "Learn about interesting insects.",
    color: "#eee2ff",
    link: "/insects",
  },
  {
    title: "World Quiz",
    telugu: "ప్రపంచ క్విజ్",
    icon: "🧠",
    description: "Test your knowledge and earn points!",
    color: "#ffe0b8",
    link: "/world-quiz",
  },
];

const facts = [
  "🌍 Earth is our home planet.",
  "🌊 Most of Earth's surface is covered by water.",
  "🗺️ There are seven continents.",
  "🌈 Every country has its own culture and traditions.",
  "🐘 Animals live in many different habitats.",
  "🚩 Flags help us identify countries.",
];

export default function WorldExplorer() {
  return (
    <>
      <Head>
        <title>World Explorer | Chinnaari Kids</title>

        <meta
          name="description"
          content="Explore countries, flags, capitals, currencies, Indian states, famous places, animals, birds, insects and fun quizzes."
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

            <Link href="/numbers">
              🔢 Numbers
            </Link>

            <Link href="/abc">
              🔤 ABC
            </Link>

            <Link href="/telugu">
              🇮🇳 తెలుగు
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="planet">
            🌍
          </div>

          <div className="stars">
            ⭐ ✨ ⭐
          </div>

          <h1>
            World Explorer
          </h1>

          <h2>
            🌎 Learn About Our Amazing World!
          </h2>

          <p>
            Countries • Flags • Capitals • Currencies
            <br />
            Places • Animals • Birds • Insects • Quizzes
          </p>

          <div className="badge">
            🚀 Explore • Learn • Discover
          </div>

        </section>

        {/* INTRO */}

        <section className="intro">

          <h2>
            🌟 What would you like to explore?
          </h2>

          <p>
            Pick a topic and start your learning adventure!
          </p>

        </section>

        {/* CATEGORY GRID */}

        <section className="categories">

          {categories.map((category) => (

            <Link
              href={category.link}
              className="category"
              key={category.title}
              style={{
                backgroundColor:
                  category.color,
              }}
            >

              <div className="icon">
                {category.icon}
              </div>

              <h2>
                {category.title}
              </h2>

              <h3>
                {category.telugu}
              </h3>

              <p>
                {category.description}
              </p>

              <span className="explore">
                Explore →
              </span>

            </Link>

          ))}

        </section>

        {/* QUICK QUIZ */}

        <section className="quizBanner">

          <div className="quizEmoji">
            🧠
          </div>

          <div>

            <span className="newBadge">
              ⭐ Fun Challenge
            </span>

            <h2>
              Ready for a World Quiz?
            </h2>

            <p>
              Test what you know about countries,
              flags, capitals, animals and places.
            </p>

            <Link
              href="/world-quiz"
              className="quizButton"
            >
              Start Quiz 🚀
            </Link>

          </div>

        </section>

        {/* DID YOU KNOW */}

        <section className="facts">

          <h2>
            💡 Did You Know?
          </h2>

          <div className="factGrid">

            {facts.map((fact, index) => (

              <div
                className="fact"
                key={index}
              >
                {fact}
              </div>

            ))}

          </div>

        </section>

        {/* LEARNING MESSAGE */}

        <section className="message">

          <div className="messageIcon">
            🌎
          </div>

          <h2>
            The World is Full of Amazing Things!
          </h2>

          <p>
            Every country, animal, place and culture
            has something special to teach us.
          </p>

          <p className="telugu">
            🌟 నేర్చుకుందాం • ఆడుకుందాం • ప్రపంచాన్ని
            తెలుసుకుందాం!
          </p>

        </section>

        {/* BACK TO LEARNING */}

        <section className="links">

          <Link href="/">
            🏠 Home
          </Link>

          <Link href="/numbers">
            🔢 Numbers
          </Link>

          <Link href="/abc">
            🔤 ABC
          </Link>

          <Link href="/telugu">
            🇮🇳 Telugu
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/games">
            🎮 Games
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
          padding: 60px 20px;
          text-align: center;
          background:
            linear-gradient(
              135deg,
              #dff5ff,
              #eee3ff,
              #fff0c9
            );
          overflow: hidden;
        }

        .planet {
          font-size: 105px;
          animation:
            float 3s ease-in-out infinite;
        }

        @keyframes float {

          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

          100% {
            transform: translateY(0);
          }

        }

        .stars {
          font-size: 25px;
          margin-top: 5px;
        }

        .hero h1 {
          font-size: 48px;
          margin: 10px 0;
        }

        .hero h2 {
          font-size: 25px;
          margin: 10px;
        }

        .hero p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
        }

        .badge {
          display: inline-block;
          padding: 11px 20px;
          border-radius: 25px;
          background: white;
          font-weight: bold;
          box-shadow:
            0 4px 15px rgba(0,0,0,.08);
        }

        .intro {
          text-align: center;
          padding: 40px 20px 25px;
        }

        .intro h2 {
          font-size: 30px;
          margin-bottom: 8px;
        }

        .intro p {
          color: #666;
          font-size: 17px;
        }

        .categories {
          max-width: 1100px;
          margin: auto;
          padding: 15px 20px 50px;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 20px;
        }

        .category {
          padding: 30px 20px;
          border-radius: 28px;
          text-decoration: none;
          color: #333;
          text-align: center;
          min-height: 270px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 6px 20px rgba(0,0,0,.06);
          transition:
            transform .2s,
            box-shadow .2s;
        }

        .category:hover {
          transform: translateY(-8px);
          box-shadow:
            0 12px 28px rgba(0,0,0,.12);
        }

        .icon {
          font-size: 65px;
          margin-bottom: 8px;
        }

        .category h2 {
          margin: 5px 0;
          font-size: 23px;
        }

        .category h3 {
          margin: 4px 0;
          color: #666;
          font-size: 17px;
        }

        .category p {
          line-height: 1.5;
          color: #555;
          max-width: 250px;
        }

        .explore {
          margin-top: auto;
          padding: 9px 17px;
          border-radius: 20px;
          background: white;
          font-weight: bold;
        }

        .quizBanner {
          max-width: 1000px;
          margin: 10px auto 50px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
          border-radius: 32px;
          background:
            linear-gradient(
              135deg,
              #ffe1ec,
              #e2ddff
            );
          box-shadow:
            0 8px 30px rgba(0,0,0,.08);
        }

        .quizEmoji {
          font-size: 90px;
        }

        .newBadge {
          display: inline-block;
          padding: 7px 14px;
          border-radius: 20px;
          background: white;
          font-weight: bold;
          font-size: 14px;
        }

        .quizBanner h2 {
          font-size: 30px;
          margin: 12px 0;
        }

        .quizBanner p {
          color: #555;
          line-height: 1.6;
        }

        .quizButton {
          display: inline-block;
          margin-top: 8px;
          padding: 13px 22px;
          border-radius: 25px;
          background: #ff6b6b;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        .facts {
          max-width: 1000px;
          margin: 30px auto 50px;
          padding: 35px 20px;
          text-align: center;
        }

        .facts h2 {
          font-size: 30px;
        }

        .factGrid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .fact {
          padding: 20px;
          border-radius: 20px;
          background: white;
          box-shadow:
            0 4px 15px rgba(0,0,0,.05);
          line-height: 1.5;
        }

        .message {
          max-width: 900px;
          margin: 20px auto 50px;
          padding: 45px 25px;
          text-align: center;
          border-radius: 30px;
          background: white;
          box-shadow:
            0 6px 25px rgba(0,0,0,.07);
        }

        .messageIcon {
          font-size: 70px;
        }

        .message h2 {
          font-size: 28px;
        }

        .message p {
          font-size: 17px;
          line-height: 1.7;
          color: #666;
        }

        .telugu {
          font-weight: bold;
          color: #444 !important;
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

          .categories {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .factGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .header {
            flex-direction: column;
          }

          .quizBanner {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }

          .hero h1 {
            font-size: 38px;
          }

        }

        @media (max-width: 500px) {

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .categories {
            grid-template-columns: 1fr;
          }

          .factGrid {
            grid-template-columns: 1fr;
          }

          .planet {
            font-size: 80px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .hero h2 {
            font-size: 21px;
          }

        }

      `}</style>

    </>
  );
            }
