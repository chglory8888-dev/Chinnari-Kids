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
  ["Flowers", "🌸"]
];

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
    }
  }

  function nextQuestion() {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setQuestionIndex((value) => value + 1);
    setSelected("");
    setAnswered(false);
  }

  function restart() {
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
            <Link href="/dots">🔵 Dot-to-Dot</Link>
            <Link href="/world">🌍 World Explorer</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="heroIcon">🧠❓🎯</div>
          <h1>Mega Quiz</h1>
          <p>Learn, Think and Have Fun!</p>
          <div className="heroMini">
            🌍 🇮🇳 🐶 🐦 🍎 🔤 🧠
          </div>
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
                onClick={() => changeCategory(name)}
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
                  {questionIndex + 1} / {questions.length}
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

                      {isCorrect && <b>✅</b>}
                      {isWrong && <b>❌</b>}
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
                    {questionIndex === questions.length - 1
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

              <h2>Quiz Complete!</h2>

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
          font-size: 23px;
          font-weight: bold;
          white-space: nowrap;
        }

        nav {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        nav a {
          color: #444;
          text-decoration: none;
          font-size: 14px;
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
          letter-spacing: 5px;
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
          font-size: 27px;
          margin-top: 20px;
        }

        .categories {
          max-width: 1100px;
          margin: 35px auto;
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
          margin: 25px auto 55px;
          padding: 28px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
        }

        .quizTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 21px;
        }

        .quizEmoji {
          font-size: 40px;
          margin-right: 10px;
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
          justify-content: space-between;
          align-items: center;
        }

        .option:hover {
          border-color: #ffb347;
          background: #fffaf0;
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
          padding: 13px 23px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
        }

        .result {
          text-align: center;
          padding: 20px;
        }

        .resultIcon {
          font-size: 80px;
        }

        .result h2 {
          font-size: 32px;
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
        }

        .learning {
          max-width: 850px;
          margin: 30px auto 50px;
          padding: 30px;
          background: white;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
        }

        .learning > div {
          font-size: 70px;
        }

        .learning p {
          color: #666;
          line-height: 1.6;
        }

        .links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 20px 20px 50px;
        }

        .links a {
          background: #333;
          color: white;
          text-decoration: none;
          padding: 13px 20px;
          border-radius: 25px;
          font-weight: bold;
        }

        footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 35px 20px;
        }

        footer p {
          margin: 8px;
        }

        @media (max-width: 700px) {
          .header {
            flex-direction: column;
          }

          .categoryGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .options {
            grid-template-columns: 1fr;
          }

          .learning {
            margin-left: 15px;
            margin-right: 15px;
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .heroIcon {
            font-size: 42px;
          }

          .heroMini {
            font-size: 20px;
          }

          .quizCard {
            margin-left: 10px;
            margin-right: 10px;
            padding: 16px;
          }

          .quizTop {
            font-size: 17px;
          }

          .quizEmoji {
            font-size: 30px;
          }

          .question h2 {
            font-size: 20px;
          }

          .bottom {
            flex-direction: column;
            gap: 15px;
          }

          .score,
          .next {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
                 }
            
