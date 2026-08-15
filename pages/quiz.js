import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const quizData = {
  Countries: [
    ["Largest country?", ["India", "Russia", "China", "Brazil"], "Russia", "🌍"],
    ["Eiffel Tower is in?", ["France", "Italy", "Spain", "Germany"], "France", "🗼"],
    ["Land of Rising Sun?", ["India", "Japan", "China", "Korea"], "Japan", "🇯🇵"],
    ["Great Pyramids are in?", ["Egypt", "India", "Mexico", "Peru"], "Egypt", "🏜️"],
    ["Country shaped like a boot?", ["France", "Italy", "Spain", "Greece"], "Italy", "🇮🇹"]
  ],

  Capitals: [
    ["Capital of India?", ["Mumbai", "New Delhi", "Chennai", "Kolkata"], "New Delhi", "🇮🇳"],
    ["Capital of France?", ["Paris", "London", "Rome", "Madrid"], "Paris", "🇫🇷"],
    ["Capital of Japan?", ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], "Tokyo", "🇯🇵"],
    ["Capital of Australia?", ["Sydney", "Melbourne", "Canberra", "Perth"], "Canberra", "🇦🇺"],
    ["Capital of UK?", ["London", "Manchester", "Liverpool", "Birmingham"], "London", "🇬🇧"]
  ],

  Currencies: [
    ["Currency of India?", ["Rupee", "Dollar", "Euro", "Pound"], "Rupee", "💰"],
    ["Currency of Japan?", ["Yen", "Won", "Dollar", "Yuan"], "Yen", "💴"],
    ["Currency of USA?", ["Euro", "Dollar", "Pound", "Yen"], "Dollar", "💵"],
    ["Currency of UK?", ["Euro", "Dollar", "Pound", "Yen"], "Pound", "💷"],
    ["Currency of Europe?", ["Euro", "Dollar", "Rupee", "Yen"], "Euro", "💶"]
  ],

  Animals: [
    ["King of the Jungle?", ["Tiger", "Lion", "Elephant", "Bear"], "Lion", "🦁"],
    ["Largest land animal?", ["Elephant", "Giraffe", "Rhino", "Hippo"], "Elephant", "🐘"],
    ["Animal that gives wool?", ["Cow", "Sheep", "Horse", "Goat"], "Sheep", "🐑"],
    ["Man's best friend?", ["Cat", "Dog", "Horse", "Rabbit"], "Dog", "🐶"],
    ["Animal with long neck?", ["Zebra", "Giraffe", "Tiger", "Deer"], "Giraffe", "🦒"]
  ],

  Birds: [
    ["Bird with colorful feathers?", ["Crow", "Peacock", "Sparrow", "Duck"], "Peacock", "🦚"],
    ["Bird that can mimic speech?", ["Parrot", "Penguin", "Eagle", "Owl"], "Parrot", "🦜"],
    ["Bird representing peace?", ["Dove", "Crow", "Eagle", "Owl"], "Dove", "🕊️"],
    ["Bird that cannot fly?", ["Eagle", "Sparrow", "Penguin", "Parrot"], "Penguin", "🐧"],
    ["Bird with excellent eyesight?", ["Eagle", "Duck", "Hen", "Pigeon"], "Eagle", "🦅"]
  ],

  Insects: [
    ["Insect that makes honey?", ["Ant", "Bee", "Fly", "Mosquito"], "Bee", "🐝"],
    ["Insect with colorful wings?", ["Butterfly", "Ant", "Beetle", "Fly"], "Butterfly", "🦋"],
    ["Insect living in colonies?", ["Ant", "Bee", "Moth", "Fly"], "Ant", "🐜"],
    ["Ladybird is also called?", ["Ladybug", "Bee", "Cricket", "Fly"], "Ladybug", "🐞"],
    ["Insect that can jump far?", ["Grasshopper", "Ant", "Bee", "Butterfly"], "Grasshopper", "🦗"]
  ],

  Fruits: [
    ["King of fruits in India?", ["Apple", "Mango", "Banana", "Orange"], "Mango", "🥭"],
    ["Yellow and curved fruit?", ["Banana", "Apple", "Grape", "Orange"], "Banana", "🍌"],
    ["Fruit with seeds outside?", ["Strawberry", "Apple", "Mango", "Pear"], "Strawberry", "🍓"],
    ["Fruit usually red or green?", ["Apple", "Banana", "Watermelon", "Pineapple"], "Apple", "🍎"],
    ["Green outside and red inside?", ["Watermelon", "Orange", "Grape", "Mango"], "Watermelon", "🍉"]
  ],

  Flowers: [
    ["National flower of India?", ["Rose", "Lotus", "Sunflower", "Jasmine"], "Lotus", "🪷"],
    ["Flower that follows the sun?", ["Rose", "Sunflower", "Lily", "Lotus"], "Sunflower", "🌻"],
    ["Queen of flowers?", ["Rose", "Lotus", "Tulip", "Daisy"], "Rose", "🌹"],
    ["Flower commonly grows in ponds?", ["Lotus", "Rose", "Tulip", "Sunflower"], "Lotus", "🌸"],
    ["Flower associated with love?", ["Rose", "Daisy", "Lily", "Marigold"], "Rose", "❤️"]
  ],

  Numbers: [
    ["What comes after 9?", ["8", "10", "11", "7"], "10", "🔢"],
    ["What comes before 20?", ["18", "19", "21", "17"], "19", "🔢"],
    ["How many fingers on one hand?", ["4", "5", "6", "10"], "5", "✋"],
    ["What is 2 + 3?", ["4", "5", "6", "7"], "5", "➕"],
    ["What is 5 + 5?", ["8", "9", "10", "11"], "10", "➕"]
  ],

  ABC: [
    ["Letter after A?", ["B", "C", "D", "E"], "B", "🔤"],
    ["Letter after C?", ["A", "B", "D", "E"], "D", "🔤"],
    ["Letter before Z?", ["X", "Y", "W", "V"], "Y", "🔤"],
    ["First letter of Apple?", ["A", "B", "C", "D"], "A", "🍎"],
    ["First letter of Ball?", ["A", "B", "C", "D"], "B", "⚽"]
  ],

  Telugu: [
    ["తెలుగు అచ్చులలో మొదటి అక్షరం ఏది?", ["అ", "ఆ", "ఇ", "ఈ"], "అ", "అ"],
    ["అ తర్వాత వచ్చే అక్షరం ఏది?", ["ఇ", "ఆ", "ఉ", "ఎ"], "ఆ", "ఆ"],
    ["ఆ తర్వాత వచ్చే అక్షరం ఏది?", ["అ", "ఇ", "ఈ", "ఉ"], "ఇ", "ఇ"],
    ["ఇ తర్వాత వచ్చే అక్షరం ఏది?", ["ఆ", "ఈ", "ఉ", "ఊ"], "ఈ", "ఈ"],
    ["ఉ తర్వాత వచ్చే అక్షరం ఏది?", ["ఊ", "ఇ", "ఎ", "ఏ"], "ఊ", "ఊ"]
  ],

  "Famous Places": [
    ["Taj Mahal is in?", ["Agra", "Delhi", "Mumbai", "Jaipur"], "Agra", "🕌"],
    ["Eiffel Tower is in?", ["Paris", "Rome", "London", "Berlin"], "Paris", "🗼"],
    ["Statue of Liberty is in?", ["New York", "London", "Paris", "Tokyo"], "New York", "🗽"],
    ["Great Pyramids are in?", ["Egypt", "India", "Brazil", "China"], "Egypt", "🏜️"],
    ["Great Wall is in?", ["China", "Japan", "India", "Korea"], "China", "🏯"]
  ],

  "General Knowledge": [
    ["Days in a week?", ["5", "6", "7", "8"], "7", "📅"],
    ["Colors in a rainbow?", ["5", "6", "7", "8"], "7", "🌈"],
    ["Planet we live on?", ["Mars", "Earth", "Venus", "Jupiter"], "Earth", "🌍"],
    ["Star that gives Earth light?", ["Moon", "Sun", "Mars", "Venus"], "Sun", "☀️"],
    ["Months in a year?", ["10", "11", "12", "13"], "12", "📆"]
  ]
};

