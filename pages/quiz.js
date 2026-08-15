import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const quizData = {
  Countries: [
    ["What is the largest country in the world?", ["India", "Russia", "China", "Brazil"], "Russia", "🌍"],
    ["Which country has the Eiffel Tower?", ["France", "Italy", "Spain", "Germany"], "France", "🗼"],
    ["Which country is called the Land of the Rising Sun?", ["India", "Japan", "China", "Korea"], "Japan", "🇯🇵"],
    ["Where are the Great Pyramids?", ["Egypt", "India", "Mexico", "Peru"], "Egypt", "🏜️"],
    ["Which country is shaped like a boot?", ["France", "Italy", "Spain", "Greece"], "Italy", "🇮🇹"],
  ],

  Capitals: [
    ["What is the capital of India?", ["Mumbai", "New Delhi", "Chennai", "Kolkata"], "New Delhi", "🇮🇳"],
    ["What is the capital of France?", ["Paris", "London", "Rome", "Madrid"], "Paris", "🇫🇷"],
    ["What is the capital of Japan?", ["Tokyo", "Kyoto", "Osaka", "Hiroshima"], "Tokyo", "🇯🇵"],
    ["What is the capital of Australia?", ["Sydney", "Melbourne", "Canberra", "Perth"], "Canberra", "🇦🇺"],
    ["What is the capital of the UK?", ["London", "Manchester", "Liverpool", "Birmingham"], "London", "🇬🇧"],
  ],

  Currencies: [
    ["What is the currency of India?", ["Rupee", "Dollar", "Euro", "Pound"], "Rupee", "💰"],
    ["What is the currency of Japan?", ["Yen", "Won", "Dollar", "Yuan"], "Yen", "💴"],
    ["What is the currency of USA?", ["Euro", "Dollar", "Pound", "Yen"], "Dollar", "💵"],
    ["What is the currency of UK?", ["Euro", "Dollar", "Pound", "Yen"], "Pound", "💷"],
    ["What is the currency used by many European countries?", ["Euro", "Dollar", "Rupee", "Yen"], "Euro", "💶"],
  ],

  "Indian States": [
    ["What is the capital of Andhra Pradesh?", ["Amaravati", "Vijayawada", "Tirupati", "Visakhapatnam"], "Amaravati", "🇮🇳"],
    ["What is the capital of Telangana?", ["Warangal", "Hyderabad", "Nizamabad", "Karimnagar"], "Hyderabad", "🇮🇳"],
    ["What is the capital of Karnataka?", ["Mysuru", "Bengaluru", "Mangaluru", "Hubballi"], "Bengaluru", "🇮🇳"],
    ["What is the capital of Tamil Nadu?", ["Madurai", "Chennai", "Salem", "Coimbatore"], "Chennai", "🇮🇳"],
    ["What is the capital of Kerala?", ["Kochi", "Kannur", "Kollam", "Thiruvananthapuram"], "Thiruvananthapuram", "🇮🇳"],
  ],

  Animals: [
    ["Which animal is called the King of the Jungle?", ["Tiger", "Lion", "Elephant", "Bear"], "Lion", "🦁"],
    ["Which is the largest land animal?", ["Elephant", "Giraffe", "Rhino", "Hippo"], "Elephant", "🐘"],
    ["Which animal gives us wool?", ["Cow", "Sheep", "Horse", "Goat"], "Sheep", "🐑"],
    ["Which animal is known as man's best friend?", ["Cat", "Dog", "Horse", "Rabbit"], "Dog", "🐶"],
    ["Which animal has a very long neck?", ["Zebra", "Giraffe", "Tiger", "Deer"], "Giraffe", "🦒"],
  ],

  Birds: [
    ["Which bird is famous for colorful feathers?", ["Crow", "Peacock", "Sparrow", "Duck"], "Peacock", "🦚"],
    ["Which bird can mimic human speech?", ["Parrot", "Penguin", "Eagle", "Owl"], "Parrot", "🦜"],
    ["Which bird represents peace?", ["Dove", "Crow", "Eagle", "Owl"], "Dove", "🕊️"],
    ["Which bird cannot fly?", ["Eagle", "Sparrow", "Penguin", "Parrot"], "Penguin", "🐧"],
    ["Which bird has excellent eyesight?", ["Eagle", "Duck", "Hen", "Pigeon"], "Eagle", "🦅"],
  ],

  Insects: [
    ["Which insect makes honey?", ["Ant", "Bee", "Fly", "Mosquito"], "Bee", "🐝"],
    ["Which insect has colorful wings?", ["Butterfly", "Ant", "Beetle", "Fly"], "Butterfly", "🦋"],
    ["Which insect lives in colonies and carries food?", ["Ant", "Bee", "Moth", "Fly"], "Ant", "🐜"],
    ["Which insect is also called a ladybird?", ["Ladybug", "Bee", "Cricket", "Fly"], "Ladybug", "🐞"],
    ["Which insect can jump far?", ["Grasshopper", "Ant", "Bee", "Butterfly"], "Grasshopper", "🦗"],
  ],

  Fruits: [
    ["Which fruit is called the king of fruits in India?", ["Apple", "Mango", "Banana", "Orange"], "Mango", "🥭"],
    ["Which fruit is yellow and curved?", ["Banana", "Apple", "Grape", "Orange"], "Banana", "🍌"],
    ["Which fruit has seeds on its outside?", ["Strawberry", "Apple", "Mango", "Pear"], "Strawberry", "🍓"],
    ["Which fruit is usually red or green?", ["Apple", "Banana", "Watermelon", "Pineapple"], "Apple", "🍎"],
    ["Which fruit is green outside and red inside?", ["Watermelon", "Orange", "Grape", "Mango"], "Watermelon", "🍉"],
  ],

  Flowers: [
    ["What is the national flower of India?", ["Rose", "Lotus", "Sunflower", "Jasmine"], "Lotus", "🪷"],
    ["Which flower follows the sun?", ["Rose", "Sunflower", "Lily", "Lotus"], "Sunflower", "🌻"],
    ["Which flower is often called the queen of flowers?", ["Rose", "Lotus", "Tulip", "Daisy"], "Rose", "🌹"],
    ["Which flower commonly grows in ponds?", ["Lotus", "Rose", "Tulip", "Sunflower"], "Lotus", "🌸"],
    ["Which flower is commonly associated with love?", ["Rose", "Daisy", "Lily", "Marigold"], "Rose", "❤️"],
  ],

  Numbers: [
    ["What comes after 9?", ["8", "10", "11", "7"], "10", "🔢"],
    ["What comes before 20?", ["18", "19", "21", "17"], "19", "🔢"],
    ["How many fingers are on one hand?", ["4", "5", "6", "10"], "5", "✋"],
    ["What is 2 + 3?", ["4", "5", "6", "7"], "5", "➕"],
    ["What is 5 + 5?", ["8", "9", "10", "11"], "10", "➕"],
  ],

  ABC: [
    ["Which letter comes after A?", ["B", "C", "D", "E"], "B", "🔤"],
    ["Which letter comes after C?", ["A", "B", "D", "E"], "D", "🔤"],
    ["Which letter comes before Z?", ["X", "Y", "W", "V"], "Y", "🔤"],
    ["What is the first letter of Apple?", ["A", "B", "C", "D"], "A", "🍎"],
    ["What is the first letter of Ball?", ["A", "B", "C", "D"], "B", "⚽"],
  ],

  Telugu: [
    ["తెలుగు అచ్చులలో మొదటి అక్షరం ఏది?", ["అ", "ఆ", "ఇ", "ఈ"], "అ", "అ"],
    ["అ తర్వాత వచ్చే అక్షరం ఏది?", ["ఇ", "ఆ", "ఉ", "ఎ"], "ఆ", "ఆ"],
    ["ఆ తర్వాత వచ్చే అక్షరం ఏది?", ["అ", "ఇ", "ఈ", "ఉ"], "ఇ", "ఇ"],
    ["ఇ తర్వాత వచ్చే అక్షరం ఏది?", ["ఆ", "ఈ", "ఉ", "ఊ"], "ఈ", "ఈ"],
    ["ఉ తర్వాత వచ్చే అక్షరం ఏది?", ["ఊ", "ఇ", "ఎ", "ఏ"], "ఊ", "ఊ"],
  ],

  "Famous Places": [
    ["Where is the Taj Mahal?", ["Agra", "Delhi", "Mumbai", "Jaipur"], "Agra", "🕌"],
    ["Where is the Eiffel Tower?", ["Paris", "Rome", "London", "Berlin"], "Paris", "🗼"],
    ["Where is the Statue of Liberty?", ["New York", "London", "Paris", "Tokyo"], "New York", "🗽"],
    ["Where are the Great Pyramids?", ["Egypt", "India", "Brazil", "China"], "Egypt", "🏜️"],
    ["Where is the Great Wall?", ["China", "Japan", "India", "Korea"], "China", "🏯"],
  ],

  "General Knowledge": [
    ["How many days are in a week?", ["5", "6", "7", "8"], "7", "📅"],
    ["How many colors are traditionally in a rainbow?", ["5", "6", "7", "8"], "7", "🌈"],
    ["Which planet do we live on?", ["Mars", "Earth", "Venus", "Jupiter"], "Earth", "🌍"],
    ["Which star gives Earth light and heat?", ["Moon", "Sun", "Mars", "Venus"], "Sun", "☀️"],
    ["How many months are in a year?", ["10", "11", "12", "13"], "12", "📆"],
  ],
};

