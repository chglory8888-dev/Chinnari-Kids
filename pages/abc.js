import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const letters = [
  ["A", "Apple", "🍎"],
  ["B", "Ball", "⚽"],
  ["C", "Cat", "🐱"],
  ["D", "Dog", "🐶"],
  ["E", "Elephant", "🐘"],
  ["F", "Fish", "🐟"],
  ["G", "Grapes", "🍇"],
  ["H", "House", "🏠"],
  ["I", "Ice Cream", "🍦"],
  ["J", "Juice", "🧃"],
  ["K", "Kite", "🪁"],
  ["L", "Lion", "🦁"],
  ["M", "Monkey", "🐒"],
  ["N", "Nest", "🪺"],
  ["O", "Orange", "🍊"],
  ["P", "Parrot", "🦜"],
  ["Q", "Queen", "👑"],
  ["R", "Rabbit", "🐰"],
  ["S", "Sun", "☀️"],
  ["T", "Tiger", "🐯"],
  ["U", "Umbrella", "☂️"],
  ["V", "Van", "🚐"],
  ["W", "Watch", "⌚"],
  ["X", "Xylophone", "🎵"],
  ["Y", "Yo-Yo", "🪀"],
  ["Z", "Zebra", "🦓"],
];

export default function ABC() {
  const canvasRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [drawing, setDrawing] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const letter = letters[index][0];
  const word = letters[index][1];
  const emoji = letters[index][2];

  useEffect(() => {
    drawLetter();
  }, [index]);

  function drawLetter() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#f8f5ff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 250px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.setLineDash([6, 10]);
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 6;

    ctx.strokeText(
      letter,
      canvas.width / 2,
      canvas.height / 2
    );

    ctx.setLineDash([]);
  }

  function position(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let x;
    let y;

    if (event.touches && event.touches.length) {
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }

    return {
      x: (x - rect.left) * (canvas.width / rect.width),
      y: (y - rect.top) * (canvas.height / rect.height),
    };
  }

  function start(event) {
    event.preventDefault();

    const ctx = canvasRef.current.getContext("2d");
    const p = position(event);

    setDrawing(true);

    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function move(event) {
    if (!drawing) return;

    event.preventDefault();

    const ctx = canvasRef.current.getContext("2d");
    const p = position(event);

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ff6b6b";

    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  }

  function stop() {
    if (!drawing) return;

    setDrawing(false);
    setScore((value) => value + 1);
    setMessage("🎉 Great job!");

    setTimeout(() => {
      setMessage("");
    }, 1200);
  }

  function clear() {
    drawLetter();
    setMessage("");
  }

  function next() {
    setIndex((value) => (value + 1) % 26);
    setMessage("");
  }

  function previous() {
    setIndex((value) => (value - 1 + 26) % 26);
    setMessage("");
  }

  function speak() {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      const speech = new SpeechSynthesisUtterance(
        `${letter} for ${word}`
      );

      speech.lang = "en-US";
      speech.rate = 0.8;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
    }
  }

  return (
    <>
      <Head>
        <title>ABC Learning | Chinnaari Kids</title>

        <meta
          name="description"
          content="Learn ABC letters with pictures and dotted tracing."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

        <header className="header">
          <Link href="/" className="logo">
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/numbers">🔢 Numbers</Link>
            <Link href="/abc">🔤 ABC</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
          </nav>
        </header>

        <section className="hero">
          <div>🔤✨</div>

          <h1>Learn ABC!</h1>

          <p>
            See • Say • Trace • Learn
          </p>

          <span>
            ♾️ Unlimited Practice
          </span>
        </section>

        <section className="alphabet">
          <h2>Choose a Letter</h2>

          <div className="letterList">
            {letters.map((item, i) => (
              <button
                key={item[0]}
                className={
                  i === index
                    ? "letter active"
                    : "letter"
                }
                onClick={() => setIndex(i)}
              >
                {item[0]}
              </button>
            ))}
          </div>
        </section>

        <section className="learning">

          <div className="top">
            <span>⭐ Score: {score}</span>
            <span>{index + 1} / 26</span>
          </div>

          <div className="example">
            <div className="emoji">
              {emoji}
            </div>

            <div>
              <div className="bigLetter">
                {letter}
              </div>

              <h2>
                {letter} for {word}
              </h2>
            </div>
          </div>

          <button
            className="speak"
            onClick={speak}
          >
            🔊 Say {letter}
          </button>

          <h2>
            ✏️ Trace the Letter
          </h2>

          <p>
            Follow the dotted line with your finger
          </p>

          <canvas
            ref={canvasRef}
            width={500}
            height={350}
            className="canvas"

            onMouseDown={start}
            onMouseMove={move}
            onMouseUp={stop}
            onMouseLeave={stop}

            onTouchStart={start}
            onTouchMove={move}
            onTouchEnd={stop}
          />

          {message && (
            <div className="message">
              {message}
            </div>
          )}

          <div className="buttons">

            <button
              onClick={previous}
              className="previous"
            >
              ⬅️ Previous
            </button>

            <button
              onClick={clear}
              className="clear"
            >
              🧹 Clear
            </button>

            <button
              onClick={next}
              className="next"
            >
              Next ➡️
            </button>

          </div>

        </section>

        <section className="wordCard">

          <div className="wordEmoji">
            {emoji}
          </div>

          <div>
            <h2>
              {letter} is for {word}
            </h2>

            <p>
              Learn the letter and remember the picture!
            </p>

            <button
              onClick={speak}
              className="listen"
            >
              🔊 Listen
            </button>
          </div>

        </section>

        <section className="tip">

          <h2>
            🧠 Little Learner Tip
          </h2>

          <p>
            Trace slowly, say the letter aloud,
            and remember the picture.
          </p>

        </section>

        <section className="links">

          <Link href="/numbers">
            🔢 Numbers
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/games">
            🎮 Games
          </Link>

          <Link href="/puzzles">
            🧩 Puzzles
          </Link>

        </section>

        <footer>
          <h3>🌈 Chinnaari Kids</h3>

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
          background: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          position: sticky;
          top: 0;
          z-index: 10;
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
          gap: 14px;
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
          padding: 45px 20px;
          background: linear-gradient(135deg,#ffe1ec,#e5ddff);
        }

        .hero div {
          font-size: 65px;
        }

        .hero h1 {
          font-size: 42px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .hero span {
          display: inline-block;
          padding: 9px 18px;
          background: white;
          border-radius: 25px;
          font-weight: bold;
        }

        .alphabet {
          max-width: 950px;
          margin: 30px auto;
          padding: 0 20px;
          text-align: center;
        }

        .letterList {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }

        .letter {
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 12px;
          background: white;
          font-size: 17px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0,0,0,.07);
        }

        .letter.active {
          background: #ff6b6b;
          color: white;
        }

        .learning {
          max-width: 850px;
          margin: 35px auto;
          padding: 35px 25px;
          text-align: center;
          background: white;
          border-radius: 30px;
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
        }

        .top {
          display: flex;
          justify-content: space-between;
        }

        .top span {
          padding: 9px 16px;
          border-radius: 20px;
          background: #f0eaff;
          font-weight: bold;
        }

        .example {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          margin: 30px 0;
        }

        .emoji {
          font-size: 80px;
        }

        .bigLetter {
          font-size: 75px;
          font-weight: 900;
          color: #ff6b6b;
        }

        .example h2 {
          margin: 0;
        }

        .speak,
        .listen {
          border: none;
          padding: 12px 20px;
          border-radius: 25px;
          background: #dff2ff;
          font-weight: bold;
          cursor: pointer;
        }

        .canvas {
          width: 100%;
          max-width: 500px;
          height: auto;
          margin: 20px auto;
          display: block;
          border: 3px dashed #cfc1ff;
          border-radius: 25px;
          background: #f8f5ff;
          touch-action: none;
          cursor: crosshair;
        }

        .message {
          display: inline-block;
          padding: 10px 20px;
          background: #dcf7d9;
          color: #28752d;
          border-radius: 25px;
          font-weight: bold;
        }

        .buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .buttons button {
          border: none;
          padding: 13px 20px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .previous {
          background: #e5ddff;
        }

        .clear {
          background: #ffe0e0;
        }

        .next {
          background: #4caf50;
          color: white;
        }

        .wordCard {
          max-width: 850px;
          margin: 30px auto;
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          border-radius: 30px;
          background: linear-gradient(135deg,#fff0b8,#e1f5ff);
        }

        .wordEmoji {
          font-size: 80px;
        }

        .wordCard p {
          color: #666;
        }

        .tip {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          text-align: center;
          border-radius: 30px;
          background: white;
          box-shadow: 0 5px 20px rgba(0,0,0,.06);
        }

        .tip p {
          color: #666;
        }

        .links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 30px 20px 50px;
        }

        .links a {
          padding: 13px 20px;
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

        footer p {
          margin: 8px;
        }

        @media (max-width: 800px) {

          .header {
            flex-direction: column;
          }

          .example {
            flex-direction: column;
            gap: 5px;
          }

          .wordCard {
            margin: 25px 15px;
            flex-direction: column;
            text-align: center;
          }

          .learning {
            margin: 25px 15px;
          }

          .hero h1 {
            font-size: 34px;
          }

        }

        @media (max-width: 500px) {

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .letter {
            width: 38px;
            height: 38px;
          }

          .bigLetter {
            font-size: 60px;
          }

          .emoji {
            font-size: 65px;
          }

        }

      `}</style>

    </>
  );
    }
