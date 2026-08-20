import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const activities = [
  {
    href: "/games",
    icon: "🎮",
    title: "Games",
    telugu: "ఆటలు",
    text: "Play and learn",
  },
  {
    href: "/puzzles",
    icon: "🧩",
    title: "Puzzles",
    telugu: "పజిల్స్",
    text: "Think and solve",
  },
  {
    href: "/colours",
    icon: "🎨",
    title: "Colours",
    telugu: "రంగులు",
    text: "Learn beautiful colours",
  },
  {
    href: "/learn",
    icon: "📚",
    title: "Learn",
    telugu: "నేర్చుకోండి",
    text: "ABC, Telugu & Numbers",
  },
  {
    href: "/stories",
    icon: "📖",
    title: "Stories",
    telugu: "కథలు",
    text: "Fun stories & lessons",
  },
  {
    href: "/quiz",
    icon: "🧠",
    title: "Mega Quiz",
    telugu: "క్విజ్",
    text: "Test your knowledge",
  },
  {
    href: "/flags",
    icon: "🌍",
    title: "Flags Quiz",
    telugu: "జెండాలు",
    text: "Learn countries & flags",
  },
  {
    href: "/world",
    icon: "🌎",
    title: "World Explorer",
    telugu: "ప్రపంచం",
    text: "Explore our world",
  },
];

