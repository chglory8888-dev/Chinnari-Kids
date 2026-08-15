import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Honest Boy",
    teluguTitle: "నిజాయితీ గల బాలుడు",
    emoji: "🌳👦💰",
    language: "English",
    voiceLanguage: "en-IN",
    color: "#ffe1e8",
    pages: [
      "Once there was a kind boy named Ravi.",
      "One day, Ravi found a beautiful purse under a tree.",
      "There was money inside the purse.",
      "Ravi did not keep it. He went around the village and found its owner.",
      "The owner was very happy and thanked Ravi for his honesty.",
      "Ravi smiled because he knew he had done the right thing.",
    ],
    moral:
      "Always be honest and do the right thing. ❤️",
  },

  {
    id: 2,
    title: "The Helpful Little Bird",
    teluguTitle: "సహాయం చేసిన చిన్న పక్షి",
    emoji: "🐦🐜🍃",
    language: "English",
    voiceLanguage: "en-IN",
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
    emoji: "🐜🦗🌾",
    language: "తెలుగు",
    voiceLanguage: "te-IN",
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
    emoji: "🐦‍⬛🏺💧",
    language: "తెలుగు",
    voiceLanguage: "te-IN",
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
  const [selectedStory, setSelectedStory] =
    useState(null);

  const [stars, setStars] = useState(0);

  const [completed, setCompleted] =
    useState({});

  const [speaking, setSpeaking] =
    useState(false);

  const [paused, setPaused] =
    useState(false);

  const [voiceOn, setVoiceOn] =
    useState(true);

  const [voices, setVoices] =
    useState([]);

  const utteranceRef = useRef(null);

  /*
   * LOAD BROWSER VOICES
   */

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const available =
        window.speechSynthesis.getVoices();

      setVoices(available);
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
   * STOP VOICE
   */

  function stopVoice() {
    if (typeof window === "undefined") return;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    utteranceRef.current = null;

    setSpeaking(false);
    setPaused(false);
  }

  /*
   * FIND BEST VOICE
   */

  function findVoice(language) {
    if (!voices.length) return null;

    const wanted =
      language.toLowerCase();

    /*
     * First exact language
     */

    let voice = voices.find(
      (item) =>
        item.lang &&
        item.lang.toLowerCase() === wanted
    );

    if (voice) return voice;

    /*
     * Telugu fallback
     */

    if (wanted.startsWith("te")) {
      voice = voices.find(
        (item) =>
          item.lang &&
          item.lang
            .toLowerCase()
            .startsWith("te")
      );

      if (voice) return voice;
    }

    /*
     * English India
     */

    if (wanted === "en-in") {
      voice = voices.find(
        (item) =>
          item.lang &&
          item.lang
            .toLowerCase()
            .startsWith("en-in")
      );

      if (voice) return voice;
    }

    /*
     * English fallback
     */

    if (wanted.startsWith("en")) {
      voice = voices.find(
        (item) =>
          item.lang &&
          item.lang
            .toLowerCase()
            .startsWith("en")
      );

      if (voice) return voice;
    }

    return null;
  }

  /*
   * PLAY COMPLETE STORY
   */

  function playFullStory() {
    if (!selectedStory) return;

    if (!voiceOn) {
      setVoiceOn(true);
    }

    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      alert(
        "Your browser does not support voice reading."
      );

      return;
    }

    /*
     * Stop previous speech
     */

    window.speechSynthesis.cancel();

    setSpeaking(false);
    setPaused(false);

    /*
     * Combine ALL story pages
     */

    const fullStory =
      selectedStory.pages.join(" ");

    const completeText =
      fullStory +
      " " +
      "Moral. " +
      selectedStory.moral;

    const utterance =
      new SpeechSynthesisUtterance(
        completeText
      );

    utterance.lang =
      selectedStory.voiceLanguage;

    /*
     * Child-friendly speed
     */

    utterance.rate = 0.75;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    /*
     * Select language voice
     */

    const voice = findVoice(
      selectedStory.voiceLanguage
    );

    if (voice) {
      utterance.voice = voice;
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

    utteranceRef.current = utterance;

    window.speechSynthesis.speak(
      utterance
    );
  }

  /*
   * PAUSE / RESUME
   */

  function togglePause() {
    if (typeof window === "undefined")
      return;

    if (!("speechSynthesis" in window))
      return;

    if (!speaking) {
      playFullStory();
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
   * REPLAY
   */

  function replayStory() {
    stopVoice();

    setTimeout(() => {
      playFullStory();
    }, 150);
  }

  /*
   * OPEN STORY
   */

  function openStory(story) {
    stopVoice();

    setSelectedStory(story);
  }

  /*
   * CLOSE STORY
   */

  function closeStory() {
    stopVoice();

    setSelectedStory(null);
  }

  /*
   * FINISH STORY
   */

  function finishStory() {
    if (!selectedStory) return;

    stopVoice();

    if (!completed[selectedStory.id]) {
      setStars(
        (value) => value + 5
      );

      setCompleted(
        (value) => ({
          ...value,
          [selectedStory.id]: true,
        })
      );
    }
  }

  return (
    <>
      <Head>
        <title>
          Kids Stories | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="English and Telugu moral stories for children with voice reading."
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

        {/* STORIES */}

        <section className="storiesSection">

          <h2>
            🌟 Choose a Story
          </h2>

          <p className="subtitle">
            Choose a story and listen to the
            whole story.
          </p>

          <div className="storyGrid">

            {stories.map(
              (story) => (

                <article
                  key={story.id}
                  className="storyCard"
                  style={{
                    background:
                      story.color,
                  }}
                >

                  <div className="storyPicture">

                    <div className="bigEmoji">
                      {story.emoji}
                    </div>

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

                  <p className="preview">
                    {story.pages[0]}
                  </p>

                  <button
                    className="readButton"
                    onClick={() =>
                      openStory(story)
                    }
                  >
                    📖 Read & Listen
                  </button>

                  {completed[
                    story.id
                  ] && (
                    <div className="completed">
                      ✅ Completed
                    </div>
                  )}

                </article>

              )
            )}

          </div>

        </section>

        {/* READER */}

        {selectedStory && (

          <div className="overlay">

            <section className="reader">

              <button
                className="closeButton"
                onClick={closeStory}
              >
                ✕
              </button>

              {/* STORY IMAGE / ILLUSTRATION */}

              <div
                className="readerPicture"
                style={{
                  background:
                    selectedStory.color,
                }}
              >

                <div className="readerEmoji">
                  {selectedStory.emoji}
                </div>

              </div>

              <div className="language readerLanguage">
                {selectedStory.language}
              </div>

              <h2>
                {selectedStory.title}
              </h2>

              <p className="readerTelugu">
                {selectedStory.teluguTitle}
              </p>

              {/* FULL STORY TEXT */}

              <div className="storyBox">

                {selectedStory.pages.map(
                  (text, index) => (

                    <p key={index}>
                      {text}
                    </p>

                  )
                )}

                <div className="moralBox">
                  ❤️ <strong>Moral:</strong>{" "}
                  {selectedStory.moral}
                </div>

              </div>

              {/* VOICE */}

              <div className="voiceArea">

                <h3>
                  🎧 Listen to the Story
                </h3>

                <p>
                  Press Play to hear the
                  complete story.
                </p>

                <div className="voiceButtons">

                  <button
                    className="playButton"
                    onClick={
                      playFullStory
                    }
                  >
                    ▶️ Play Full Story
                  </button>

                  <button
                    className="pauseButton"
                    onClick={
                      togglePause
                    }
                  >
                    {paused
                      ? "▶️ Resume"
                      : "⏸️ Pause"}
                  </button>

                  <button
                    className="stopButton"
                    onClick={
                      stopVoice
                    }
                  >
                    ⏹️ Stop
                  </button>

                  <button
                    className="replayButton"
                    onClick={
                      replayStory
                    }
                  >
                    🔁 Replay
                  </button>

                </div>

                <div className="status">

                  {speaking &&
                    !paused && (
                      <span>
                        🔊 Story is
                        playing...
                      </span>
                    )}

                  {paused && (
                    <span>
                      ⏸️ Story paused
                    </span>
                  )}

                  {!speaking &&
                    !paused && (
                      <span>
                        🔊 Ready
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
                      (value) =>
                        !value
                    );
                  }}
                >
                  {voiceOn
                    ? "🔊 Voice ON"
                    : "🔇 Voice OFF"}
                </button>

              </div>

              {/* FINISH */}

              <button
                className="finishButton"
                onClick={
                  finishStory
                }
              >
                🏆 Finish Story +5 ⭐
              </button>

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
              Listen carefully and think
              about the lesson in every
              story. ❤️
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
            🧩 Puzzles
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
          gap: 20px;
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
          padding: 25px 22px;
          border-radius: 28px;
          text-align: left;
          box-shadow:
            0 6px 20px
            rgba(0,0,0,0.06);
        }

        .storyPicture {
          min-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background:
            rgba(255,255,255,0.55);
        }

        .bigEmoji {
          font-size: 70px;
          letter-spacing: 5px;
        }

        .language {
          display: inline-block;
          margin-top: 15px;
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

        .preview {
          line-height: 1.6;
          color: #555;
          min-height: 50px;
        }

        .readButton {
          margin-top: 10px;
          padding: 13px 20px;
          border: none;
          border-radius: 24px;
          background: #ff6b6b;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 15px;
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
            rgba(0,0,0,0.68);
        }

        .reader {
          width: 100%;
          max-width: 760px;
          max-height: 92vh;
          overflow-y: auto;
          position: relative;
          padding: 35px 25px;
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
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: #eee;
          cursor: pointer;
          font-size: 18px;
          z-index: 2;
        }

        .readerPicture {
          min-height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
          margin-bottom: 15px;
        }

        .readerEmoji {
          font-size: 95px;
          letter-spacing: 8px;
        }

        .readerLanguage {
          margin-top: 0;
        }

        .reader h2 {
          font-size: 30px;
          margin: 10px 0 5px;
        }

        .readerTelugu {
          color: #777;
          font-weight: bold;
        }

        .storyBox {
          margin-top: 25px;
          padding: 22px;
          border-radius: 25px;
          background: #fff8df;
          text-align: left;
        }

        .storyBox p {
          font-size: 18px;
          line-height: 1.8;
          margin: 0 0 15px;
        }

        .moralBox {
          margin-top: 20px;
          padding: 18px;
          border-radius: 18px;
          background: #fff0b8;
          line-height: 1.7;
        }

        .voiceArea {
          margin-top: 25px;
          padding: 22px;
          border-radius: 25px;
          background: #f5f0ff;
        }

        .voiceArea h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .voiceArea p {
          color: #666;
        }

        .voiceButtons {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 15px;
        }

        .voiceButtons button {
          border: none;
          padding: 12px 15px;
          border-radius: 22px;
          font-weight: bold;
          cursor: pointer;
        }

        .playButton {
          background: #4caf50;
          color: white;
        }

        .pauseButton {
          background: #ffca3a;
        }

        .stopButton {
          background: #ff8a80;
          color: white;
        }

        .replayButton {
          background: #9c88ff;
          color: white;
        }

        .status {
          min-height: 25px;
          margin: 12px 0;
          color: #666;
          font-weight: bold;
        }

        .voiceToggle {
          border: none;
          padding: 9px 15px;
          border-radius: 20px;
          background: white;
          font-weight: bold;
          cursor: pointer;
        }

        .finishButton {
          margin-top: 20px;
          border: none;
          padding: 14px 24px;
          border-radius: 25px;
          background: #ff6b6b;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
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
            padding: 20px 16px;
          }

          .reader {
            padding: 30px 15px;
          }

          .readerEmoji {
            font-size: 65px;
          }

          .storyBox p {
            font-size: 17px;
          }

          .voiceButtons button {
            width: 100%;
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
