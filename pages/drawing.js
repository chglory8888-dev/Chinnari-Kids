import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const pictures = [
  { name: "Sun", emoji: "☀️" },
  { name: "Flower", emoji: "🌸" },
  { name: "Butterfly", emoji: "🦋" },
  { name: "Fish", emoji: "🐟" },
  { name: "Bird", emoji: "🐦" },
  { name: "Cat", emoji: "🐱" },
  { name: "Dog", emoji: "🐶" },
  { name: "Car", emoji: "🚗" },
  { name: "House", emoji: "🏠" },
  { name: "Tree", emoji: "🌳" },
];

const colors = [
  "#ff0000",
  "#ff7a00",
  "#ffd000",
  "#24a148",
  "#008cff",
  "#6c3cff",
  "#ff4fa3",
  "#8b4513",
  "#000000",
];

export default function Drawing() {
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  const [color, setColor] = useState("#ff0000");
  const [size, setSize] = useState(8);
  const [tool, setTool] = useState("brush");
  const [picture, setPicture] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setupCanvas();
  }, []);

  function setupCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;

    const ctx = canvas.getContext("2d");

    ctx.scale(ratio, ratio);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }

  function position(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (event.touches && event.touches.length > 0) {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      };
    }

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function startDrawing(event) {
    event.preventDefault();

    drawing.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = position(event);

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }

  function draw(event) {
    event.preventDefault();

    if (!drawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = position(event);

    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (tool === "eraser") {
      ctx.strokeStyle = "#ffffff";
    } else {
      ctx.strokeStyle = color;
    }

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDrawing(event) {
    if (event) event.preventDefault();
    drawing.current = false;
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();

    ctx.clearRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);

    setMessage("✨ Canvas cleared!");
  }

  function nextPicture() {
    setPicture((old) => (old + 1) % pictures.length);
    clearCanvas();
    setMessage(`🎨 Let's draw a ${pictures[(picture + 1) % pictures.length].name}!`);
  }

  function previousPicture() {
    setPicture(
      (old) => (old - 1 + pictures.length) % pictures.length
    );
    clearCanvas();
  }

  return (
    <>
      <Head>
        <title>Drawing & Coloring | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun drawing and coloring activity for kids. Draw animals, birds, flowers, vehicles and more."
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
            <Link href="/stories">📖 Stories</Link>
            <Link href="/games">🎮 Games</Link>
            <Link href="/puzzles">🧩 Puzzles</Link>
            <Link href="/colours">🎨 Colours</Link>
            <Link href="/writing">✏️ Writing</Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroIcon">
            🎨
          </div>

          <h1>
            Drawing & Coloring
          </h1>

          <p>
            Draw, color and have fun!
          </p>

          <div className="heroIcons">
            🖍️ 🖌️ 🌈 ✏️ ⭐
          </div>

        </section>

        <section className="pictureSelector">

          <h2>
            🖼️ What do you want to draw?
          </h2>

          <div className="pictureGrid">

            {pictures.map((item, index) => (

              <button
                key={item.name}
                className={
                  picture === index
                    ? "picture activePicture"
                    : "picture"
                }
                onClick={() => {
                  setPicture(index);
                  clearCanvas();
                  setMessage(`🎨 Let's draw a ${item.name}!`);
                }}
              >

                <span>
                  {item.emoji}
                </span>

                <small>
                  {item.name}
                </small>

              </button>

            ))}

          </div>

        </section>

        <section className="drawingArea">

          <div className="drawingHeader">

            <div>
              <span className="selectedEmoji">
                {pictures[picture].emoji}
              </span>

              <strong>
                {pictures[picture].name}
              </strong>
            </div>

            <div className="counter">
              {picture + 1} / {pictures.length}
            </div>

          </div>

          <div className="canvasContainer">

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

          <div className="tools">

            <div className="toolGroup">

              <span>
                🎨 Color
              </span>

              {colors.map((item) => (

                <button
                  key={item}
                  className={
                    color === item
                      ? "colorButton selectedColor"
                      : "colorButton"
                  }
                  style={{
                    background: item,
                  }}
                  onClick={() => {
                    setColor(item);
                    setTool("brush");
                  }}
                  aria-label="Choose color"
                />

              ))}

            </div>

            <div className="toolGroup">

              <span>
                🖌️ Brush
              </span>

              <button
                className={
                  tool === "brush" && size === 5
                    ? "size activeTool"
                    : "size"
                }
                onClick={() => {
                  setTool("brush");
                  setSize(5);
                }}
              >
                Small
              </button>

              <button
                className={
                  tool === "brush" && size === 10
                    ? "size activeTool"
                    : "size"
                }
                onClick={() => {
                  setTool("brush");
                  setSize(10);
                }}
              >
                Medium
              </button>

              <button
                className={
                  tool === "brush" && size === 20
                    ? "size activeTool"
                    : "size"
                }
                onClick={() => {
                  setTool("brush");
                  setSize(20);
                }}
              >
                Big
              </button>

            </div>

            <div className="toolGroup">

              <button
                className={
                  tool === "eraser"
                    ? "tool activeTool"
                    : "tool"
                }
                onClick={() => setTool("eraser")}
              >
                🧽 Eraser
              </button>

              <button
                className="tool clearTool"
                onClick={clearCanvas}
              >
                🗑️ Clear
              </button>

            </div>

          </div>

          <div className="navigation">

            <button
              onClick={previousPicture}
              className="previous"
            >
              ⬅️ Previous
            </button>

            <button
              onClick={nextPicture}
              className="next"
            >
              Next Picture ➡️
            </button>

          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

        </section>

        <section className="learning">

          <div className="learningIcon">
            🌈
          </div>

          <div>

            <h2>
              Be Creative!
            </h2>

            <p>
              Choose a picture, select your favorite
              color and create your own beautiful
              drawing.
            </p>

            <p className="telugu">
              మీకు నచ్చిన రంగులను ఎంచుకుని
              అందమైన బొమ్మలను గీయండి!
            </p>

          </div>

        </section>

        <section className="links">

          <Link href="/writing">
            ✏️ Writing
          </Link>

          <Link href="/colours">
            🎨 Learn Colours
          </Link>

          <Link href="/puzzles">
            🧩 Puzzles
          </Link>

          <Link href="/games">
            🎮 Games
          </Link>

          <Link href="/stories">
            📖 Stories
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
              #ffe1e9,
              #fff1c9,
              #dff4ff
            );
        }

        .heroIcon {
          font-size: 90px;
        }

        .hero h1 {
          font-size: 44px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .heroIcons {
          margin-top: 20px;
          font-size: 36px;
          letter-spacing: 5px;
        }

        .pictureSelector {
          max-width: 1000px;
          margin: 35px auto 25px;
          padding: 0 20px;
          text-align: center;
        }

        .pictureSelector h2 {
          font-size: 27px;
        }

        .pictureGrid {
          display: grid;
          grid-template-columns:
            repeat(10, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .picture {
          border: 2px solid #eee;
          background: white;
          border-radius: 18px;
          padding: 10px 5px;
          cursor: pointer;
          transition: .2s;
        }

        .picture:hover {
          transform: translateY(-4px);
        }

        .picture span {
          display: block;
          font-size: 36px;
        }

        .picture small {
          font-weight: bold;
        }

        .activePicture {
          border-color: #ff9d42;
          background: #fff0d0;
          transform: translateY(-4px);
        }

        .drawingArea {
          max-width: 900px;
          margin: 30px auto 55px;
          padding: 25px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 7px 25px rgba(0,0,0,.08);
        }

        .drawingHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .selectedEmoji {
          font-size: 40px;
          margin-right: 10px;
        }

        .counter {
          padding: 8px 15px;
          border-radius: 20px;
          background: #fff0c9;
          font-size: 14px;
          font-weight: bold;
        }

        .canvasContainer {
          width: 100%;
          height: 450px;
          border: 3px dashed #bbb;
          border-radius: 25px;
          overflow: hidden;
          background: white;
          touch-action: none;
        }

        canvas {
          width: 100%;
          height: 100%;
          display: block;
          cursor: crosshair;
          touch-action: none;
        }

        .tools {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .toolGroup {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 10px;
          background: #f7f7f7;
          border-radius: 20px;
        }

        .toolGroup span {
          font-size: 13px;
          font-weight: bold;
        }

        .colorButton {
          width: 28px;
          height: 28px;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 1px 5px rgba(0,0,0,.2);
        }

        .selectedColor {
          transform: scale(1.25);
          border-color: #333;
        }

        .size,
        .tool {
          border: none;
          padding: 8px 11px;
          border-radius: 16px;
          background: white;
          cursor: pointer;
          font-size: 12px;
          font-weight: bold;
        }

        .activeTool {
          background: #ffe0a8;
        }

        .clearTool {
          background: #ffdede;
        }

        .navigation {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 25px;
        }

        .navigation button {
          border: none;
          padding: 13px 22px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .previous {
          background: #e8e8ff;
        }

        .next {
          background: #4caf50;
          color: white;
        }

        .message {
          margin-top: 20px;
          padding: 12px;
          text-align: center;
          background: #eaffdf;
          border-radius: 20px;
          font-weight: bold;
        }

        .learning {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,.06);
        }

        .learningIcon {
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

        @media (max-width: 900px) {

          .pictureGrid {
            grid-template-columns:
              repeat(5, 1fr);
          }

        }

        @media (max-width: 700px) {

          .header {
            flex-direction: column;
          }

          .hero h1 {
            font-size: 35px;
          }

          .pictureGrid {
            grid-template-columns:
              repeat(4, 1fr);
          }

          .canvasContainer {
            height: 380px;
          }

          .learning {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
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

          .heroIcon {
            font-size: 70px;
          }

          .heroIcons {
            font-size: 27px;
            letter-spacing: 2px;
          }

          .pictureGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .drawingArea {
            margin-left: 10px;
            margin-right: 10px;
            padding: 15px;
          }

          .canvasContainer {
            height: 330px;
          }

          .drawingHeader {
            font-size: 17px;
          }

          .navigation {
            flex-direction: column;
          }

          .navigation button {
            width: 100%;
          }

        }

      `}</style>
    </>
  );
  }
