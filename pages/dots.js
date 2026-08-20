import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

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

function createDots(count) {
  const dots = [];

  for (let i = 0; i < count; i++) {
    const angle =
      (Math.PI * 2 * i) / count - Math.PI / 2;

    const radius = 145;

    const x = 250 + Math.cos(angle) * radius;
    const y = 250 + Math.sin(angle) * radius;

    dots.push({
      x,
      y,
      number: i + 1,
    });
  }

  return dots;
}

/* --------------------------------
   DOTTED WRITING DATA
-------------------------------- */

const dottedNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

const dottedABC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const dottedTeluguVowels = [
  "అ",
  "ఆ",
  "ఇ",
  "ఈ",
  "ఉ",
  "ఊ",
  "ఋ",
  "ఎ",
  "ఏ",
  "ఐ",
  "ఒ",
  "ఓ",
  "ఔ",
];

const dottedTeluguConsonants = [
  "క",
  "ఖ",
  "గ",
  "ఘ",
  "ఙ",
  "చ",
  "ఛ",
  "జ",
  "ఝ",
  "ఞ",
  "ట",
  "ఠ",
  "డ",
  "ఢ",
  "ణ",
  "త",
  "థ",
  "ద",
  "ధ",
  "న",
  "ప",
  "ఫ",
  "బ",
  "భ",
  "మ",
  "య",
  "ర",
  "ల",
  "వ",
  "శ",
  "ష",
  "స",
  "హ",
];

const dottedSets = {
  numbers: {
    title: "Numbers",
    icon: "🔢",
    items: dottedNumbers,
  },
  abc: {
    title: "English A-Z",
    icon: "🔤",
    items: dottedABC,
  },
  vowels: {
    title: "తెలుగు అచ్చులు",
    icon: "అ",
    items: dottedTeluguVowels,
  },
  consonants: {
    title: "తెలుగు హల్లులు",
    icon: "క",
    items: dottedTeluguConsonants,
  },
};