function speak(text, lang = "en-IN") {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  speech.rate = 0.8;
  speech.pitch = 1.1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

export default function Home() {
  const [language, setLanguage] = useState("en");

  function welcomeVoice() {
    if (language === "te") {
      speak(
        "చిన్నారి కిడ్స్‌కు స్వాగతం. నేర్చుకుందాం, ఆడుకుందాం, ఆనందంగా గడుపుదాం!",
        "te-IN"
      );
    } else {
      speak(
        "Welcome to Chinnaari Kids. Let's learn, play and have fun!",
        "en-IN"
      );
    }
  }

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

  <meta
    name="theme-color"
    content="#7c4dff"
  />

  <meta
    name="google-site-verification"
    content="dIBVdX3k2APZaWxk8hlGB7ykx_gDwHzGQXNtoswegjk"
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

            <Link href="/dashboard">
              🌟 Dashboard
            </Link>

            <Link href="/stories">
              📖 Stories
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
              📚 Learn
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
              👋{" "}
              {language === "te"
                ? "చిన్నారి తారలకు స్వాగతం!"
                : "Hello Little Stars!"}
            </div>

            <h1>
              {language === "te" ? (
                <>
                  నేర్చుకో,
                  <br />
                  ఆడుకో & ఆనందించు! 🌟
                </>
              ) : (
                <>
                  Learn, Play
                  <br />
                  & Have Fun! 🌟
                </>
              )}
            </h1>

            <p className="welcomeText">
              {language === "te"
                ? "చిన్నారి కిడ్స్‌కు స్వాగతం!"
                : "Welcome to Chinnaari Kids!"}
            </p>

            <p>
              {language === "te"
                ? "కథలు, ఆటలు, పజిల్స్ మరియు సరదా నేర్చుకునే కార్యక్రమాలు."
                : "Stories, games, puzzles and fun learning for little explorers."}
            </p>

            <div className="languageButtons">

              <button
                className={
                  language === "en"
                    ? "languageActive"
                    : ""
                }
                onClick={() => setLanguage("en")}
              >
                🇬🇧 English
              </button>

              <button
                className={
                  language === "te"
                    ? "languageActive"
                    : ""
                }
                onClick={() => setLanguage("te")}
              >
                🇮🇳 తెలుగు
              </button>

            </div>

            <div className="heroLinks">

              <Link
                href="/dashboard"
                className="heroButton primary"
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
                href="/learn"
                className="heroButton"
              >
                📚 Start Learning
              </Link>

              <button
                className="heroButton voiceButton"
                onClick={welcomeVoice}
              >
                🔊{" "}
                {language === "te"
                  ? "వినండి"
                  : "Listen"}
              </button>

            </div>

          </div>

          <div className="heroArt">

            <div className="rainbow">
              🌈
            </div>

            <div className="bear">
              🧸
            </div>

            <div className="littleAnimals">
              🐥 🌸 🦋 ⭐
            </div>

            <div className="floatingStars">
              ✨ ⭐ ✨
            </div>

          </div>

        </section>

        {/* ACTIVITIES */}

        <section className="activities">

          <div className="sectionBadge">
            🚀 Fun Learning Zone
          </div>

          <h2>
            {language === "te"
              ? "ఏం చేయాలనుకుంటున్నారు?"
              : "What do you want to do?"}
          </h2>

          <p className="sectionText">
            {language === "te"
              ? "మీకు ఇష్టమైన activity ఎంచుకోండి!"
              : "Choose your favourite activity!"}
          </p>

          <div className="activityGrid">

            {activities.map((activity) => (
              <Link
                href={activity.href}
                className="activityCard"
                key={activity.href}
              >

                <span className="activityIcon">
                  {activity.icon}
                </span>

                <h3>
                  {language === "te"
                    ? activity.telugu
                    : activity.title}
                </h3>

                <p>
                  {language === "te"
                    ? activity.title
                    : activity.text}
                </p>

                <span className="cardArrow">
                  →
                </span>

              </Link>
            ))}

          </div>

        </section>

        {/* LEARNING ZONE */}

        <section className="learningZone">

          <div className="learningContent">

            <div className="badge">
              ⭐ Learning Zone
            </div>

            <h2>
              {language === "te"
                ? "చిన్నారి లెర్నింగ్ అడ్వెంచర్స్ 🧠"
                : "Little Learning Adventures 🧠"}
            </h2>

            <p>
              {language === "te"
                ? "ప్రతిరోజూ కొత్త విషయాలు నేర్చుకుందాం. రంగులు, అక్షరాలు, సంఖ్యలు, కథలు మరియు సరదా ఆటలతో నేర్చుకోవడం మరింత ఆనందంగా ఉంటుంది."
                : "Learn something new every day through colourful activities, simple puzzles, stories and educational games."}
            </p>

            <div className="learningList">

              <div>✅ ABC Learning</div>
              <div>✅ తెలుగు అక్షరాలు</div>
              <div>✅ Count Numbers</div>
              <div>✅ Learn Colours</div>
              <div>✅ Animals & Fruits</div>
              <div>✅ Shapes</div>

            </div>

            <div className="learningLinks">

              <Link href="/learn">
                📚 Start Learning
              </Link>

              <Link href="/colours">
                🎨 Learn Colours
              </Link>

              <Link href="/quiz">
                🧠 Take Quiz
              </Link>

            </div>

          </div>

          <div className="learningArt">
            🧠
            <br />
            📚 🎨 🔢
            <br />
            🐶 🍎 ⭐
          </div>

        </section>

        {/* WORLD */}

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
                🇮🇳 <strong>Countries</strong>
              </div>

              <div>
                🏛️ <strong>Capitals</strong>
              </div>

              <div>
                💰 <strong>Currencies</strong>
              </div>

              <div>
                🏳️ <strong>Flags</strong>
              </div>

              <div>
                🗺️ <strong>Famous Places</strong>
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

              <Link href="/games">
                🎮 Play Game
              </Link>

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

        {/* FUN SECTION */}

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
              📖 Stories
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
              📚 Learn
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

            <Link href="/">Home</Link>

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

            <Link href="/quiz">
              Quiz
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
          padding: 14px 5%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow:
            0 2px 12px rgba(0,0,0,0.08);
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
          gap: 12px;
        }

        nav a {
          text-decoration: none;
          color: #333;
          font-size: 13px;
          font-weight: bold;
        }

        nav a:hover {
          color: #7c4dff;
        }

        .hero {
          min-height: 480px;
          padding: 60px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background:
            linear-gradient(
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
        .badge,
        .sectionBadge {
          display: inline-block;
          background: white;
          padding: 9px 16px;
          border-radius: 25px;
          font-size: 13px;
          font-weight: bold;
          box-shadow:
            0 2px 8px rgba(0,0,0,0.05);
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

        .languageButtons {
          display: flex;
          gap: 8px;
          margin-top: 18px;
        }

        .languageButtons button {
          border: none;
          padding: 10px 15px;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          font-weight: bold;
        }

        .languageButtons .languageActive {
          background: #7c4dff;
          color: white;
        }

        .heroLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .heroButton {
          border: none;
          text-decoration: none;
          color: #333;
          background: white;
          padding: 12px 16px;
          border-radius: 23px;
          font-weight: bold;
          font-size: 14px;
          box-shadow:
            0 3px 10px rgba(0,0,0,0.08);
          cursor: pointer;
        }

        .heroButton:hover {
          transform: translateY(-2px);
        }

        .heroButton.primary {
          background: #7c4dff;
          color: white;
        }

        .voiceButton {
          background: #ff8a65;
          color: white;
        }

        .heroArt {
          text-align: center;
          min-width: 290px;
          animation: float 3s ease-in-out infinite;
        }

        .rainbow {
          font-size: 65px;
        }

        .bear {
          font-size: 135px;
        }

        .littleAnimals {
          font-size: 35px;
          margin-top: 8px;
        }

        .floatingStars {
          font-size: 24px;
          margin-top: 12px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .activities {
          max-width: 1100px;
          margin: auto;
          padding: 65px 25px;
          text-align: center;
        }

        .sectionBadge {
          background: #fff0c7;
        }

        .activities h2 {
          font-size: 30px;
          margin: 15px 0 8px;
        }

        .sectionText {
          color: #666;
          margin-bottom: 35px;
        }

        .activityGrid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 18px;
        }

        .activityCard {
          position: relative;
          min-height: 170px;
          padding: 25px 15px;
          text-decoration: none;
          color: #222;
          background: white;
          border-radius: 24px;
          box-shadow:
            0 4px 18px rgba(0,0,0,0.06);
          transition: 0.2s;
        }

        .activityCard:hover {
          transform: translateY(-6px);
          box-shadow:
            0 8px 24px rgba(0,0,0,0.12);
        }

        .activityIcon {
          display: block;
          font-size: 42px;
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

        .cardArrow {
          display: block;
          margin-top: 12px;
          font-size: 20px;
          color: #7c4dff;
        }

        .learningZone,
        .worldSection {
          max-width: 1100px;
          margin: 35px auto;
          padding: 50px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .learningZone {
          background:
            linear-gradient(
              135deg,
              #dcd7ff,
              #dff7ff
            );
        }

        .learningContent,
        .worldText,
        .challengeContent {
          flex: 1;
        }

        .learningZone h2,
        .worldSection h2 {
          font-size: 30px;
          margin: 18px 0;
        }

        .learningZone p,
        .worldSection p {
          line-height: 1.7;
        }

        .learningList {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
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
          font-size: 55px;
          line-height: 1.4;
          min-width: 220px;
        }

        .worldSection {
          background:
            linear-gradient(
              135deg,
              #e1f5ff,
              #fff1d4
            );
        }

        .worldFeatures {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 14px;
          margin: 25px 0;
        }

        .worldFeatures div {
          background:
            rgba(255,255,255,0.75);
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
          background:
            linear-gradient(
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
          box-shadow:
            0 5px 25px rgba(0,0,0,0.06);
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

        @media (max-width: 900px) {

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

          .heroLinks,
          .languageButtons {
            justify-content: center;
          }

          .activityGrid {
            grid-template-columns:
              repeat(2, 1fr);
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
            grid-template-columns:
              1fr 1fr;
            gap: 12px;
          }

          .activityCard {
            min-height: 145px;
            padding: 18px 8px;
          }

          .activityIcon {
            font-size: 32px;
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

          .challengeLinks,
          .worldButtons {
            justify-content: center;
          }
        }

      `}</style>
    </>
  );
}
