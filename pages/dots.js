import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const activities = [
  {
    title: "Numbers",
    icon: "🔢",
    type: "number",
    count: 10,
  },
  {
    title: "ABC",
    icon: "🔤",
    type: "abc",
    count: 8,
  },
  {
    title: "తెలుగు",
    icon: "అ",
    type: "telugu",
    count: 8,
  },
  {
    title: "Animals",
    icon: "🐶",
    type: "animals",
    count: 8,
  },
  {
    title: "Birds",
    icon: "🐦",
    type: "birds",
    count: 8,
  },
  {
    title: "Insects",
    icon: "🦋",
    type: "insects",
    count: 8,
  },
  {
    title: "Fruits",
    icon: "🍎",
    type: "fruits",
    count: 8,
  },
  {
    title: "Flowers",
    icon: "🌸",
    type: "flowers",
    count: 8,
  },
  {
    title: "Vehicles",
    icon: "🚗",
    type: "vehicles",
    count: 8,
  },
  {
    title: "Shapes",
    icon: "⭐",
    type: "shapes",
    count: 8,
  },
];

const collections = {
  animals: ["🐶", "🐱", "🦁", "🐘", "🐼", "🐯", "🐰", "🐵"],
  birds: ["🐦", "🦜", "🦉", "🦅", "🦢", "🦚", "🐧", "🦩"],
  insects: ["🦋", "🐝", "🐞", "🐜", "🪲", "🦗", "🪰", "🦟"],
  fruits: ["🍎", "🍌", "🍊", "🍉", "🍇", "🍓", "🥭", "🍍"],
  flowers: ["🌸", "🌹", "🌻", "🌷", "🌼", "💐", "🪷", "🌺"],
  vehicles: ["🚗", "🚌", "🚕", "🚓", "🚑", "🚒", "🚲", "✈️"],
  shapes: ["⭐", "❤️", "🔵", "🟩", "🔺", "⬛", "💎", "🌙"],
};

const abcLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];

const teluguLetters = [
  "అ",
  "ఆ",
  "ఇ",
  "ఈ",
  "ఉ",
  "ఊ",
  "ఎ",
  "ఏ",
];

function createDots(type, count) {
  const dots = [];

  for (let i = 0; i < count; i++) {
    const angle =
      (Math.PI * 2 * i) / count - Math.PI / 2;

    const radius = 145;

    const x =
      250 + Math.cos(angle) * radius;

    const y =
      250 + Math.sin(angle) * radius;

    dots.push({
      x,
      y,
      number: i + 1,
    });
  }

  return dots;
}

