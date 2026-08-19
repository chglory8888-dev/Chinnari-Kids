import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const puzzles = [
  {
    id: 1,
    emoji: ["🍎", "🍌", "🍊"],
    question: "Which fruit is red?",
    teluguQuestion: "ఏ పండు ఎరుపు రంగులో ఉంటుంది?",
    answer: "🍎",
    answerName: "Apple",
    teluguName: "ఆపిల్"
  },
  {
    id: 2,
    emoji: ["🐶", "🐱", "🐘"],
    question: "Which animal says Woof?",
    teluguQuestion: "ఏ జంతువు బౌ బౌ అని అంటుంది?",
    answer: "🐶",
    answerName: "Dog",
    teluguName: "కుక్క"
  },
  {
    id: 3,
    emoji: ["☀️", "🌙", "⭐"],
    question: "Which one shines during the day?",
    teluguQuestion: "పగటిపూట ఏది ప్రకాశిస్తుంది?",
    answer: "☀️",
    answerName: "Sun",
    teluguName: "సూర్యుడు"
  },
  {
    id: 4,
    emoji: ["🚗", "✈️", "🚲"],
    question: "Which one flies in the sky?",
    teluguQuestion: "ఆకాశంలో ఏది ఎగురుతుంది?",
    answer: "✈️",
    answerName: "Aeroplane",
    teluguName: "విమానం"
  },
  {
    id: 5,
    emoji: ["🔵", "🔴", "🟢"],
    question: "Which colour is red?",
    teluguQuestion: "ఎరుపు రంగు ఏది?",
    answer: "🔴",
    answerName: "Red",
    teluguName: "ఎరుపు"
  }
];

function speak(text, lang = "en-IN") {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    return;
  }

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(text);

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
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) return;

    const context = new AudioContext();

    const oscillator =
      context.createOscillator();

    const gain =
      context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);

    if (type === "correct") {
      oscillator.frequency.value = 700;
      gain.gain.value = 0.12;
    } else {
      oscillator.frequency.value = 220;
      gain.gain.value = 0.1;
    }

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      context.close();
    }, 180);
  } catch (error) {
    console.log("Sound unavailable");
  }
}