const categories = [
  ["Countries", "🌍"],
  ["Capitals", "🏛️"],
  ["Currencies", "💰"],
  ["Animals", "🐶"],
  ["Birds", "🐦"],
  ["Insects", "🦋"],
  ["Fruits", "🍎"],
  ["Flowers", "🌸"],
  ["Numbers", "🔢"],
  ["ABC", "🔤"],
  ["Telugu", "అ"],
  ["Famous Places", "🗺️"],
  ["General Knowledge", "🧠"]
];

function playSound(type) {
  if (typeof window === "undefined") return;

  const AudioContext =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return;

  const audio = new AudioContext();

  if (type === "win") {
    const notes = [523, 659, 784, 1046];

    notes.forEach((frequency, i) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();

      oscillator.connect(gain);
      gain.connect(audio.destination);

      oscillator.frequency.value = frequency;

      gain.gain.setValueAtTime(
        0.001,
        audio.currentTime + i * 0.12
      );

      gain.gain.exponentialRampToValueAtTime(
        0.22,
        audio.currentTime + i * 0.12 + 0.03
      );

      gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + i * 0.12 + 0.25
      );

      oscillator.start(
        audio.currentTime + i * 0.12
      );

      oscillator.stop(
        audio.currentTime + i * 0.12 + 0.25
      );
    });

    return;
  }

  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.connect(gain);
  gain.connect(audio.destination);

  if (type === "correct") {
    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      523,
      audio.currentTime
    );

    oscillator.frequency.setValueAtTime(
      659,
      audio.currentTime + 0.12
    );

    oscillator.frequency.setValueAtTime(
      784,
      audio.currentTime + 0.24
    );

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.25,
      audio.currentTime + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.4
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.4);
  }

  if (type === "wrong") {
    oscillator.type = "sawtooth";

    oscillator.frequency.setValueAtTime(
      180,
      audio.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      90,
      audio.currentTime + 0.25
    );

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.18,
      audio.currentTime + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.28
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.28);
  }

  if (type === "click") {
    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      700,
      audio.currentTime
    );

    gain.gain.setValueAtTime(
      0.001,
      audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.12,
      audio.currentTime + 0.01
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audio.currentTime + 0.08
    );

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.08);
  }
}

