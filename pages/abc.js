import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const letters = [
  { letter: "A", word: "Apple", emoji: "🍎" },
  { letter: "B", word: "Ball", emoji: "⚽" },
  { letter: "C", word: "Cat", emoji: "🐱" },
  { letter: "D", word: "Dog", emoji: "🐶" },
  { letter: "E", word: "Elephant", emoji: "🐘" },
  { letter: "F", word: "Fish", emoji: "🐟" },
  { letter: "G", word: "Grapes", emoji: "🍇" },
  { letter: "H", word: "House", emoji: "🏠" },
  { letter: "I", word: "Ice Cream", emoji: "🍦" },
  { letter: "J", word: "Juice", emoji: "🧃" },
  { letter: "K", word: "Kite", emoji: "🪁" },
  { letter: "L", word: "Lion", emoji: "🦁" },
  { letter: "M", word: "Monkey", emoji: "🐒" },
  { letter: "N", word: "Nest", emoji: "🪺" },
  { letter: "O", word: "Orange", emoji: "🍊" },
  { letter: "P", word: "Parrot", emoji: "🦜" },
  { letter: "Q", word: "Queen", emoji: "👑" },
  { letter: "R", word: "Rabbit", emoji: "🐰" },
  { letter: "S", word: "Sun", emoji: "☀️" },
  { letter: "T", word: "Tiger", emoji: "🐯" },
  { letter: "U", word: "Umbrella", emoji: "☂️" },
  { letter: "V", word: "Van", emoji: "🚐" },
  { letter: "W", word: "Watch", emoji: "⌚" },
  { letter: "X", word: "Xylophone", emoji: "🎵" },
  { letter: "Y", word: "Yo-Yo", emoji: "🪀" },
  { letter: "Z", word: "Zebra", emoji: "🦓" },
];

