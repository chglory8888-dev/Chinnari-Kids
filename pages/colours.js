import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const colours = [
  {
    name: "Red",
    telugu: "ఎరుపు",
    emoji: "🔴",
  },
  {
    name: "Blue",
    telugu: "నీలం",
    emoji: "🔵",
  },
  {
    name: "Green",
    telugu: "ఆకుపచ్చ",
    emoji: "🟢",
  },
  {
    name: "Yellow",
    telugu: "పసుపు",
    emoji: "🟡",
  },
  {
    name: "Orange",
    telugu: "నారింజ",
    emoji: "🟠",
  },
  {
    name: "Purple",
    telugu: "ఊదా",
    emoji: "🟣",
  },
  {
    name: "Pink",
    telugu: "గులాబీ",
    emoji: "🩷",
  },
  {
    name: "Brown",
    telugu: "గోధుమ",
    emoji: "🟤",
  },
];

function speak(text, lang) {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = lang;
  speech.rate = 0.8;
  speech.pitch = 1.1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

function playSound(type) {
  if (typeof window === "undefined") return;

  try {
    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    if (type === "click") {
      oscillator.frequency.value = 500;
      gain.gain.value = 0.08;
    }

    if (type === "success") {
      oscillator.frequency.value = 800;
      gain.gain.value = 0.1;
    }

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, 150);
  } catch (error) {
    console.log("Sound unavailable");
  }
}

export default function Colours() {
  const [language, setLanguage] = useState("en");
  const [selected, setSelected] = useState(null);

  function selectColour(colour) {
    setSelected(colour.name);
    playSound("click");

    if (language === "te") {
      speak(
        `${colour.telugu}. ${colour.name}`,
        "te-IN"
      );
    } else {
      speak(colour.name, "en-IN");
    }
  }

  function hearAll() {
    if (language === "te") {
      speak(
        "రంగులు. ఎరుపు, నీలం, ఆకుపచ్చ, పసుపు, నారింజ, ఊదా, గులాబీ, గోధుమ",
        "te-IN"
      );
    } else {
      speak(
        "Colours. Red, Blue, Green, Yellow, Orange, Purple, Pink, Brown",
        "en-IN"
      );
    }

    playSound("success");
  }

  return (
    <>
      <Head>
        <title>Chinnaari Kids - Colours</title>
        <meta
          name="description"
          content="Learn colours with Chinnaari Kids"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">
        <div className="topBar">
          <Link href="/">🏠 Home</Link>

          <div className="languageButtons">
            <button
              onClick={() => setLanguage("en")}
              className={language === "en" ? "active" : ""}
            >
              🇬🇧 English
            </button>

            <button
              onClick={() => setLanguage("te")}
              className={language === "te" ? "active" : ""}
            >
              🇮🇳 తెలుగు
            </button>
          </div>
        </div>

        <section className="hero">
          <div className="rainbow">🌈</div>

          <h1>🎨 Learn Colours</h1>

          <p>
            {language === "te"
              ? "రంగుల పేర్లు నేర్చుకుందాం!"
              : "Let's learn colours!"}
          </p>

          <button className="hearButton" onClick={hearAll}>
            🔊{" "}
            {language === "te"
              ? "అన్ని రంగులు వినండి"
              : "Hear All Colours"}
          </button>
        </section>

        <section className="colourGrid">
          {colours.map((colour) => (
            <button
              key={colour.name}
              className={`colourCard ${
                selected === colour.name ? "selected" : ""
              }`}
              onClick={() => selectColour(colour)}
            >
              <span className="colourEmoji">
                {colour.emoji}
              </span>

              <strong>
                {language === "te"
                  ? colour.telugu
                  : colour.name}
              </strong>

              <small>
                {language === "te"
                  ? colour.name
                  : colour.telugu}
              </small>

              <span className="speaker">🔊</span>
            </button>
          ))}
        </section>

        <section className="message">
          {selected ? (
            <p>
              ⭐{" "}
              {language === "te"
                ? "చాలా బాగా చేస్తున్నారు!"
                : "Great job!"}
            </p>
          ) : (
            <p>
              👆{" "}
              {language === "te"
                ? "ఒక రంగుపై క్లిక్ చేయండి"
                : "Tap a colour to hear it"}
            </p>
          )}
        </section>

        <Link href="/games" className="backButton">
          🎮 Games
        </Link>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 18px;
          background: linear-gradient(
            135deg,
            #fff7d6,
            #e6f7ff,
            #fce8ff
          );
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .topBar {
          max-width: 900px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .topBar a {
          text-decoration: none;
          font-weight: bold;
          color: #333;
          background: white;
          padding: 10px 16px;
          border-radius: 20px;
        }

        .languageButtons {
          display: flex;
          gap: 8px;
        }

        .languageButtons button,
        .hearButton {
          border: none;
          padding: 10px 15px;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
          background: white;
        }

        .languageButtons .active {
          background: #7c4dff;
          color: white;
        }

        .hero {
          max-width: 800px;
          margin: 30px auto 25px;
        }

        .rainbow {
          font-size: 65px;
        }

        h1 {
          font-size: 38px;
          margin: 5px 0;
        }

        .hero p {
          font-size: 20px;
          margin: 10px;
        }

        .hearButton {
          background: #ff7a00;
          color: white;
          font-size: 16px;
          margin-top: 8px;
        }

        .colourGrid {
          max-width: 900px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(150px, 1fr)
          );
          gap: 16px;
        }

        .colourCard {
          position: relative;
          border: 3px solid transparent;
          border-radius: 24px;
          padding: 22px 10px;
          background: white;
          cursor: pointer;
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.12);
          transition: transform 0.2s;
        }

        .colourCard:hover {
          transform: translateY(-5px) scale(1.02);
        }

        .colourCard.selected {
          border-color: #7c4dff;
          transform: scale(1.04);
        }

        .colourEmoji {
          display: block;
          font-size: 55px;
          margin-bottom: 8px;
        }

        .colourCard strong {
          display: block;
          font-size: 20px;
          color: #222;
        }

        .colourCard small {
          display: block;
          margin-top: 5px;
          color: #666;
          font-size: 14px;
        }

        .speaker {
          display: block;
          margin-top: 10px;
          font-size: 20px;
        }

        .message {
          margin: 28px auto 18px;
          font-size: 22px;
          font-weight: bold;
        }

        .backButton {
          display: inline-block;
          text-decoration: none;
          background: #333;
          color: white;
          padding: 12px 22px;
          border-radius: 25px;
          font-weight: bold;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 30px;
          }

          .rainbow {
            font-size: 50px;
          }

          .colourGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .colourCard {
            padding: 16px 8px;
          }

          .colourEmoji {
            font-size: 45px;
          }
        }
      `}</style>
    </>
  );
}
