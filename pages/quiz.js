import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const quizData = {
  Countries: [
    {
      question: "What is the largest country in the world by area?",
      options: ["India", "Russia", "China", "Canada"],
      answer: "Russia",
      emoji: "🌍",
    },
    {
      question: "Which country is famous for the Eiffel Tower?",
      options: ["France", "Italy", "Spain", "Germany"],
      answer: "France",
      emoji: "🗼",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Korea", "Thailand"],
      answer: "Japan",
      emoji: "🇯🇵",
    },
    {
      question: "Which country has the Great Pyramids of Giza?",
      options: ["Egypt", "India", "Mexico", "Peru"],
      answer: "Egypt",
      emoji: "🇪🇬",
    },
    {
      question: "Which country is shaped like a boot?",
      options: ["France", "Italy", "Brazil", "Greece"],
      answer: "Italy",
      emoji: "🇮🇹",
    },
  ],

  Capitals: [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
      answer: "New Delhi",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Rome", "Paris", "Madrid"],
      answer: "Paris",
      emoji: "🇫🇷",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      answer: "Tokyo",
      emoji: "🇯🇵",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra",
      emoji: "🇦🇺",
    },
    {
      question: "What is the capital of the United Kingdom?",
      options: ["London", "Manchester", "Liverpool", "Birmingham"],
      answer: "London",
      emoji: "🇬🇧",
    },
  ],

  Currencies: [
    {
      question: "What is the currency of India?",
      options: ["Dollar", "Rupee", "Euro", "Pound"],
      answer: "Rupee",
      emoji: "💰",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Dollar", "Yuan"],
      answer: "Yen",
      emoji: "💴",
    },
    {
      question: "What is the currency of the United States?",
      options: ["Euro", "Dollar", "Pound", "Franc"],
      answer: "Dollar",
      emoji: "💵",
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Euro", "Dollar", "Pound", "Yen"],
      answer: "Pound",
      emoji: "💷",
    },
    {
      question: "What is the currency of Europe?",
      options: ["Euro", "Dollar", "Rupee", "Yen"],
      answer: "Euro",
      emoji: "💶",
    },
  ],

  "Indian States": [
    {
      question: "What is the capital of Andhra Pradesh?",
      options: ["Vijayawada", "Visakhapatnam", "Amaravati", "Tirupati"],
      answer: "Amaravati",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Telangana?",
      options: ["Warangal", "Hyderabad", "Nizamabad", "Karimnagar"],
      answer: "Hyderabad",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Karnataka?",
      options: ["Mysuru", "Bengaluru", "Mangaluru", "Hubballi"],
      answer: "Bengaluru",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Tamil Nadu?",
      options: ["Madurai", "Coimbatore", "Chennai", "Salem"],
      answer: "Chennai",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Kerala?",
      options: ["Kochi", "Kozhikode", "Kannur", "Thiruvananthapuram"],
      answer: "Thiruvananthapuram",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Maharashtra?",
      options: ["Pune", "Mumbai", "Nagpur", "Nashik"],
      answer: "Mumbai",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Rajasthan?",
      options: ["Jodhpur", "Udaipur", "Jaipur", "Kota"],
      answer: "Jaipur",
      emoji: "🇮🇳",
    },
    {
      question: "What is the capital of Gujarat?",
      options: ["Surat", "Ahmedabad", "Gandhinagar", "Rajkot"],
      answer: "Gandhinagar",
      emoji: "🇮🇳",
    },
  ],

  Animals: [
    {
      question: "Which animal is known as the King of the Jungle?",
      options: ["Tiger", "Lion", "Elephant", "Bear"],
      answer: "Lion",
      emoji: "🦁",
    },
    {
      question: "Which is the largest land animal?",
      options: ["Giraffe", "Elephant", "Rhino", "Hippo"],
      answer: "Elephant",
      emoji: "🐘",
    },
    {
      question: "Which animal gives us wool?",
      options: ["Cow", "Sheep", "Horse", "Goat"],
      answer: "Sheep",
      emoji: "🐑",
    },
    {
      question: "Which animal is called man's best friend?",
      options: ["Cat", "Dog", "Horse", "Rabbit"],
      answer: "Dog",
      emoji: "🐶",
    },
    {
      question: "Which animal has a very long neck?",
      options: ["Zebra", "Giraffe", "Tiger", "Deer"],
      answer: "Giraffe",
      emoji: "🦒",
    },
  ],

  Birds: [
    {
      question: "Which bird is known for its colorful feathers?",
      options: ["Crow", "Peacock", "Sparrow", "Duck"],
      answer: "Peacock",
      emoji: "🦚",
    },
    {
      question: "Which bird can mimic human speech?",
      options: ["Parrot", "Penguin", "Eagle", "Owl"],
      answer: "Parrot",
      emoji: "🦜",
    },
    {
      question: "Which bird is a symbol of peace?",
      options: ["Dove", "Crow", "Eagle", "Owl"],
      answer: "Dove",
      emoji: "🕊️",
    },
    {
      question: "Which bird cannot fly?",
      options: ["Eagle", "Sparrow", "Penguin", "Parrot"],
      answer: "Penguin",
      emoji: "🐧",
    },
    {
      question: "Which bird is known for its sharp eyesight?",
      options: ["Eagle", "Duck", "Hen", "Pigeon"],
      answer: "Eagle",
      emoji: "🦅",
    },
  ],

  Insects: [
    {
      question: "Which insect makes honey?",
      options: ["Ant", "Bee", "Fly", "Mosquito"],
      answer: "Bee",
      emoji: "🐝",
    },
    {
      question: "Which insect has beautiful colorful wings?",
      options: ["Butterfly", "Ant", "Beetle", "Fly"],
      answer: "Butterfly",
      emoji: "🦋",
    },
    {
      question: "Which insect is famous for carrying food?",
      options: ["Ant", "Bee", "Butterfly", "Moth"],
      answer: "Ant",
      emoji: "🐜",
    },
    {
      question: "Which insect is often called a ladybird?",
      options: ["Ladybug", "Dragonfly", "Bee", "Cricket"],
      answer: "Ladybug",
      emoji: "🐞",
    },
    {
      question: "Which insect can jump very far?",
      options: ["Grasshopper", "Ant", "Butterfly", "Bee"],
      answer: "Grasshopper",
      emoji: "🦗",
    },
  ],

  Fruits: [
    {
      question: "Which fruit is known as the king of fruits in India?",
      options: ["Apple", "Mango", "Banana", "Orange"],
      answer: "Mango",
      emoji: "🥭",
    },
    {
      question: "Which fruit is yellow and curved?",
      options: ["Banana", "Apple", "Grape", "Orange"],
      answer: "Banana",
      emoji: "🍌",
    },
    {
      question: "Which fruit is famous for having many seeds on its outside?",
      options: ["Strawberry", "Apple", "Mango", "Pear"],
      answer: "Strawberry",
      emoji: "🍓",
    },
    {
      question: "Which fruit is usually red or green and grows on trees?",
      options: ["Apple", "Banana", "Watermelon", "Pineapple"],
      answer: "Apple",
      emoji: "🍎",
    },
    {
      question: "Which fruit is large, green outside and red inside?",
      options: ["Watermelon", "Orange", "Grape", "Mango"],
      answer: "Watermelon",
      emoji: "🍉",
    },
  ],

  Flowers: [
    {
      question: "Which flower is the national flower of India?",
      options: ["Rose", "Lotus", "Sunflower", "Jasmine"],
      answer: "Lotus",
      emoji: "🪷",
    },
    {
      question: "Which flower is famous for following the sun?",
      options: ["Rose", "Sunflower", "Lily", "Lotus"],
      answer: "Sunflower",
      emoji: "🌻",
    },
    {
      question: "Which flower is often called the queen of flowers?",
      options: ["Rose", "Lotus", "Tulip", "Daisy"],
      answer: "Rose",
      emoji: "🌹",
    },
    {
      question: "Which flower commonly grows in ponds?",
      options: ["Lotus", "Rose", "Tulip", "Sunflower"],
      answer: "Lotus",
      emoji: "🌸",
    },
    {
      question: "Which flower is commonly associated with love?",
      options: ["Rose", "Daisy", "Marigold", "Lily"],
      answer: "Rose",
      emoji: "❤️",
    },
  ],

  Numbers: [
    {
      question: "What comes after 9?",
      options: ["8", "10", "11", "7"],
      answer: "10",
      emoji: "🔢",
    },
    {
      question: "What comes before 20?",
      options: ["18", "19", "21", "17"],
      answer: "19",
      emoji: "🔢",
    },
    {
      question: "How many fingers are on one hand?",
      options: ["4", "5", "6", "10"],
      answer: "5",
      emoji: "✋",
    },
    {
      question: "What is 2 + 3?",
      options: ["4", "5", "6", "7"],
      answer: "5",
      emoji: "➕",
    },
    {
      question: "What is 5 + 5?",
      options: ["8", "9", "10", "11"],
      answer: "10",
      emoji: "➕",
    },
  ],

  ABC: [
    {
      question: "Which letter comes after A?",
      options: ["B", "C", "D", "E"],
      answer: "B",
      emoji: "🔤",
    },
    {
      question: "Which letter comes after C?",
      options: ["A", "B", "D", "E"],
      answer: "D",
      emoji: "🔤",
    },
    {
      question: "Which letter comes before Z?",
      options: ["X", "Y", "W", "V"],
      answer: "Y",
      emoji: "🔤",
    },
    {
      question: "Which is the first letter of Apple?",
      options: ["A", "B", "C", "D"],
      answer: "A",
      emoji: "🍎",
    },
    {
      question: "Which is the first letter of Ball?",
      options: ["A", "B", "C", "D"],
      answer: "B",
      emoji: "⚽",
    },
  ],

  Telugu: [
    {
      question: "తెలుగు అచ్చులలో మొదటి అక్షరం ఏది?",
      options: ["అ", "ఆ", "ఇ", "ఈ"],
      answer: "అ",
      emoji: "అ",
    },
    {
      question: "అ తర్వాత వచ్చే అక్షరం ఏది?",
      options: ["ఇ", "ఆ", "ఉ", "ఎ"],
      answer: "ఆ",
      emoji: "ఆ",
    },
    {
      question: "ఆ తర్వాత వచ్చే అక్షరం ఏది?",
      options: ["అ", "ఇ", "ఈ", "ఉ"],
      answer: "ఇ",
      emoji: "ఇ",
    },
    {
      question: "ఇ తర్వాత వచ్చే అక్షరం ఏది?",
      options: ["ఆ", "ఈ", "ఉ", "ఊ"],
      answer: "ఈ",
      emoji: "ఈ",
    },
    {
      question: "ఉ తర్వాత వచ్చే అక్షరం ఏది?",
      options: ["ఊ", "ఇ", "ఎ", "ఏ"],
      answer: "ఊ",
      emoji: "ఊ",
    },
  ],

  "Famous Places": [
    {
      question: "Where is the Taj Mahal?",
      options: ["Agra", "Delhi", "Mumbai", "Jaipur"],
      answer: "Agra",
      emoji: "🕌",
    },
    {
      question: "Where is the Eiffel Tower?",
      options: ["Paris", "Rome", "London", "Berlin"],
      answer: "Paris",
      emoji: "🗼",
    },
    {
      question: "Where is the Statue of Liberty?",
      options: ["New York", "London", "Paris", "Tokyo"],
      answer: "New York",
      emoji: "🗽",
    },
    {
      question: "Where are the Great Pyramids of Giza?",
      options: ["Egypt", "India", "Brazil", "China"],
      answer: "Egypt",
      emoji: "🏜️",
    },
    {
      question: "Where is the Great Wall?",
      options: ["China", "Japan", "India", "Korea"],
      answer: "China",
      emoji: "🏯",
    },
  ],

  "General Knowledge": [
    {
      question: "How many days are there in a week?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      emoji: "📅",
    },
    {
      question: "How many colors are traditionally seen in a rainbow?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      emoji: "🌈",
    },
    {
      question: "Which planet do we live on?",
      options: ["Mars", "Earth", "Venus", "Jupiter"],
      answer: "Earth",
      emoji: "🌍",
    },
    {
      question: "Which star gives Earth light and heat?",
      options: ["Moon", "Sun", "Mars", "Venus"],
      answer: "Sun",
      emoji: "☀️",
    },
    {
      question: "How many months are there in a year?",
      options: ["10", "11", "12", "13"],
      answer: "12",
      emoji: "📆",
    },
  ],
};

