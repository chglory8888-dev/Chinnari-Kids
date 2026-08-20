import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =========================
   MAIN ACTIVITIES
========================= */

const activities = [
  {
    title: "Dotted Lines",
    icon: "✏️",
    type: "dotted",
  },
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

/* =========================
   DOT TO DOT COLLECTIONS
========================= */

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

/* =========================
   DOTTED LINE CATEGORIES
========================= */

const dottedCategories = [
  {
    title: "Straight Lines",
    icon: "➖",
    type: "straight",
  },
  {
    title: "Vertical Lines",
    icon: "│",
    type: "vertical",
  },
  {
    title: "Horizontal Lines",
    icon: "━",
    type: "horizontal",
  },
  {
    title: "Diagonal Lines",
    icon: "╱",
    type: "diagonal",
  },
  {
    title: "Zig-Zag",
    icon: "〰️",
    type: "zigzag",
  },
  {
    title: "Curves",
    icon: "〰",
    type: "curve",
  },
  {
    title: "Shapes",
    icon: "⭐",
    type: "dotted-shapes",
  },
  {
    title: "Numbers",
    icon: "🔢",
    type: "dotted-numbers",
  },
  {
    title: "ABC",
    icon: "🔤",
    type: "dotted-abc",
  },
  {
    title: "తెలుగు",
    icon: "అ",
    type: "dotted-telugu",
  },
  {
    title: "Animals",
    icon: "🐶",
    type: "dotted-animals",
  },
  {
    title: "Birds",
    icon: "🐦",
    type: "dotted-birds",
  },
  {
    title: "Fruits",
    icon: "🍎",
    type: "dotted-fruits",
  },
];

/* =========================
   DOTTED SHAPES
========================= */

const dottedShapes = [
  "circle",
  "square",
  "triangle",
  "rectangle",
  "diamond",
  "star",
  "heart",
];

/* =========================
   DOTTED DRAWING SYMBOLS
========================= */

const dottedAnimals = [
  "🐶",
  "🐱",
  "🐘",
  "🦁",
  "🐰",
];

const dottedBirds = [
  "🐦",
  "🦜",
  "🦉",
  "🦚",
  "🦅",
];

const dottedFruits = [
  "🍎",
  "🍌",
  "🍊",
  "🍉",
  "🍓",
];

/* =========================
   CREATE DOTS
========================= */

function createDots(count) {
  const dots = [];

  for (let i = 0; i < count; i++) {
    const angle =
      (Math.PI * 2 * i) / count -
      Math.PI / 2;

    const radius = 145;

    const x =
      250 +
      Math.cos(angle) * radius;

    const y =
      250 +
      Math.sin(angle) * radius;

    dots.push({
      x,
      y,
      number: i + 1,
    });
  }

  return dots;
}

/* =========================
   COMPONENT
========================= */

export default function Dots() {
  const [activity, setActivity] =
    useState(activities[0]);

  const [dottedCategory, setDottedCategory] =
    useState(dottedCategories[0]);

  const [dottedIndex, setDottedIndex] =
    useState(0);

  const [level, setLevel] =
    useState("easy");

  const [connected, setConnected] =
    useState([]);

  const [completed, setCompleted] =
    useState(false);

  const [message, setMessage] =
    useState(
      "✏️ Choose a dotted activity and start tracing!"
    );

  const [drawing, setDrawing] =
    useState(false);

  const [userPath, setUserPath] =
    useState([]);

  const canvasRef = useRef(null);

  const dots =
    activity.count
      ? createDots(activity.count)
      : [];

  useEffect(() => {
    resetGame();
  }, [activity, level]);

  function resetGame() {
    setConnected([]);
    setCompleted(false);
    setDrawing(false);
    setUserPath([]);

    if (activity.type === "dotted") {
      setMessage(
        "✏️ Follow the dotted line with your finger!"
      );
    } else {
      setMessage(
        "Connect the dots in order!"
      );
    }
  }

  function chooseActivity(item) {
    setActivity(item);

    if (item.type === "dotted") {
      setDottedCategory(
        dottedCategories[0]
      );
      setDottedIndex(0);
    }
  }

  /* =========================
     DOT GAME
  ========================= */

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

  /* =========================
     DOTTED TRACING
  ========================= */

  function startDrawing(e) {
    if (activity.type !== "dotted") {
      return;
    }

    e.preventDefault();

    setDrawing(true);

    const point =
      getPointerPosition(e);

    setUserPath([point]);

    setMessage(
      "✏️ Keep tracing the dotted path!"
    );
  }

  function draw(e) {
    if (!drawing) {
      return;
    }

    e.preventDefault();

    const point =
      getPointerPosition(e);

    setUserPath((prev) => [
      ...prev,
      point,
    ]);
  }

  function stopDrawing() {
    if (!drawing) {
      return;
    }

    setDrawing(false);

    setCompleted(true);

    setMessage(
      "🎉 Excellent tracing! Great job!"
    );
  }

  function getPointerPosition(e) {
    const svg =
      canvasRef.current;

    if (!svg) {
      return {
        x: 250,
        y: 250,
      };
    }

    const rect =
      svg.getBoundingClientRect();

    const clientX =
      e.touches
        ? e.touches[0].clientX
        : e.clientX;

    const clientY =
      e.touches
        ? e.touches[0].clientY
        : e.clientY;

    return {
      x:
        ((clientX - rect.left) /
          rect.width) *
        500,

      y:
        ((clientY - rect.top) /
          rect.height) *
        500,
    };
  }

  /* =========================
     DOTTED TEMPLATE
  ========================= */

  function getDottedTemplate() {
    const type =
      dottedCategory.type;

    if (
      type === "straight" ||
      type === "horizontal"
    ) {
      return (
        <line
          x1="80"
          y1="250"
          x2="420"
          y2="250"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
          strokeLinecap="round"
        />
      );
    }

    if (type === "vertical") {
      return (
        <line
          x1="250"
          y1="80"
          x2="250"
          y2="420"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
          strokeLinecap="round"
        />
      );
    }

    if (type === "diagonal") {
      return (
        <line
          x1="90"
          y1="410"
          x2="410"
          y2="90"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
          strokeLinecap="round"
        />
      );
    }

    if (type === "zigzag") {
      return (
        <polyline
          points="
            60,300
            120,180
            180,300
            240,180
            300,300
            360,180
            440,300
          "
          fill="none"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    }

    if (type === "curve") {
      return (
        <path
          d="
            M 60 280
            C 130 100,
              200 100,
              270 280
            C 330 430,
              390 430,
              440 220
          "
          fill="none"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
        />
      );
    }

    if (
      type === "dotted-shapes"
    ) {
      const shape =
        dottedShapes[
          dottedIndex %
            dottedShapes.length
        ];

      if (shape === "circle") {
        return (
          <circle
            cx="250"
            cy="250"
            r="140"
            fill="none"
            stroke="#999"
            strokeWidth="6"
            strokeDasharray="3 12"
          />
        );
      }

      if (shape === "square") {
        return (
          <rect
            x="120"
            y="120"
            width="260"
            height="260"
            fill="none"
            stroke="#999"
            strokeWidth="6"
            strokeDasharray="3 12"
          />
        );
      }

      if (shape === "triangle") {
        return (
          <polygon
            points="250,80 410,390 90,390"
            fill="none"
            stroke="#999"
            strokeWidth="6"
            strokeDasharray="3 12"
          />
        );
      }

      if (shape === "rectangle") {
        return (
          <rect
            x="80"
            y="150"
            width="340"
            height="200"
            fill="none"
            stroke="#999"
            strokeWidth="6"
            strokeDasharray="3 12"
          />
        );
      }

      if (shape === "diamond") {
        return (
          <polygon
            points="250,70 420,250 250,430 80,250"
            fill="none"
            stroke="#999"
            strokeWidth="6"
            strokeDasharray="3 12"
          />
        );
      }

      if (shape === "star") {
        return (
          <polygon
            points="
              250,60
              295,190
              435,190
              325,270
              365,410
              250,325
              135,410
              175,270
              65,190
              205,190
            "
            fill="none"
            stroke="#999"
            strokeWidth="6"
            strokeDasharray="3 12"
          />
        );
      }

      return (
        <path
          d="
            M250 400
            C100 300 80 180 150 130
            C200 95 235 130 250 170
            C265 130 300 95 350 130
            C420 180 400 300 250 400
          "
          fill="none"
          stroke="#999"
          strokeWidth="6"
          strokeDasharray="3 12"
        />
      );
    }

    if (
      type === "dotted-numbers"
    ) {
      const number =
        (dottedIndex % 10) + 1;

      return (
        <text
          x="250"
          y="330"
          textAnchor="middle"
          fontSize="250"
          fontWeight="bold"
          fill="none"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
        >
          {number}
        </text>
      );
    }

    if (
      type === "dotted-abc"
    ) {
      const letter =
        String.fromCharCode(
          65 +
            (dottedIndex % 26)
        );

      return (
        <text
          x="250"
          y="330"
          textAnchor="middle"
          fontSize="250"
          fontWeight="bold"
          fill="none"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
        >
          {letter}
        </text>
      );
    }

    if (
      type === "dotted-telugu"
    ) {
      const letter =
        teluguLetters[
          dottedIndex %
            teluguLetters.length
        ];

      return (
        <text
          x="250"
          y="330"
          textAnchor="middle"
          fontSize="230"
          fontWeight="bold"
          fill="none"
          stroke="#999"
          strokeWidth="5"
          strokeDasharray="3 12"
        >
          {letter}
        </text>
      );
    }

    if (
      type === "dotted-animals"
    ) {
      const animal =
        dottedAnimals[
          dottedIndex %
            dottedAnimals.length
        ];

      return (
        <text
          x="250"
          y="330"
          textAnchor="middle"
          fontSize="220"
          fill="none"
          stroke="#999"
          strokeWidth="3"
          strokeDasharray="3 10"
        >
          {animal}
        </text>
      );
    }

    if (
      type === "dotted-birds"
    ) {
      const bird =
        dottedBirds[
          dottedIndex %
            dottedBirds.length
        ];

      return (
        <text
          x="250"
          y="330"
          textAnchor="middle"
          fontSize="220"
          fill="none"
          stroke="#999"
          strokeWidth="3"
          strokeDasharray="3 10"
        >
          {bird}
        </text>
      );
    }

    if (
      type === "dotted-fruits"
    ) {
      const fruit =
        dottedFruits[
          dottedIndex %
            dottedFruits.length
        ];

      return (
        <text
          x="250"
          y="330"
          textAnchor="middle"
          fontSize="220"
          fill="none"
          stroke="#999"
          strokeWidth="3"
          strokeDasharray="3 10"
        >
          {fruit}
        </text>
      );
    }

    return null;
  }

  function previousDotted() {
    setDottedIndex((prev) =>
      prev === 0 ? 0 : prev - 1
    );

    setCompleted(false);
    setUserPath([]);
    setMessage(
      "✏️ Trace the dotted drawing!"
    );
  }

  function nextDotted() {
    setDottedIndex(
      (prev) => prev + 1
    );

    setCompleted(false);
    setUserPath([]);
    setMessage(
      "✏️ Trace the dotted drawing!"
    );
  }

  function chooseDottedCategory(
    category
  ) {
    setDottedCategory(category);
    setDottedIndex(0);
    setCompleted(false);
    setUserPath([]);

    setMessage(
      "✏️ Follow the dotted path!"
    );
  }

  /* =========================
     RENDER
  ========================= */

  return (
    <>
      <Head>
        <title>
          Dot to Dot & Dotted Lines | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun dotted line tracing, shapes, numbers, ABC, Telugu, animals, birds and fruits drawing activities for kids."
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
            ✏️ • • • ✏️
          </div>

          <h1>
            Dot-to-Dot & Dotted Lines
          </h1>

          <p>
            Trace, connect and discover!
          </p>

          <div className="heroMini">
            👆 Follow the dots → 🎉 Learn → 🌈 Have Fun
          </div>

        </section>

        {/* ACTIVITIES */}

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

        {/* DOTTED MENU */}

        {activity.type ===
          "dotted" && (

          <section className="dottedMenu">

            <h2>
              ✏️ Dotted Lines Practice
            </h2>

            <p>
              Choose something to trace
            </p>

            <div className="dottedGrid">

              {dottedCategories.map(
                (item) => (
                  <button
                    key={item.type}
                    className={
                      dottedCategory.type ===
                      item.type
                        ? "dottedButton activeDotted"
                        : "dottedButton"
                    }
                    onClick={() =>
                      chooseDottedCategory(
                        item
                      )
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

          </section>
        )}

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

            {!activity.type.includes(
              "dotted"
            ) &&
              activity.type !==
                "dotted" && (
                <div className="progress">
                  {connected.length} /{" "}
                  {activity.count}
                </div>
              )}

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

          {/* DOTTED GAME */}

          {activity.type ===
            "dotted" ? (

            <>
              <div className="traceTitle">
                ✏️{" "}
                {dottedCategory.title}
              </div>

              <div className="canvasArea">

                <svg
                  ref={canvasRef}
                  viewBox="0 0 500 500"
                  className="dotCanvas"
                  onMouseDown={
                    startDrawing
                  }
                  onMouseMove={draw}
                  onMouseUp={
                    stopDrawing
                  }
                  onMouseLeave={
                    stopDrawing
                  }
                  onTouchStart={
                    startDrawing
                  }
                  onTouchMove={draw}
                  onTouchEnd={
                    stopDrawing
                  }
                >

                  <rect
                    x="0"
                    y="0"
                    width="500"
                    height="500"
                    rx="30"
                    fill="#fff"
                  />

                  {/* dotted template */}

                  {getDottedTemplate()}

                  {/* user's tracing */}

                  {userPath.length >
                    1 && (
                    <polyline
                      points={userPath
                        .map(
                          (p) =>
                            `${p.x},${p.y}`
                        )
                        .join(" ")}
                      fill="none"
                      stroke="#ff7a00"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}

                  {completed && (
                    <text
                      x="250"
                      y="470"
                      textAnchor="middle"
                      fontSize="28"
                      fontWeight="bold"
                      fill="#4caf50"
                    >
                      🎉 Great Job!
                    </text>
                  )}

                </svg>

              </div>

              <div className="message">
                {message}
              </div>

              <div className="buttons">

                <button
                  className="navButton"
                  onClick={
                    previousDotted
                  }
                >
                  ◀️ Previous
                </button>

                <button
                  className="reset"
                  onClick={
                    resetGame
                  }
                >
                  🔄 Reset
                </button>

                <button
                  className="navButton"
                  onClick={nextDotted}
                >
                  Next ▶️
                </button>

              </div>

            </>

          ) : (

            /* =========================
               NORMAL DOT GAME
            ========================= */

            <>

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

                  {connected.length >
                    1 && (
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
                              dot.y +
                              7
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
                      {activity.type ===
                      "number"
                        ? "🔢"
                        : activity.type ===
                          "abc"
                        ? "🔤"
                        : activity.type ===
                          "telugu"
                        ? "అ"
                        : collections[
                            activity
                              .type
                          ]?.[0] ||
                          "🌟"}
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

            </>
          )}

        </section>

        {/* INSTRUCTIONS */}

        <section className="instructions">

          <div className="instructionCard">
            <div>1️⃣</div>

            <h3>
              Start
            </h3>

            <p>
              Find the first dot or start
              tracing the dotted line.
            </p>
          </div>

          <div className="instructionCard">
            <div>2️⃣</div>

            <h3>
              Follow the Dots
            </h3>

            <p>
              Move your finger or mouse
              along the dotted path.
            </p>
          </div>

          <div className="instructionCard">
            <div>🎉</div>

            <h3>
              Discover!
            </h3>

            <p>
              Complete the activity and
              celebrate your achievement.
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
              Dotted line activities help
              children develop pencil control,
              hand-eye coordination,
              concentration and pre-writing
              skills.
            </p>

            <p className="telugu">
              ఆటలతో పాటు పిల్లలు గీతలు,
              ఆకారాలు, సంఖ్యలు, అక్షరాలు
              మరియు చిత్రాలు గీయడం
              నేర్చుకోవచ్చు! 🌈
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

          <Link href="/stories">
            📚 Stories
          </Link>

          <Link href="/world-explorer">
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
          font-size: 42px;
          margin: 12px 0;
        }

        .hero p {
          color: #555;
          font-size: 19px;
        }

        .heroMini {
          margin-top: 20px;
          font-size: 24px;
        }

        .categorySection {
          max-width: 1100px;
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

        .dottedMenu {
          max-width: 1100px;
          margin: 25px auto;
          padding: 25px 20px;
          text-align: center;
          background: #fff;
          border-radius: 28px;
          box-shadow:
            0 5px 20px rgba(0,0,0,.06);
        }

        .dottedMenu h2 {
          margin: 0 0 8px;
          font-size: 28px;
        }

        .dottedMenu p {
          color: #666;
        }

        .dottedGrid {
          display: grid;
          grid-template-columns:
            repeat(5, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .dottedButton {
          border: 2px dashed #ddd;
          background: #fffaf3;
          border-radius: 18px;
          padding: 14px 8px;
          cursor: pointer;
          font-weight: bold;
          min-height: 75px;
        }

        .dottedButton span {
          display: block;
          font-size: 28px;
          margin-bottom: 4px;
        }

        .activeDotted {
          border-color: #ff8a00;
          background: #fff0d0;
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

        .traceTitle {
          text-align: center;
          font-size: 25px;
          font-weight: bold;
          margin: 15px;
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
          touch-action: none;
          user-select: none;
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
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .reset,
        .navButton {
          border: none;
          color: white;
          padding: 13px 22px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
        }

        .reset {
          background: #333;
        }

        .navButton {
          background: #ff8a00;
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

          .dottedGrid {
            grid-template-columns:
              repeat(3, 1fr);
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

          .dottedGrid {
            grid-template-columns:
              repeat(2, 1fr);
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

        }

        @media (max-width: 420px) {

          .categoryGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .dottedGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .heroMini {
            font-size: 18px;
          }

        }

      `}</style>
    </>
  );
}
