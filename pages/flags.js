import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const countries = [
  ["🇮🇳", "India", "New Delhi", "Rupee"],
  ["🇺🇸", "USA", "Washington, D.C.", "Dollar"],
  ["🇬🇧", "United Kingdom", "London", "Pound"],
  ["🇯🇵", "Japan", "Tokyo", "Yen"],
  ["🇫🇷", "France", "Paris", "Euro"],
  ["🇩🇪", "Germany", "Berlin", "Euro"],
  ["🇨🇦", "Canada", "Ottawa", "Canadian Dollar"],
  ["🇦🇺", "Australia", "Canberra", "Australian Dollar"],
  ["🇧🇷", "Brazil", "Brasília", "Real"],
  ["🇨🇳", "China", "Beijing", "Yuan"],
  ["🇰🇷", "South Korea", "Seoul", "Won"],
  ["🇷🇺", "Russia", "Moscow", "Ruble"],
  ["🇮🇹", "Italy", "Rome", "Euro"],
  ["🇪🇸", "Spain", "Madrid", "Euro"],
  ["🇲🇽", "Mexico", "Mexico City", "Peso"],
  ["🇿🇦", "South Africa", "Pretoria", "Rand"],
  ["🇪🇬", "Egypt", "Cairo", "Egyptian Pound"],
  ["🇸🇦", "Saudi Arabia", "Riyadh", "Riyal"],
  ["🇦🇪", "UAE", "Abu Dhabi", "Dirham"],
  ["🇸🇬", "Singapore", "Singapore", "Singapore Dollar"],
  ["🇹🇭", "Thailand", "Bangkok", "Baht"],
  ["🇮🇩", "Indonesia", "Jakarta", "Rupiah"],
  ["🇲🇾", "Malaysia", "Kuala Lumpur", "Ringgit"],
  ["🇳🇵", "Nepal", "Kathmandu", "Rupee"],
  ["🇱🇰", "Sri Lanka", "Sri Jayawardenepura Kotte", "Rupee"],
  ["🇧🇩", "Bangladesh", "Dhaka", "Taka"],
  ["🇵🇰", "Pakistan", "Islamabad", "Rupee"],
  ["🇳🇿", "New Zealand", "Wellington", "Dollar"],
  ["🇹🇷", "Turkey", "Ankara", "Lira"],
  ["🇬🇷", "Greece", "Athens", "Euro"],
  ["🇳🇱", "Netherlands", "Amsterdam", "Euro"],
  ["🇨🇭", "Switzerland", "Bern", "Franc"],
  ["🇸🇪", "Sweden", "Stockholm", "Krona"],
  ["🇳🇴", "Norway", "Oslo", "Krone"],
  ["🇩🇰", "Denmark", "Copenhagen", "Krone"],
  ["🇫🇮", "Finland", "Helsinki", "Euro"],
  ["🇵🇹", "Portugal", "Lisbon", "Euro"],
  ["🇮🇪", "Ireland", "Dublin", "Euro"],
  ["🇦🇷", "Argentina", "Buenos Aires", "Peso"],
  ["🇨🇱", "Chile", "Santiago", "Peso"],
  ["🇨🇴", "Colombia", "Bogotá", "Peso"],
  ["🇵🇪", "Peru", "Lima", "Sol"],
  ["🇵🇭", "Philippines", "Manila", "Peso"],
  ["🇻🇳", "Vietnam", "Hanoi", "Dong"],
  ["🇵🇱", "Poland", "Warsaw", "Zloty"],
  ["🇺🇦", "Ukraine", "Kyiv", "Hryvnia"],
  ["🇮🇱", "Israel", "Jerusalem", "Shekel"],
  ["🇰🇪", "Kenya", "Nairobi", "Shilling"],
  ["🇳🇬", "Nigeria", "Abuja", "Naira"],
  ["🇲🇦", "Morocco", "Rabat", "Dirham"],
  ["🇮🇸", "Iceland", "Reykjavík", "Krona"],
  ["🇨🇿", "Czech Republic", "Prague", "Koruna"]
];

function makeQuestion(country, index) {
  const types = ["flag", "country", "capital", "currency"];
  return types[index % types.length];
}

