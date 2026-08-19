import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const lessons = {
  Animals: [
    ["🐶", "Dog", "కుక్క"],
    ["🐱", "Cat", "పిల్లి"],
    ["🐘", "Elephant", "ఏనుగు"],
    ["🦁", "Lion", "సింహం"],
    ["🐰", "Rabbit", "కుందేలు"],
    ["🐵", "Monkey", "కోతి"],
  ],

  Fruits: [
    ["🍎", "Apple", "ఆపిల్"],
    ["🍌", "Banana", "అరటి పండు"],
    ["🍊", "Orange", "నారింజ"],
    ["🍇", "Grapes", "ద్రాక్ష"],
    ["🍉", "Watermelon", "పుచ్చకాయ"],
    ["🥭", "Mango", "మామిడి పండు"],
  ],

  Shapes: [
    ["⭕", "Circle", "వృత్తం"],
    ["⬛", "Square", "చతురస్రం"],
    ["🔺", "Triangle", "త్రిభుజం"],
    ["⭐", "Star", "నక్షత్రం"],
    ["❤️", "Heart", "హృదయం"],
    ["🔷", "Diamond", "వజ్రం"],
  ],

  Numbers: [
    ["1️⃣", "One", "ఒకటి"],
    ["2️⃣", "Two", "రెండు"],
    ["3️⃣", "Three", "మూడు"],
    ["4️⃣", "Four", "నాలుగు"],
    ["5️⃣", "Five", "ఐదు"],
    ["6️⃣", "Six", "ఆరు"],
    ["7️⃣", "Seven", "ఏడు"],
    ["8️⃣", "Eight", "ఎనిమిది"],
    ["9️⃣", "Nine", "తొమ్మిది"],
    ["🔟", "Ten", "పది"],
  ],
};

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

function playSound() {
  if (typeof window === "undefined") return;

  try {
    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.frequency.value = 650;
    gain.gain.value = 0.08;

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, 150);
  } catch (error) {
    console.log("Sound unavailable");
  }
}

