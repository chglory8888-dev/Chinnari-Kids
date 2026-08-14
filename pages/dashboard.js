import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const activities = [
  {
    title: "Stories",
    emoji: "📚",
    text: "Read fun stories",
    link: "/stories",
    className: "pink",
  },
  {
    title: "Games",
    emoji: "🎮",
    text: "Play and learn",
    link: "/games",
    className: "purple",
  },
  {
    title: "Puzzles",
    emoji: "🧩",
    text: "Test your brain",
    link: "/puzzles",
    className: "blue",
  },
  {
    title: "Colours",
    emoji: "🎨",
    text: "Learn colours",
    link: "/colours",
    className: "yellow",
  },
  {
    title: "Learn",
    emoji: "🔤",
    text: "ABC & Numbers",
    link: "/learn",
    className: "green",
  },
];

export default function Dashboard() {
  const [stars, setStars] = useState(25);
  const [completed, setCompleted] = useState(false);

  function completeChallenge() {
    if (!completed) {
      setStars((value) => value + 10);
      setCompleted(true);
    }
  }

  return (
    <>
      <Head>
        <title>Kids Dashboard | Chinnaari Kids</title>

        <meta
          name="description"
          content="Chinnaari Kids learning dashboard with stars, daily challenges, stories, games, puzzles and educational activities."
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

        {/* WELCOME */}

        <section className="welcome">

          <div className="welcomeEmoji">
            🌟
          </div>

          <div>

            <p className="smallText">
              Welcome, Little Star!
            </p>

            <h1>
              Let's Learn & Play! 🚀
            </h1>

            <p>
              Choose an activity and start your
              learning adventure.
            </p>

          </div>

        </section>

        {/* STATS */}

        <section className="stats">

          <div className="statCard">

            <div className="statEmoji">
              ⭐
            </div>

            <div>
              <strong>
                {stars}
              </strong>

              <span>
                Stars
              </span>
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

              <span>
                Challenges
              </span>
            </div>

          </div>

          <div className="statCard">

            <div className="statEmoji">
              🔥
            </div>

            <div>
              <strong>
                1
              </strong>

              <span>
                Day Streak
              </span>
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
              Complete today's learning challenge!
            </h2>

            <p>
              Finish one activity today and earn
              <strong> +10 Stars ⭐</strong>
            </p>

            {!completed ? (
              <button
                onClick={completeChallenge}
              >
                🎉 Complete Challenge
              </button>
            ) : (
              <div className="completed">
                ✅ Challenge Completed!
              </div>
            )}

          </div>

        </section>

        {/* ACTIVITIES */}

        <section className="activities">

          <h2>
            🌟 Choose Your Adventure
          </h2>

          <p className="subtitle">
            What would you like to do today?
          </p>

          <div className="activityGrid">

            {activities.map((activity) => (
              <Link
                href={activity.link}
                className={`activityCard ${activity.className}`}
                key={activity.title}
              >

                <div className="activityEmoji">
                  {activity.emoji}
                </div>

                <h3>
                  {activity.title}
                </h3>

                <p>
                  {activity.text}
                </p>

                <span className="arrow">
                  →
                </span>

              </Link>
            ))}

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

              <div>
                🎯
              </div>

              <h3>
                Daily Star
              </h3>

              <p>
                Complete a daily challenge
              </p>

              <span>
                {completed ? "✅ Unlocked" : "🔒 Locked"}
              </span>

            </div>

            <div className="achievement">

              <div>
                📚
              </div>

              <h3>
                Story Explorer
              </h3>

              <p>
                Read your first story
              </p>

              <span>
                🔒 Locked
              </span>

            </div>

            <div className="achievement">

              <div>
                🧩
              </div>

              <h3>
                Puzzle Master
              </h3>

              <p>
                Solve a puzzle
              </p>

              <span>
                🔒 Locked
              </span>

            </div>

            <div className="achievement">

              <div>
                🌈
              </div>

              <h3>
                Rainbow Learner
              </h3>

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
              You are doing great! 🌟
            </h2>

            <p>
              Every story you read, every puzzle you
              solve and every new thing you learn
              makes your brain stronger.
            </p>

            <strong>
              Keep learning. Keep smiling. ❤️
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
          gap: 15px;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-weight: 600;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        /* WELCOME */

        .welcome {
          max-width: 1050px;

          margin: 35px auto 20px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #ffe1ea,
              #e1f5ff
            );

          box-shadow:
            0 6px 25px
            rgba(0,0,0,0.06);
        }

        .welcomeEmoji {
          font-size: 75px;
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

        .welcome p:last-child {
          margin-bottom: 0;

          color: #555;

          font-size: 17px;
        }

        /* STATS */

        .stats {
          max-width: 1050px;

          margin: 25px auto 40px;

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

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

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.06);
        }

        .statEmoji {
          font-size: 45px;
        }

        .statCard strong {
          display: block;

          font-size: 30px;
        }

        .statCard span {
          color: #777;
        }

        /* CHALLENGE */

        .challenge {
          max-width: 1050px;

          margin: 0 auto 50px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e5ddff
            );

          box-shadow:
            0 6px 25px
            rgba(0,0,0,0.07);
        }

        .challengeIcon {
          font-size: 75px;
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

          transition:
            transform 0.2s;
        }

        .challenge button:hover {
          transform: scale(1.04);
        }

        .completed {
          display: inline-block;

          padding: 13px 20px;

          border-radius: 25px;

          background: #4caf50;

          color: white;

          font-weight: bold;
        }

        /* ACTIVITIES */

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

          grid-template-columns:
            repeat(5, 1fr);

          gap: 15px;
        }

        .activityCard {
          position: relative;

          padding: 25px 12px;

          min-height: 190px;

          border-radius: 25px;

          color: #333;

          text-decoration: none;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.06);

          transition:
            transform 0.2s;
        }

        .activityCard:hover {
          transform: translateY(-7px);
        }

        .activityEmoji {
          font-size: 50px;
        }

        .activityCard h3 {
          margin: 12px 0 7px;

          font-size: 20px;
        }

        .activityCard p {
          margin: 0;

          color: #555;

          font-size: 14px;
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

        /* ACHIEVEMENTS */

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

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;
        }

        .achievement {
          padding: 25px 15px;

          border-radius: 25px;

          background: white;

          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.06);

          opacity: 0.75;
        }

        .achievement.unlocked {
          opacity: 1;

          background:
            linear-gradient(
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

        /* MOTIVATION */

        .motivation {
          max-width: 900px;

          margin: 0 auto 45px;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
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

        /* HOME */

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

        @media (max-width: 900px) {

          .header {
            flex-direction: column;

            gap: 15px;
          }

          nav {
            justify-content: center;
          }

          .activityGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .achievementGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        /* MOBILE */

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

          .activityGrid {
            grid-template-columns:
              repeat(2, 1fr);
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
