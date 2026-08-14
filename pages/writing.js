import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const english = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const telugu = [
  "అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ఎ", "ఏ", "ఐ",
  "ఒ", "ఓ", "ఔ", "అం", "అః",
  "క", "ఖ", "గ", "ఘ", "ఙ",
  "చ", "ఛ", "జ", "ఝ", "ఞ",
  "ట", "ఠ", "డ", "ఢ", "ణ",
  "త", "థ", "ద", "ధ", "న",
  "ప", "ఫ", "బ", "భ", "మ",
  "య", "ర", "ల", "వ", "శ", "ష", "స", "హ"
];

export default function Writing() {
  const [section, setSection] = useState("english");
  const [number, setNumber] = useState(1);
  const [letter, setLetter] = useState("A");
  const [teluguLetter, setTeluguLetter] = useState("అ");
  const [message, setMessage] = useState("");

  const canvasRef = useRef(null);
  const drawing = useRef(false);

  useEffect(() => {
    setupCanvas();
  }, [section, number, letter, teluguLetter]);

  function setupCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;

    ctx.scale(ratio, ratio);

    ctx.clearRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.strokeStyle = "#e5e5e5";
    ctx.lineWidth = 2;

    for (let y = 70; y < rect.height; y += 70) {
      ctx.beginPath();
      ctx.moveTo(20, y);
      ctx.lineTo(rect.width - 20, y);
      ctx.stroke();
    }

    ctx.fillStyle = "#d4d4d4";
    ctx.font = "bold 130px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    let value = "";

    if (section === "english") value = letter;
    if (section === "numbers") value = number;
    if (section === "telugu") value = teluguLetter;

    ctx.fillText(value, rect.width / 2, rect.height / 2);

    ctx.setLineDash([4, 8]);
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 3;

    ctx.strokeRect(20, 20, rect.width - 40, rect.height - 40);

    ctx.setLineDash([]);
  }

  function getPosition(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (event.touches) {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top
      };
    }

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  function startDrawing(event) {
    event.preventDefault();

    drawing.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getPosition(event);

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(event) {
    event.preventDefault();

    if (!drawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getPosition(event);

    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#ff6b6b";

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDrawing(event) {
    if (event) event.preventDefault();
    drawing.current = false;
  }

  function clearCanvas() {
    setupCanvas();
    setMessage("");
  }

  function nextItem() {
    clearCanvas();

    if (section === "english") {
      const index = english.indexOf(letter);
      const next = english[(index + 1) % english.length];
      setLetter(next);
    }

    if (section === "numbers") {
      setNumber((old) => (old >= 100 ? 1 : old + 1));
    }

    if (section === "telugu") {
      const index = telugu.indexOf(teluguLetter);
      const next = telugu[(index + 1) % telugu.length];
      setTeluguLetter(next);
    }

    setMessage("⭐ Great! Try the next one!");
  }

  function previousItem() {
    clearCanvas();

    if (section === "english") {
      const index = english.indexOf(letter);
      const previous =
        english[
          (index - 1 + english.length) % english.length
        ];

      setLetter(previous);
    }

    if (section === "numbers") {
      setNumber((old) => (old <= 1 ? 100 : old - 1));
    }

    if (section === "telugu") {
      const index = telugu.indexOf(teluguLetter);
      const previous =
        telugu[
          (index - 1 + telugu.length) % telugu.length
        ];

      setTeluguLetter(previous);
    }

    setMessage("✏️ Keep practicing!");
  }

  return (
    <>
      <Head>
        <title>Writing Practice | Chinnaari Kids</title>

        <meta
          name="description"
          content="Practice English letters, numbers and Telugu letters with fun dotted tracing activities for kids."
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
            <Link href="/abc">🔤 ABC</Link>
            <Link href="/numbers">🔢 Numbers</Link>
            <Link href="/colours">🎨 Colours</Link>
            <Link href="/games">🎮 Games</Link>
          </nav>

        </header>

        <section className="hero">

          <div className="pencil">
            ✏️
          </div>

          <h1>
            Writing Practice
          </h1>

          <p>
            Trace the dotted letters and numbers!
          </p>

          <div className="heroLetters">
            🔤 🔢 అ ✏️ ⭐
          </div>

        </section>

        <section className="tabs">

          <button
            className={section === "english" ? "active" : ""}
            onClick={() => {
              setSection("english");
              setMessage("");
            }}
          >
            🔤 English
          </button>

          <button
            className={section === "numbers" ? "active" : ""}
            onClick={() => {
              setSection("numbers");
              setMessage("");
            }}
          >
            🔢 Numbers
          </button>

          <button
            className={section === "telugu" ? "active" : ""}
            onClick={() => {
              setSection("telugu");
              setMessage("");
            }}
          >
            అ తెలుగు
          </button>

        </section>

        <section className="practice">

          <div className="practiceTitle">

            <span>
              {section === "english" && "🔤 Trace the Letter"}
              {section === "numbers" && "🔢 Trace the Number"}
              {section === "telugu" && "అ తెలుగు అక్షరం రాయండి"}
            </span>

            <span className="counter">
              {section === "english" &&
                `${english.indexOf(letter) + 1} / ${english.length}`}

              {section === "numbers" &&
                `${number} / 100`}

              {section === "telugu" &&
                `${telugu.indexOf(teluguLetter) + 1} / ${telugu.length}`}
            </span>

          </div>

          <div className="instruction">
            👆 Follow the dotted guide and practice writing
          </div>

          <div className="canvasBox">

            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />

          </div>

          <div className="buttons">

            <button
              className="clear"
              onClick={clearCanvas}
            >
              🗑️ Clear
            </button>

            <button
              className="previous"
              onClick={previousItem}
            >
              ⬅️ Previous
            </button>

            <button
              className="next"
              onClick={nextItem}
            >
              Next ➡️
            </button>

          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

        </section>

        <section className="preview">

          <h2>
            📚 Choose What You Want to Practice
          </h2>

          <div className="previewGrid">

            <div
              className="previewCard"
              onClick={() => setSection("english")}
            >
              <div>🔤</div>
              <h3>English Letters</h3>
              <p>A B C D E ... Z</p>
            </div>

            <div
              className="previewCard"
              onClick={() => setSection("numbers")}
            >
              <div>🔢</div>
              <h3>Numbers</h3>
              <p>1 2 3 ... 100</p>
            </div>

            <div
              className="previewCard"
              onClick={() => setSection("telugu")}
            >
              <div>అ</div>
              <h3>Telugu Letters</h3>
              <p>అ ఆ ఇ ఈ ...</p>
            </div>

          </div>

        </section>

        <section className="tip">

          <div className="tipIcon">
            🌟
          </div>

          <div>

            <h2>
              Practice Makes Perfect!
            </h2>

            <p>
              Trace slowly and carefully.
              Practice every day to improve
              your handwriting.
            </p>

            <p className="telugu">
              ప్రతిరోజూ కొంచెం కొంచెంగా
              సాధన చేస్తే మీ రాత మరింత అందంగా
              మారుతుంది!
            </p>

          </div>

        </section>

        <section className="links">

          <Link href="/abc">
            🔤 ABC
          </Link>

          <Link href="/numbers">
            🔢 Numbers
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/stories">
            📖 Stories
          </Link>

          <Link href="/games">
            🎮 Games
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
          padding: 55px 20px;
          background:
            linear-gradient(
              135deg,
              #fff0c9,
              #e5e0ff,
              #dff7ff
            );
        }

        .pencil {
          font-size: 85px;
        }

        .hero h1 {
          font-size: 44px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .heroLetters {
          margin-top: 20px;
          font-size: 35px;
          letter-spacing: 7px;
        }

        .tabs {
          max-width: 800px;
          margin: 35px auto 20px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .tabs button {
          border: none;
          padding: 16px 10px;
          border-radius: 22px;
          background: white;
          box-shadow: 0 4px 15px rgba(0,0,0,.07);
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .tabs button.active {
          background: #ffcf70;
          transform: scale(1.03);
        }

        .practice {
          max-width: 850px;
          margin: 25px auto 55px;
          padding: 30px 25px;
          text-align: center;
          background: white;
          border-radius: 30px;
          box-shadow: 0 7px 25px rgba(0,0,0,.08);
        }

        .practiceTitle {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          font-size: 21px;
          font-weight: bold;
        }

        .counter {
          padding: 7px 14px;
          background: #fff1ca;
          border-radius: 20px;
          font-size: 14px;
        }

        .instruction {
          margin: 20px 0;
          color: #777;
        }

        .canvasBox {
          width: 100%;
          height: 430px;
          border-radius: 25px;
          overflow: hidden;
          background: white;
          border: 3px solid #eee;
          touch-action: none;
        }

        canvas {
          width: 100%;
          height: 100%;
          display: block;
          touch-action: none;
          cursor: crosshair;
        }

        .buttons {
          margin-top: 22px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .buttons button {
          border: none;
          padding: 13px 22px;
          border-radius: 25px;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
        }

        .clear {
          background: #ffe1e1;
        }

        .previous {
          background: #e5e5ff;
        }

        .next {
          background: #4caf50;
          color: white;
        }

        .buttons button:hover {
          transform: translateY(-2px);
        }

        .message {
          margin-top: 20px;
          padding: 12px;
          border-radius: 20px;
          background: #eaffdf;
          font-weight: bold;
        }

        .preview {
          max-width: 1000px;
          margin: 30px auto 50px;
          padding: 0 20px;
          text-align: center;
        }

        .preview h2 {
          font-size: 28px;
        }

        .previewGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 25px;
        }

        .previewCard {
          padding: 25px 15px;
          background: white;
          border-radius: 25px;
          box-shadow: 0 5px 18px rgba(0,0,0,.06);
          cursor: pointer;
          transition: .2s;
        }

        .previewCard:hover {
          transform: translateY(-6px);
        }

        .previewCard div {
          font-size: 60px;
          font-weight: bold;
        }

        .previewCard h3 {
          margin: 12px 0 5px;
        }

        .previewCard p {
          color: #777;
        }

        .tip {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fff;
          border-radius: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,.06);
        }

        .tipIcon {
          font-size: 70px;
        }

        .tip p {
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

        @media (max-width: 700px) {

          .header {
            flex-direction: column;
          }

          .hero h1 {
            font-size: 35px;
          }

          .tabs {
            grid-template-columns: 1fr;
          }

          .previewGrid {
            grid-template-columns: 1fr;
          }

          .tip {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
          }

          .canvasBox {
            height: 360px;
          }

        }

        @media (max-width: 500px) {

          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 29px;
          }

          .pencil {
            font-size: 70px;
          }

          .heroLetters {
            font-size: 26px;
            letter-spacing: 3px;
          }

          .practiceTitle {
            font-size: 17px;
          }

          .canvasBox {
            height: 330px;
          }

        }

      `}</style>
    </>
  );
}