export default function Learn() {
  const [language, setLanguage] = useState("en");
  const [category, setCategory] = useState("Animals");
  const [selected, setSelected] = useState(null);

  function selectItem(item) {
    setSelected(item[1]);
    playSound();

    if (language === "te") {
      speak(`${item[2]}`, "te-IN");
    } else {
      speak(`${item[1]}`, "en-IN");
    }
  }

  function hearCategory() {
    const items = lessons[category];

    if (language === "te") {
      speak(
        items.map((item) => item[2]).join(", "),
        "te-IN"
      );
    } else {
      speak(
        items.map((item) => item[1]).join(", "),
        "en-IN"
      );
    }

    playSound();
  }

  return (
    <>
      <Head>
        <title>Chinnaari Kids - Learn</title>

        <meta
          name="description"
          content="Learn animals, fruits, shapes and numbers with Chinnaari Kids"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">
        <div className="topBar">
          <Link href="/">🏠 Home</Link>

          <div className="languages">
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              🇬🇧 English
            </button>

            <button
              className={language === "te" ? "active" : ""}
              onClick={() => setLanguage("te")}
            >
              🇮🇳 తెలుగు
            </button>
          </div>
        </div>

        <section className="hero">
          <div className="book">📚</div>

          <h1>
            {language === "te"
              ? "చిన్నారి లెర్నింగ్"
              : "Chinnaari Learning"}
          </h1>

          <p>
            {language === "te"
              ? "ఆడుతూ నేర్చుకుందాం!"
              : "Let's learn while having fun!"}
          </p>
        </section>

        <div className="categories">
          {Object.keys(lessons).map((item) => (
            <button
              key={item}
              className={category === item ? "category active" : "category"}
              onClick={() => {
                setCategory(item);
                setSelected(null);
              }}
            >
              {item === "Animals" && "🐯"}
              {item === "Fruits" && "🍎"}
              {item === "Shapes" && "🔷"}
              {item === "Numbers" && "🔢"}

              <span>
                {language === "te"
                  ? item === "Animals"
                    ? "జంతువులు"
                    : item === "Fruits"
                    ? "పండ్లు"
                    : item === "Shapes"
                    ? "ఆకారాలు"
                    : "సంఖ్యలు"
                  : item}
              </span>
            </button>
          ))}
        </div>

        <button className="hearButton" onClick={hearCategory}>
          🔊{" "}
          {language === "te"
            ? "అన్నీ వినండి"
            : "Hear All"}
        </button>

        <section className="lessonGrid">
          {lessons[category].map((item) => (
            <button
              key={item[1]}
              className={`lessonCard ${
                selected === item[1] ? "selected" : ""
              }`}
              onClick={() => selectItem(item)}
            >
              <span className="emoji">{item[0]}</span>

              <strong>
                {language === "te"
                  ? item[2]
                  : item[1]}
              </strong>

              <small>
                {language === "te"
                  ? item[1]
                  : item[2]}
              </small>

              <span className="speaker">🔊</span>
            </button>
          ))}
        </section>

        <div className="message">
          {selected ? (
            <p>⭐ {language === "te" ? "చాలా బాగా!" : "Great job!"}</p>
          ) : (
            <p>
              👆{" "}
              {language === "te"
                ? "ఒకటి ఎంచుకోండి"
                : "Tap something to learn"}
            </p>
          )}
        </div>

        <Link href="/" className="back">
          🏠 Home
        </Link>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 18px;
          background: linear-gradient(
            135deg,
            #e7f8ff,
            #fff4d6,
            #f9e7ff
          );
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .topBar {
          max-width: 950px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .topBar a {
          text-decoration: none;
          color: #222;
          background: white;
          padding: 10px 16px;
          border-radius: 22px;
          font-weight: bold;
        }

        .languages {
          display: flex;
          gap: 8px;
        }

        .languages button {
          border: none;
          padding: 10px 14px;
          border-radius: 20px;
          background: white;
          cursor: pointer;
          font-weight: bold;
        }

        .languages .active {
          background: #7c4dff;
          color: white;
        }

        .hero {
          margin: 25px auto;
        }

        .book {
          font-size: 65px;
        }

        h1 {
          font-size: 36px;
          margin: 5px;
        }

        .hero p {
          font-size: 20px;
        }

        .categories {
          max-width: 900px;
          margin: 20px auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .category {
          border: 3px solid transparent;
          border-radius: 20px;
          padding: 15px 8px;
          background: white;
          cursor: pointer;
          font-size: 28px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .category span {
          display: block;
          font-size: 16px;
          margin-top: 5px;
          font-weight: bold;
        }

        .category.active {
          border-color: #7c4dff;
          transform: scale(1.03);
        }

        .hearButton {
          border: none;
          background: #ff7a00;
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .lessonGrid {
          max-width: 950px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(145px, 1fr)
          );
          gap: 16px;
        }

        .lessonCard {
          border: 3px solid transparent;
          border-radius: 24px;
          background: white;
          padding: 20px 10px;
          cursor: pointer;
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.12);
        }

        .lessonCard.selected {
          border-color: #7c4dff;
          transform: scale(1.04);
        }

        .emoji {
          display: block;
          font-size: 55px;
          margin-bottom: 8px;
        }

        .lessonCard strong {
          display: block;
          font-size: 20px;
        }

        .lessonCard small {
          display: block;
          margin-top: 5px;
          color: #666;
        }

        .speaker {
          display: block;
          margin-top: 10px;
          font-size: 20px;
        }

        .message {
          font-size: 22px;
          font-weight: bold;
          margin: 25px;
        }

        .back {
          display: inline-block;
          background: #333;
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: bold;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 29px;
          }

          .categories {
            grid-template-columns: repeat(2, 1fr);
          }

          .book {
            font-size: 50px;
          }
        }
      `}</style>
    </>
  );
}