export default function Quiz() {
  const [category, setCategory] = useState("Countries");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const questions = quizData[category];
  const question = questions[questionIndex];

  function changeCategory(name) {
    playSound("click");

    setCategory(name);
    setQuestionIndex(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
  }

  function answerQuestion(option) {
    if (answered) return;

    setSelected(option);
    setAnswered(true);

    if (option === question[2]) {
      setScore((value) => value + 1);
      playSound("correct");
    } else {
      playSound("wrong");
    }
  }

  function nextQuestion() {
    playSound("click");

    if (questionIndex === questions.length - 1) {
      playSound("win");
      setFinished(true);
      return;
    }

    setQuestionIndex((value) => value + 1);
    setSelected("");
    setAnswered(false);
  }

  function restart() {
    playSound("click");

    setQuestionIndex(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
  }

  return (
    <>
      <Head>
        <title>Mega Quiz | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun educational quiz for kids"
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
            <Link href="/games">🎮 Games</Link>
            <Link href="/flags">🏳️ Flags</Link>
            <Link href="/world">🌍 World Explorer</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="heroIcon">
            🧠❓🎯
          </div>

          <h1>Mega Quiz</h1>

          <p>
            Learn • Think • Play • Discover
          </p>

          <div className="heroMini">
            🌍 🇮🇳 🐶 🐦 🦋 🍎 🔤 🧠
          </div>
        </section>

        <section className="special">
          <Link
            href="/flags"
            className="flagLink"
          >
            🏳️ Flags Quiz
            <span>
              Learn World Flags
            </span>
          </Link>
        </section>

        <section className="categories">
          <h2>📚 Choose a Quiz</h2>

          <div className="categoryGrid">
            {categories.map(([name, icon]) => (
              <button
                key={name}
                className={
                  category === name
                    ? "category active"
                    : "category"
                }
                onClick={() =>
                  changeCategory(name)
                }
              >
                <span>{icon}</span>
                <small>{name}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="quizCard">
          {!finished ? (
            <>
              <div className="quizTop">
                <div>
                  <span className="quizEmoji">
                    {question[3]}
                  </span>

                  <strong>{category}</strong>
                </div>

                <span className="counter">
                  {questionIndex + 1} /{" "}
                  {questions.length}
                </span>
              </div>

              <div className="question">
                <div className="qNumber">
                  Q{questionIndex + 1}
                </div>

                <h2>{question[0]}</h2>
              </div>

              <div className="options">
                {question[1].map((option) => {
                  const isCorrect =
                    answered &&
                    option === question[2];

                  const isWrong =
                    answered &&
                    option === selected &&
                    option !== question[2];

                  return (
                    <button
                      key={option}
                      className={
                        isCorrect
                          ? "option correct"
                          : isWrong
                          ? "option wrong"
                          : "option"
                      }
                      onClick={() =>
                        answerQuestion(option)
                      }
                    >
                      <span>{option}</span>

                      {isCorrect && (
                        <b>✅</b>
                      )}

                      {isWrong && (
                        <b>❌</b>
                      )}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div
                  className={
                    selected === question[2]
                      ? "feedback good"
                      : "feedback bad"
                  }
                >
                  {selected === question[2]
                    ? "🎉 Correct! Well done!"
                    : `😊 Correct answer: ${question[2]}`}
                </div>
              )}

              <div className="bottom">
                <div className="score">
                  ⭐ Score: {score}
                </div>

                {answered && (
                  <button
                    className="next"
                    onClick={nextQuestion}
                  >
                    {questionIndex ===
                    questions.length - 1
                      ? "🏆 Result"
                      : "Next ➡️"}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="result">

              <div className="resultIcon">
                {score === questions.length
                  ? "🏆"
                  : score >= 3
                  ? "🌟"
                  : "💪"}
              </div>

              <h2>
                Quiz Complete!
              </h2>

              <div className="resultScore">
                {score} / {questions.length}
              </div>

              <h3>
                {score === questions.length
                  ? "🏆 Perfect Score!"
                  : score >= 3
                  ? "🌟 Excellent!"
                  : "💪 Keep Learning!"}
              </h3>

              <button
                className="restart"
                onClick={restart}
              >
                🔄 Play Again
              </button>

            </div>
          )}
        </section>
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
            z-index: 20;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
          }

          .logo {
            color: #333;
            text-decoration: none;
            font-size: 22px;
            font-weight: bold;
            white-space: nowrap;
          }

          nav {
            display: flex;
            gap: 13px;
            flex-wrap: wrap;
            justify-content: center;
          }

          nav a {
            color: #444;
            text-decoration: none;
            font-size: 13px;
            font-weight: bold;
          }

          .hero {
            text-align: center;
            padding: 55px 20px;
            background: linear-gradient(
              135deg,
              #e3f2ff,
              #fff0c9,
              #f8ddff
            );
          }

          .heroIcon {
            font-size: 55px;
          }

          .hero h1 {
            font-size: 44px;
            margin: 12px 0;
          }

          .hero p {
            font-size: 19px;
            color: #555;
          }

          .heroMini {
            font-size: 28px;
            margin-top: 20px;
            letter-spacing: 3px;
          }

          .special {
            text-align: center;
            padding: 28px 20px 5px;
          }

          .flagLink {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            padding: 15px 30px;
            background: #ff9d42;
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
          }

          .flagLink span {
            font-size: 13px;
            font-weight: normal;
          }

          .categories {
            max-width: 1100px;
            margin: 30px auto;
            padding: 0 20px;
            text-align: center;
          }

          .categories h2 {
            font-size: 28px;
          }

          .categoryGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin-top: 20px;
          }

          .category {
            min-height: 90px;
            border: 2px solid #eee;
            background: white;
            border-radius: 18px;
            padding: 10px 5px;
            cursor: pointer;
            transition: 0.2s;
          }

          .category:hover {
            transform: translateY(-3px);
          }

          .category span {
            display: block;
            font-size: 31px;
            margin-bottom: 5px;
          }

          .category small {
            font-weight: bold;
          }

          .active {
            background: #fff0d0;
            border-color: #ff9d42;
          }

          .quizCard {
            max-width: 850px;
            margin: 30px auto 60px;
            padding: 28px;
            background: white;
            border-radius: 30px;
            box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
          }

          .quizTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
          }

          .quizEmoji {
            font-size: 38px;
            margin-right: 10px;
            vertical-align: middle;
          }

          .counter {
            background: #fff0c9;
            padding: 8px 14px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
          }

          .question {
            margin: 25px 0;
            padding: 30px 20px;
            text-align: center;
            border-radius: 25px;
            background: linear-gradient(
              135deg,
              #f3f9ff,
              #fff8df
            );
          }

          .qNumber {
            display: inline-block;
            padding: 7px 13px;
            background: #333;
            color: white;
            border-radius: 18px;
            font-size: 13px;
            font-weight: bold;
          }

          .question h2 {
            font-size: 25px;
            line-height: 1.5;
            margin-bottom: 5px;
          }

          .options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .option {
            min-height: 62px;
            border: 2px solid #e5e5e5;
            background: white;
            border-radius: 20px;
            padding: 14px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            transition: 0.2s;
          }

          .option:hover {
            border-color: #ffb347;
            background: #fffaf0;
            transform: translateY(-2px);
          }

          .correct {
            background: #e3f8e3 !important;
            border-color: #4caf50 !important;
          }

          .wrong {
            background: #ffe4e4 !important;
            border-color: #f44336 !important;
          }

          .feedback {
            margin-top: 18px;
            padding: 14px;
            border-radius: 20px;
            text-align: center;
            font-weight: bold;
          }

          .good {
            background: #e3f8e3;
          }

          .bad {
            background: #ffe4e4;
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            margin-top: 25px;
          }

          .score {
            padding: 10px 18px;
            background: #fff0c9;
            border-radius: 20px;
            font-weight: bold;
          }

          .next,
          .restart {
            border: none;
            background: #4caf50;
            color: white;
            padding: 13px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            font-size: 15px;
          }

          .next:hover,
          .restart:hover {
            transform: translateY(-2px);
          }

          .result {
            text-align: center;
            padding: 25px 10px;
          }

          .resultIcon {
            font-size: 80px;
          }

          .result h2 {
            font-size: 32px;
            margin: 15px 0;
          }

          .resultScore {
            display: inline-block;
            padding: 18px 30px;
            background: #fff0c9;
            border-radius: 25px;
            font-size: 38px;
            font-weight: bold;
          }

          .result h3 {
            font-size: 24px;
            margin: 22px 0;
          }

          @media (max-width: 800px) {
            .header {
              flex-direction: column;
            }

            .categoryGrid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 600px) {
            .hero h1 {
              font-size: 34px;
            }

            .heroIcon {
              font-size: 45px;
            }

            .quizCard {
              margin: 25px 10px 45px;
              padding: 18px;
            }

            .categoryGrid {
              grid-template-columns: repeat(2, 1fr);
            }

            .options {
              grid-template-columns: 1fr;
            }

            .question h2 {
              font-size: 20px;
            }

            .bottom {
              flex-direction: column;
            }

            .score,
            .next {
              width: 100%;
              text-align: center;
            }
          }

          @media (max-width: 400px) {
            nav {
              gap: 8px;
            }

            nav a {
              font-size: 11px;
            }

            .heroMini {
              font-size: 20px;
            }

            .quizTop {
              font-size: 14px;
            }

            .quizEmoji {
              font-size: 30px;
            }
          }
        `}</style>
      </>
    );
  }
}
            
