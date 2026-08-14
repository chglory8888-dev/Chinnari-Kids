import Head from "next/head";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "The Thirsty Crow",
    teluguTitle: "దాహంతో ఉన్న కాకి",
    emoji: "🐦",
    category: "Moral Story",
    description:
      "A clever crow finds a smart way to get water and teaches us an important lesson.",
    lesson: "Where there is a will, there is a way.",
    color: "pink",
  },
  {
    id: 2,
    title: "The Lion and the Mouse",
    teluguTitle: "సింహం మరియు ఎలుక",
    emoji: "🦁",
    category: "Friendship",
    description:
      "A tiny mouse helps a mighty lion and shows that everyone can be helpful.",
    lesson: "Never underestimate anyone.",
    color: "yellow",
  },
  {
    id: 3,
    title: "The Honest Woodcutter",
    teluguTitle: "నిజాయితీ గల కట్టెలవాడు",
    emoji: "🪓",
    category: "Good Habits",
    description:
      "A poor woodcutter chooses honesty when he gets a chance to take something that is not his.",
    lesson: "Honesty is always rewarded.",
    color: "green",
  },
  {
    id: 4,
    title: "The Hare and the Tortoise",
    teluguTitle: "కుందేలు మరియు తాబేలు",
    emoji: "🐰",
    category: "Life Lesson",
    description:
      "A fast hare learns an important lesson when a slow and steady tortoise wins the race.",
    lesson: "Slow and steady wins the race.",
    color: "blue",
  },
];

export default function Stories() {
  return (
    <>
      <Head>
        <title>Stories for Kids | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun and educational stories for children with simple moral lessons. Read Telugu and English stories at Chinnaari Kids."
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
            <Link href="/stories" className="active">
              📚 Stories
            </Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
          </nav>

        </header>

        {/* HERO */}

        <section className="storyHero">

          <div className="heroEmoji">
            📚✨
          </div>

          <h1>
            Wonderful Stories
          </h1>

          <p>
            Read fun stories, discover new ideas
            <br />
            and learn valuable lessons! 🌟
          </p>

        </section>

        {/* STORY LIST */}

        <section className="storySection">

          <div className="sectionHeading">

            <h2>
              📖 Choose a Story
            </h2>

            <p>
              Pick a story and start your adventure!
            </p>

          </div>

          <div className="storyGrid">

            {stories.map((story) => (

              <article
                key={story.id}
                className={`storyCard ${story.color}`}
              >

                <div className="storyEmoji">
                  {story.emoji}
                </div>

                <div className="category">
                  ⭐ {story.category}
                </div>

                <h3>
                  {story.title}
                </h3>

                <h4>
                  {story.teluguTitle}
                </h4>

                <p>
                  {story.description}
                </p>

                <div className="lesson">
                  💡 {story.lesson}
                </div>

                <button
                  className="readButton"
                  type="button"
                >
                  📖 Read Story
                </button>

              </article>

            ))}

          </div>

        </section>

        {/* LEARNING MESSAGE */}

        <section className="message">

          <div className="messageEmoji">
            🧠
          </div>

          <div>

            <h2>
              Every story teaches something! 🌟
            </h2>

            <p>
              Stories help children imagine,
              understand emotions, learn good habits
              and discover valuable life lessons.
            </p>

          </div>

        </section>

        {/* BACK HOME */}

        <div className="backHome">

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
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-weight: 600;
        }

        nav a:hover,
        nav a.active {
          color: #ff6b6b;
        }

        /* HERO */

        .storyHero {
          text-align: center;

          padding: 60px 20px;

          background:
            linear-gradient(
              135deg,
              #ffe1ea,
              #fff1c7
            );
        }

        .heroEmoji {
          font-size: 75px;
        }

        .storyHero h1 {
          font-size: 45px;
          margin: 15px 0 10px;
        }

        .storyHero p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
        }

        /* STORIES */

        .storySection {
          padding: 55px 7%;
        }

        .sectionHeading {
          text-align: center;
          margin-bottom: 35px;
        }

        .sectionHeading h2 {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .sectionHeading p {
          color: #666;
          font-size: 17px;
        }

        .storyGrid {
          max-width: 1200px;
          margin: auto;

          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 25px;
        }

        .storyCard {
          padding: 30px;

          border-radius: 28px;

          min-height: 430px;

          box-shadow:
            0 6px 20px
            rgba(0, 0, 0, 0.06);

          transition:
            transform 0.25s,
            box-shadow 0.25s;
        }

        .storyCard:hover {
          transform: translateY(-6px);

          box-shadow:
            0 12px 30px
            rgba(0, 0, 0, 0.1);
        }

        .pink {
          background: #ffe0e9;
        }

        .yellow {
          background: #fff0bd;
        }

        .green {
          background: #ddf5dc;
        }

        .blue {
          background: #dceeff;
        }

        .storyEmoji {
          font-size: 70px;
          margin-bottom: 12px;
        }

        .category {
          display: inline-block;

          padding: 7px 13px;

          background: white;

          border-radius: 20px;

          font-size: 13px;

          font-weight: bold;
        }

        .storyCard h3 {
          font-size: 25px;
          margin: 15px 0 5px;
        }

        .storyCard h4 {
          margin: 0 0 15px;

          font-size: 18px;

          color: #555;
        }

        .storyCard p {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
        }

        .lesson {
          margin-top: 18px;

          padding: 13px;

          background: rgba(255, 255, 255, 0.7);

          border-radius: 15px;

          font-weight: bold;

          line-height: 1.5;
        }

        .readButton {
          margin-top: 20px;

          padding: 12px 20px;

          border: none;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          font-size: 15px;

          font-weight: bold;

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .readButton:hover {
          transform: scale(1.04);
        }

        /* MESSAGE */

        .message {
          max-width: 1000px;

          margin: 10px auto 50px;

          padding: 35px;

          border-radius: 30px;

          display: flex;

          align-items: center;

          gap: 25px;

          background:
            linear-gradient(
              135deg,
              #e3f5ff,
              #eee5ff
            );

          box-shadow:
            0 6px 22px
            rgba(0, 0, 0, 0.06);
        }

        .messageEmoji {
          font-size: 70px;
        }

        .message h2 {
          margin-top: 0;
          font-size: 27px;
        }

        .message p {
          line-height: 1.7;
          color: #555;
          font-size: 17px;
        }

        /* BACK */

        .backHome {
          text-align: center;
          margin-bottom: 50px;
        }

        .backHome a {
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

          .storyHero h1 {
            font-size: 36px;
          }

          .storyGrid {
            grid-template-columns: 1fr;
          }

          .message {
            margin-left: 20px;
            margin-right: 20px;

            flex-direction: column;

            text-align: center;
          }

        }

        /* MOBILE */

        @media (max-width: 500px) {

          .storySection {
            padding-left: 20px;
            padding-right: 20px;
          }

          .storyCard {
            padding: 25px;
          }

          .heroEmoji {
            font-size: 60px;
          }

          .storyHero h1 {
            font-size: 32px;
          }

          .storyHero p {
            font-size: 16px;
          }

        }

      `}</style>
    </>
  );
    }
