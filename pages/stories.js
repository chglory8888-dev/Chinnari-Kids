import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Honest Boy",
    teluguTitle: "నిజాయితీ గల బాలుడు",
    emoji: "🌳",
    language: "English",
    color: "#ffe1e8",
    pages: [
      "Once there was a kind boy named Ravi.",
      "One day, Ravi found a beautiful purse under a tree.",
      "There was money inside the purse.",
      "Ravi did not keep it. He went around the village and found its owner.",
      "The owner was very happy and thanked Ravi for his honesty.",
      "Ravi smiled because he knew he had done the right thing.",
    ],
    moral: "Always be honest and do the right thing. ❤️",
  },
  {
    id: 2,
    title: "The Helpful Little Bird",
    teluguTitle: "సహాయం చేసిన చిన్న పక్షి",
    emoji: "🐦",
    language: "English",
    color: "#dff2ff",
    pages: [
      "A little bird lived in a beautiful forest.",
      "One day, the bird saw a tiny ant struggling in the water.",
      "The bird quickly dropped a leaf near the ant.",
      "The ant climbed onto the leaf and safely reached the land.",
      "A few days later, the ant saw a hunter near the bird.",
      "The ant warned the bird, and the bird flew away safely.",
    ],
    moral:
      "A small act of kindness can make a big difference. 🌟",
  },
  {
    id: 3,
    title: "చీమ మరియు మిడత",
    teluguTitle: "కష్టపడే చీమ",
    emoji: "🐜",
    language: "తెలుగు",
    color: "#fff0b8",
    pages: [
      "ఒక అడవిలో ఒక చీమ మరియు ఒక మిడత ఉండేవి.",
      "చీమ ప్రతిరోజూ కష్టపడి ఆహారాన్ని సేకరించేది.",
      "మిడత మాత్రం రోజంతా ఆడుతూ పాడుతూ ఉండేది.",
      "వర్షాకాలం వచ్చింది. మిడతకు ఆహారం లేక ఇబ్బంది పడింది.",
      "చీమ తన దగ్గర ఉన్న ఆహారాన్ని పంచుకుంది.",
      "మిడత తన తప్పును తెలుసుకుని ఇకపై కష్టపడాలని నిర్ణయించుకుంది.",
    ],
    moral:
      "కష్టపడి పనిచేస్తే మంచి ఫలితాలు వస్తాయి. 🌟",
  },
  {
    id: 4,
    title: "దాహంతో ఉన్న కాకి",
    teluguTitle: "దాహంతో ఉన్న కాకి",
    emoji: "🐦‍⬛",
    language: "తెలుగు",
    color: "#e9ddff",
    pages: [
      "ఒక రోజు ఒక కాకికి చాలా దాహం వేసింది.",
      "అది నీటి కోసం చాలా చోట్ల వెతికింది.",
      "చివరికి ఒక కుండ కనిపించింది.",
      "కుండలో కొంచెం నీరు మాత్రమే ఉంది.",
      "కాకి చిన్న రాళ్లను ఒక్కొక్కటిగా కుండలో వేసింది.",
      "నీరు పైకి వచ్చింది. కాకి నీరు తాగి తన దాహం తీర్చుకుంది.",
    ],
    moral:
      "తెలివిగా ఆలోచిస్తే సమస్యకు పరిష్కారం దొరుకుతుంది. 🧠",
  },
];

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [page, setPage] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState({});

  const [voiceOn, setVoiceOn] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

  const voicesRef = useRef([]);

  /*
   * Load available voices.
   * Telugu voice availability depends on the device/browser.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    function loadVoices() {
      voicesRef.current =
        window.speechSynthesis.getVoices();
    }

    loadVoices();

    window.speechSynthesis.onvoiceschanged =
      loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, []);

  /*
   * Detect Telugu text.
   */
  function isTelugu(text) {
    return /[\u0C00-\u0C7F]/.test(text);
  }

  /*
   * Speak story text.
   */
  function speakText(text) {
    if (!voiceOn) return;

    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) {
      alert(
        "Your browser does not support text-to-speech."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    const telugu = isTelugu(text);

    utterance.lang = telugu
      ? "te-IN"
      : "en-IN";

    /*
     * Slightly slower speed for children.
     */
    utterance.rate = 0.78;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    const voices = voicesRef.current.length
      ? voicesRef.current
      : window.speechSynthesis.getVoices();

    if (telugu) {
      const teluguVoice = voices.find(
        (voice) =>
          voice.lang &&
          voice.lang
            .toLowerCase()
            .startsWith("te")
      );

      if (teluguVoice) {
        utterance.voice = teluguVoice;
      }
    } else {
      const indianEnglishVoice = voices.find(
        (voice) =>
          voice.lang &&
          voice.lang
            .toLowerCase()
            .startsWith("en-in")
      );

      if (indianEnglishVoice) {
        utterance.voice = indianEnglishVoice;
      }
    }

    utterance.onstart = () => {
      setSpeaking(true);
      setPaused(false);
    };

    utterance.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }

  /*
   * Speak current story page.
   */
  function speakCurrentPage() {
    if (!selectedStory) return;

    if (page >= selectedStory.pages.length) {
      speakText(selectedStory.moral);
      return;
    }

    speakText(selectedStory.pages[page]);
  }

  /*
   * Play / Pause / Resume.
   */
  function togglePause() {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    if (!speaking) {
      speakCurrentPage();
      return;
    }

    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  }

  /*
   * Stop voice.
   */
  function stopVoice() {
    if (typeof window === "undefined") return;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setSpeaking(false);
    setPaused(false);
  }

  /*
   * Replay current page.
   */
  function replayVoice() {
    stopVoice();

    setTimeout(() => {
      speakCurrentPage();
    }, 100);
  }

  function openStory(story) {
    stopVoice();

    setSelectedStory(story);
    setPage(0);
  }

  function closeStory() {
    stopVoice();

    setSelectedStory(null);
    setPage(0);
  }

  function nextPage() {
    if (!selectedStory) return;

    stopVoice();

    if (page < selectedStory.pages.length - 1) {
      setPage((value) => value + 1);
    }
  }

  function previousPage() {
    if (!selectedStory) return;

    stopVoice();

    if (page > 0) {
      setPage((value) => value - 1);
    }
  }

  function finishStory() {
    if (!selectedStory) return;

    stopVoice();

    if (!completed[selectedStory.id]) {
      setStars((value) => value + 5);

      setCompleted((value) => ({
        ...value,
        [selectedStory.id]: true,
      }));
    }

    setPage(selectedStory.pages.length);
  }

  return (
    <>
      <Head>
        <title>Kids Stories | Chinnaari Kids</title>

        <meta
          name="description"
          content="Fun English and Telugu moral stories with voice for children."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="page">

        {/* HEADER */}

        <header className="header">

          <Link href="/" className="logo">
            🌈 Chinnaari Kids
          </Link>

          <nav>
            <Link href="/">Home</Link>
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

          <div className="heroIcon">
            📚✨
          </div>

          <h1>
            Story Time!
          </h1>

          <p>
            Read, listen, imagine and learn.
          </p>

          <div className="stars">
            ⭐ {stars} Stars
          </div>

        </section>

        {/* STORY LIST */}

        <section className="storiesSection">

          <h2>
            🌟 Choose a Story
          </h2>

          <p className="subtitle">
            Pick a story and start reading or listening!
          </p>

          <div className="storyGrid">

            {stories.map((story) => (

              <article
                key={story.id}
                className="storyCard"
                style={{
                  background: story.color,
                }}
              >

                <div className="storyEmoji">
                  {story.emoji}
                </div>

                <div className="language">
                  {story.language}
                </div>

                <h3>
                  {story.title}
                </h3>

                <p className="teluguTitle">
                  {story.teluguTitle}
                </p>

                <p>
                  {story.pages[0]}
                </p>

                <button
                  onClick={() =>
                    openStory(story)
                  }
                  className="readButton"
                >
                  📖 Read & Listen
                </button>

                {completed[story.id] && (
                  <div className="completed">
                    ✅ Completed
                  </div>
                )}

              </article>

            ))}

          </div>

        </section>

        {/* STORY READER */}

        {selectedStory && (

          <div className="overlay">

            <section className="reader">

              <button
                className="closeButton"
                onClick={closeStory}
              >
                ✕
              </button>

              <div className="readerEmoji">
                {selectedStory.emoji}
              </div>

              <h2>
                {selectedStory.title}
              </h2>

              <p className="readerTelugu">
                {selectedStory.teluguTitle}
              </p>

              {page <
              selectedStory.pages.length ? (

                <>

                  <div className="pageNumber">
                    Page {page + 1} of{" "}
                    {selectedStory.pages.length}
                  </div>

                  <div className="storyText">
                    {selectedStory.pages[page]}
                  </div>

                  {/* VOICE CONTROLS */}

                  <div className="voiceControls">

                    <button
                      onClick={speakCurrentPage}
                      className="voiceButton play"
                    >
                      ▶️ Play
                    </button>

                    <button
                      onClick={togglePause}
                      className="voiceButton pause"
                    >
                      {paused
                        ? "▶️ Resume"
                        : "⏸️ Pause"}
                    </button>

                    <button
                      onClick={stopVoice}
                      className="voiceButton stop"
                    >
                      ⏹️ Stop
                    </button>

                    <button
                      onClick={replayVoice}
                      className="voiceButton replay"
                    >
                      🔁 Replay
                    </button>

                  </div>

                  <div className="voiceStatus">

                    {speaking && !paused && (
                      <span>
                        🔊 Reading...
                      </span>
                    )}

                    {paused && (
                      <span>
                        ⏸️ Paused
                      </span>
                    )}

                    {!speaking && !paused && (
                      <span>
                        🔊 Ready to read
                      </span>
                    )}

                  </div>

                  <button
                    className="voiceToggle"
                    onClick={() => {
                      if (voiceOn) {
                        stopVoice();
                      }

                      setVoiceOn(
                        (value) => !value
                      );
                    }}
                  >
                    {voiceOn
                      ? "🔊 Voice ON"
                      : "🔇 Voice OFF"}
                  </button>

                  <div className="readerButtons">

                    <button
                      onClick={previousPage}
                      disabled={page === 0}
                      className="prevButton"
                    >
                      ⬅️ Previous
                    </button>

                    {page ===
                    selectedStory.pages.length -
                      1 ? (

                      <button
                        onClick={finishStory}
                        className="finishButton"
                      >
                        🏆 Finish Story
                      </button>

                    ) : (

                      <button
                        onClick={nextPage}
                        className="nextButton"
                      >
                        Next ➡️
                      </button>

                    )}

                  </div>

                </>

              ) : (

                <div className="storyFinished">

                  <div className="bigStar">
                    ⭐
                  </div>

                  <h2>
                    Story Completed! 🎉
                  </h2>

                  <p>
                    {selectedStory.moral}
                  </p>

                  <button
                    className="moralVoice"
                    onClick={() =>
                      speakText(
                        selectedStory.moral
                      )
                    }
                  >
                    🔊 Listen to Moral
                  </button>

                  <div className="earned">
                    +5 Stars ⭐
                  </div>

                  <button
                    onClick={closeStory}
                    className="finishButton"
                  >
                    📚 Choose Another Story
                  </button>

                </div>

              )}

            </section>

          </div>

        )}

        {/* TIP */}

        <section className="tip">

          <div className="tipIcon">
            💡
          </div>

          <div>

            <h2>
              Little Reader Tip
            </h2>

            <p>
              Listen carefully, read slowly and
              think about the lesson in every story. ❤️
            </p>

          </div>

        </section>

        {/* NAVIGATION */}

        <section className="navigation">

          <Link href="/dashboard">
            🌟 Dashboard
          </Link>

          <Link href="/games">
            🎮 Play Games
          </Link>

          <Link href="/puzzles">
            🧩 Solve Puzzles
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
              #ffe1e8,
              #e5ddff
            );
        }

        .heroIcon {
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

        .stars {
          display: inline-block;

          margin-top: 10px;

          padding: 9px 18px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        .storiesSection {
          max-width: 1100px;

          margin: auto;

          padding: 50px 20px;

          text-align: center;
        }

        .storiesSection h2 {
          font-size: 30px;
          margin-bottom: 5px;
        }

        .subtitle {
          color: #666;
          margin-bottom: 30px;
        }

        .storyGrid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 22px;
        }

        .storyCard {
          padding: 28px 22px;

          border-radius: 28px;

          text-align: left;

          box-shadow:
            0 6px 20px
            rgba(0,0,0,0.06);
        }

        .storyEmoji {
          font-size: 65px;
        }

        .language {
          display: inline-block;

          margin-top: 10px;

          padding: 6px 12px;

          border-radius: 20px;

          background: white;

          font-size: 12px;

          font-weight: bold;
        }

        .storyCard h3 {
          font-size: 24px;

          margin: 14px 0 5px;
        }

        .teluguTitle {
          font-size: 16px;

          font-weight: bold;

          color: #666;
        }

        .storyCard > p:not(.teluguTitle) {
          line-height: 1.6;

          color: #555;

          min-height: 50px;
        }

        .readButton {
          margin-top: 10px;

          padding: 12px 20px;

          border: none;

          border-radius: 24px;

          background: #ff6b6b;

          color: white;

          font-weight: bold;

          cursor: pointer;
        }

        .readButton:hover {
          transform: scale(1.04);
        }

        .completed {
          display: inline-block;

          margin-left: 10px;

          padding: 8px 12px;

          border-radius: 20px;

          background: #dcf6d9;

          color: #237a25;

          font-size: 13px;

          font-weight: bold;
        }

        .overlay {
          position: fixed;

          inset: 0;

          z-index: 100;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 20px;

          background:
            rgba(0,0,0,0.65);
        }

        .reader {
          width: 100%;

          max-width: 700px;

          max-height: 90vh;

          overflow-y: auto;

          position: relative;

          padding: 40px 30px;

          border-radius: 30px;

          background: white;

          text-align: center;

          box-shadow:
            0 15px 50px
            rgba(0,0,0,0.25);
        }

        .closeButton {
          position: absolute;

          top: 15px;

          right: 15px;

          width: 38px;
          height: 38px;

          border: none;

          border-radius: 50%;

          background: #eee;

          cursor: pointer;

          font-size: 18px;
        }

        .readerEmoji {
          font-size: 65px;
        }

        .reader h2 {
          font-size: 30px;

          margin: 10px 0 5px;
        }

        .readerTelugu {
          color: #777;

          font-weight: bold;
        }

        .pageNumber {
          margin-top: 20px;

          color: #888;

          font-size: 14px;
        }

        .storyText {
          min-height: 170px;

          margin: 20px 0;

          padding: 30px 20px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 25px;

          background: #fff8df;

          font-size: 21px;

          line-height: 1.8;
        }

        /* VOICE */

        .voiceControls {
          display: flex;

          justify-content: center;

          gap: 10px;

          flex-wrap: wrap;

          margin: 15px 0 8px;
        }

        .voiceButton {
          border: none;

          padding: 11px 15px;

          border-radius: 20px;

          font-weight: bold;

          cursor: pointer;
        }

        .play {
          background: #4caf50;
          color: white;
        }

        .pause {
          background: #ffca3a;
          color: #333;
        }

        .stop {
          background: #ff8a80;
          color: white;
        }

        .replay {
          background: #9c88ff;
          color: white;
        }

        .voiceStatus {
          min-height: 25px;

          margin: 8px 0;

          font-size: 14px;

          color: #666;

          font-weight: bold;
        }

        .voiceToggle {
          border: none;

          border-radius: 20px;

          padding: 9px 15px;

          background: #eee;

          font-weight: bold;

          cursor: pointer;

          margin-bottom: 15px;
        }

        .readerButtons {
          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;
        }

        .prevButton,
        .nextButton,
        .finishButton {
          border: none;

          padding: 13px 20px;

          border-radius: 24px;

          font-weight: bold;

          cursor: pointer;
        }

        .prevButton {
          background: #eee;
          color: #555;
        }

        .nextButton {
          background: #4caf50;
          color: white;
        }

        .finishButton {
          background: #ff6b6b;
          color: white;
        }

        .prevButton:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .storyFinished {
          padding: 20px;
        }

        .bigStar {
          font-size: 80px;
        }

        .storyFinished h2 {
          font-size: 28px;
        }

        .storyFinished p {
          font-size: 18px;

          line-height: 1.7;

          color: #555;
        }

        .moralVoice {
          border: none;

          padding: 11px 18px;

          border-radius: 22px;

          background: #ffca3a;

          font-weight: bold;

          cursor: pointer;
        }

        .earned {
          display: inline-block;

          margin: 15px;

          padding: 10px 20px;

          border-radius: 25px;

          background: #fff0b8;

          font-weight: bold;
        }

        .tip {
          max-width: 800px;

          margin: 0 auto 45px;

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

        .tipIcon {
          font-size: 55px;
        }

        .tip h2 {
          margin-top: 0;
        }

        .tip p {
          margin-bottom: 0;

          color: #666;

          line-height: 1.7;
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

          .storyGrid {
            grid-template-columns: 1fr;
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

          .storyCard {
            padding: 24px 18px;
          }

          .reader {
            padding: 35px 20px;
          }

          .storyText {
            font-size: 18px;
            min-height: 190px;
          }

          .tip {
            margin-left: 20px;
            margin-right: 20px;

            flex-direction: column;

            text-align: center;
          }

          .voiceButton {
            font-size: 13px;
          }
        }

      `}</style>
    </>
  );
}