const categories = [
  { name: "Countries", icon: "🌍" },
  { name: "Capitals", icon: "🏛️" },
  { name: "Currencies", icon: "💰" },
  { name: "Indian States", icon: "🇮🇳" },
  { name: "Animals", icon: "🐶" },
  { name: "Birds", icon: "🐦" },
  { name: "Insects", icon: "🦋" },
  { name: "Fruits", icon: "🍎" },
  { name: "Flowers", icon: "🌸" },
  { name: "Numbers", icon: "🔢" },
  { name: "ABC", icon: "🔤" },
  { name: "Telugu", icon: "అ" },
  { name: "Famous Places", icon: "🗺️" },
  { name: "General Knowledge", icon: "🧠" },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Quiz() {
  const [category, setCategory] = useState("Countries");
  const [questions, setQuestions] = useState(
    quizData.Countries
  );
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState("Easy");

  useEffect(() => {
    startQuiz("Countries");
  }, []);

  function startQuiz(selectedCategory) {
    const data =
      quizData[selectedCategory] || [];

    const selectedQuestions = shuffle(data).slice(
      0,
      Math.min(5, data.length)
    );

    setCategory(selectedCategory);
    setQuestions(selectedQuestions);
    setCurrent(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
    setStarted(true);
  }

  function chooseAnswer(option) {
    if (answered) return;

    setSelected(option);
    setAnswered(true);

    if (
      option === questions[current].answer
    ) {
      setScore((old) => old + 1);
    }
  }

  function nextQuestion() {
    if (
      current + 1 >=
      questions.length
    ) {
      setFinished(true);
      return;
    }

    setCurrent((old) => old + 1);
    setSelected("");
    setAnswered(false);
  }

  function getResultMessage() {
    const percentage =
      (score / questions.length) * 100;

    if (percentage === 100) {
      return "🏆 Perfect Score!";
    }

    if (percentage >= 80) {
      return "🌟 Excellent!";
    }

    if (percentage >= 60) {
      return "👏 Great Job!";
    }

    if (percentage >= 40) {
      return "😊 Good Try!";
    }

    return "💪 Keep Learning!";
  }

  return (
    <>
      <Head>
        <title>
          Mega Quiz | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun educational quiz for kids covering countries, capitals, currencies, Indian states, animals, birds, insects, fruits, flowers, numbers, ABC, Telugu and famous places."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

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

            <Link href="/games">
              🎮 Games
            </Link>

            <Link href="/puzzles">
              🧩 Puzzles
            </Link>

            <Link href="/dots">
              🔵 Dot-to-Dot
            </Link>

            <Link href="/drawing">
              🎨 Drawing
            </Link>

            <Link href="/world">
              🌍 World Explorer
            </Link>
          </nav>

        </header>

        <section className="hero">

          <div className="heroEmoji">
            🧠❓🎯
          </div>

          <h1>
            Mega Quiz
          </h1>

          <p>
            Learn, think and have fun!
          </p>

          <div className="heroMini">
            🌍 🇮🇳 🐶 🐦 🍎 🔤 🧠
          </div>

        </section>

        <section className="categorySection">

          <h2>
            📚 Choose a Quiz
          </h2>

          <div className="categoryGrid">

            {categories.map((item) => (
              <button
                key={item.name}
                className={
                  category === item.name
                    ? "category activeCategory"
                    : "category"
                }
                onClick={() =>
                  startQuiz(item.name)
                }
              >

                <span className="categoryIcon">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>

              </button>
            ))}

          </div>

        </section>

        <section className="quizSection">

          {!started && (
            <div className="startBox">

              <div className="bigEmoji">
                🧠
              </div>

              <h2>
                Ready to Learn?
              </h2>

              <p>
                Choose a category above and start
                your quiz!
              </p>

              <button
                className="startButton"
                onClick={() =>
                  startQuiz(category)
                }
              >
                🚀 Start Quiz
              </button>

            </div>
          )}

          {started && !finished && (
            <>

              <div className="quizHeader">

                <div>
                  <span className="questionIcon">
                    {questions[current].emoji}
                  </span>

                  <strong>
                    {category}
                  </strong>
                </div>

                <div className="questionCount">
                  Question{" "}
                  {current + 1} /{" "}
                  {questions.length}
                </div>

              </div>

              <div className="levelRow">

                <button
                  className={
                    level === "Easy"
                      ? "level activeLevel"
                      : "level"
                  }
                  onClick={() =>
                    setLevel("Easy")
                  }
                >
                  🟢 Easy
                </button>

                <button
                  className={
                    level === "Medium"
                      ? "level activeLevel"
                      : "level"
                  }
                  onClick={() =>
                    setLevel("Medium")
                  }
                >
                  🟡 Medium
                </button>

                <button
                  className={
                    level === "Hard"
                      ? "level activeLevel"
                      : "level"
                  }
                  onClick={() =>
                    setLevel("Hard")
                  }
                >
                  🔴 Hard
                </button>

              </div>

              <div className="questionBox">

                <div className="questionNumber">
                  Q{current + 1}
                </div>

                <h2>
                  {questions[current].question}
                </h2>

              </div>

              <div className="options">

                {questions[current].options.map(
                  (option) => {

                    let className =
                      "option";

                    if (
                      answered &&
                      option ===
                        questions[current]
                          .answer
                    ) {
                      className +=
                        " correct";
 
