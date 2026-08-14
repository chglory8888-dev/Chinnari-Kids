import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinnaari Kids | Learn, Play & Discover</title>

        <meta
          name="description"
          content="Chinnaari Kids - fun stories, games, puzzles, colours, ABC, Telugu and numbers learning for children."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="home">

        {/* HEADER */}

        <header className="header">

          <Link href="/" className="logo">
            🌈 Chinnaari Kids
          </Link>

          <nav>

            <Link href="/">
              Home
            </Link>

            <Link href="/dashboard">
              🌟 Dashboard
            </Link>

            <Link href="/stories">
              📚 Stories
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/colours">
              🎨 Colours
            </Link>

            <Link href="/learn">
              🔤 Learn
            </Link>

          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroText">

            <span className="hello">
              👋 Hello Little Stars!
            </span>

            <h1>
              Learn, Play
              <br />
              & Have Fun! 🌟
            </h1>

            <p>
              Welcome to Chinnaari Kids!
              <br />
              Stories, games, puzzles and fun learning
              <br />
              for little explorers.
            </p>

            <div className="buttons">

              <Link
                href="/dashboard"
                className="dashboardButton"
              >
                🌟 Kids Dashboard
              </Link>

              <Link
                href="/games"
                className="primary"
              >
                🎮 Play Games
              </Link>

              <Link
                href="/stories"
                className="secondary"
              >
                📚 Read Stories
              </Link>

            </div>

          </div>

          <div className="heroArt">

            🧸

            <div className="smallAnimals">
              🐥 🌸 🦋 🌈
            </div>

          </div>

        </section>

        {/* QUICK START */}

        <section className="quick">

          <h2>
            🚀 What do you want to do?
          </h2>

          <p>
            Choose your favourite activity!
          </p>

          <div className="quickGrid">

            <Link
              href="/dashboard"
              className="quickCard dashboard"
            >
              <span>🌟</span>
              <h3>Dashboard</h3>
              <p>Stars & daily challenge</p>
            </Link>

            <Link
              href="/stories"
              className="quickCard stories"
            >
              <span>📚</span>
              <h3>Stories</h3>
              <p>Fun stories & moral lessons</p>
            </Link>

            <Link
              href="/games"
              className="quickCard games"
            >
              <span>🎮</span>
              <h3>Games</h3>
              <p>Play and learn</p>
            </Link>

            <Link
              href="/puzzles"
              className="quickCard puzzles"
            >
              <span>🧩</span>
              <h3>Puzzles</h3>
              <p>Think and solve</p>
            </Link>

            <Link
              href="/colours"
              className="quickCard colours"
            >
              <span>🎨</span>
              <h3>Colours</h3>
              <p>Learn beautiful colours</p>
            </Link>

            <Link
              href="/learn"
              className="quickCard learn"
            >
              <span>🔤</span>
              <h3>Learn</h3>
              <p>ABC, Telugu & Numbers</p>
            </Link>

          </div>

        </section>

        {/* FEATURED LEARNING */}

        <section className="featured">

          <div className="featuredText">

            <span className="newBadge">
              ⭐ Learning Zone
            </span>

            <h2>
              Little Learning Adventures 🧠
            </h2>

            <p>
              Learn something new every day through
              colourful activities, simple puzzles,
              stories and educational games.
            </p>

            <div className="featureList">

              <div>
                ✅ Learn ABC
              </div>

              <div>
                ✅ తెలుగు అచ్చులు
              </div>

              <div>
                ✅ Count Numbers
              </div>

              <div>
                ✅ Learn Colours
              </div>

            </div>

            <Link
              href="/learn"
              className="learnButton"
            >
              🔤 Start Learning
            </Link>

          </div>

          <div className="featuredArt">
            🧠
            <div>
              📚 🎨 🔢
            </div>
          </div>

        </section>

        {/* DAILY CHALLENGE */}

        <section className="daily">

          <div className="dailyIcon">
            🎯
          </div>

          <div>

            <span>
              ⭐ Daily Challenge
            </span>

            <h2>
              Ready to become a Learning Star?
            </h2>

            <p>
              Complete activities and collect stars
              while learning new things!
            </p>

            <Link
              href="/dashboard"
              className="challengeButton"
            >
              🚀 Start Challenge
            </Link>

          </div>

        </section>

        {/* WELCOME */}

        <section className="welcome">

          <div className="welcomeIcon">
            🌈
          </div>

          <h2>
            Welcome to Chinnaari Kids!
          </h2>

          <p>
            పిల్లలు కథలు చదువుతూ, games ఆడుతూ,
            puzzles solve చేస్తూ, colours, ABC,
            Telugu మరియు numbers నేర్చుకునే
            fun learning world! ❤️
          </p>

          <div className="welcomeIcons">
            📚 &nbsp; 🎮 &nbsp; 🧩 &nbsp; 🎨 &nbsp; 🔤 &nbsp; 🔢
          </div>

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

            <Link href="/stories">
              Stories
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

            <Link href="/learn">
              Learn
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

        .home {
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
          z-index: 20;
        }

        .logo {
          color: #333;
          text-decoration: none;

          font-size: 25px;
          font-weight: 800;

          white-space: nowrap;
        }

        nav {
          display: flex;
          align-items: center;

          gap: 17px;

          flex-wrap: wrap;
        }

        nav a {
          color: #444;

          text-decoration: none;

          font-size: 14px;

          font-weight: 600;

          transition: color 0.2s;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        /* HERO */

        .hero {
          min-height: 500px;

          padding: 65px 8%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          background:
            linear-gradient(
              135deg,
              #ffe1ea,
              #e1f5ff
            );
        }

        .heroText {
          max-width: 650px;
        }

        .hello {
          display: inline-block;

          padding: 10px 18px;

          border-radius: 30px;

          background: white;

          font-weight: bold;
        }

        .hero h1 {
          font-size: 55px;

          line-height: 1.08;

          margin: 25px 0 18px;
        }

        .heroText p {
          font-size: 18px;

          line-height: 1.7;

          color: #555;
        }

        .buttons {
          display: flex;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 28px;
        }

        .primary,
        .secondary,
        .dashboardButton {
          display: inline-block;

          padding: 14px 21px;

          border-radius: 30px;

          text-decoration: none;

          font-weight: bold;

          transition:
            transform 0.2s;
        }

        .primary:hover,
        .secondary:hover,
        .dashboardButton:hover,
        .learnButton:hover,
        .challengeButton:hover {
          transform: scale(1.04);
        }

        .primary {
          background: #ff6b6b;

          color: white;
        }

        .secondary {
          background: white;

          color: #333;
        }

        .dashboardButton {
          background: #ffd84d;

          color: #333;
        }

        .heroArt {
          font-size: 155px;

          text-align: center;

          animation:
            float 3s ease-in-out infinite;
        }

        .smallAnimals {
          font-size: 35px;

          margin-top: 5px;
        }

        @keyframes float {

          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0);
          }

        }

        /* QUICK */

        .quick {
          max-width: 1150px;

          margin: auto;

          padding: 55px 20px;

          text-align: center;
        }

        .quick h2 {
          font-size: 31px;

          margin-bottom: 8px;
        }

        .quick > p {
          color: #666;

          margin-bottom: 32px;
        }

        .quickGrid {
          display: grid;

          grid-template-columns:
            repeat(6, 1fr);

          gap: 15px;
        }

        .quickCard {
          min-height: 185px;

          padding: 25px 12px;

          border-radius: 25px;

          text-decoration: none;

          color: #333;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.06);

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .quickCard:hover {
          transform: translateY(-7px);

          box-shadow:
            0 10px 25px
            rgba(0,0,0,0.1);
        }

        .quickCard span {
          font-size: 48px;
        }

        .quickCard h3 {
          margin: 12px 0 7px;

          font-size: 19px;
        }

        .quickCard p {
          margin: 0;

          font-size: 13px;

          color: #555;

          line-height: 1.5;
        }

        .dashboard {
          background: #fff0b8;
        }

        .stories {
          background: #ffdce7;
        }

        .games {
          background: #e9ddff;
        }

        .puzzles {
          background: #dff1ff;
        }

        .colours {
          background: #ffe9bd;
        }

        .learn {
          background: #dcf6d9;
        }

        /* FEATURED */

        .featured {
          max-width: 1000px;

          margin: 10px auto 50px;

          padding: 40px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;

          border-radius: 32px;

          background:
            linear-gradient(
              135deg,
              #e4ddff,
              #dff5ff
            );

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.07);
        }

        .featuredText {
          max-width: 620px;
        }

        .newBadge {
          display: inline-block;

          padding: 8px 15px;

          border-radius: 20px;

          background: white;

          font-size: 14px;

          font-weight: bold;
        }

        .featured h2 {
          font-size: 32px;

          margin: 15px 0;
        }

        .featured p {
          color: #555;

          font-size: 17px;

          line-height: 1.7;
        }

        .featureList {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 10px;

          margin: 20px 0;
        }

        .featureList div {
          font-weight: bold;
        }

        .learnButton {
          display: inline-block;

          padding: 13px 22px;

          border-radius: 25px;

          background: #4caf50;

          color: white;

          text-decoration: none;

          font-weight: bold;

          transition:
            transform 0.2s;
        }

        .featuredArt {
          font-size: 105px;

          text-align: center;
        }

        .featuredArt div {
          font-size: 32px;

          margin-top: 10px;
        }

        /* DAILY */

        .daily {
          max-width: 1000px;

          margin: 20px auto 50px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #ffe1ea
            );

          box-shadow:
            0 7px 25px
            rgba(0,0,0,0.06);
        }

        .dailyIcon {
          font-size: 70px;
        }

        .daily span {
          display: inline-block;

          padding: 7px 13px;

          border-radius: 20px;

          background: white;

          font-size: 13px;

          font-weight: bold;
        }

        .daily h2 {
          margin: 12px 0 8px;

          font-size: 27px;
        }

        .daily p {
          color: #555;

          line-height: 1.6;
        }

        .challengeButton {
          display: inline-block;

          margin-top: 8px;

          padding: 13px 22px;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          text-decoration: none;

          font-weight: bold;

          transition:
            transform 0.2s;
        }

        /* WELCOME */

        .welcome {
          margin: 10px 7% 55px;

          padding: 45px 25px;

          text-align: center;

          border-radius: 30px;

          background: white;

          box-shadow:
            0 6px 25px
            rgba(0,0,0,0.07);
        }

        .welcomeIcon {
          font-size: 60px;
        }

        .welcome h2 {
          font-size: 30px;
        }

        .welcome p {
          max-width: 800px;

          margin: auto;

          font-size: 18px;

          line-height: 1.8;

          color: #555;
        }

        .welcomeIcons {
          margin-top: 25px;

          font-size: 32px;
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

        .footerLinks a:hover {
          color: #ffd84d;
        }

        /* TABLET */

        @media (max-width: 1050px) {

          .quickGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

        }

        @media (max-width: 850px) {

          .header {
            flex-direction: column;

            gap: 15px;
          }

          nav {
            justify-content: center;

            gap: 12px;
          }

          .hero {
            text-align: center;

            flex-direction: column;

            padding: 50px 20px;
          }

          .hero h1 {
            font-size: 44px;
          }

          .buttons {
            justify-content: center;
          }

          .heroArt {
            margin-top: 35px;

            font-size: 110px;
          }

          .featured {
            margin-left: 20px;

            margin-right: 20px;

            flex-direction: column;

            text-align: center;
          }

          .daily {
            margin-left: 20px;

            margin-right: 20px;

            flex-direction: column;

            text-align: center;
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
            font-size: 36px;
          }

          .heroText p {
            font-size: 16px;
          }

          .quickGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .quickCard {
            min-height: 165px;
          }

          .featured {
            padding: 30px 20px;
          }

          .featured h2 {
            font-size: 27px;
          }

          .featureList {
            grid-template-columns: 1fr;
          }

          .featuredArt {
            font-size: 80px;
          }

          .welcome {
            margin-left: 20px;

            margin-right: 20px;
          }

        }

        @media (max-width: 400px) {

          .quickGrid {
            grid-template-columns: 1fr;
          }

          .buttons {
            flex-direction: column;
          }

          .primary,
          .secondary,
          .dashboardButton {
            width: 100%;

            text-align: center;
          }

        }

      `}</style>
    </>
  );
          }