export default function ABC() {
  const canvasRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [drawing, setDrawing] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const item = letters[current];

  useEffect(() => {
    drawLetter();
  }, [current]);

  function drawLetter() {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.fillStyle = "#f8f5ff";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.font = "bold 260px Arial";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.setLineDash([6, 10]);

    ctx.strokeStyle = "#aaa";

    ctx.lineWidth = 6;

    ctx.strokeText(
      item.letter,
      canvas.width / 2,
      canvas.height / 2 + 10
    );

    ctx.setLineDash([]);
  }

  function getPosition(event) {
    const canvas = canvasRef.current;

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (
      event.touches &&
      event.touches.length > 0
    ) {
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

    ctx.moveTo(
      position.x,
      position.y
    );
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

    ctx.lineTo(
      position.x,
      position.y
    );

    ctx.stroke();
  }

  function stopDrawing() {
    if (!drawing) return;

    setDrawing(false);

    setScore((value) => value + 1);

    setMessage(
      `🎉 Great! You traced ${item.letter}!`
    );

    setTimeout(() => {
      setMessage("");
    }, 1500);
  }

  function clearCanvas() {
    drawLetter();

    setMessage("");
  }

  function nextLetter() {
    setCurrent(
      (value) =>
        (value + 1) % letters.length
    );

    setMessage("");
  }

  function previousLetter() {
    setCurrent(
      (value) =>
        (value - 1 + letters.length) %
        letters.length
    );

    setMessage("");
  }

  function speakLetter() {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      const speech =
        new SpeechSynthesisUtterance(
          `${item.letter}. ${item.word}`
        );

      speech.lang = "en-US";

      speech.rate = 0.8;

      window.speechSynthesis.cancel();

      window.speechSynthesis.speak(
        speech
      );
    }
  }

  return (
    <>
      <Head>

        <title>
          ABC Learning & Tracing | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Learn A to Z with dotted letter tracing, pictures and pronunciation for kids."
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

            <Link href="/abc">
              🔤 ABC
            </Link>

            <Link href="/colours">
              🎨 Colours
            </Link>

          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroIcon">
            🔤✨
          </div>

          <h1>
            Learn ABC!
          </h1>

          <p>
            See • Say • Trace • Learn
          </p>

          <div className="badge">
            ♾️ Unlimited Practice
          </div>

        </section>

        {/* LETTER SELECTOR */}

        <section className="letterSelector">

          <h2>
            Choose a Letter
          </h2>

          <div className="letters">

            {letters.map(
              (letter, index) => (

                <button
                  key={letter.letter}
                  className={
                    index === current
                      ? "letter active"
                      : "letter"
                  }
                  onClick={() => {
                    setCurrent(index);
                    setMessage("");
                  }}
                >
                  {letter.letter}
                </button>

              )
            )}

          </div>

        </section>

        {/* MAIN AREA */}

        <section className="learningArea">

          <div className="topBar">

            <div className="score">
              ⭐ {score}
            </div>

            <div className="current">
              {current + 1} / 26
            </div>

          </div>

          <div className="example">

            <div className="exampleEmoji">
              {item.emoji}
            </div>

            <div>

              <div className="letterWord">
                {item.letter}
              </div>

              <h2>
                {item.letter} for {item.word}
              </h2>

            </div>

          </div>

          <button
            className="speakButton"
            onClick={speakLetter}
          >
            🔊 Say "{item.letter}"
          </button>

          <h2 className="traceTitle">
            ✏️ Trace the Letter
          </h2>

          <p className="instruction">
            Follow the dotted line with your finger
          </p>

          {/* CANVAS */}

          <div className="canvasWrapper">

            <canvas
              ref={canvasRef}
              width={500}
              height={350}
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

          {message && (

            <div className="success">
              {message}
            </div>

          )}

          {/* CONTROLS */}

          <div className="controls">

            <button
              className="previous"
              onClick={previousLetter}
            >
              ⬅️ Previous
            </button>

            <button
              className="clear"
              onClick={clearCanvas}
            >
              🧹 Clear
            </button>

            <button
              className="next"
              onClick={nextLetter}
            >
              Next ➡️
            </button>

          </div>

        </section>

        {/* WORD CARD */}

        <section className="wordCard">

          <div className="wordImage">
            {item.emoji}
          </div>

          <div>

            <h2>
              {item.letter} is for {item.word}
            </h2>

            <p>
              Say it aloud and remember the word!
            </p>

            <button
              onClick={speakLetter}
              className="listen"
            >
              🔊 Listen
            </button>

          </div>

        </section>

        {/* ALPHABET STRIP */}

        <section className="alphabetStrip">

          <h2>
            🌟 Alphabet A to Z
          </h2>

          <div className="alphabetLine">

            {letters.map((item) => (
              <span key={item.letter}>
                {item.letter}
              </span>
            ))}

          </div>

        </section>

        {/* LEARNING TIP */}

        <section className="tip">

          <div className="tipIcon">
            🧠
          </div>

          <div>

            <h2>
              Little Learner Tip
            </h2>

            <p>
              Trace the letter slowly, say its
              sound and remember the picture.
              Practice every day! 🌟
            </p>

          </div>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

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
              #ffe2ed,
              #e4ddff
            );
        }

        .heroIcon {
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

        .badge {
          display: inline-block;

          padding: 9px 18px;

          border-radius: 25px;

          background: white;

          font-weight: bold;
        }

        /* LETTER SELECTOR */

        .letterSelector {
          max-width: 950px;

          margin: 30px auto 0;

          padding: 0 20px;

          text-align: center;
        }

        .letterSelector h2 {
          font-size: 24px;
        }

        .letters {
          display: flex;

          justify-content: center;

          gap: 8px;

          flex-wrap: wrap;
        }

        .letter {
          width: 43px;

          height: 43px;

          border: none;

          border-radius: 13px;

          background: white;

          box-shadow:
            0 3px 10px
            rgba(0,0,0,0.06);

          font-size: 17px;

          font-weight: bold;

          cursor: pointer;
        }

        .letter:hover {
          transform: translateY(-3px);
        }

        .letter.active {
          background: #ff6b6b;

          color: white;
        }

        /* LEARNING */

        .learningArea {
          max-width: 850px;

          margin: 35px auto;

          padding: 35px 25px;

          text-align: center;

          border-radius: 32px;

          background: white;

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .topBar {
          display: flex;

          justify-content: space-between;
        }

        .score,
        .current {
          padding: 9px 17px;

          border-radius: 25px;

          font-weight: bold;
        }

        .score {
          background: #fff0b8;
        }

        .current {
          background: #e5ddff;
        }

        /* EXAMPLE */

        .example {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 25px;

          margin: 30px 0 20px;
        }

        .exampleEmoji {
          font-size: 85px;
        }

        .letterWord {
          font-size: 70px;

          font-weight: 900;

          color: #ff6b6b;
        }

        .example h2 {
          margin: 0;

          font-size: 25px;
        }

        .speakButton,
        .listen {
          border: none;

          padding: 12px 20px;

          border-radius: 25px;

          background: #dff2ff;

          font-weight: bold;

          cursor: pointer;
        }

        .traceTitle {
          margin: 30px 0 5px;

          font-size: 29px;
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

          border: 3px dashed #d2c6ff;

          border-radius: 25px;

          background: #f8f5ff;

          touch-action: none;

          cursor: crosshair;
        }

        .success {
          display: inline-block;

          padding: 12px 20px;

          border-radius: 25px;

          background: #dcf7d9;

          color: #26752b;

          font-weight: bold;
        }

        /* CONTROLS */

        .controls {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 25px;
        }

        .controls button {
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

        /* WORD CARD */

        .wordCard {
          max-width: 850px;

          margin: 30px auto;

          padding: 30px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 25px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e1f5ff
            );
        }

        .wordImage {
          font-size: 85px;
        }

        .wordCard h2 {
          margin-top: 0;

          font-size: 27px;
        }

        .wordCard p {
          color: #666;
        }

        /* ALPHABET */

        .alphabetStrip {
          max-width: 900px;

          margin: 35px auto;

          padding: 30px 20px;

          text-align: center;

          border-radius: 30px;

          background: white;

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.06);
        }

        .alphabetLine {
          display: flex;

          justify-content: center;

          gap: 8px;

          flex-wrap: wrap;
        }

        .alphabetLine span {
          display: flex;

          align-items: center;

          justify-content: center;

          width: 38px;

          height: 38px;

          border-radius: 50%;

          background: #f0eaff;

          font-weight: bold;
        }

        /* TIP */

        .tip {
          max-width: 850px;

          margin: 35px auto 50px;

          padding: 30px;

          display: flex;

          align-items: center;

          gap: 20px;

          border-radius: 30px;

          background: #fff;

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.06);
        }

        .tipIcon {
          font-size: 55px;
        }

        .tip h2 {
          margin-top: 0;
        }

        .tip p {
          margin-bottom: 0;

          line-height: 1.7;

          color: #666;
        }

        /* NAVIGATION */

        .navigation {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

          margin: 20px 20px 55px;
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

          .example {
            flex-direction: column;

            gap: 5px;
          }

          .exampleEmoji {
            font-size: 65px;
          }

          .letterWord {
            font-size: 55px;
          }

          .wordCard {
    
