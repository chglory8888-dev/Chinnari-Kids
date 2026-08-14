import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const numberEmojis = [
  "🍎",
  "⭐",
  "🍌",
  "🐶",
  "🦋",
  "🚗",
  "🌸",
  "🐥",
  "⚽",
  "🍓",
];

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function Numbers() {
  const canvasRef = useRef(null);

  const [number, setNumber] = useState(1);
  const [drawing, setDrawing] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const emoji =
    numberEmojis[(number - 1) % numberEmojis.length];

  useEffect(() => {
    drawDottedNumber();
  }, [number]);

  function drawDottedNumber() {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#f8f5ff";
    ctx.fillRect(0, 0, width, height);

    ctx.font = "bold 230px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.setLineDash([5, 9]);

    ctx.strokeStyle = "#aaa";
    ctx.lineWidth = 5;

    ctx.strokeText(
      number.toString(),
      width / 2,
      height / 2
    );

    ctx.setLineDash([]);
  }

  function getPosition(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    return {
      x:
        (clientX - rect.left) *
        (canvas.width / rect.width),

      y:
        (clientY - rect.top) *
        (canvas.height / rect.height),
    };
  }

  function startDrawing(event) {
    event.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const position = getPosition(event);

    setDrawing(true);

    ctx.beginPath();
    ctx.moveTo(position.x, position.y);
  }

  function draw(event) {
    if (!drawing) return;

    event.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const position = getPosition(event);

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#ff6b6b";

    ctx.lineTo(position.x, position.y);
    ctx.stroke();
  }

  function stopDrawing() {
    if (!drawing) return;

    setDrawing(false);

    setScore((old) => old + 1);

    setMessage("🎉 Great tracing!");

    setTimeout(() => {
      setMessage("");
    }, 1200);
  }

  function clearCanvas() {
    drawDottedNumber();
    setMessage("");
  }

  function nextNumber() {
    const next = getRandomNumber();

    setNumber(next);
    setCompleted(false);
    setMessage("");
  }

  function practiceSameNumber() {
    setCompleted(false);
    setMessage("");
    drawDottedNumber();
  }

  function finishPractice() {
    setCompleted(true);
  }

  const countingItems = Math.min(number, 20);

  return (
    <>
      <Head>

        <title>
          Numbers Learning & Tracing | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Learn and trace numbers with fun counting activities on Chinnaari Kids."
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

            <Link href="/numbers">
              🔢 Numbers
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

          <div className="heroNumber">
            🔢✨
          </div>

          <h1>
            Numbers Fun!
          </h1>

          <p>
            Learn • Count • Trace • Practice
          </p>

          <div className="infinityBadge">
            ♾️ Unlimited Practice
          </div>

        </section>

        {/* MAIN LEARNING AREA */}

        <section className="learningArea">

          <div className="topInfo">

            <div className="numberBadge">
              Number
              <strong>
                {number}
              </strong>
            </div>

            <div className="scoreBadge">
              ⭐ {score}
            </div>

          </div>

          <h2>
            Trace Number {number}
          </h2>

          <p className="instruction">
            Follow the dotted line with your finger ✏️
          </p>

          {/* CANVAS */}

          <div className="canvasWrapper">

            <canvas
              ref={canvasRef}
              width={500}
              height={330}
              className="traceCanvas"

              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}

              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />

          </div>

          {/* MESSAGE */}

          {message && (

            <div className="successMessage">
              {message}
            </div>

          )}

          {/* BUTTONS */}

          <div className="buttons">

            <button
              className="clearButton"
              onClick={clearCanvas}
            >
              🧹 Clear
            </button>

            <button
              className="practiceButton"
              onClick={practiceSameNumber}
            >
              🔄 Practice Again
            </button>

            <button
              className="nextButton"
              onClick={nextNumber}
            >
              Next Number ➡️
            </button>

          </div>

        </section>

        {/* COUNTING */}

        <section className="counting">

          <h2>
            Let's Count! 🧮
          </h2>

          <p>
            How many {emoji} do you see?
          </p>

          <div className="objects">

            {Array.from(
              { length: countingItems },
              (_, index) => (
                <span key={index}>
                  {emoji}
                </span>
              )
            )}

          </div>

          <div className="countAnswer">
            🔢 Count: {countingItems}
          </div>

          {number > 20 && (

            <p className="smallText">
              For bigger numbers, we show a fun
              sample count. Keep practicing! 🌟
            </p>

          )}

        </section>

        {/* NUMBER DISPLAY */}

        <section className="numberDisplay">

          <div className="bigNumber">
            {number}
          </div>

          <div>

            <h2>
              You are learning number {number}! 🎉
            </h2>

            <p>
              Keep tracing and practicing.
              Every practice makes you better!
            </p>

          </div>

        </section>

        {/* COMPLETION */}

        {completed && (

          <section className="completed">

            <div>
              🏆
            </div>

            <h2>
              Amazing Work!
            </h2>

            <p>
              You practiced number {number}.
            </p>

            <button
              onClick={nextNumber}
            >
              🚀 Learn Another Number
            </button>

          </section>

        )}

        {/* FINISH */}

        <section className="finish">

          <h2>
            🌟 Keep Learning!
          </h2>

          <p>
            There is no limit. Practice as many
            numbers as you want!
          </p>

          <button
            onClick={finishPractice}
          >
            ⭐ I Finished!
          </button>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

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
            🔤 Learn ABC
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

          font-family:
            Arial,
            sans-serif;
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
            0 2px 15px
            rgba(0,0,0,0.08);

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

          font-size: 14px;

          font-weight: 600;
        }

        nav a:hover {
          color: #ff6b6b;
        }

        /* HERO */

        .hero {
          text-align: center;

          padding: 45px 20px;

          background:
            linear-gradient(
              135deg,
              #e3ddff,
              #dff5ff
            );
        }

        .heroNumber {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 42px;

          margin: 8px 0;
        }

        .hero p {
          font-size: 18px;

          color: #555;
        }

        .infinityBadge {
          display: inline-block;

          margin-top: 10px;

          padding: 9px 18px;

          border-radius: 25px;

          background: white;

          font-weight: bold;
        }

        /* LEARNING */

        .learningArea {
          max-width: 850px;

          margin: 40px auto;

          padding: 35px 25px;

          text-align: center;

          background: white;

          border-radius: 32px;

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .topInfo {
          display: flex;

          justify-content: space-between;

          align-items: center;
        }

        .numberBadge,
        .scoreBadge {
          padding: 10px 18px;

          border-radius: 25px;

          font-weight: bold;
        }

        .numberBadge {
          background: #e5ddff;
        }

        .numberBadge strong {
          margin-left: 8px;

          font-size: 20px;
        }

        .scoreBadge {
          background: #fff0b8;
        }

        .learningArea h2 {
          font-size: 30px;

          margin: 25px 0 5px;
        }

        .instruction {
          color: #666;

          font-size: 17px;
        }

        /* CANVAS */

        .canvasWrapper {
          display: flex;

          justify-content: center;

          margin: 25px auto;
        }

        .traceCanvas {
          width: 100%;

          max-width: 500px;

          height: auto;

          border-radius: 25px;

          border: 3px dashed #d4c8ff;

          background: #f8f5ff;

          touch-action: none;

          cursor: crosshair;
        }

        /* MESSAGE */

        .successMessage {
          display: inline-block;

          padding: 12px 20px;

          border-radius: 25px;

          background: #dcf7d9;

          color: #247529;

          font-weight: bold;
        }

        /* BUTTONS */

        .buttons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 25px;
        }

        .buttons button,
        .finish button,
        .completed button {
          border: none;

          padding: 13px 20px;

          border-radius: 25px;

          font-weight: bold;

          cursor: pointer;
        }

        .clearButton {
          background: #ffe0e0;
        }

        .practiceButton {
          background: #e5ddff;
        }

        .nextButton {
          background: #4caf50;

          color: white;
        }

        /* COUNTING */

        .counting {
          max-width: 850px;

          margin: 30px auto;

          padding: 40px 25px;

          text-align: center;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e3f6ff
            );
        }

        .counting h2 {
          font-size: 30px;
        }

        .counting p {
          font-size: 18px;
        }

        .objects {
          display: flex;

          justify-content: center;

          flex-wrap: wrap;

          gap: 8px;

          margin: 25px auto;

          max-width: 700px;
        }

        .objects span {
          font-size: 35px;

          animation:
            pop 0.4s ease;
        }

        @keyframes pop {

          from {
            transform: scale(0);
          }

          to {
            transform: scale(1);
          }

        }

        .countAnswer {
          display: inline-block;

          padding: 10px 20px;

          border-radius: 25px;

          background: white;

          font-weight: bold;
        }

        .smallText {
          font-size: 14px !important;

          color: #777;
        }

        /* NUMBER DISPLAY */

        .numberDisplay {
          max-width: 850px;

          margin: 35px auto;

          padding: 35px;

          display: flex;

          align-items: center;

          gap: 30px;

          border-radius: 30px;

          background: white;

          box-shadow:
            0 5px 22px
            rgba(0,0,0,0.06);
        }

        .bigNumber {
          min-width: 150px;

          font-size: 110px;

          font-weight: 900;

          text-align: center;

          color: #ff6b6b;
        }

        .numberDisplay h2 {
          margin-top: 0;
        }

        .numberDisplay p {
          color: #666;

          line-height: 1.7;
        }

        /* COMPLETED */

        .completed {
          max-width: 700px;

          margin: 30px auto;

          padding: 35px 20px;

          text-align: center;

          border-radius: 30px;

          background: #dcf7d9;
        }

        .completed > div {
          font-size: 70px;
        }

        .completed button {
          background: #4caf50;

          color: white;
        }

        /* FINISH */

        .finish {
          max-width: 700px;

          margin: 40px auto;

          padding: 35px 20px;

          text-align: center;

          border-radius: 30px;

          background: #f0eaff;
        }

        .finish button {
          margin-top: 10px;

          background: #ff6b6b;

          color: white;
        }

        /* NAVIGATION */

        .navigation {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin: 30px 20px 55px;
        }

        .navigation a {
          padding: 13px 20px;

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

        @media (max-width: 850px) {

          .header {
            flex-direction: column;

            gap: 15px;
          }

          nav {
            justify-content: center;
          }

        }

        /* MOBILE */

        @media (max-width: 600px) {

          .logo {
            font-size: 21px;
          }

          nav {
            gap: 9px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .learningArea {
            margin: 25px 15px;

            padding: 25px 15px;
          }

          .topInfo {
            align-items: flex-start;
          }

          .learningArea h2 {
            font-size: 25px;
          }

          .traceCanvas {
            width: 100%;
          }

          .objects span {
            font-size: 28px;
          }

          .numberDisplay {
            margin: 25px 15px;

            flex-direction: column;

            text-align: center;

            padding: 25px 15px;
          }

          .bigNumber {
            font-size: 90px;
          }

          .counting,
          .finish,
          .completed {
            margin-left: 15px;

            margin-right: 15px;
          }

        }

      `}</style>
    </>
  );
          }
