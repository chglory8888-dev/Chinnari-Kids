import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinnaari Kids | Learn, Play & Discover</title>

        <meta
          name="description"
          content="Chinnaari Kids is a fun learning platform for children with stories, educational games, puzzles and colourful learning activities."
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
            <Link href="/">Home</Link>
            <Link href="/stories">📚 Stories</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroContent">

            <div className="hello">
              👋 Hello Little Stars!
            </div>

            <h1>
              Learn
              <span> • </span>
              Play
              <span> • </span>
              Discover!
            </h1>

            <p>
              Welcome to Chinnaari Kids!
              <br />
              A fun and colourful learning world
              <br />
              made especially for children. 🌈
            </p>

            <div className="heroButtons">

              <Link href="/games" className="primaryButton">
                🎮 Start Playing
              </Link>

              <Link href="/stories" className="secondaryButton">
                📚 Read a Story
              </Link>

            </div>

          </div>

          <div className="heroArt">

            <div className="bigEmoji">
              🧒
            </div>

            <div className="floatingEmoji">
              ⭐ 🌈 🦋
            </div>

            <div className="floatingEmoji second">
              🎈 🐻 🌸
            </div>

          </div>

        </section>

        {/* EXPLORE */}

        <section className="explore">

          <h2>
            🌟 What would you like to learn?
          </h2>

          <p className="sectionIntro">
            Choose an activity and start learning through fun!
          </p>

          <div className="cards">

            {/* STORIES */}

            <Link href="/stories" className="card stories">

              <div className="cardIcon">
                📚
              </div>

              <h3>
                Stories
              </h3>

              <p>
                Enjoy fun stories and learn
                wonderful lessons.
              </p>

              <span className="cardButton">
                Read Stories →
              </span>

            </Link>

            {/* GAMES */}

            <Link href="/games" className="card games">

              <div className="cardIcon">
                🎮
              </div>

              <h3>
                Games
              </h3>

              <p>
                Play fun educational games
                and improve your skills.
              </p>

              <span className="cardButton">
                Play Games →
              </span>

            </Link>

            {/* PUZZLES */}

            <Link href="/puzzles" className="card puzzles">

              <div className="cardIcon">
                🧩
              </div>

              <h3>
                Puzzles
              </h3>

              <p>
                Solve interesting puzzles
                and train your brain.
              </p>

              <span className="cardButton">
                Solve Puzzles →
              </span>

            </Link>

            {/* COLOURS */}

            <Link href="/colours" className="card colours">

              <div className="cardIcon">
                🎨
              </div>

              <h3>
                Learn Colours
              </h3>

              <p>
                Discover colours through
                fun learning activities.
              </p>

              <span className="cardButton">
                Learn Colours →
              </span>

            </Link>

          </div>

        </section>

        {/* LEARNING MESSAGE */}

        <section className="learning">

          <div className="learningEmoji">
            🧠
          </div>

          <div>

            <h2>
              Learning can be fun! 💡
            </h2>

            <p>
              At Chinnaari Kids, children can
              learn new things while playing,
              solving puzzles and enjoying stories.
            </p>

          </div>

        </section>

        {/* WELCOME */}

        <section className="welcome">

          <h2>
            🌈 Welcome to Chinnaari Kids!
          </h2>

          <p>
            Read 📚 • Play 🎮 • Think 🧩 • Learn 🎨
          </p>

          <div className="welcomeIcons">
            📚 &nbsp; 🎮 &nbsp; 🧩 &nbsp; 🎨 &nbsp; ⭐
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
          background: #fffaf2;
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

          background: #ffffff;

          box-shadow:
            0 2px 15px rgba(0, 0, 0, 0.08);

          position: sticky;
          top: 0;
          z-index: 20;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          text-decoration: none;
          color: #333;
          white-space: nowrap;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        nav a {
          text-decoration: none;
          color: #444;
          font-weight: 600;
          transition: color 0.2s;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        /* HERO */

        .hero {
          min-height: 500px;
          padding: 70px 8%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background:
            linear-gradient(
              135deg,
              #ffe4ed,
              #e4f5ff
            );

          overflow: hidden;
        }

        .heroContent {
          max-width: 650px;
        }

        .hello {
          display: inline-block;

          background: white;

          padding: 10px 18px;

          border-radius: 30px;

          font-weight: bold;

          box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .hero h1 {
          font-size: 56px;
          line-height: 1.1;

          margin: 25px 0 18px;

          color: #333;
        }

        .hero h1 span {
          color: #ff6b6b;
        }

        .hero p {
          font-size: 19px;
          line-height: 1.7;
          color: #555;
        }

        .heroButtons {
          display: flex;
          gap: 15px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .primaryButton,
        .secondaryButton {
          padding: 15px 24px;
          border-radius: 30px;

          text-decoration: none;
          font-weight: bold;

          transition:
            transform 0.2s,
            box-shadow 0.2s;
        }

        .primaryButton {
          background: #ff6b6b;
          color: white;

          box-shadow:
            0 5px 15px rgba(255, 107, 107, 0.3);
        }

        .secondaryButton {
          background: white;
          color: #333;
        }

        .primaryButton:hover,
        .secondaryButton:hover {
          transform: translateY(-3px);
        }

        .heroArt {
          width: 350px;
          height: 300px;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bigEmoji {
          font-size: 160px;
          animation: bounce 3s ease-in-out infinite;
        }

        .floatingEmoji {
          position: absolute;

          top: 15px;
          right: 10px;

          font-size: 35px;

          animation: float 3s ease-in-out infinite;
        }

        .floatingEmoji.second {
          top: auto;
          right: auto;
          bottom: 15px;
          left: 0;

          animation-delay: 1s;
        }

        @keyframes bounce {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }

        }

        @keyframes float {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

        }

        /* EXPLORE */

        .explore {
          padding: 65px 7%;
          text-align: center;
        }

        .explore h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .sectionIntro {
          color: #666;
          font-size: 17px;
          margin-bottom: 35px;
        }

        .cards {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 22px;

          max-width: 1200px;

          margin: auto;
        }

        .card {
          padding: 32px 20px;

          border-radius: 28px;

          text-decoration: none;

          color: #333;

          min-height: 300px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          box-shadow:
            0 6px 20px
            rgba(0, 0, 0, 0.06);

          transition:
            transform 0.25s,
            box-shadow 0.25s;
        }

        .card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 12px 30px
            rgba(0, 0, 0, 0.12);
        }

        .cardIcon {
          font-size: 65px;
          margin-bottom: 15px;
        }

        .card h3 {
          font-size: 23px;
          margin: 8px 0;
        }

        .card p {
          line-height: 1.6;
          margin: 5px 0 18px;
          color: #555;
        }

        .cardButton {
          font-weight: bold;
          color: #555;
        }

        .stories {
          background: #ffe0e8;
        }

        .games {
          background: #e4ddff;
        }

        .puzzles {
          background: #fff0bd;
        }

        .colours {
          background: #dcf6dc;
        }

        /* LEARNING */

        .learning {
          max-width: 1050px;

          margin: 10px auto 55px;

          padding: 40px;

          border-radius: 30px;

          display: flex;

          align-items: center;

          gap: 30px;

          background:
            linear-gradient(
              135deg,
              #e3f5ff,
              #eee5ff
            );

          box-shadow:
            0 7px 25px
            rgba(0, 0, 0, 0.07);
        }

        .learningEmoji {
          font-size: 80px;
        }

        .learning h2 {
          margin-top: 0;
          font-size: 29px;
        }

        .learning p {
          font-size: 17px;
          line-height: 1.7;
          color: #555;
        }

        /* WELCOME */

        .welcome {
          margin: 10px 7% 55px;

          padding: 45px 25px;

          text-align: center;

          background: white;

          border-radius: 30px;

          box-shadow:
            0 5px 25px
            rgba(0, 0, 0, 0.07);
        }

        .welcome h2 {
          font-size: 30px;
        }

        .welcome p {
          font-size: 19px;
          color: #555;
        }

        .welcomeIcons {
          font-size: 35px;
          margin-top: 20px;
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
          margin: 8px;
        }

        /* TABLET */

        @media (max-width: 1050px) {

          .cards {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        /* MOBILE */

        @media (max-width: 800px) {

          .header {
            flex-direction: column;
            gap: 15px;
          }

          nav {
            justify-content: center;
            gap: 12px;
          }

          nav a {
            font-size: 13px;
          }

          .hero {
            flex-direction: column;
            text-align: center;
            padding: 50px 20px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero p {
            font-size: 17px;
          }

          .heroButtons {
            justify-content: center;
          }

          .heroArt {
            width: 100%;
            margin-top: 35px;
          }

          .bigEmoji {
            font-size: 120px;
          }

          .learning {
            margin-left: 20px;
            margin-right: 20px;

            flex-direction: column;
            text-align: center;

            padding: 30px 20px;
          }

        }

        /* SMALL MOBILE */

        @media (max-width: 520px) {

          .cards {
            grid-template-columns: 1fr;
          }

          .explore {
            padding-left: 20px;
            padding-right: 20px;
          }

          .explore h2 {
            font-size: 25px;
          }

          .welcome {
            margin-left: 20px;
            margin-right: 20px;
          }

          .hero h1 {
            font-size: 36px;
          }

        }

      `}</style>
    </>
  );
            }
