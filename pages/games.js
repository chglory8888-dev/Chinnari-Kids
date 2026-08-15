import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const memoryItems = [
  "🍎",
  "🐶",
  "⭐",
  "🚗",
  "🌈",
  "🦋",
];

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
];

const oddItems = [
  {
    items: ["🍎", "🍎", "🍎", "🍌"],
    answer: "🍌",
  },
  {
    items: ["🐶", "🐶", "🐱", "🐶"],
    answer: "🐱",
  },
  {
    items: ["🔵", "🔵", "🔴", "🔵"],
    answer: "🔴",
  },
];

const emojiWords = {
  "🍎": {
    en: "Apple",
    te: "ఆపిల్",
  },
  "🐶": {
    en: "Dog",
    te: "కుక్క",
  },
  "⭐": {
    en: "Star",
    te: "నక్షత్రం",
  },
  "🚗": {
    en: "Car",
    te: "కారు",
  },
  "🌈": {
    en: "Rainbow",
    te: "ఇంద్రధనస్సు",
  },
  "🦋": {
    en: "Butterfly",
    te: "సీతాకోకచిలుక",
  },
  "🍌": {
    en: "Banana",
    te: "అరటిపండు",
  },
  "🐱": {
    en: "Cat",
    te: "పిల్లి",
  },
  "🔵": {
    en: "Blue",
    te: "నీలం",
  },
  "🔴": {
    en: "Red",
    te: "ఎరుపు",
  },
};

const numberWords = {
  1: {
    en: "One",
    te: "ఒకటి",
  },
  2: {
    en: "Two",
    te: "రెండు",
  },
  3: {
    en: "Three",
    te: "మూడు",
  },
  4: {
    en: "Four",
    te: "నాలుగు",
  },
  5: {
    en: "Five",
    te: "ఐదు",
  },
  6: {
    en: "Six",
    te: "ఆరు",
  },
  7: {
    en: "Seven",
    te: "ఏడు",
  },
  8: {
    en: "Eight",
    te: "ఎనిమిది",
  },
  9: {
    en: "Nine",
    te: "తొమ్మిది",
  },
};

