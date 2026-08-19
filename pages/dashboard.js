import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const activities = [
  {
    title: "Stories",
    telugu: "కథలు",
    emoji: "📚",
    text: "Read fun stories",
    link: "/stories",
    className: "pink",
  },
  {
    title: "Games",
    telugu: "ఆటలు",
    emoji: "🎮",
    text: "Play and learn",
    link: "/games",
    className: "purple",
  },
  {
    title: "Puzzles",
    telugu: "పజిల్స్",
    emoji: "🧩",
    text: "Test your brain",
    link: "/puzzles",
    className: "blue",
  },
  {
    title: "Colours",
    telugu: "రంగులు",
    emoji: "🎨",
    text: "Learn colours",
    link: "/colours",
    className: "yellow",
  },
  {
    title: "Learn",
    telugu: "నేర్చుకోండి",
    emoji: "📚",
    text: "ABC & Numbers",
    link: "/learn",
    className: "green",
  },
  {
    title: "Quiz",
    telugu: "క్విజ్",
    emoji: "🧠",
    text: "Test your knowledge",
    link: "/quiz",
    className: "orange",
  },
  {
    title: "Flags",
    telugu: "జెండాలు",
    emoji: "🌍",
    text: "Learn world flags",
    link: "/flags",
    className: "cyan",
  },
  {
    title: "World",
    telugu: "ప్రపంచం",
    emoji: "🌎",
    text: "Explore the world",
    link: "/world",
    className: "violet",
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

function playSound(type = "click") {
  if (typeof window === "undefined") return;

  try {
    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);

    if (type === "success") {
      oscillator.frequency.value = 850;
      gain.gain.value = 0.1;
    } else {
      oscillator.frequency.value = 550;
      gain.gain.value = 0.07;
    }

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      context.close();
    }, 180);
  } catch (error) {
    console.log("Sound unavailable");
  }
}

