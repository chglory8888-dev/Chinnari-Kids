import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinnaari Kids | Learn, Play & Have Fun</title>

        <meta
          name="description"
          content="Chinnaari Kids - fun stories, games, puzzles, colours, ABC, Telugu, numbers and world learning for children."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

        {/* NAVIGATION */}
        <header className="header">
          <Link href="/" className="logo">
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">Home</Link>

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

            <Link href="/flags">
              🌍 Flags
            </Link>

            <Link href="/quiz">
              🧠 Quiz
            </Link>

            <Link href="/world">
              🌎 World
            </Link>
          </nav>
        </header>


        {/* HERO */}
        <section className="hero">
          <div className="heroContent">

            <div className="welcome">
              👋 Hello Little Stars!
            </div>

            <h1>
              Learn, Play
              <br />
              & Have Fun! 🌟
            </h1>

            <p className="welcomeText">
              Welcome to Chinnaari Kids!
            </p>

            <p>
              Stories, games, puzzles and fun learning
              <br />
              for little explorers.
            </p>

            <div className="heroLinks">

              <Link
                href="/dashboard"
                className="heroButton"
              >
                🌟 Kids Dashboard
              </Link>

              <Link
                href="/games"
                className="heroButton"
              >
                🎮 Play Games
              </Link>

              <Link
                href="/stories"
                className="heroButton"
              >
                📚 Read Stories
              </Link>

              <Link
                href="/flags"
                className="heroButton"
              >
                🌍 Flags Quiz
              </Link>

            </div>
          </div>


          <div className="heroArt">
            <div className="bear">
              🧸
            </div>

            <div className="littleAnimals">
              🐥 🌸 🦋 🌈
            </div>
          </div>
        </section>


        {/* QUICK ACTIVITIES */}
        <section className="activities">

          <h2>
            🚀 What do you want to do?
          </h2>

          <p className="sectionText">
            Choose your favourite activity!
          </p>


          <div className="activityGrid">

            <Link
              href="/dashboard"
              className="activityCard"
            >
              <span>🌟</span>
              <h3>Dashboard</h3>
              <p>Stars & daily challenge</p>
            </Link>


            <Link
              href="/stories"
              className="activityCard"
            >
              <span>📚</span>
              <h3>Stories</h3>
              <p>Fun stories & moral lessons</p>
            </Link>


            <Link
              href="/games"
              className="activityCard"
            >
              <span>🎮</span>
              <h3>Games</h3>
              <p>Play and learn</p>
            </Link>


            <Link
              href="/puzzles"
              className="activityCard"
            >
              <span>🧩</span>
              <h3>Puzzles</h3>
              <p>Think and solve</p>
            </Link>


            <Link
              href="/colours"
              className="activityCard"
            >
              <span>🎨</span>
              <h3>Colours</h3>
              <p>Learn beautiful colours</p>
            </Link>


            <Link
              href="/learn"
              className="activityCard"
            >
              <span>🔤</span>
              <h3>Learn</h3>
              <p>ABC, Telugu & Numbers</p>
            </Link>


            <Link
              href="/flags"
              className="activityCard specialCard"
            >
              <span>🌍</span>
              <h3>Flags Quiz</h3>
              <p>Learn countries & flags</p>
            </Link>


            <Link
              href="/quiz"
              className="activityCard specialCard"
            >
              <span>🧠</span>
              <h3>Mega Quiz</h3>
              <p>Test your knowledge</p>
            </Link>


            <Link
              href="/world"
              className="activityCard specialCard"
            >
              <span>🌎</span>
              <h3>World Explorer</h3>
              <p>Explore countries & places</p>
            </Link>

          </div>
        </section>


        {/* LEARNING ZONE */}
        <section className="learningZone">

          <div className="learningContent">

            <div className="badge">
              ⭐ Learning Zone
            </div>

            <h2>
              Little Learning Adventures 🧠
            </h2>

            <p>
              Learn something new every day through
              colourful activities, simple puzzles,
              stories and educational games.
            </p>


            <div className="learningList">

              <div>
                ✅ Learn ABC
              </div>

              <div>
                ✅ తెలుగు అక్షరాలు
              </div>

              <div>
                ✅ Count Numbers
              </div>

              <div>
                ✅ Learn Colours
              </div>

            </div>


            <div className="learningLinks">

              <Link href="/learn">
                🔤 Start Learning
              </Link>

              <Link href="/quiz">
                🧠 Take Quiz
              </Link>

              <Link href="/flags">
                🌍 Learn Flags
              </Link>

            </div>

          </div>


          <div className="learningArt">
            🧠
            <br />
            📚 🎨 🔢
          </div>

        </section>


        {/* WORLD EXPLORER */}
        <section className="worldSection">

          <div className="worldText">

            <div className="badge">
              🌎 Explore the World
            </div>

            <h2>
              Become a Little World Explorer! 🌍
            </h2>

            <p>
              Discover countries, flags, capitals,
              currencies and famous places around
              the world.
            </p>


            <div className="worldFeatures">

              <div>
                🇮🇳
                <strong> Countries</strong>
              </div>

              <div>
                🏛️
                <strong> Capitals</strong>
              </div>

              <div>
                💰
                <strong> Currencies</strong>
              </div>

              <div>
                🏳️
                <strong> Flags</strong>
              </div>

              <div>
                🗺️
                <strong> Famous Places</strong>
              </div>

            </div>


            <div className="worldButtons">

              <Link
                href="/world"
                className="primaryButton"
              >
                🌎 World Explorer
              </Link>

              <Link
                href="/flags"
                className="secondaryButton"
              >
                🏳️ Flags Quiz
              </Link>

            </div>

          </div>


          <div className="worldArt">
            🌍
            <div>
              🇮🇳 🇺🇸 🇬🇧 🇯🇵
            </div>

            <div>
              🇫🇷 🇩🇪 🇦🇺 🇧🇷
            </div>
          </div>

        </section>
          {/* DAILY CHALLENGE */}
        <section className="challenge">

          <div className="challengeIcon">
            🎯
          </div>

          <div className="challengeContent">

            <div className="badge">
              ⭐ Daily Challenge
            </div>

            <h2>
              Ready to become a Learning Star? 🌟
            </h2>

            <p>
              Complete activities and collect stars
              while learning new things!
            </p>

            <div className="challengeLinks">

              <Link href="/quiz">
                🧠 Start Quiz
              </Link>

              <Link href="/flags">
                🌍 Flags Challenge
              </Link>

              <Link href="/world">
                🌎 Explore World
              </Link>

            </div>

          </div>

        </section>


        {/* FUN LEARNING */}
        <section className="funSection">

          <div className="rainbow">
            🌈
          </div>

          <h2>
            Every Day Is a New Adventure! 🚀
          </h2>

          <p>
            Learn new things, play fun games,
            discover amazing countries and
            enjoy wonderful stories.
          </p>

          <div className="funLinks">

            <Link href="/stories">
              📚 Stories
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/flags">
              🌍 Flags
            </Link>

            <Link href="/quiz">
              🧠 Quiz
            </Link>

          </div>

        </section>


        {/* FOOTER */}
        <footer>

          <div className="footerLogo">
            🌈 Chinnaari Kids
          </div>

          <p>
            Learn • Play • Discover • Grow 🌟
          </p>

          <div className="footerLinks">

            <Link href="/">
              Home
            </Link>

            <Link href="/stories">
              Stories
            </Link>

            <Link href="/games">
              Games
            </Link>

            <Link href="/quiz">
              Quiz
            </Link>

            <Link href="/flags">
              Flags
            </Link>

            <Link href="/world">
              World Explorer
            </Link>

          </div>

          <p className="copyright">
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
          background: #fffaf4;
          color: #333;
          font-family: Arial, sans-serif;
        }


        .header {
          min-height: 70px;
          padding: 14px 6%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }


        .logo {
          text-decoration: none;
          color: #333;
          font-size: 21px;
          font-weight: bold;
          white-space: nowrap;
        }


        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
        }


        nav a {
          text-decoration: none;
          color: #333;
          font-size: 13px;
          font-weight: bold;
        }


        nav a:hover {
          color: #ff7b54;
        }


        .hero {
          min-height: 430px;
          padding: 60px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: linear-gradient(
            135deg,
            #ffe7ef,
            #f0eaff,
            #ddf7ff
          );
        }


        .heroContent {
          max-width: 650px;
        }


        .welcome,
        .badge {
          display: inline-block;
          background: white;
          padding: 9px 16px;
          border-radius: 25px;
          font-size: 13px;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }


        .hero h1 {
          font-size: 48px;
          line-height: 1.15;
          margin: 22px 0 18px;
        }


        .hero p {
          font-size: 17px;
          line-height: 1.7;
        }


        .welcomeText {
          font-weight: bold;
          margin-bottom: 0;
        }


        .heroLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }


        .heroButton {
          text-decoration: none;
          color: #333;
          background: white;
          padding: 11px 15px;
          border-radius: 22px;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }


        .heroButton:hover {
          transform: translateY(-2px);
        }


        .heroArt {
          text-align: center;
          min-width: 270px;
        }


        .bear {
          font-size: 145px;
        }


        .littleAnimals {
          font-size: 35px;
          margin-top: 10px;
        }


        .activities {
          max-width: 1100px;
          margin: 0 auto;
          padding: 65px 25px;
          text-align: center;
        }


        .activities h2 {
          font-size: 30px;
          margin-bottom: 8px;
        }


        .sectionText {
          color: #666;
          margin-bottom: 35px;
        }


        .activityGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }


        .activityCard {
          min-height: 145px;
          padding: 25px 15px;
          text-decoration: none;
          color: #222;
          background: white;
          border-radius: 22px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.06);
          transition: 0.2s;
        }


        .activityCard:hover {
          transform: translateY(-5px);
        }


        .activityCard span {
          display: block;
          font-size: 35px;
          margin-bottom: 8px;
        }


        .activityCard h3 {
          margin: 8px 0;
          font-size: 18px;
        }


        .activityCard p {
          margin: 0;
          font-size: 13px;
          color: #666;
        }


        .specialCard {
          background: linear-gradient(
            135deg,
            #fff5d9,
            #ffeef4
          );
        }


        .learningZone {
          max-width: 1100px;
          margin: 20px auto;
          padding: 50px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: linear-gradient(
            135deg,
            #dcd7ff,
            #dff7ff
          );
        }


        .learningContent {
          flex: 1;
        }


        .learningZone h2 {
          font-size: 30px;
          margin: 18px 0;
        }


        .learningZone p {
          line-height: 1.7;
        }


        .learningList {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin: 25px 0;
          font-weight: bold;
        }


        .learningLinks,
        .worldButtons,
        .challengeLinks,
        .funLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }


        .learningLinks a,
        .challengeLinks a,
        .funLinks a {
          text-decoration: none;
          color: #222;
          font-weight: bold;
        }


        .learningArt {
          text-align: center;
          font-size: 65px;
          line-height: 1.4;
          min-width: 220px;
        }


        .worldSection {
          max-width: 1100px;
          margin: 45px auto;
          padding: 50px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: linear-gradient(
            135deg,
            #e1f5ff,
            #fff1d4
          );
        }


        .worldText {
          flex: 1;
        }


        .worldSection h2 {
          font-size: 30px;
          margin: 18px 0;
        }


        .worldSection p {
          line-height: 1.7;
        }


        .worldFeatures {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin: 25px 0;
        }


        .worldFeatures div {
          background: rgba(255,255,255,0.75);
          padding: 12px;
          border-radius: 15px;
        }


        .primaryButton,
        .secondaryButton {
          text-decoration: none;
          padding: 13px 20px;
          border-radius: 25px;
          font-weight: bold;
        }


        .primaryButton {
          background: #4caf50;
          color: white;
        }


        .secondaryButton {
          background: white;
          color: #333;
        }


        .worldArt {
          min-width: 270px;
          text-align: center;
          font-size: 100px;
        }


        .worldArt div {
          font-size: 28px;
          margin-top: 12px;
        }


        .challenge {
          max-width: 1100px;
          margin: 45px auto;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 35px;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #fff0bd,
            #ffe1e8
          );
        }


        .challengeIcon {
          font-size: 90px;
          min-width: 130px;
          text-align: center;
        }


        .challengeContent {
          flex: 1;
        }


        .challenge h2 {
          font-size: 28px;
          margin: 15px 0;
        }


        .funSection {
          max-width: 900px;
          margin: 60px auto;
          padding: 45px 25px;
          background: white;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 5px 25px rgba(0,0,0,0.06);
        }


        .rainbow {
          font-size: 70px;
        }


        .funSection h2 {
          font-size: 29px;
        }


        .funSection p {
          line-height: 1.7;
          color: #666;
        }


        .funLinks {
          justify-content: center;
          margin-top: 25px;
        }


        .funLinks a {
          padding: 12px 17px;
          background: #fff2d8;
          border-radius: 22px;
        }


        footer {
          margin-top: 60px;
          padding: 45px 20px;
          text-align: center;
          background: #292929;
          color: white;
        }


        .footerLogo {
          font-size: 24px;
          font-weight: bold;
        }


        .footerLinks {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
          margin: 20px 0;
        }


        .footerLinks a {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }


        .copyright {
          color: #bbb;
          font-size: 13px;
        }


        @media (max-width: 800px) {

          .header {
            flex-direction: column;
          }


          nav {
            gap: 9px;
          }


          .hero {
            flex-direction: column;
            text-align: center;
            padding: 45px 20px;
          }


          .hero h1 {
            font-size: 38px;
          }


          .heroLinks {
            justify-content: center;
          }


          .activityGrid {
            grid-template-columns: repeat(2, 1fr);
          }


          .learningZone,
          .worldSection,
          .challenge {
            margin-left: 15px;
            margin-right: 15px;
            padding: 30px 22px;
          }


          .worldArt,
          .learningArt {
            display: none;
          }

        }


        @media (max-width: 500px) {

          .logo {
            font-size: 18px;
          }


          nav {
            gap: 7px;
          }


          nav a {
            font-size: 11px;
          }


          .hero h1 {
            font-size: 32px;
          }


          .bear {
            font-size: 100px;
          }


          .littleAnimals {
            font-size: 25px;
          }


          .activityGrid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }


          .activityCard {
            min-height: 125px;
            padding: 18px 8px;
          }


          .activityCard span {
            font-size: 28px;
          }


          .activityCard h3 {
            font-size: 15px;
          }


          .activityCard p {
            font-size: 11px;
          }


          .learningList,
          .worldFeatures {
            grid-template-columns: 1fr;
          }


          .challenge {
            flex-direction: column;
            text-align: center;
          }


          .challengeLinks {
            justify-content: center;
          }


          .worldButtons {
            justify-content: center;
          }

        }

      `}</style>
    </>
  );
          }
  