export default function FlagsQuiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = countries[index];
  const type = makeQuestion(current, index);

  const getOptions = () => {
    let correct;

    if (type === "flag") correct = current[1];
    if (type === "country") correct = current[0];
    if (type === "capital") correct = current[2];
    if (type === "currency") correct = current[3];

    const values = countries
      .map((item) => {
        if (type === "flag") return item[1];
        if (type === "country") return item[0];
        if (type === "capital") return item[2];
        return item[3];
      })
      .filter((value) => value !== correct);

    const random = values
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return [correct, ...random].sort(
      () => Math.random() - 0.5
    );
  };

  const [options, setOptions] = useState(() => getOptions());

  function answer(option) {
    if (answered) return;

    setSelected(option);
    setAnswered(true);

    let correct;

    if (type === "flag") correct = current[1];
    if (type === "country") correct = current[0];
    if (type === "capital") correct = current[2];
    if (type === "currency") correct = current[3];

    if (option === correct) {
      setScore((value) => value + 1);
    }
  }

  function next() {
    if (index === countries.length - 1) {
      setFinished(true);
      return;
    }

    const nextIndex = index + 1;
    const nextCountry = countries[nextIndex];
    const nextType = makeQuestion(nextCountry, nextIndex);

    let correct;

    if (nextType === "flag") correct = nextCountry[1];
    if (nextType === "country") correct = nextCountry[0];
    if (nextType === "capital") correct = nextCountry[2];
    if (nextType === "currency") correct = nextCountry[3];

    const values = countries
      .map((item) => {
        if (nextType === "flag") return item[1];
        if (nextType === "country") return item[0];
        if (nextType === "capital") return item[2];
        return item[3];
      })
      .filter((value) => value !== correct);

    const newOptions = [correct]
      .concat(
        values
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      )
      .sort(() => Math.random() - 0.5);

    setIndex(nextIndex);
    setOptions(newOptions);
    setSelected("");
    setAnswered(false);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
    setOptions(getOptions());
  }

  function questionText() {
    if (type === "flag") {
      return "Which country does this flag belong to?";
    }

    if (type === "country") {
      return "Which flag belongs to this country?";
    }

    if (type === "capital") {
      return `What is the capital of ${current[1]}?`;
    }

    return `What is the currency of ${current[1]}?`;
  }

  function correctAnswer() {
    if (type === "flag") return current[1];
    if (type === "country") return current[0];
    if (type === "capital") return current[2];
    return current[3];
  }

  return (
    <>
      <Head>
        <title>World Flags Quiz | Chinnaari Kids</title>
        <meta
          name="description"
          content="Learn world flags, countries, capitals and currencies."
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
            <Link href="/quiz">🧠 Quiz</Link>
            <Link href="/world">🌍 World Explorer</Link>
          </nav>
        </header>

        <section className="hero">
          <div className="globe">🌍</div>
          <h1>World Flags Quiz</h1>
          <p>
            Flags • Countries • Capitals • Currencies
          </p>

          <div className="flags">
            🇮🇳 🇺🇸 🇬🇧 🇯🇵 🇫🇷 🇩🇪 🇧🇷 🇨🇳
          </div>
        </section>

        {!finished ? (
          <section className="quizCard">
            <div className="top">
              <span>
                Question {index + 1} / {countries.length}
              </span>

              <span>⭐ Score: {score}</span>
            </div>

            <div className="progress">
              <div
                style={{
                  width: `${
                    ((index + 1) / countries.length) * 100
                  }%`
                }}
              />
            </div>

            <div className="questionBox">
              {type === "flag" && (
                <div className="bigFlag">
                  {current[0]}
                </div>
              )}

              {type === "country" && (
                <div className="countryName">
                  {current[1]}
                </div>
              )}

              {type === "capital" && (
                <div className="countryName">
                  🏛️ {current[1]}
                </div>
              )}

              {type === "currency" && (
                <div className="countryName">
                  💰 {current[1]}
                </div>
              )}

              <h2>{questionText()}</h2>
            </div>

            <div className="options">
              {options.map((option) => {
                const correct =
                  option === correctAnswer();

                const isCorrect =
                  answered && correct;

                const isWrong =
                  answered &&
                  option === selected &&
                  !correct;

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
                    onClick={() => answer(option)}
                  >
                    {option}

                    {isCorrect && " ✅"}
                    {isWrong && " ❌"}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div
                className={
                  selected === correctAnswer()
                    ? "message good"
                    : "message bad"
                }
              >
                {selected === correctAnswer()
                  ? "🎉 Correct! Excellent!"
                  : `😊 Correct answer: ${correctAnswer()}`}
              </div>
            )}

            {answered && (
              <button
                className="next"
                onClick={next}
              >
                {index === countries.length - 1
                  ? "🏆 See Result"
                  : "Next ➡️"}
              </button>
            )}
          </section>
        ) : (
          <section className="result">
            <div className="trophy">🏆</div>

            <h2>World Quiz Complete!</h2>

            <div className="score">
              {score} / {countries.length}
            </div>

            <p>
              {score === countries.length
                ? "🌟 Perfect! You are a World Explorer!"
                : score >= 35
                ? "👏 Amazing knowledge!"
                : score >= 20
                ? "😊 Great job! Keep learning!"
                : "💪 Keep practicing!"}
            </p>

            <button
              className="restart"
              onClick={restart}
            >
              🔄 Play Again
            </button>
          </section>
        )}
      </main>

      <style jsx>{`
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
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        }

        .logo {
          color: #333;
          text-decoration: none;
          font-size: 23px;
          font-weight: bold;
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
          font-weight: bold;
        }

        .hero {
          text-align: center;
          padding: 55px 20px;
          background: linear-gradient(
            135deg,
            #dff5ff,
            #fff0c9,
            #f4ddff
          );
        }

        .globe {
          font-size: 70px;
        }

        .hero h1 {
          font-size: 42px;
          margin: 10px 0;
        }

        .hero p {
          font-size: 18px;
          color: #555;
        }

        .flags {
          margin-top: 20px;
          font-size: 30px;
          letter-spacing: 5px;
        }

        .quizCard {
          max-width: 850px;
          margin: 40px auto;
          padding: 30px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .top {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .progress {
          width: 100%;
          height: 10px;
          background: #eee;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .progress div {
          height: 100%;
          background: #4caf50;
          transition: width 0.3s ease;
        }

        .questionBox {
          padding: 30px 15px;
          background: linear-gradient(
            135deg,
            #f5fbff,
            #fff8e7
          );
          border-radius: 25px;
          margin-bottom: 25px;
        }

        .bigFlag {
          font-size: 110px;
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .countryName {
          font-size: 42px;
          font-weight: bold;
          margin: 20px 0;
        }

        .questionBox h2 {
          font-size: 23px;
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
          border-radius: 18px;
          padding: 14px;
          font-size: 17px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
        }

        .option:hover {
          transform: translateY(-2px);
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

        .message {
          margin: 20px 0;
          padding: 15px;
          border-radius: 20px;
          font-weight: bold;
        }

        .good {
          background: #e3f8e3;
        }

        .bad {
          background: #ffe4e4;
        }

        .next,
        .restart {
          border: none;
          background: #4caf50;
          color: white;
          padding: 14px 28px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .result {
          max-width: 700px;
          margin: 50px auto;
          padding: 45px 25px;
          background: white;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .trophy {
          font-size: 90px;
        }

        .result h2 {
          font-size: 32px;
        }

        .score {
          display: inline-block;
          margin: 15px;
          padding: 18px 35px;
          background: #fff0c9;
          border-radius: 25px;
          font-size: 38px;
          font-weight: bold;
        }

        .result p {
          font-size: 20px;
          margin: 15px 0 30px;
        }

        @media (max-width: 700px) {
          .header {
            flex-direction: column;
          }

          .hero h1 {
            font-size: 34px;
          }

          .options {
            grid-template-columns: 1fr;
          }

          .quizCard {
            margin: 25px 12px;
            padding: 20px 15px;
          }

          .bigFlag {
            font-size: 85px;
          }

          .countryName {
            font-size: 30px;
          }

          .flags {
            font-size: 22px;
            letter-spacing: 2px;
          }
        }

        @media (max-width: 400px) {
          nav {
            gap: 8px;
          }

          nav a {
            font-size: 12px;
          }

          .bigFlag {
            font-size: 70px;
          }

          .questionBox h2 {
            font-size: 19px;
          }
        }
      `}</style>
    </>
  );
}