export default function Dashboard() {
  const [language, setLanguage] = useState("en");
  const [stars, setStars] = useState(25);
  const [completed, setCompleted] = useState(false);

  function completeChallenge() {
    if (completed) return;

    setStars((value) => value + 10);
    setCompleted(true);

    playSound("success");

    if (language === "te") {
      speak(
        "అభినందనలు! మీ డైలీ ఛాలెంజ్ పూర్తి అయింది. మీకు పది స్టార్స్ వచ్చాయి!",
        "te-IN"
      );
    } else {
      speak(
        "Congratulations! You completed today's challenge and earned ten stars!",
        "en-IN"
      );
    }
  }

  function welcomeVoice() {
    playSound();

    if (language === "te") {
      speak(
        "చిన్నారి కిడ్స్ డాష్‌బోర్డ్‌కు స్వాగతం! నేర్చుకుందాం, ఆడుకుందాం!",
        "te-IN"
      );
    } else {
      speak(
        "Welcome to your Chinnaari Kids dashboard! Let's learn and play!",
        "en-IN"
      );
    }
  }

  return (
    <>
      <Head>
        <title>Kids Dashboard | Chinnaari Kids</title>

        <meta
          name="description"
          content="Chinnaari Kids learning dashboard with stars, challenges, achievements, stories, games, puzzles and educational activities."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="theme-color"
          content="#7c4dff"
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

            <Link href="/stories">📚 Stories</Link>

            <Link href="/games">🎮 Games</Link>

            <Link href="/puzzles">🧩 Puzzles</Link>

            <Link href="/colours">🎨 Colours</Link>

            <Link href="/learn">📚 Learn</Link>

            <Link href="/quiz">🧠 Quiz</Link>
          </nav>

        </header>


        {/* WELCOME */}

        <section className="welcome">

          <div className="welcomeEmoji">
            🌟
          </div>

          <div className="welcomeContent">

            <p className="smallText">
              {language === "te"
                ? "చిన్నారి తారకు స్వాగతం!"
                : "Welcome, Little Star!"}
            </p>

            <h1>
              {language === "te"
                ? "నేర్చుకుందాం & ఆడుకుందాం! 🚀"
                : "Let's Learn & Play! 🚀"}
            </h1>

            <p>
              {language === "te"
                ? "మీ learning adventure ప్రారంభించండి."
                : "Choose an activity and start your learning adventure."}
            </p>

            <div className="controls">

              <button
                className={
                  language === "en"
                    ? "language active"
                    : "language"
                }
                onClick={() => setLanguage("en")}
              >
                🇬🇧 English
              </button>

              <button
                className={
                  language === "te"
                    ? "language active"
                    : "language"
                }
                onClick={() => setLanguage("te")}
              >
                🇮🇳 తెలుగు
              </button>

              <button
                className="voice"
                onClick={welcomeVoice}
              >
                🔊{" "}
                {language === "te"
                  ? "వినండి"
                  : "Listen"}
              </button>

            </div>

          </div>

        </section>


        {/* STATS */}

        <section className="stats">

          <div className="statCard">

            <div className="statEmoji">
              ⭐
            </div>

            <div>
              <strong>{stars}</strong>
              <span>Stars</span>
            </div>

          </div>


          <div className="statCard">

            <div className="statEmoji">
              🏆
            </div>

            <div>
              <strong>
                {completed ? "1" : "0"}
              </strong>

              <span>Challenges</span>
            </div>

          </div>


          <div className="statCard">

            <div className="statEmoji">
              🔥
            </div>

            <div>
              <strong>1</strong>
              <span>Day Streak</span>
            </div>

          </div>


          <div className="statCard">

            <div className="statEmoji">
              📈
            </div>

            <div>
              <strong>
                {completed ? "25%" : "15%"}
              </strong>

              <span>Progress</span>
            </div>

          </div>

        </section>


        {/* DAILY CHALLENGE */}

        <section className="challenge">

          <div className="challengeIcon">
            🎯
          </div>

          <div className="challengeContent">

            <span className="badge">
              ⭐ Daily Challenge
            </span>

            <h2>
              {language === "te"
                ? "ఈరోజు learning challenge పూర్తి చేయండి!"
                : "Complete today's learning challenge!"}
            </h2>

            <p>
              {language === "te"
                ? "ఒక activity పూర్తి చేసి +10 Stars పొందండి."
                : "Finish one activity today and earn +10 Stars ⭐"}
            </p>

            {!completed ? (
              <button onClick={completeChallenge}>
                🎉{" "}
                {language === "te"
                  ? "Challenge పూర్తి చేయండి"
                  : "Complete Challenge"}
              </button>
            ) : (
              <div className="completed">
                ✅{" "}
                {language === "te"
                  ? "Challenge పూర్తయింది!"
                  : "Challenge Completed!"}
              </div>
            )}

          </div>

        </section>


        {/* ACTIVITIES */}

        <section className="activities">

          <h2>
            🌟{" "}
            {language === "te"
              ? "మీ Adventure ఎంచుకోండి"
              : "Choose Your Adventure"}
          </h2>

          <p className="subtitle">
            {language === "te"
              ? "ఈరోజు ఏం నేర్చుకోవాలి?"
              : "What would you like to do today?"}
          </p>

          <div className="activityGrid">

            {activities.map((activity) => (
              <Link
                href={activity.link}
                className={`activityCard ${activity.className}`}
                key={activity.title}
                onClick={() => playSound()}
              >

                <div className="activityEmoji">
                  {activity.emoji}
                </div>

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

                <span className="arrow">
                  →
                </span>

              </Link>
            ))}

          </div>

        </section>


        {/* PROGRESS */}

        <section className="progressSection">

          <h2>
            📊 My Learning Progress
          </h2>

          <div className="progressGrid">

            <div className="progressCard">

              <div className="progressTop">
                <span>🎮 Games</span>
                <strong>40%</strong>
              </div>

              <div className="progressBar">
                <div className="progressFill gamesProgress" />
              </div>

            </div>


            <div className="progressCard">

              <div className="progressTop">
                <span>🧩 Puzzles</span>
                <strong>30%</strong>
              </div>

              <div className="progressBar">
                <div className="progressFill puzzleProgress" />
              </div>

            </div>


            <div className="progressCard">

              <div className="progressTop">
                <span>🎨 Colours</span>
                <strong>60%</strong>
              </div>

              <div className="progressBar">
                <div className="progressFill colourProgress" />
              </div>

            </div>


            <div className="progressCard">

              <div className="progressTop">
                <span>📚 Learning</span>
                <strong>45%</strong>
              </div>

              <div className="progressBar">
                <div className="progressFill learnProgress" />
              </div>

            </div>

          </div>

        </section>


        {/* ACHIEVEMENTS */}

        <section className="achievements">

          <h2>
            🏆 My Achievements
          </h2>

          <div className="achievementGrid">

            <div
              className={
                completed
                  ? "achievement unlocked"
                  : "achievement"
              }
            >

              <div>🎯</div>

              <h3>Daily Star</h3>

              <p>
                Complete a daily challenge
              </p>

              <span>
                {completed
                  ? "✅ Unlocked"
                  : "🔒 Locked"}
              </span>

            </div>


            <div className="achievement">

              <div>📚</div>

              <h3>Story Explorer</h3>

              <p>
                Read your first story
              </p>

              <span>
                🔒 Locked
              </span>

            </div>


            <div className="achievement">

              <div>🧩</div>

              <h3>Puzzle Master</h3>

              <p>
                Solve a puzzle
              </p>

              <span>
                🔒 Locked
              </span>

            </div>


            <div className="achievement">

              <div>🌈</div>

              <h3>Rainbow Learner</h3>

              <p>
                Learn all basic colours
              </p>

              <span>
                🔒 Locked
              </span>

            </div>

          </div>

        </section>


        {/* MOTIVATION */}

        <section className="motivation">

          <div className="motivationEmoji">
            🦸‍♀️
          </div>

          <div>

            <h2>
              {language === "te"
                ? "మీరు చాలా బాగా చేస్తున్నారు! 🌟"
                : "You are doing great! 🌟"}
            </h2>

            <p>
              {language === "te"
                ? "మీరు చదివే ప్రతి కథ, పరిష్కరించే ప్రతి puzzle మరియు నేర్చుకునే ప్రతి కొత్త విషయం మీ brainను మరింత బలంగా చేస్తుంది."
                : "Every story you read, every puzzle you solve and every new thing you learn makes your brain stronger."}
            </p>

            <strong>
              {language === "te"
                ? "నేర్చుకోండి. నవ్వుతూ ఉండండి. ❤️"
                : "Keep learning. Keep smiling. ❤️"}
            </strong>

          </div>

        </section>


        {/* HOME */}

        <div className="homeButton">

          <Link href="/">
            🏠 Back to Home
          </Link>

        </div>


        {/* FOOTER */}

        <footer>

          <h3>
            🌈 Chinnaari Kids
          </h3>

          <p>
            Learn • Play • Discover • Grow 🌟
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
          padding: 14px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: white;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logo {
          color: #333;
          text-decoration: none;
          font-size: 24px;
          font-weight: 800;
          white-space: nowrap;
        }

        nav {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
        }

        nav a:hover {
          color: #7c4dff;
        }

        .welcome {
          max-width: 1050px;
          margin: 35px auto 20px;
          padding: 35px;
          display: flex;
          align-items: center;
          gap: 25px;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #ffe1ea,
            #e1f5ff
          );
          box-shadow: 0 6px 25px rgba(0,0,0,0.06);
        }

        .welcomeEmoji {
          font-size: 75px;
        }

        .welcomeContent {
          flex: 1;
        }

        .smallText {
          margin: 0;
          color: #ff6b6b;
          font-weight: bold;
        }

        .welcome h1 {
          margin: 8px 0;
          font-size: 38px;
        }

        .welcome p:last-of-type {
          color: #555;
          font-size: 17px;
        }

        .controls {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 15px;
        }

        .language,
        .voice {
          border: none;
          padding: 10px 15px;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          font-weight: bold;
        }

        .language.active {
          background: #7c4dff;
          color: white;
        }

        .voice {
          background: #ff7a59;
          color: white;
        }

        .stats {
          max-width: 1050px;
          margin: 25px auto 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 0 20px;
        }

        .statCard {
          padding: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          background: white;
          border-radius: 22px;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
        }

        .statEmoji {
          font-size: 42px;
        }

        .statCard strong {
          display: block;
          font-size: 28px;
        }

        .statCard span {
          color: #777;
          font-size: 13px;
        }

        .challenge {
          max-width: 1050px;
          margin: 0 auto 50px;
          padding: 35px;
          display: flex;
          align-items: center;
          gap: 25px;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #fff0b8,
            #e5ddff
          );
          box-shadow: 0 6px 25px rgba(0,0,0,0.07);
        }

        .challengeIcon {
          font-size: 75px;
        }

        .challengeContent {
          flex: 1;
        }

        .badge {
          display: inline-block;
          padding: 7px 14px;
          border-radius: 20px;
          background: white;
          font-size: 14px;
          font-weight: bold;
        }

        .challenge h2 {
          margin: 12px 0 8px;
          font-size: 27px;
        }

        .challenge p {
          color: #555;
          line-height: 1.6;
        }

        .challenge button {
          border: none;
          padding: 13px 20px;
          border-radius: 25px;
          background: #ff6b6b;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .completed {
          display: inline-block;
          padding: 13px 20px;
          border-radius: 25px;
          background: #4caf50;
          color: white;
          font-weight: bold;
        }

        .activities {
          max-width: 1050px;
          margin: auto;
          padding: 0 20px 50px;
          text-align: center;
        }

        .activities h2 {
          font-size: 30px;
          margin-bottom: 5px;
        }

        .subtitle {
          color: #666;
          margin-bottom: 30px;
        }

        .activityGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .activityCard {
          position: relative;
          padding: 25px 12px;
          min-height: 180px;
          border-radius: 25px;
          color: #333;
          text-decoration: none;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
          transition: transform 0.2s;
        }

        .activityCard:hover {
          transform: translateY(-7px);
        }

        .activityEmoji {
          font-size: 48px;
        }

        .activityCard h3 {
          margin: 12px 0 7px;
          font-size: 19px;
        }

        .activityCard p {
          margin: 0;
          color: #555;
          font-size: 13px;
        }

        .arrow {
          display: block;
          margin-top: 15px;
          font-size: 22px;
          font-weight: bold;
        }

        .pink {
          background: #ffdce7;
        }

        .purple {
          background: #e9ddff;
        }

        .blue {
          background: #dff1ff;
        }

        .yellow {
          background: #fff0b8;
        }

        .green {
          background: #dcf6d9;
        }

        .orange {
          background: #ffe2c7;
        }

        .cyan {
          background: #d9f7f7;
        }

        .violet {
          background: #e8ddff;
        }

        .progressSection {
          max-width: 1050px;
          margin: 0 auto 50px;
          padding: 0 20px;
        }

        .progressSection h2 {
          text-align: center;
          font-size: 30px;
          margin-bottom: 25px;
        }

        .progressGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .progressCard {
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
        }

        .progressTop {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .progressBar {
          width: 100%;
          height: 12px;
          background: #eee;
          border-radius: 20px;
          overflow: hidden;
        }

        .progressFill {
          height: 100%;
          border-radius: 20px;
        }

        .gamesProgress {
          width: 40%;
          background: #9c7cff;
        }

        .puzzleProgress {
          width: 30%;
          background: #5ca9e6;
        }

        .colourProgress {
          width: 60%;
          background: #f3c84b;
        }

        .learnProgress {
          width: 45%;
          background: #65bb6c;
        }

        .achievements {
          max-width: 1050px;
          margin: 0 auto 50px;
          padding: 35px 20px;
          text-align: center;
        }

        .achievements h2 {
          font-size: 30px;
          margin-bottom: 30px;
        }

        .achievementGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .achievement {
          padding: 25px 15px;
          border-radius: 25px;
          background: white;
          box-shadow: 0 5px 18px rgba(0,0,0,0.06);
          opacity: 0.75;
        }

        .achievement.unlocked {
          opacity: 1;
          background: linear-gradient(
            135deg,
            #fff0b8,
            #e1f7dd
          );
        }

        .achievement > div {
          font-size: 45px;
        }

        .achievement h3 {
          margin: 10px 0 5px;
        }

        .achievement p {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }

        .achievement span {
          font-size: 13px;
          font-weight: bold;
        }

        .motivation {
          max-width: 900px;
          margin: 0 auto 45px;
          padding: 35px;
          display: flex;
          align-items: center;
          gap: 25px;
          border-radius: 30px;
          background: linear-gradient(
            135deg,
            #e0f6ff,
            #f0e2ff
          );
        }

        .motivationEmoji {
          font-size: 75px;
        }

        .motivation h2 {
          margin-top: 0;
        }

        .motivation p {
          color: #555;
          line-height: 1.7;
        }

        .homeButton {
          text-align: center;
          margin: 40px 0 55px;
        }

        .homeButton a {
          display: inline-block;
          padding: 13px 22px;
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

        footer h3 {
          margin-top: 0;
        }

        footer p {
          margin: 8px;
        }

        @media (max-width: 900px) {

          .header {
            flex-direction: column;
          }

          nav {
            justify-content: center;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .activityGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .achievementGrid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 600px) {

          .welcome {
            margin-left: 20px;
            margin-right: 20px;
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }

          .welcome h1 {
            font-size: 30px;
          }

          .controls {
            justify-content: center;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .challenge {
            margin-left: 20px;
            margin-right: 20px;
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }

          .progressGrid {
            grid-template-columns: 1fr;
          }

          .achievementGrid {
            grid-template-columns: 1fr 1fr;
          }

          .motivation {
            margin-left: 20px;
            margin-right: 20px;
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }

        }

        @media (max-width: 400px) {

          .activityGrid {
            grid-template-columns: 1fr;
          }

          .achievementGrid {
            grid-template-columns: 1fr;
          }

        }

      `}</style>
    </>
  );
}