const categories = [
  ["Countries", "🌍"],
  ["Capitals", "🏛️"],
  ["Currencies", "💰"],
  ["Indian States", "🇮🇳"],
  ["Animals", "🐶"],
  ["Birds", "🐦"],
  ["Insects", "🦋"],
  ["Fruits", "🍎"],
  ["Flowers", "🌸"],
  ["Numbers", "🔢"],
  ["ABC", "🔤"],
  ["Telugu", "అ"],
  ["Famous Places", "🗺️"],
  ["General Knowledge", "🧠"],
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
          content="Fun educational quiz for kids."
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
            <Link href="/drawing">🎨 Drawing</Link>
            <Link href="/writing">✏️ Writing</Link>
            <Link href="/world">🌍 World Explorer</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="heroIcon">🧠❓🎯</div>
          <h1>Mega Quiz</h1>
          <p>Learn, think and have fun!</p>
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
                    answered && option === question[2];

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
                  : score >= 2
                  ? "👏 Good Job!"
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

        <section className="learning">
          <div>🌟</div>

          <article>
            <h2>Learn While Playing!</h2>

            <p>
              Explore countries, capitals, currencies,
              Indian states, animals, birds, insects,
              fruits, flowers, numbers, ABC, Telugu
              and famous places.
            </p>

            <p>
              ఆడుతూ పాడుతూ కొత్త విషయాలు
              నేర్చుకుందాం!
            </p>
          </article>
        </section>

        <section className="links">
          <Link href="/dots">🔵 Dot-to-Dot</Link>
          <Link href="/drawing">🎨 Drawing</Link>
          <Link href="/writing">✏️ Writing</Link>
          <Link href="/games">🎮 Games</Link>
          <Link href="/world">🌍 World Explorer</Link>
        </section>

        <footer>
          <h3>🌈 Chinnaari Kids</h3>
          <p>Learn • Play • Discover</p>
          <p>© 2026 Chinnaari Kids</p>
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
          background: #fff;
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
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .category {
          min-height: 85px;
          border: 2px solid #eee;
          background: #fff;
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
          background: #fff;
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
          color: #fff;
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
          background: #fff;
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
    