export default function Puzzles() {
  const [current, setCurrent] = useState(0);

  const [score, setScore] = useState(0);

  const [message, setMessage] =
    useState("");

  const [language, setLanguage] =
    useState("english");

  const [completed, setCompleted] =
    useState(false);

  const puzzle = puzzles[current];

  function chooseAnswer(item) {
    const isCorrect =
      item === puzzle.answer;

    if (isCorrect) {
      playSound("correct");

      setScore(
        (value) => value + 1
      );

      setMessage(
        language === "telugu"
          ? `🎉 సరైన సమాధానం! ${puzzle.teluguName}`
          : `🎉 Correct! ${puzzle.answerName}`
      );

      speak(
        language === "telugu"
          ? `చాలా బాగుంది! సరైన సమాధానం ${puzzle.teluguName}`
          : `Very good! The correct answer is ${puzzle.answerName}`,
        language === "telugu"
          ? "te-IN"
          : "en-IN"
      );
    } else {
      playSound("wrong");

      setMessage(
        language === "telugu"
          ? "😊 మళ్లీ ప్రయత్నించండి!"
          : "😊 Try again!"
      );

      speak(
        language === "telugu"
          ? "మళ్లీ ప్రయత్నించండి"
          : "Try again",
        language === "telugu"
          ? "te-IN"
          : "en-IN"
      );

      return;
    }

    setTimeout(() => {
      if (current < puzzles.length - 1) {
        setCurrent(
          (value) => value + 1
        );

        setMessage("");
      } else {
        setCompleted(true);

        speak(
          language === "telugu"
            ? "అభినందనలు! మీరు అన్ని పజిల్స్ పూర్తి చేశారు!"
            : "Congratulations! You completed all the puzzles!",
          language === "telugu"
            ? "te-IN"
            : "en-IN"
        );
      }
    }, 1000);
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setMessage("");
    setCompleted(false);

    speak(
      language === "telugu"
        ? "పజిల్ గేమ్ ప్రారంభిద్దాం"
        : "Let's start the puzzle game",
      language === "telugu"
        ? "te-IN"
        : "en-IN"
    );
  }

  function changeLanguage(value) {
    setLanguage(value);
    setMessage("");

    speak(
      value === "telugu"
        ? "తెలుగు"
        : "English",
      value === "telugu"
        ? "te-IN"
        : "en-IN"
    );
  }

  return (
    <>
      <Head>

        <title>
          Kids Puzzles | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun educational puzzles for children."
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

            <Link href="/dashboard">
              🌟 Dashboard
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

          <div className="heroEmoji">
            🧩🧠✨
          </div>

          <h1>
            Puzzle Time!
          </h1>

          <p>
            Think, listen and find the answer.
          </p>

        </section>

        {/* LANGUAGE */}

        <div className="languageBox">

          <button
            className={
              language === "telugu"
                ? "languageButton active"
                : "languageButton"
            }
            onClick={() =>
              changeLanguage("telugu")
            }
          >
            🇮🇳 తెలుగు
          </button>

          <button
            className={
              language === "english"
                ? "languageButton active"
                : "languageButton"
            }
            onClick={() =>
              changeLanguage("english")
            }
          >
            🇬🇧 English
          </button>

        </div>

        {/* PUZZLE */}

        <section className="puzzleBox">

          {!completed ? (

            <>

              <div className="progress">

                Puzzle {current + 1}
                {" "}
                of
                {" "}
                {puzzles.length}

              </div>

              <div className="puzzleIcon">
                🧩
              </div>

              <h2>

                {language === "telugu"
                  ? puzzle.teluguQuestion
                  : puzzle.question}

              </h2>

              <button
                className="listenButton"
                onClick={() =>
                  speak(
                    language === "telugu"
                      ? puzzle.teluguQuestion
                      : puzzle.question,
                    language === "telugu"
                      ? "te-IN"
                      : "en-IN"
                  )
                }
              >
                🔊 Listen Question
              </button>

              <div className="options">

                {puzzle.emoji.map(
                  (item, index) => (

                    <button
                      key={index}
                      className="option"
                      onClick={() =>
                        chooseAnswer(item)
                      }
                    >
                      {item}
                    </button>

                  )
                )}

              </div>

              {message && (

                <div className="message">
                  {message}
                </div>

              )}

              <div className="score">

                ⭐ Score: {score}

              </div>

            </>

          ) : (

            <div className="completedBox">

              <div className="bigStar">
                🏆⭐
              </div>

              <h2>
                {language === "telugu"
                  ? "అన్ని పజిల్స్ పూర్తయ్యాయి!"
                  : "All Puzzles Completed!"}
              </h2>

              <p>

                {language === "telugu"
                  ? `మీ స్కోర్ ${score} / ${puzzles.length}`
                  : `Your score is ${score} / ${puzzles.length}`}

              </p>

              <div className="reward">
                🎉 ⭐ Great Job! ⭐ 🎉
              </div>

              <button
                className="restartButton"
                onClick={restart}
              >
                🔄 Play Again
              </button>

            </div>

          )}

        </section>

        {/* TIP */}

        <section className="tip">

          <div className="tipEmoji">
            💡
          </div>

          <div>

            <h2>
              Think & Learn!
            </h2>

            <p>

              {language === "telugu"
                ? "ప్రశ్నను జాగ్రత్తగా విని సరైన సమాధానాన్ని ఎంచుకోండి."
                : "Listen carefully to the question and choose the correct answer."}

            </p>

          </div>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

          <Link href="/games">
            🎮 Games
          </Link>

          <Link href="/colours">
            🎨 Colours
          </Link>

          <Link href="/learn">
            🔤 Learn
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
          gap: 15px;
          flex-wrap: wrap;
        }

        nav a {
          color: #444;
          text-decoration: none;

          font-size: 14px;
          font-weight: 600;
        }

        /* HERO */

        .hero {
          text-align: center;

          padding: 45px 20px;

          background:
            linear-gradient(
              135deg,
              #e5ddff,
              #dff5ff
            );
        }

        .heroEmoji {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 40px;

          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;

          color: #555;
        }

        /* LANGUAGE */

        .languageBox {
          display: flex;

          justify-content: center;

          gap: 10px;

          margin: 30px auto 10px;

          flex-wrap: wrap;
        }

        .languageButton {
          border: none;

          padding: 12px 20px;

          border-radius: 25px;

          background: white;

          box-shadow:
            0 4px 15px
            rgba(0,0,0,0.06);

          font-weight: bold;

          cursor: pointer;
        }

        .languageButton.active {
          background: #4caf50;

          color: white;
        }

        /* PUZZLE */

        .puzzleBox {
          max-width: 800px;

          margin: 25px auto 50px;

          padding: 40px 25px;

          text-align: center;

          border-radius: 32px;

          background: white;

          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .progress {
          display: inline-block;

          padding: 8px 15px;

          border-radius: 20px;

          background: #fff0b8;

          font-weight: bold;
        }

        .puzzleIcon {
          margin-top: 20px;

          font-size: 65px;
        }

        .puzzleBox h2 {
          font-size: 28px;

          line-height: 1.5;

          margin: 15px 0;
        }

        .listenButton {
          border: none;

          padding: 11px 18px;

          border-radius: 25px;

          background: #dff2ff;

          font-weight: bold;

          cursor: pointer;
        }

        /* OPTIONS */

        .options {
          display: flex;

          justify-content: center;

          gap: 20px;

          margin: 35px auto;

          flex-wrap: wrap;
        }

        .option {
          width: 130px;

          height: 130px;

          border: none;

          border-radius: 30px;

          background: #f0eaff;

          font-size: 60px;

          cursor: pointer;

          transition:
            transform 0.2s;
        }

        .option:hover {
          transform: scale(1.08);

          background: #fff0b8;
        }

        .message {
          margin: 20px auto;

          padding: 14px;

          max-width: 500px;

          border-radius: 22px;

          background: #fff8df;

          font-weight: bold;

          line-height: 1.6;
        }

        .score {
          display: inline-block;

          margin-top: 10px;

          padding: 10px 20px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        /* COMPLETE */

        .completedBox {
          padding: 20px;
        }

        .bigStar {
          font-size: 85px;
        }

        .completedBox h2 {
          font-size: 30px;
        }

        .completedBox p {
          font-size: 19px;

          color: #666;
        }

        .reward {
          margin: 20px auto;

          padding: 15px;

          max-width: 400px;

          border-radius: 25px;

          background: #dcf6d9;

          font-weight: bold;
        }

        .restartButton {
          border: none;

          padding: 13px 22px;

          border-radius: 25px;

          background: #ff6b6b;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        /* TIP */

        .tip {
          max-width: 800px;

          margin: 0 auto 50px;

          padding: 30px;

          display: flex;

          align-items: center;

          gap: 20px;

          border-radius: 28px;

          background: white;

          box-shadow:
            0 5px 20px
            rgba(0,0,0,0.06);
        }

        .tipEmoji {
          font-size: 55px;
        }

        .tip h2 {
          margin-top: 0;
        }

        .tip p {
          color: #666;

          line-height: 1.7;
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
          margin: 9px;
        }

        /* MOBILE */

        @media (max-width: 850px) {

          .header {
            flex-direction: column;

            gap: 15px;
          }

          nav {
            justify-content: center;
          }

        }

        @media (max-width: 600px) {

          .logo {
            font-size: 21px;
          }

          nav {
            gap: 10px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .puzzleBox {
            margin-left: 15px;

            margin-right: 15px;

            padding: 30px 18px;
          }

          .option {
            width: 95px;

            height: 95px;

            font-size: 45px;
          }

          .tip {
            margin-left: 20px;

            margin-right: 20px;

            flex-direction: column;

            text-align: center;
          }

        }

      `}</style>
    </>
  );
}
