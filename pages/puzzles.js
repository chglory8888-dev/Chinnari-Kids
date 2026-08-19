import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const numberPuzzles = [
  {
    question: "What comes after 2?",
    telugu: "2 తర్వాత ఏ సంఖ్య వస్తుంది?",
    options: ["1", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "What comes before 5?",
    telugu: "5 ముందు ఏ సంఖ్య వస్తుంది?",
    options: ["3", "4", "6", "7"],
    answer: "4",
  },
  {
    question: "How many stars? ⭐⭐⭐",
    telugu: "ఎన్ని నక్షత్రాలు ఉన్నాయి? ⭐⭐⭐",
    options: ["2", "3", "4", "5"],
    answer: "3",
  },
  {
    question: "What is 2 + 2?",
    telugu: "2 + 2 ఎంత?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

const wordPuzzles = [
  {
    question: "Which animal says Woof?",
    telugu: "Woof అని ఏ జంతువు అంటుంది?",
    options: ["🐱 Cat", "🐶 Dog", "🐰 Rabbit", "🐘 Elephant"],
    answer: "🐶 Dog",
  },
  {
    question: "Which fruit is yellow?",
    telugu: "పసుపు రంగులో ఉండే పండు ఏది?",
    options: ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍉 Watermelon"],
    answer: "🍌 Banana",
  },
  {
    question: "Which animal is very big?",
    telugu: "చాలా పెద్ద జంతువు ఏది?",
    options: ["🐭 Mouse", "🐱 Cat", "🐘 Elephant", "🐰 Rabbit"],
    answer: "🐘 Elephant",
  },
  {
    question: "Which one can fly?",
    telugu: "ఏది ఎగరగలదు?",
    options: ["🐟 Fish", "🐦 Bird", "🐶 Dog", "🐘 Elephant"],
    answer: "🐦 Bird",
  },
];

const shapePuzzles = [
  {
    question: "Which shape is round?",
    telugu: "గుండ్రంగా ఉండే ఆకారం ఏది?",
    options: ["🔺", "⬛", "⭕", "🔷"],
    answer: "⭕",
  },
  {
    question: "Which shape has three sides?",
    telugu: "మూడు భుజాలు ఉన్న ఆకారం ఏది?",
    options: ["⭕", "🔺", "⬛", "⭐"],
    answer: "🔺",
  },
  {
    question: "Which shape has four equal sides?",
    telugu: "నాలుగు సమాన భుజాలు ఉన్న ఆకారం ఏది?",
    options: ["⭕", "🔺", "⬛", "❤️"],
    answer: "⬛",
  },
  {
    question: "Which one is a star?",
    telugu: "నక్షత్రం ఏది?",
    options: ["🔷", "⭐", "⭕", "⬛"],
    answer: "⭐",
  },
];

function speak(text, lang = "en-IN") {
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
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) return;

    const context = new AudioContext();

    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.connect(gain);
    gain.connect(context.destination);

    if (type === "correct") {
      oscillator.frequency.value = 750;
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
  const [language, setLanguage] = useState("en");
  const [category, setCategory] = useState("numbers");

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(false);

  const puzzleSets = {
    numbers: numberPuzzles,
    words: wordPuzzles,
    shapes: shapePuzzles,
  };

  const puzzles = puzzleSets[category];
  const puzzle = puzzles[current];

  function selectCategory(newCategory) {
    setCategory(newCategory);
    setCurrent(0);
    setScore(0);
    setMessage("");
    setAnswered(false);

    if (newCategory === "numbers") {
      speak(
        language === "te"
          ? "సంఖ్యల పజిల్స్"
          : "Number Puzzles"
      );
    }

    if (newCategory === "words") {
      speak(
        language === "te"
          ? "పదాల పజిల్స్"
          : "Word Puzzles"
      );
    }

    if (newCategory === "shapes") {
      speak(
        language === "te"
          ? "ఆకారాల పజిల్స్"
          : "Shape Puzzles"
      );
    }
  }

  function chooseAnswer(option) {
    if (answered) return;

    setAnswered(true);

    if (option === puzzle.answer) {
      playSound("correct");

      setScore((value) => value + 1);

      setMessage(
        language === "te"
          ? "🎉 సరైన సమాధానం! చాలా బాగా!"
          : "🎉 Correct! Great job!"
      );

      speak(
        language === "te"
          ? "సరైన సమాధానం! చాలా బాగా!"
          : "Correct! Great job!",
        language === "te" ? "te-IN" : "en-IN"
      );
    } else {
      playSound("wrong");

      setMessage(
        language === "te"
          ? "😊 పర్లేదు! మళ్లీ ప్రయత్నించండి."
          : "😊 Nice try! Try again."
      );

      speak(
        language === "te"
          ? "పర్లేదు! మళ్లీ ప్రయత్నించండి."
          : "Nice try! Try again.",
        language === "te" ? "te-IN" : "en-IN"
      );
    }
  }

  function nextPuzzle() {
    if (current < puzzles.length - 1) {
      setCurrent((value) => value + 1);
      setMessage("");
      setAnswered(false);

      speak(
        language === "te"
          ? "తదుపరి పజిల్"
          : "Next puzzle"
      );
    } else {
      setMessage(
        language === "te"
          ? `🏆 గేమ్ పూర్తయింది! మీ స్కోర్ ${score} / ${puzzles.length}`
          : `🏆 Game Complete! Your score is ${score} / ${puzzles.length}`
      );

      speak(
        language === "te"
          ? "గేమ్ పూర్తయింది! చాలా బాగా చేశారు!"
          : "Game complete! Well done!",
        language === "te" ? "te-IN" : "en-IN"
      );
    }
  }

  function restartGame() {
    setCurrent(0);
    setScore(0);
    setMessage("");
    setAnswered(false);

    speak(
      language === "te"
        ? "మళ్లీ ప్రారంభిద్దాం!"
        : "Let's play again!"
    );
  }

  function hearPuzzle() {
    const text =
      language === "te"
        ? puzzle.telugu
        : puzzle.question;

    speak(
      text,
      language === "te" ? "te-IN" : "en-IN"
    );
  }

  const gameFinished =
    current === puzzles.length - 1 &&
    answered;

  return (
    <>
      <Head>
        <title>Kids Puzzles | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational puzzles for children with numbers, words and shapes."
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

        <section className="hero">

          <div className="heroEmoji">
            🧩✨
          </div>

          <h1>
            {language === "te"
              ? "చిన్నారి పజిల్స్"
              : "Chinnaari Puzzles"}
          </h1>

          <p>
            {language === "te"
              ? "ఆడుతూ ఆలోచించండి!"
              : "Think, play and learn!"}
          </p>

          <div className="languages">

            <button
              className={
                language === "en"
                  ? "language active"
                  : "language"
              }
              onClick={() => setLanguage("en")}
            >
              🇬🇧 English
            </button>

            <button
              className={
                language === "te"
                  ? "language active"
                  : "language"
              }
              onClick={() => setLanguage("te")}
            >
              🇮🇳 తెలుగు
            </button>

          </div>

        </section>

        <section className="categoryMenu">

          <button
            className={
              category === "numbers"
                ? "category active"
                : "category"
            }
            onClick={() =>
              selectCategory("numbers")
            }
          >
            🔢
            <span>
              {language === "te"
                ? "సంఖ్యలు"
                : "Numbers"}
            </span>
          </button>

          <button
            className={
              category === "words"
                ? "category active"
                : "category"
            }
            onClick={() =>
              selectCategory("words")
            }
          >
            🔤
            <span>
              {language === "te"
                ? "పదాలు"
                : "Words"}
            </span>
          </button>

          <button
            className={
              category === "shapes"
                ? "category active"
                : "category"
            }
            onClick={() =>
              selectCategory("shapes")
            }
          >
            🔷
            <span>
              {language === "te"
                ? "ఆకారాలు"
                : "Shapes"}
            </span>
          </button>

        </section>

        <section className="puzzleBox">

          <div className="puzzleTop">

            <div className="progress">
              Puzzle {current + 1} / {puzzles.length}
            </div>

            <div className="score">
              ⭐ Score: {score}
            </div>

          </div>

          <div className="questionIcon">
            🧠
          </div>

          <h2>
            {language === "te"
              ? puzzle.telugu
              : puzzle.question}
          </h2>

          <button
            className="hearButton"
            onClick={hearPuzzle}
          >
            🔊{" "}
            {language === "te"
              ? "ప్రశ్న వినండి"
              : "Hear Question"}
          </button>

          <div className="options">

            {puzzle.options.map(
              (option, index) => (

                <button
                  key={index}
                  className={
                    answered &&
                    option === puzzle.answer
                      ? "option correct"
                      : "option"
                  }
                  onClick={() =>
                    chooseAnswer(option)
                  }
                >
                  {option}
                </button>

              )
            )}

          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

          {!gameFinished && answered && (
            <button
              className="nextButton"
              onClick={nextPuzzle}
            >
              ➡️{" "}
              {language === "te"
                ? "తదుపరి"
                : "Next"}
            </button>
          )}

          {gameFinished && (
            <div>

              <div className="finalScore">
                🏆
                <br />

                {language === "te"
                  ? `మీ స్కోర్ ${score} / ${puzzles.length}`
                  : `Your Score ${score} / ${puzzles.length}`}
              </div>

              <button
                className="restartButton"
                onClick={restartGame}
              >
                🔄{" "}
                {language === "te"
                  ? "మళ్లీ ఆడండి"
                  : "Play Again"}
              </button>

            </div>
          )}

        </section>

        <section className="learning">

          <div className="learningEmoji">
            🧠🌟🧩
          </div>

          <h2>
            {language === "te"
              ? "ఆలోచించండి • నేర్చుకోండి • గెలవండి!"
              : "Think • Learn • Win!"}
          </h2>

          <p>
            {language === "te"
              ? "ప్రతి పజిల్ మీ ఆలోచనా శక్తిని మరియు సమస్య పరిష్కార నైపుణ్యాలను మెరుగుపరుస్తుంది."
              : "Every puzzle helps children improve thinking and problem-solving skills."}
          </p>

        </section>

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

          <Link href="/dashboard">
            🌟 Dashboard
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
          padding: 14px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          box-shadow:
            0 2px 15px rgba(0,0,0,0.08);
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

        nav a:hover {
          color: #7c4dff;
        }

        .hero {
          text-align: center;
          padding: 45px 20px;
          background:
            linear-gradient(
              135deg,
              #e4ddff,
              #dff4ff,
              #ffe5ef
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
          font-size: 19px;
          color: #555;
        }

        .languages {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .language {
          border: none;
          padding: 10px 16px;
          border-radius: 22px;
          background: white;
          cursor: pointer;
          font-weight: bold;
        }

        .language.active {
          background: #7c4dff;
          color: white;
        }

        .categoryMenu {
          max-width: 700px;
          margin: 30px auto 0;
          padding: 0 20px;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 15px;
        }

        .category {
          border: 3px solid transparent;
          border-radius: 22px;
          padding: 18px 10px;
          background: white;
          font-size: 32px;
          cursor: pointer;
          box-shadow:
            0 5px 18px
            rgba(0,0,0,0.07);
          transition: transform 0.2s;
        }

        .category:hover {
          transform: translateY(-4px);
        }

        .category.active {
          border-color: #7c4dff;
          background: #f2edff;
        }

        .category span {
          display: block;
          font-size: 16px;
          margin-top: 6px;
          font-weight: bold;
        }

        .puzzleBox {
          max-width: 800px;
          margin: 30px auto 55px;
          padding: 35px 25px;
          text-align: center;
          background: white;
          border-radius: 32px;
          box-shadow:
            0 8px 30px
            rgba(0,0,0,0.08);
        }

        .puzzleTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .progress,
        .score {
          padding: 9px 15px;
          border-radius: 20px;
          background: #fff0b8;
          font-weight: bold;
        }

        .questionIcon {
          font-size: 65px;
        }

        .puzzleBox h2 {
          font-size: 28px;
          line-height: 1.4;
          margin: 15px auto;
        }

        .hearButton {
          border: none;
          padding: 12px 20px;
          border-radius: 25px;
          background: #ff7a00;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .options {
          max-width: 600px;
          margin: 30px auto;
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 15px;
        }

        .option {
          min-height: 75px;
          border: 3px solid transparent;
          border-radius: 20px;
          background: #eaf6ff;
          font-size: 21px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .option:hover {
          transform: scale(1.03);
        }

        .option.correct {
          border-color: #4caf50;
          background: #dcf6d9;
        }

        .message {
          margin: 20px auto;
          padding: 14px;
          border-radius: 20px;
          background: #fff8df;
          font-size: 18px;
          font-weight: bold;
        }

        .nextButton,
        .restartButton {
          border: none;
          padding: 13px 23px;
          border-radius: 25px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
        }

        .nextButton {
          background: #7c4dff;
        }

        .restartButton {
          background: #ff6b6b;
        }

        .finalScore {
          margin: 20px auto;
          padding: 20px;
          max-width: 400px;
          border-radius: 25px;
          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #dcf6d9
            );
          font-size: 21px;
          font-weight: bold;
          line-height: 1.7;
        }

        .learning {
          max-width: 800px;
          margin: 0 auto 50px;
          padding: 40px 25px;
          text-align: center;
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              #fff0b8,
              #e1f5ff
            );
        }

        .learningEmoji {
          font-size: 55px;
        }

        .learning h2 {
          font-size: 28px;
        }

        .learning p {
          color: #555;
          line-height: 1.7;
          font-size: 17px;
        }

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
            gap: 9px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .categoryMenu {
            grid-template-columns:
              repeat(3, 1fr);
            gap: 9px;
          }

          .category {
            padding: 14px 5px;
            font-size: 26px;
          }

          .category span {
            font-size: 13px;
          }

          .puzzleBox {
            margin-left: 15px;
            margin-right: 15px;
            padding: 28px 16px;
          }

          .puzzleBox h2 {
            font-size: 23px;
          }

          .options {
            grid-template-columns: 1fr;
          }

          .option {
            min-height: 65px;
          }

          .puzzleTop {
            justify-content: center;
          }

        }

        @media (max-width: 400px) {

          .categoryMenu {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

      `}</style>

    </>
  );
}