export default function Dots() {
  /* --------------------------------
     DOT TO DOT GAME
  -------------------------------- */

  const [activity, setActivity] = useState(
    activities[0]
  );

  const [level, setLevel] = useState("easy");

  const [connected, setConnected] = useState([]);

  const [completed, setCompleted] = useState(false);

  const [message, setMessage] = useState(
    "Connect the dots in order!"
  );

  /* --------------------------------
     DOTTED WRITING
  -------------------------------- */

  const [dottedType, setDottedType] =
    useState("numbers");

  const [dottedIndex, setDottedIndex] =
    useState(0);

  const [practiceMessage, setPracticeMessage] =
    useState(
      "Trace the dotted character with your finger ✏️"
    );

  const dottedSet =
    dottedSets[dottedType];

  const currentDotted =
    dottedSet.items[dottedIndex];

  const dots = createDots(activity.count);

  useEffect(() => {
    resetGame();
  }, [activity, level]);

  function resetGame() {
    setConnected([]);
    setCompleted(false);
    setMessage(
      "Connect the dots in order!"
    );
  }

  function chooseActivity(item) {
    setActivity(item);
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
          `⭐ Great! Now connect dot ${
            number + 1
          }`
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

  /* --------------------------------
     DOTTED PRACTICE FUNCTIONS
  -------------------------------- */

  function selectDottedType(type) {
    setDottedType(type);
    setDottedIndex(0);
    setPracticeMessage(
      "Trace the dotted character with your finger ✏️"
    );
  }

  function nextDotted() {
    if (
      dottedIndex <
      dottedSet.items.length - 1
    ) {
      setDottedIndex(
        dottedIndex + 1
      );

      setPracticeMessage(
        "Great! Now trace this one ✏️"
      );
    } else {
      setPracticeMessage(
        "🎉 Excellent! You completed this set!"
      );
    }
  }

  function previousDotted() {
    if (dottedIndex > 0) {
      setDottedIndex(
        dottedIndex - 1
      );

      setPracticeMessage(
        "Let's practice again ✏️"
      );
    }
  }

  function resetDotted() {
    setDottedIndex(0);

    setPracticeMessage(
      "Trace the dotted character with your finger ✏️"
    );
  }

  return (
    <>
      <Head>

        <title>
          Dot to Dot & Dotted Lines | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun dot to dot games and dotted line writing practice for kids. Learn numbers, English ABC, Telugu vowels and Telugu consonants."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

      </Head>

      <main className="page">

        {/* HEADER */}

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

            <Link href="/world-explorer">
              🌍 World Explorer
            </Link>

          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroEmoji">
            🔵✨🔵
          </div>

          <h1>
            Dot-to-Dot Fun
          </h1>

          <p>
            Connect the dots and discover something amazing!
          </p>

          <div className="heroMini">
            1️⃣ ➡️ 2️⃣ ➡️ 3️⃣ ➡️ 🎉
          </div>

        </section>

        {/* DOTTED WRITING PRACTICE */}

        <section className="dottedSection">

          <div className="dottedHeader">

            <div className="pencilIcon">
              ✏️
            </div>

            <div>

              <h2>
                Dotted Line Writing Practice
              </h2>

              <p>
                Trace the dotted letters and numbers!
              </p>

            </div>

          </div>

          {/* DOTTED CATEGORY BUTTONS */}

          <div className="dottedCategories">

            {Object.entries(
              dottedSets
            ).map(
              ([key, item]) => (

                <button
                  key={key}
                  className={
                    dottedType === key
                      ? "dottedCategory activeDottedCategory"
                      : "dottedCategory"
                  }
                  onClick={() =>
                    selectDottedType(key)
                  }
                >

                  <span>
                    {item.icon}
                  </span>

                  {item.title}

                </button>

              )
            )}

          </div>

          {/* PRACTICE CARD */}

          <div className="practiceCard">

            <div className="practiceTop">

              <span>
                {dottedSet.icon}{" "}
                {dottedSet.title}
              </span>

              <span className="practiceCount">
                {dottedIndex + 1} /{" "}
                {dottedSet.items.length}
              </span>

            </div>

            <div className="dottedCanvas">

              <div className="writingCharacter">

                <span>
                  {currentDotted}
                </span>

              </div>

              <div className="writingGuide">
                👆 Trace the dots
              </div>

            </div>

            <div className="practiceMessage">
              {practiceMessage}
            </div>

            <div className="practiceButtons">

              <button
                onClick={
                  previousDotted
                }
                disabled={
                  dottedIndex === 0
                }
                className="practiceButton"
              >
                ◀️ Previous
              </button>

              <button
                onClick={
                  resetDotted
                }
                className="practiceButton resetPractice"
              >
                🔄 Reset
              </button>

              <button
                onClick={
                  nextDotted
                }
                className="practiceButton nextPractice"
              >
                Next ▶️
              </button>

            </div>

          </div>

          {/* PRACTICE INFORMATION */}

          <div className="practiceInfo">

            <div>
              👆
              <strong>
                Trace
              </strong>
              <span>
                Follow the dotted character
              </span>
            </div>

            <div>
              🧠
              <strong>
                Learn
              </strong>
              <span>
                Improve letter recognition
              </span>
            </div>

            <div>
              ✍️
              <strong>
                Practice
              </strong>
              <span>
                Build writing confidence
              </span>
            </div>

          </div>

        </section>

        {/* DOT TO DOT CATEGORIES */}

        <section className="categorySection">

          <h2>
            🌟 Choose Your Dot-to-Dot Activity
          </h2>

          <div className="categoryGrid">

            {activities.map(
              (item) => (

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

              )
            )}

          </div>

        </section>

        {/* GAME */}

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

          {/* LEVELS */}

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

          {/* SVG DOT GAME */}

          <div className="canvasArea">

            <svg
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

              {dots.map(
                (dot) => {

                  const isConnected =
                    connected.includes(
                      dot.number
                    );

                  return (
                    <g
                      key={
                        dot.number
                      }
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
                        y={
                          dot.y + 7
                        }
                        textAnchor="middle"
                        fontSize="19"
                        fontWeight="bold"
                        fill={
                          isConnected
                            ? "#ffffff"
                            : "#333"
                        }
                      >
                        {
                          dot.number
                        }
                      </text>

                    </g>
                  );
                }
              )}

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
              onClick={
                resetGame
              }
            >
              🔄 Start Again
            </button>

          </div>

        </section>

        {/* INSTRUCTIONS */}

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

        {/* LEARNING */}

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

        {/* LINKS */}

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

          <Link href="/world-explorer">
            🌍 World Explorer
          </Link>

          <Link href="/stories">
            📚 Stories
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
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          position: sticky;
          top: 0;
          z-index: 20;
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

        /* HERO */

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

        /* DOTTED PRACTICE */

        .dottedSection {
          max-width: 1050px;
          margin: 45px auto;
          padding: 0 20px;
        }

        .dottedHeader {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          text-align: center;
          margin-bottom: 25px;
        }

        .pencilIcon {
          font-size: 55px;
        }

        .dottedHeader h2 {
          font-size: 30px;
          margin: 0 0 7px;
        }

        .dottedHeader p {
          margin: 0;
          color: #666;
          font-size: 17px;
        }

        .dottedCategories {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 25px;
        }

        .dottedCategory {
          border: 2px solid #eee;
          background: white;
          border-radius: 20px;
          padding: 15px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: .2s;
        }

        .dottedCategory span {
          display: block;
          font-size: 32px;
          margin-bottom: 5px;
        }

        .dottedCategory:hover {
          transform: translateY(-3px);
        }

        .activeDottedCategory {
          border-color: #ff9d42;
          background: #fff0d0;
        }

        .practiceCard {
          max-width: 700px;
          margin: auto;
          padding: 25px;
          background: white;
          border-radius: 30px;
          box-shadow:
            0 7px 25px rgba(0,0,0,.08);
        }

        .practiceTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 21px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .practiceCount {
          background: #fff0c9;
          padding: 7px 13px;
          border-radius: 20px;
          font-size: 14px;
        }

        .dottedCanvas {
          min-height: 330px;
          border: 3px dashed #bbb;
          border-radius: 25px;
          background:
            linear-gradient(
              #fff,
              #f9fcff
            );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .dottedCanvas::before,
        .dottedCanvas::after {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          border-top: 2px dashed #c9d8e5;
        }

        .dottedCanvas::before {
          top: 35%;
        }

        .dottedCanvas::after {
          bottom: 25%;
        }

        .writingCharacter {
          position: relative;
          z-index: 2;
          font-size: 180px;
          line-height: 1;
          font-weight: bold;
          color: transparent;
          -webkit-text-stroke:
            4px #8aa4b8;
          text-shadow:
            3px 3px 0 #dce7ef,
            6px 6px 0 #e7eef4;
          letter-spacing: 5px;
        }

        .writingCharacter span {
          color: transparent;
          -webkit-text-stroke:
            4px #7c9bb0;
          text-decoration-line: underline;
          text-decoration-style: dotted;
          text-decoration-thickness: 5px;
          text-underline-offset: 12px;
        }

        .writingGuide {
          position: relative;
          z-index: 3;
          margin-top: 18px;
          padding: 8px 15px;
          background: #fff0c9;
          border-radius: 20px;
          font-weight: bold;
          color: #555;
        }

        .practiceMessage {
          text-align: center;
          margin: 18px 0;
          padding: 12px;
          background: #eaffdf;
          border-radius: 20px;
          font-weight: bold;
        }

        .practiceButtons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .practiceButton {
          border: none;
          padding: 12px 18px;
          border-radius: 25px;
          background: #333;
          color: white;
          cursor: pointer;
          font-weight: bold;
        }

        .practiceButton:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        .resetPractice {
          background: #777;
        }

        .nextPractice {
          background: #4caf50;
        }

        .practiceInfo {
          max-width: 850px;
          margin: 25px auto 0;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 15px;
        }

        .practiceInfo div {
          background: white;
          border-radius: 20px;
          padding: 18px;
          text-align: center;
          box-shadow:
            0 4px 15px rgba(0,0,0,.05);
          font-size: 30px;
        }

        .practiceInfo strong,
        .practiceInfo span {
          display: block;
        }

        .practiceInfo strong {
          font-size: 17px;
          margin: 7px 0 3px;
        }

        .practiceInfo span {
          color: #666;
          font-size: 13px;
        }

        /* CATEGORY */

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

        /* GAME */

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

        /* INSTRUCTIONS */

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

        /* LEARNING */

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

        /* LINKS */

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

        /* FOOTER */

        footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 35px 20px;
        }

        footer p {
          margin: 8px;
        }

        /* TABLET */

        @media (max-width: 800px) {

          .categoryGrid {
            grid-template-columns:
              repeat(4, 1fr);
          }

          .dottedCategories {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .instructions {
            grid-template-columns: 1fr;
          }

          .practiceInfo {
            grid-template-columns: 1fr;
          }

        }

        /* MOBILE */

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

          .categoryIcon {
            font-size: 30px;
          }

          .gameSection {
            margin-left: 10px;
            margin-right: 10px;
            padding: 15px;
          }

          .gameTop {
            font-size: 18px;
          }

          .targetIcon {
            font-size: 32px;
          }

          .levels {
            flex-wrap: wrap;
          }

          .learning {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
          }

          .dottedSection {
            padding: 0 12px;
          }

          .dottedHeader {
            flex-direction: column;
          }

          .dottedHeader h2 {
            font-size: 25px;
          }

          .writingCharacter {
            font-size: 130px;
          }

          .dottedCanvas {
            min-height: 280px;
          }

          .practiceCard {
            padding: 15px;
          }

        }

        @media (max-width: 420px) {

          .categoryGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .heroMini {
            font-size: 21px;
          }

          .dottedCategories {
            grid-template-columns: 1fr;
          }

          .practiceButtons {
            flex-direction: column;
          }

          .practiceButton {
            width: 100%;
          }

          .writingCharacter {
            font-size: 105px;
          }

        }

      `}</style>

    </>
  );
}