export default function Dots() {
  const [activity, setActivity] = useState(
    activities[0]
  );

  const [level, setLevel] = useState("easy");

  const [connected, setConnected] = useState([]);

  const [completed, setCompleted] = useState(false);

  const [message, setMessage] = useState(
    "Connect the dots in order!"
  );

  const [target, setTarget] = useState(
    "🔢 Numbers"
  );

  const svgRef = useRef(null);

  const dots = createDots(
    activity.type,
    activity.count
  );

  useEffect(() => {
    resetGame();
  }, [activity, level]);

  function resetGame() {
    setConnected([]);
    setCompleted(false);
    setMessage("Connect the dots in order!");
  }

  function chooseActivity(item) {
    setActivity(item);
    setTarget(`${item.icon} ${item.title}`);
  }

  function chooseDot(number) {
    const expected =
      connected.length + 1;

    if (number === expected) {
      const updated = [
        ...connected,
        number,
      ];

      setConnected(updated);

      if (
        updated.length ===
        activity.count
      ) {
        setCompleted(true);
        setMessage(
          "🎉 Great Job! You connected all the dots!"
        );
      } else {
        setMessage(
          `⭐ Great! Now connect dot ${number + 1}`
        );
      }
    } else {
      setMessage(
        `😊 Try again! Find dot ${expected}`
      );
    }
  }

  function getPath() {
    if (connected.length === 0) {
      return "";
    }

    return connected
      .map((number, index) => {
        const dot =
          dots[number - 1];

        if (index === 0) {
          return `M ${dot.x} ${dot.y}`;
        }

        return `L ${dot.x} ${dot.y}`;
      })
      .join(" ");
  }

  function getCenterContent() {
    if (!completed) {
      return "🔵";
    }

    if (
      activity.type === "number"
    ) {
      return "🔢";
    }

    if (
      activity.type === "abc"
    ) {
      return "🔤";
    }

    if (
      activity.type === "telugu"
    ) {
      return "అ";
    }

    const list =
      collections[activity.type];

    return list
      ? list[0]
      : "🌟";
  }

  return (
    <>
      <Head>
        <title>
          Dot to Dot | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun dot to dot learning activities for kids with numbers, ABC, Telugu, animals, birds, insects, fruits, flowers, vehicles and shapes."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

        <header className="header">

          <Link
            href="/"
            className="logo"
          >
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">
              Home
            </Link>

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/writing">
              ✏️ Writing
            </Link>

            <Link href="/drawing">
              🎨 Drawing
            </Link>

            <Link href="/world">
              🌍 World Explorer
            </Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroEmoji">
            🔵✨🔵
          </div>

          <h1>
            Dot-to-Dot Fun
          </h1>

          <p>
            Connect the dots and discover something
            amazing!
          </p>

          <div className="heroMini">
            1️⃣ ➡️ 2️⃣ ➡️ 3️⃣ ➡️ 🎉
          </div>

        </section>

        <section className="categorySection">

          <h2>
            🌟 Choose Your Activity
          </h2>

          <div className="categoryGrid">

            {activities.map((item) => (
              <button
                key={item.type}
                className={
                  activity.type ===
                  item.type
                    ? "category activeCategory"
                    : "category"
                }
                onClick={() =>
                  chooseActivity(item)
                }
              >

                <span className="categoryIcon">
                  {item.icon}
                </span>

                <span>
                  {item.title}
                </span>

              </button>
            ))}

          </div>

        </section>

        <section className="gameSection">

          <div className="gameTop">

            <div>

              <span className="targetIcon">
                {activity.icon}
              </span>

              <strong>
                {activity.title}
              </strong>

            </div>

            <div className="progress">

              {connected.length} /{" "}
              {activity.count}

            </div>

          </div>

          <div className="levels">

            <button
              className={
                level === "easy"
                  ? "level activeLevel"
                  : "level"
              }
              onClick={() =>
                setLevel("easy")
              }
            >
              🟢 Easy
            </button>

            <button
              className={
                level === "medium"
                  ? "level activeLevel"
                  : "level"
              }
              onClick={() =>
                setLevel("medium")
              }
            >
              🟡 Medium
            </button>

            <button
              className={
                level === "hard"
                  ? "level activeLevel"
                  : "level"
              }
              onClick={() =>
                setLevel("hard")
              }
            >
              🔴 Hard
            </button>

          </div>

          <div className="canvasArea">

            <svg
              ref={svgRef}
              viewBox="0 0 500 500"
              className="dotCanvas"
            >

              <rect
                x="0"
                y="0"
                width="500"
                height="500"
                rx="30"
                fill="#fff"
              />

              {connected.length > 1 && (
                <path
                  d={getPath()}
                  fill="none"
                  stroke="#ff7a00"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {dots.map((dot) => {

                const isConnected =
                  connected.includes(
                    dot.number
                  );

                return (
                  <g
                    key={dot.number}
                    onClick={() =>
                      chooseDot(
                        dot.number
                      )
                    }
                    onTouchStart={() =>
                      chooseDot(
                        dot.number
                      )
                    }
                    className="dotGroup"
                  >

                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="25"
                      fill={
                        isConnected
                          ? "#4caf50"
                          : "#ffffff"
                      }
                      stroke={
                        isConnected
                          ? "#2e7d32"
                          : "#333"
                      }
                      strokeWidth="4"
                    />

                    <text
                      x={dot.x}
                      y={dot.y + 7}
                      textAnchor="middle"
                      fontSize="19"
                      fontWeight="bold"
                      fill={
                        isConnected
                          ? "#ffffff"
                          : "#333"
                      }
                    >
                      {dot.number}
                    </text>

                  </g>
                );
              })}

              {completed && (
                <text
                  x="250"
                  y="270"
                  textAnchor="middle"
                  fontSize="80"
                >
                  {getCenterContent()}
                </text>
              )}

            </svg>

          </div>

          <div className="message">
            {message}
          </div>

          <div className="buttons">

            <button
              className="reset"
              onClick={resetGame}
            >
              🔄 Start Again
            </button>

          </div>

        </section>

        <section className="instructions">

          <div className="instructionCard">

            <div>
              1️⃣
            </div>

            <h3>
              Find Number 1
            </h3>

            <p>
              Start with the first dot.
            </p>

          </div>

          <div className="instructionCard">

            <div>
              2️⃣
            </div>

            <h3>
              Follow the Numbers
            </h3>

            <p>
              Connect each dot in order.
            </p>

          </div>

          <div className="instructionCard">

            <div>
              🎉
            </div>

            <h3>
              Discover!
            </h3>

            <p>
              Complete all dots and see the result.
            </p>

          </div>

        </section>

        <section className="learning">

          <div className="learningEmoji">
            🧠
          </div>

          <div>

            <h2>
              Learn While Playing
            </h2>

            <p>
              Dot-to-dot activities help children
              practice counting, concentration,
              hand-eye coordination and sequencing.
            </p>

            <p className="telugu">
              ఆటలతో పాటు సంఖ్యలు, అక్షరాలు,
              గుర్తింపు మరియు concentration
              నేర్చుకోవచ్చు!
            </p>

          </div>

        </section>

        <section className="links">

          <Link href="/drawing">
            🎨 Drawing
          </Link>

          <Link href="/writing">
            ✏️ Writing
          </Link>

          <Link href="/games">
            🎮 Games
          </Link>

          <Link href="/puzzles">
            🧩 Puzzles
          </Link>

          <Link href="/world">
            🌍 World Explorer
          </Link>

        </section>

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
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          position: sticky;
          top: 0;
          z-index: 20;
          box-shadow: 0 2px 15px rgba(0,0,0,.08);
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
          gap: 13px;
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
              #e0f7ff,
              #fff2c7,
              #fce1ff
            );
        }

        .heroEmoji {
          font-size: 55px;
          letter-spacing: 10px;
        }

        .hero h1 {
          font-size: 44px;
          margin: 12px 0;
        }

        .hero p {
          color: #555;
          font-size: 19px;
        }

        .heroMini {
          margin-top: 20px;
          font-size: 28px;
        }

        .categorySection {
          max-width: 1050px;
          margin: 35px auto;
          padding: 0 20px;
          text-align: center;
        }

        .categorySection h2 {
          font-size: 28px;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns:
            repeat(5, 1fr);
          gap: 12px;
          margin-top: 22px;
        }

        .category {
          border: 2px solid #eee;
          background: white;
          border-radius: 20px;
          padding: 14px 8px;
          cursor: pointer;
          font-size: 15px;
          font-weight: bold;
          transition: .2s;
        }

        .category:hover {
          transform: translateY(-4px);
        }

        .categoryIcon {
          display: block;
          font-size: 38px;
          margin-bottom: 5px;
        }

        .activeCategory {
          border-color: #ff9d42;
          background: #fff0d0;
          transform: translateY(-4px);
        }

        .gameSection {
          max-width: 850px;
          margin: 25px auto 55px;
          padding: 25px;
          background: white;
          border-radius: 30px;
          box-shadow:
            0 7px 25px rgba(0,0,0,.08);
        }

        .gameTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 24px;
        }

        .targetIcon {
          font-size: 42px;
          margin-right: 10px;
        }

        .progress {
          background: #fff0c9;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }

        .levels {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 20px 0;
        }

        .level {
          border: none;
          padding: 10px 18px;
          border-radius: 20px;
          background: #f3f3f3;
          cursor: pointer;
          font-weight: bold;
        }

        .activeLevel {
          background: #ffe0a8;
        }

        .canvasArea {
          max-width: 560px;
          margin: auto;
          padding: 10px;
          background: #f8fbff;
          border: 3px dashed #bbb;
          border-radius: 30px;
        }

        .dotCanvas {
          width: 100%;
          height: auto;
          display: block;
          touch-action: manipulation;
        }

        .dotGroup {
          cursor: pointer;
        }

        .dotGroup:hover circle {
          fill: #fff0a8;
        }

        .message {
          text-align: center;
          margin: 20px auto;
          max-width: 600px;
          padding: 14px;
          background: #eaffdf;
          border-radius: 22px;
          font-weight: bold;
        }

        .buttons {
          text-align: center;
        }

        .reset {
          border: none;
          background: #333;
          color: white;
          padding: 13px 25px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
        }

        .instructions {
          max-width: 1000px;
          margin: 30px auto 50px;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 15px;
        }

        .instructionCard {
          text-align: center;
          padding: 25px 15px;
          background: white;
          border-radius: 25px;
          box-shadow:
            0 5px 18px rgba(0,0,0,.06);
        }

        .instructionCard div {
          font-size: 45px;
        }

        .instructionCard h3 {
          margin-bottom: 5px;
        }

        .instructionCard p {
          color: #666;
        }

        .learning {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          background: white;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow:
            0 5px 20px rgba(0,0,0,.06);
        }

        .learningEmoji {
          font-size: 70px;
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
          background: #333;
          color: white;
          text-decoration: none;
          padding: 13px 20px;
          border-radius: 25px;
          font-weight: bold;
        }

        footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 35px 20px;
        }

        footer p {
          margin: 8px;
        }

        @media (max-width: 800px) {

          .categoryGrid {
            grid-template-columns:
              repeat(4, 1fr);
          }

          .instructions {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 600px) {

          .header {
            flex-direction: column;
          }

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .heroEmoji {
            font-size: 40px;
          }

          .categoryGrid {
            grid-template-columns:
              repeat(3, 1fr);
}
