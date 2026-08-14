import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const letters = [
  ["అ", "అమ్మ", "👩"],
  ["ఆ", "ఆవు", "🐄"],
  ["ఇ", "ఇల్లు", "🏠"],
  ["ఈ", "ఈగ", "🪰"],
  ["ఉ", "ఉడుత", "🐿️"],
  ["ఊ", "ఊయల", "🛝"],
  ["ఋ", "ఋషి", "🧘"],
  ["ఎ", "ఎలుక", "🐭"],
  ["ఏ", "ఏనుగు", "🐘"],
  ["ఐ", "ఐదు", "🖐️"],
  ["ఒ", "ఒంటె", "🐪"],
  ["ఓ", "ఓడ", "🚢"],
  ["ఔ", "ఔషధం", "🌿"],
  ["అం", "అంకె", "🔢"],
  ["అః", "అః", "📖"],
];

export default function Telugu() {
  const canvasRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [drawing, setDrawing] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const item = letters[index];

  const letter = item[0];
  const word = item[1];
  const emoji = item[2];

  useEffect(() => {
    drawLetter();
  }, [index]);

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

    ctx.fillStyle = "#fff8f0";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.font = "bold 230px Arial";

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

  function getPosition(event) {
    const canvas = canvasRef.current;

    const rect =
      canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (
      event.touches &&
      event.touches.length > 0
    ) {
      clientX =
        event.touches[0].clientX;

      clientY =
        event.touches[0].clientY;
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

    const position =
      getPosition(event);

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

    const position =
      getPosition(event);

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

    setScore(
      (value) => value + 1
    );

    setMessage(
      "🎉 చాలా బాగా చేశారు!"
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
    setIndex(
      (value) =>
        (value + 1) % letters.length
    );

    setMessage("");
  }

  function previousLetter() {
    setIndex(
      (value) =>
        (value - 1 + letters.length) %
        letters.length
    );

    setMessage("");
  }

  function speak() {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      const speech =
        new SpeechSynthesisUtterance(
          `${letter}. ${word}`
        );

      speech.lang = "te-IN";

      speech.rate = 0.7;

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
          Telugu Letters Learning | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Learn Telugu letters with dotted tracing, pictures and pronunciation for children."
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

            <Link href="/numbers">
              🔢 Numbers
            </Link>

            <Link href="/abc">
              🔤 ABC
            </Link>

            <Link href="/telugu">
              🇮🇳 తెలుగు
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

          </nav>

        </header>

        {/* HERO */}

        <section className="hero">

          <div className="heroIcon">
            🇮🇳✨
          </div>

          <h1>
            తెలుగు అక్షరాలు
          </h1>

          <p>
            చూడండి • చెప్పండి • రాయండి • నేర్చుకోండి
          </p>

          <div className="badge">
            ♾️ Unlimited Practice
          </div>

        </section>

        {/* LETTER SELECTOR */}

        <section className="selector">

          <h2>
            అక్షరాన్ని ఎంచుకోండి
          </h2>

          <div className="letters">

            {letters.map(
              (item, i) => (

                <button
                  key={item[0]}
                  className={
                    i === index
                      ? "letter active"
                      : "letter"
                  }
                  onClick={() => {
                    setIndex(i);
                    setMessage("");
                  }}
                >
                  {item[0]}
                </button>

              )
            )}

          </div>

        </section>

        {/* LEARNING */}

        <section className="learning">

          <div className="top">

            <span>
              ⭐ Score: {score}
            </span>

            <span>
              {index + 1} / {letters.length}
            </span>

          </div>

          {/* EXAMPLE */}

          <div className="example">

            <div className="emoji">
              {emoji}
            </div>

            <div>

              <div className="bigLetter">
                {letter}
              </div>

              <h2>
                {letter} - {word}
              </h2>

            </div>

          </div>

          {/* SPEAK */}

          <button
            className="speak"
            onClick={speak}
          >
            🔊 వినండి
          </button>

          <h2 className="traceTitle">
            ✏️ అక్షరాన్ని ట్రేస్ చేయండి
          </h2>

          <p className="instruction">
            చుక్కల గీతపై మీ వేలితో రాయండి
          </p>

          {/* CANVAS */}

          <canvas
            ref={canvasRef}
            width={500}
            height={350}
            className="canvas"

            onMouseDown={
              startDrawing
            }

            onMouseMove={
              draw
            }

            onMouseUp={
              stopDrawing
            }

            onMouseLeave={
              stopDrawing
            }

            onTouchStart={
              startDrawing
            }

            onTouchMove={
              draw
            }

            onTouchEnd={
              stopDrawing
            }
          />

          {message && (

            <div className="message">
              {message}
            </div>

          )}

          {/* CONTROLS */}

          <div className="buttons">

            <button
              onClick={previousLetter}
              className="previous"
            >
              ⬅️ ముందు
            </button>

            <button
              onClick={clearCanvas}
              className="clear"
            >
              🧹 క్లియర్
            </button>

            <button
              onClick={nextLetter}
              className="next"
            >
              తరువాత ➡️
            </button>

          </div>

        </section>

        {/* WORD CARD */}

        <section className="wordCard">

          <div className="wordEmoji">
            {emoji}
          </div>

          <div>

            <h2>
              {letter} అంటే {word}
            </h2>

            <p>
              అక్షరాన్ని చూసి పదాన్ని గుర్తు
              పెట్టుకోండి! 🌟
            </p>

            <button
              onClick={speak}
              className="listen"
            >
              🔊 వినండి
            </button>

          </div>

        </section>

        {/* TIP */}

        <section className="tip">

          <div className="tipIcon">
            🧠
          </div>

          <div>

            <h2>
              చిన్నారి లెర్నింగ్ టిప్
            </h2>

            <p>
              అక్షరాన్ని నెమ్మదిగా ట్రేస్ చేయండి.
              అక్షరాన్ని గట్టిగా పలకండి.
              చిత్రాన్ని చూసి పదాన్ని గుర్తుంచుకోండి.
            </p>

          </div>

        </section>

        {/* LINKS */}

        <section className="links">

          <Link href="/numbers">
            🔢 Numbers
          </Link>

          <Link href="/abc">
            🔤 ABC
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/games">
            🎮 Games
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          background: white;
          box-shadow: 0 2px 15px rgba(0,0,0,.08);
          position: sticky;
          top: 0;
          z-index: 10;
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
          background: linear-gradient(
            135deg,
            #ffe2c2,
            #e4ddff
          );
        }

        .heroIcon {
          font-size: 65px;
        }

        .hero h1 {
          font-size: 40px;
          margin: 10px 0;
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

        .selector {
          max-width: 950px;
          margin: 30px auto;
          padding: 0 20px;
          text-align: center;
        }

        .letters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
        }

        .letter {
          min-width: 45px;
          height: 45px;
          padding: 5px 10px;
          border: none;
          border-radius: 13px;
          background: white;
          font-size: 19px;
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
          font-size: 80px;
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

        .traceTitle {
          margin-top: 30px;
        }

        .instruction {
          color: #666;
        }

        .canvas {
          width: 100%;
          max-width: 500px;
          height: auto;
          margin: 20px auto;
          display: block;
          border: 3px dashed #cfc1ff;
          border-radius: 25px;
          background: #fff8f0;
          touch-action: none;
          cursor: crosshair;
        }

        .message {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 25px;
          background: #dcf7d9;
          color: #28752d;
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
          background: linear-gradient(
            135deg,
            #fff0b8,
            #e1f5ff
          );
        }

        .wordEmoji {
          font-size: 80px;
        }

        .wordCard p {
          color: #666;
          line-height: 1.7;
        }

        .tip {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-radius: 30px;
          background: white;
          box-shadow: 0 5px 20px rgba(0,0,0,.06);
        }

        .tipIcon {
          font-size: 55px;
        }

        .tip p {
          color: #666;
          line-height: 1.7;
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

          .learning {
            margin: 25px 15px;
          }

          .wordCard {
            margin: 25px 15px;
            flex-direction: column;
            text-align: center;
          }

          .tip {
            margin: 25px 15px 45px;
            flex-direction: column;
            text-align: center;
          }

          .hero h1 {
            font-size: 32px;
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
            min-width: 40px;
            height: 40px;
            font-size: 17px;
          }

          .bigLetter {
            font-size: 65px;
          }

          .emoji {
            font-size: 65px;
          }
        }

      `}</style>

    </>
  );
        }