export default function Games() {
  const [game, setGame] =
    useState("memory");

  const [memoryCards, setMemoryCards] =
    useState([
      ...memoryItems,
      ...memoryItems,
    ]);

  const [flipped, setFlipped] =
    useState([]);

  const [matched, setMatched] =
    useState([]);

  const [target, setTarget] =
    useState(5);

  const [numberScore, setNumberScore] =
    useState(0);

  const [oddRound, setOddRound] =
    useState(0);

  const [oddScore, setOddScore] =
    useState(0);

  const [message, setMessage] =
    useState("");

  const [voiceOn, setVoiceOn] =
    useState(true);

  const [voiceLanguage, setVoiceLanguage] =
    useState("en");

  const [voices, setVoices] =
    useState([]);

  const audioContextRef =
    useRef(null);

  /*
   * LOAD VOICES
   */

  useEffect(() => {
    if (typeof window === "undefined")
      return;

    if (!("speechSynthesis" in window))
      return;

    const loadVoices = () => {
      setVoices(
        window.speechSynthesis.getVoices()
      );
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged =
      loadVoices;

    return () => {
      window.speechSynthesis.cancel();

      window.speechSynthesis.onvoiceschanged =
        null;
    };
  }, []);

  /*
   * GET VOICE
   */

  function getVoice() {
    if (!voices.length) return null;

    if (voiceLanguage === "te") {
      return (
        voices.find(
          (voice) =>
            voice.lang &&
            voice.lang
              .toLowerCase()
              .startsWith("te")
        ) || null
      );
    }

    return (
      voices.find(
        (voice) =>
          voice.lang &&
          voice.lang
            .toLowerCase()
            .startsWith("en-in")
      ) ||
      voices.find(
        (voice) =>
          voice.lang &&
          voice.lang
            .toLowerCase()
            .startsWith("en")
      ) ||
      null
    );
  }

  /*
   * SPEAK
   */

  function speak(text) {
    if (!voiceOn) return;

    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang =
      voiceLanguage === "te"
        ? "te-IN"
        : "en-IN";

    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    const selectedVoice =
      getVoice();

    if (selectedVoice) {
      utterance.voice =
        selectedVoice;
    }

    window.speechSynthesis.speak(
      utterance
    );
  }

  /*
   * SOUND ENGINE
   */

  function getAudioContext() {
    if (typeof window === "undefined")
      return null;

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) return null;

    if (!audioContextRef.current) {
      audioContextRef.current =
        new AudioContext();
    }

    if (
      audioContextRef.current.state ===
      "suspended"
    ) {
      audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }

  /*
   * SUCCESS SOUND
   */

  function successSound() {
    const ctx =
      getAudioContext();

    if (!ctx) return;

    const now = ctx.currentTime;

    [523.25, 659.25, 783.99].forEach(
      (frequency, index) => {
        const oscillator =
          ctx.createOscillator();

        const gain =
          ctx.createGain();

        oscillator.frequency.value =
          frequency;

        oscillator.type = "sine";

        gain.gain.setValueAtTime(
          0.0001,
          now + index * 0.12
        );

        gain.gain.exponentialRampToValueAtTime(
          0.18,
          now +
            index * 0.12 +
            0.03
        );

        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          now +
            index * 0.12 +
            0.35
        );

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start(
          now + index * 0.12
        );

        oscillator.stop(
          now +
            index * 0.12 +
            0.4
        );
      }
    );
  }

  /*
   * WRONG SOUND
   */

  function wrongSound() {
    const ctx =
      getAudioContext();

    if (!ctx) return;

    const oscillator =
      ctx.createOscillator();

    const gain =
      ctx.createGain();

    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(
      180,
      ctx.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      90,
      ctx.currentTime + 0.25
    );

    gain.gain.setValueAtTime(
      0.2,
      ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + 0.3
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
      ctx.currentTime + 0.3
    );
  }

  /*
   * POP SOUND
   */

  function popSound() {
    const ctx =
      getAudioContext();

    if (!ctx) return;

    const oscillator =
      ctx.createOscillator();

    const gain =
      ctx.createGain();

    oscillator.type = "triangle";

    oscillator.frequency.setValueAtTime(
      500,
      ctx.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      100,
      ctx.currentTime + 0.15
    );

    gain.gain.setValueAtTime(
      0.15,
      ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + 0.15
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
      ctx.currentTime + 0.18
    );
  }

  /*
   * CELEBRATION
   */

  function celebrationSound() {
    const ctx =
      getAudioContext();

    if (!ctx) return;

    const notes = [
      523.25,
      659.25,
      783.99,
      1046.5,
    ];

    notes.forEach(
      (frequency, index) => {
        setTimeout(() => {
          successSound();
        }, index * 180);
      }
    );
  }

  /*
   * MEMORY SHUFFLE
   */

  function shuffleCards() {
    window.speechSynthesis?.cancel();

    const shuffled = [
      ...memoryCards,
    ].sort(
      () => Math.random() - 0.5
    );

    setMemoryCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMessage("");
  }

  /*
   * MEMORY CARD
   */

  function flipCard(index) {
    if (
      flipped.includes(index) ||
      matched.includes(index) ||
      flipped.length === 2
    ) {
      return;
    }

    const item =
      memoryCards[index];

    popSound();

    const word =
      emojiWords[item]?.[voiceLanguage];

    if (word) {
      speak(word);
    }

    const newFlipped = [
      ...flipped,
      index,
    ];

    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const first =
        memoryCards[newFlipped[0]];

      const second =
        memoryCards[newFlipped[1]];

      if (first === second) {
        successSound();

        setMatched((old) => [
          ...old,
          ...newFlipped,
        ]);

        setFlipped([]);

        speak(
          voiceLanguage === "te"
            ? "చాలా బాగుంది"
            : "Great job"
        );

        const newMatched =
          matched.length + 2;

        if (
          newMatched ===
          memoryCards.length
        ) {
          setTimeout(() => {
            celebrationSound();

            speak(
              voiceLanguage === "te"
                ? "అద్భుతం! అన్ని జతలను కనుగొన్నారు!"
                : "Amazing! You matched everything!"
            );
          }, 500);
        }
      } else {
        wrongSound();

        setTimeout(() => {
          setFlipped([]);
        }, 700);
      }
    }
  }

  /*
   * NUMBER GAME
   */

  function tapNumber(number) {
    const word =
      numberWords[number]?.[
        voiceLanguage
      ];

    if (word) {
      speak(word);
    }

    popSound();

    if (number === target) {
      successSound();

      setNumberScore(
        (value) => value + 1
      );

      setMessage(
        voiceLanguage === "te"
          ? "🎉 చాలా బాగుంది! సరైన సంఖ్య!"
          : "🎉 Great! You found the correct number!"
      );

      speak(
        voiceLanguage === "te"
          ? `సరైన సంఖ్య. ${word}`
          : `Correct! ${word}`
      );

      const next =
        Math.floor(
          Math.random() * 9
        ) + 1;

      setTarget(next);
    } else {
      wrongSound();

      setMessage(
        voiceLanguage === "te"
          ? "😊 మళ్లీ ప్రయత్నించండి!"
          : "😊 Try again!"
      );

      speak(
        voiceLanguage === "te"
          ? "మళ్లీ ప్రయత్నించండి"
          : "Try again"
      );
    }
  }

  /*
   * ODD GAME
   */

  function chooseOdd(item) {
    const word =
      emojiWords[item]?.[
        voiceLanguage
      ];

    if (word) {
      speak(word);
    }

    popSound();

    if (
      item ===
      oddItems[oddRound].answer
    ) {
      successSound();

      setOddScore(
        (value) => value + 1
      );

      setMessage(
        voiceLanguage === "te"
          ? "🎉 సరైన సమాధానం! అద్భుతం!"
          : "🎉 Correct! Excellent!"
      );

      speak(
        voiceLanguage === "te"
          ? "సరైన సమాధానం. అద్భుతం!"
          : "Correct! Excellent!"
      );
    } else {
      wrongSound();

      setMessage(
        voiceLanguage === "te"
          ? "💪 పర్వాలేదు! మళ్లీ ప్రయత్నించండి!"
          : "💪 Nice try!"
      );

      speak(
        voiceLanguage === "te"
          ? "పర్వాలేదు. మళ్లీ ప్రయత్నించండి"
          : "Nice try. Try again"
      );
    }

    setTimeout(() => {
      if (
        oddRound <
        oddItems.length - 1
      ) {
        setOddRound(
          (value) => value + 1
        );

        setMessage("");
      } else {
        celebrationSound();

        setMessage(
          "🏆 Game Complete!"
        );

        speak(
          voiceLanguage === "te"
            ? "అద్భుతం! గేమ్ పూర్తయింది!"
            : "Amazing! Game complete!"
        );
      }
    }, 700);
  }

  /*
   * RESET ODD
   */

  function resetOddGame() {
    setOddRound(0);
    setOddScore(0);
    setMessage("");

    speak(
      voiceLanguage === "te"
        ? "మళ్లీ ఆడుదాం"
        : "Let's play again"
    );
  }

  /*
   * CHANGE GAME
   */

  function changeGame(value) {
    window.speechSynthesis?.cancel();

    setGame(value);
    setMessage("");
  }

  /*
   * VOICE SWITCH
   */

  function toggleVoice() {
    if (voiceOn) {
      window.speechSynthesis?.cancel();
    }

    setVoiceOn(
      (value) => !value
    );
  }

  return (
    <>
      <Head>

        <title>
          Kids Games | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Fun educational games for kids including memory, numbers and odd-one-out games with voice and sound effects."
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
            🎮✨
          </div>

          <h1>
            Let's Play & Learn!
          </h1>

          <p>
            Fun games that make
            learning exciting.
          </p>

          {/* VOICE SETTINGS */}

          <div className="voiceSettings">

            <button
              className="voiceButton"
              onClick={
                toggleVoice
              }
            >
              {voiceOn
                ? "🔊 Voice ON"
                : "🔇 Voice OFF"}
            </button>

            <button
              className={
                voiceLanguage === "en"
                  ? "languageButton active"
                  : "languageButton"
              }
              onClick={() =>
                setVoiceLanguage("en")
              }
            >
              🇬🇧 English
            </button>

            <button
              className={
                voiceLanguage === "te"
                  ? "languageButton active"
                  : "languageButton"
              }
              onClick={() =>
                setVoiceLanguage("te")
              }
            >
              🇮🇳 తెలుగు
            </button>

          </div>

        </section>

        {/* GAME MENU */}

        <section className="gameMenu">

          <button
            className={
              game === "memory"
                ? "menuButton active"
                : "menuButton"
            }
            onClick={() =>
              changeGame("memory")
            }
          >
            🧠 Memory Match
          </button>

          <button
            className={
              game === "numbers"
                ? "menuButton active"
                : "menuButton"
            }
            onClick={() =>
              changeGame("numbers")
            }
          >
            🔢 Number Tap
          </button>

          <button
            className={
              game === "odd"
                ? "menuButton active"
                : "menuButton"
            }
            onClick={() =>
              changeGame("odd")
            }
          >
            🕵️ Odd One Out
          </button>

        </section>

        {/* MEMORY */}

        {game === "memory" && (

          <section className="gameBox">

            <div className="gameIcon">
              🧠
            </div>

            <h2>
              Memory Match
            </h2>

            <p>
              Find the matching pairs!
            </p>

            <div className="memoryGrid">

              {memoryCards.map(
                (item, index) => {

                  const visible =
                    flipped.includes(
                      index
                    ) ||
                    matched.includes(
                      index
                    );

                  return (

                    <button
                      key={index}
                      className={
                        visible
                          ? "memoryCard visible"
                          : "memoryCard"
                      }
                      onClick={() =>
                        flipCard(index)
                      }
                    >

                      {visible
                        ? item
                        : "❓"}

                    </button>

                  );
                }
              )}

            </div>

            {matched.length ===
              memoryCards.length && (

              <div className="success">

                🎉 Amazing!
                You matched
                everything!

                <br />

                ⭐ Great memory!

              </div>

            )}

            <button
              className="resetButton"
              onClick={
                shuffleCards
              }
            >
              🔄 New Game
            </button>

          </section>

        )}

        {/* NUMBER */}

        {game === "numbers" && (

          <section className="gameBox">

            <div className="gameIcon">
              🔢
            </div>

            <h2>
              Number Tap
            </h2>

            <p>
              Find number{" "}
              <strong>
                {target}
              </strong>
              !
            </p>

            <div className="numberGrid">

              {numbers.map(
                (number) => (

                  <button
                    key={number}
                    className="numberButton"
                    onClick={() =>
                      tapNumber(
                        number
                      )
                    }
                  >
                    {number}
                  </button>

                )
              )}

            </div>

            <div className="scoreBox">

              ⭐ Score:{" "}
              {numberScore}

            </div>

            {message && (

              <div className="message">
                {message}
              </div>

            )}

          </section>

        )}

        {/* ODD */}

        {game === "odd" && (

          <section className="gameBox">

            <div className="gameIcon">
              🕵️
            </div>

            <h2>
              Odd One Out
            </h2>

            <p>
              Find the one
              that is different!
            </p>

            <div className="oddItems">

              {oddItems[
                oddRound
              ].items.map(
                (item, index) => (

                  <button
                    key={index}
                    className="oddButton"
                    onClick={() =>
                      chooseOdd(
                        item
                      )
                    }
                  >
                    {item}
                  </button>

                )
              )}

            </div>

            <div className="scoreBox">

              ⭐ Score:{" "}
              {oddScore}

            </div>

            {message && (

              <div className="message">
                {message}
              </div>

            )}

            {oddRound ===
              oddItems.length - 1 &&
              message ===
                "🏆 Game Complete!" && (

              <button
                className="resetButton"
                onClick={
                  resetOddGame
                }
              >
                🔄 Play Again
              </button>

            )}

          </section>

        )}

        {/* LEARNING */}

        <section className="learning">

          <div className="learningEmoji">
            🌟🧠🎯
          </div>

          <h2>
            Play • Think • Learn!
          </h2>

          <p>
            Every game helps children
            improve memory, attention
            and problem-solving skills.
          </p>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

          <Link href="/puzzles">
            🧩 Puzzles
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

        nav a:hover {
          color: #ff6b6b;
        }

        .hero {
          text-align: center;
          padding: 45px 20px;
          background:
            linear-gradient(
              135deg,
              #ffe0ec,
              #e3ddff
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

        .voiceSettings {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .voiceButton,
        .languageButton {
          border: none;
          padding: 10px 16px;
          border-radius: 22px;
          background: white;
          font-weight: bold;
          cursor: pointer;
        }

        .languageButton.active {
          background: #ff6b6b;
          color: white;
        }

        .gameMenu {
          max-width: 1000px;
          margin: 35px auto 0;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .menuButton {
          border: none;
          padding: 13px 20px;
          border-radius: 25px;
          background: white;
          box-shadow:
            0 4px 15px
            rgba(0,0,0,0.06);
          font-weight: bold;
          cursor: pointer;
        }

        .menuButton.active {
          background: #ff6b6b;
          color: white;
        }

        .gameBox {
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

        .gameIcon {
          font-size: 65px;
        }

        .gameBox h2 {
          font-size: 30px;
          margin: 10px 0;
        }

        .gameBox > p {
          color: #666;
          font-size: 17px;
        }

        .memoryGrid {
          max-width: 520px;
          margin: 30px auto;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
        }

        .memoryCard {
          height: 100px;
          border: none;
          border-radius: 20px;
          background: #e7ddff;
          font-size: 38px;
          cursor: pointer;
          transition:
            transform 0.2s;
        }

        .memoryCard:hover {
          transform: scale(1.04);
        }

        .memoryCard.visible {
          background: #fff0b8;
        }

        .numberGrid {
          max-width: 500px;
          margin: 30px auto;
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 15px;
        }

        .numberButton {
          height: 90px;
          border: none;
          border-radius: 20px;
          background: #dff2ff;
          font-size: 30px;
          font-weight: bold;
          cursor: pointer;
        }

        .numberButton:hover {
          transform: translateY(-5px);
        }

        .oddItems {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 35px auto;
          flex-wrap: wrap;
        }

        .oddButton {
          width: 100px;
          height: 100px;
          border: none;
          border-radius: 25px;
          background: #e5f7df;
          font-size: 45px;
          cursor: pointer;
        }

        .oddButton:hover {
          transform: scale(1.08);
        }

        .scoreBox {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 18px;
          border-radius: 25px;
          background: #fff0b8;
          font-weight: bold;
        }

        .message {
          margin-top: 18px;
          padding: 13px;
          border-radius: 20px;
          background: #fff8df;
          font-weight: bold;
        }

        .success {
          margin: 20px auto;
          padding: 18px;
          border-radius: 22px;
          background: #dcf6d9;
          color: #247529;
          font-weight: bold;
          line-height: 1.7;
        }

        .resetButton {
          margin-top: 20px;
          padding: 13px 22px;
          border: none;
          border-radius: 25px;
          background: #ff6b6b;
          color: white;
          font-weight: bold;
          cursor: pointer;
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
              #dff5ff
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
            gap: 10px;
          }

          nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .gameBox {
            margin-left: 15px;
            margin-right: 15px;
            padding: 30px 18px;
          }

          .memoryGrid {
            grid-template-columns:
              repeat(3, 1fr);
          }

          .memoryCard {
            height: 80px;
            font-size: 30px;
          }

          .numberGrid {
            gap: 10px;
          }

          .numberButton {
            height: 75px;
            font-size: 25px;
          }

          .voiceSettings {
            flex-direction: column;
          }

        }

      `}</style>

    </>
  );
}
