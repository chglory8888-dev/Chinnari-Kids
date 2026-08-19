import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Honest Boy",
    teluguTitle: "నిజాయితీ గల బాలుడు",
    language: "English",
    emoji: "👦🌳👛",
    color: "#ffe1e8",
    pages: [
      "Once there was a kind boy named Ravi.",
      "One day, Ravi found a beautiful purse under a tree.",
      "There was money inside the purse.",
      "Ravi did not keep it. He went around the village and found its owner.",
      "The owner was very happy and thanked Ravi for his honesty.",
      "Ravi smiled because he knew he had done the right thing."
    ],
    teluguPages: [
      "ఒకప్పుడు రవి అనే మంచి బాలుడు ఉండేవాడు.",
      "ఒక రోజు రవికి ఒక చెట్టు కింద అందమైన పర్సు కనిపించింది.",
      "ఆ పర్సులో డబ్బులు ఉన్నాయి.",
      "రవి ఆ డబ్బులను తన దగ్గర ఉంచుకోలేదు. గ్రామంలో తిరిగి పర్సు యజమానిని వెతికాడు.",
      "యజమాని చాలా సంతోషించి రవి నిజాయితీకి ధన్యవాదాలు చెప్పాడు.",
      "తాను మంచి పని చేశానని తెలుసుకుని రవి చిరునవ్వు నవ్వాడు."
    ],
    moral: "Always be honest and do the right thing. ❤️",
    teluguMoral:
      "ఎల్లప్పుడూ నిజాయితీగా ఉండాలి. సరైన పని చేయాలి. ❤️"
  },

  {
    id: 2,
    title: "The Helpful Little Bird",
    teluguTitle: "సహాయం చేసిన చిన్న పక్షి",
    language: "English",
    emoji: "🐦🍃🐜",
    color: "#dff2ff",
    pages: [
      "A little bird lived in a beautiful forest.",
      "One day, the bird saw a tiny ant struggling in the water.",
      "The bird quickly dropped a leaf near the ant.",
      "The ant climbed onto the leaf and safely reached the land.",
      "A few days later, the ant saw a hunter near the bird.",
      "The ant warned the bird, and the bird flew away safely."
    ],
    teluguPages: [
      "ఒక అందమైన అడవిలో ఒక చిన్న పక్షి ఉండేది.",
      "ఒక రోజు ఆ పక్షి నీటిలో ఇబ్బంది పడుతున్న ఒక చిన్న చీమను చూసింది.",
      "పక్షి వెంటనే చీమ దగ్గర ఒక ఆకును వేసింది.",
      "చీమ ఆ ఆకుపైకి ఎక్కి సురక్షితంగా ఒడ్డుకు చేరుకుంది.",
      "కొన్ని రోజుల తరువాత చీమ పక్షి దగ్గర ఒక వేటగాడిని చూసింది.",
      "చీమ పక్షిని హెచ్చరించింది. పక్షి సురక్షితంగా ఎగిరిపోయింది."
    ],
    moral:
      "A small act of kindness can make a big difference. 🌟",
    teluguMoral:
      "చిన్న సహాయం కూడా పెద్ద మార్పును తీసుకురాగలదు. 🌟"
  },

  {
    id: 3,
    title: "The Ant and the Grasshopper",
    teluguTitle: "చీమ మరియు మిడత",
    language: "తెలుగు",
    emoji: "🐜🌾🦗",
    color: "#fff0b8",
    pages: [
      "ఒక అడవిలో ఒక చీమ మరియు ఒక మిడత ఉండేవి.",
      "చీమ ప్రతిరోజూ కష్టపడి ఆహారాన్ని సేకరించేది.",
      "మిడత మాత్రం రోజంతా ఆడుతూ పాడుతూ ఉండేది.",
      "వర్షాకాలం వచ్చింది. మిడతకు ఆహారం లేక ఇబ్బంది పడింది.",
      "చీమ తన దగ్గర ఉన్న ఆహారాన్ని పంచుకుంది.",
      "మిడత తన తప్పును తెలుసుకుని ఇకపై కష్టపడాలని నిర్ణయించుకుంది."
    ],
    teluguPages: [
      "ఒక అడవిలో ఒక చీమ మరియు ఒక మిడత ఉండేవి.",
      "చీమ ప్రతిరోజూ కష్టపడి ఆహారాన్ని సేకరించేది.",
      "మిడత మాత్రం రోజంతా ఆడుతూ పాడుతూ ఉండేది.",
      "వర్షాకాలం వచ్చింది. మిడతకు ఆహారం లేక ఇబ్బంది పడింది.",
      "చీమ తన దగ్గర ఉన్న ఆహారాన్ని పంచుకుంది.",
      "మిడత తన తప్పును తెలుసుకుని ఇకపై కష్టపడాలని నిర్ణయించుకుంది."
    ],
    moral: "Work hard and prepare for the future. 🌟",
    teluguMoral:
      "కష్టపడి పనిచేసి భవిష్యత్తుకు సిద్ధంగా ఉండాలి. 🌟"
  },

  {
    id: 4,
    title: "The Thirsty Crow",
    teluguTitle: "దాహంతో ఉన్న కాకి",
    language: "తెలుగు",
    emoji: "🐦‍⬛🏺💧",
    color: "#e9ddff",
    pages: [
      "ఒక రోజు ఒక కాకికి చాలా దాహం వేసింది.",
      "అది నీటి కోసం చాలా చోట్ల వెతికింది.",
      "చివరికి ఒక కుండ కనిపించింది.",
      "కుండలో కొంచెం నీరు మాత్రమే ఉంది.",
      "కాకి చిన్న రాళ్లను ఒక్కొక్కటిగా కుండలో వేసింది.",
      "నీరు పైకి వచ్చింది. కాకి నీరు తాగి తన దాహం తీర్చుకుంది."
    ],
    teluguPages: [
      "ఒక రోజు ఒక కాకికి చాలా దాహం వేసింది.",
      "అది నీటి కోసం చాలా చోట్ల వెతికింది.",
      "చివరికి ఒక కుండ కనిపించింది.",
      "కుండలో కొంచెం నీరు మాత్రమే ఉంది.",
      "కాకి చిన్న రాళ్లను ఒక్కొక్కటిగా కుండలో వేసింది.",
      "నీరు పైకి వచ్చింది. కాకి నీరు తాగి తన దాహం తీర్చుకుంది."
    ],
    moral:
      "Think wisely and you can find a solution to a problem. 🧠",
    teluguMoral:
      "తెలివిగా ఆలోచిస్తే సమస్యకు పరిష్కారం దొరుకుతుంది. 🧠"
  }
];

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const [language, setLanguage] = useState("telugu");

  const [playing, setPlaying] = useState(false);

  const [paused, setPaused] = useState(false);

  const [stars, setStars] = useState(0);

  const [completed, setCompleted] = useState({});

  const [voiceIndex, setVoiceIndex] = useState(0);

  const [voices, setVoices] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) {
      return;
    }

    function loadVoices() {
      setVoices(window.speechSynthesis.getVoices());
    }

    loadVoices();

    window.speechSynthesis.onvoiceschanged =
      loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const filteredVoices = useMemo(() => {
    if (!voices.length) return [];

    if (language === "telugu") {
      return voices.filter((voice) =>
        voice.lang.toLowerCase().startsWith("te")
      );
    }

    return voices.filter((voice) =>
      voice.lang.toLowerCase().startsWith("en")
    );
  }, [voices, language]);

  function stopVoice() {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setPlaying(false);
    setPaused(false);
  }

  function openStory(story) {
    stopVoice();

    setSelectedStory(story);

    setLanguage(
      story.language === "తెలుగు"
        ? "telugu"
        : "english"
    );

    setVoiceIndex(0);
  }

  function closeStory() {
    stopVoice();

    setSelectedStory(null);
  }

  function getStoryText() {
    if (!selectedStory) return "";

    const pages =
      language === "telugu"
        ? selectedStory.teluguPages
        : selectedStory.pages;

    const moral =
      language === "telugu"
        ? selectedStory.teluguMoral
        : selectedStory.moral;

    return [...pages, moral].join(" ");
  }

  function playStory() {
    if (!selectedStory) return;

    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      alert(
        "Voice is not supported in this browser."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const text = getStoryText();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang =
      language === "telugu"
        ? "te-IN"
        : "en-US";

    speech.rate = 0.85;
    speech.pitch = 1;
    speech.volume = 1;

    if (filteredVoices.length > 0) {
      speech.voice =
        filteredVoices[voiceIndex] ||
        filteredVoices[0];
    }

    speech.onstart = () => {
      setPlaying(true);
      setPaused(false);
    };

    speech.onend = () => {
      setPlaying(false);
      setPaused(false);

      completeStory();
    };

    speech.onerror = () => {
      setPlaying(false);
      setPaused(false);
    };

    window.speechSynthesis.speak(speech);
  }

  function pauseStory() {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.pause();

      setPaused(true);
    }
  }

  function resumeStory() {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.resume();

      setPaused(false);
    }
  }

  function replayStory() {
    stopVoice();

    setTimeout(() => {
      playStory();
    }, 150);
  }

  function changeLanguage(newLanguage) {
    stopVoice();

    setLanguage(newLanguage);
  }

  function completeStory() {
    if (!selectedStory) return;

    if (!completed[selectedStory.id]) {
      setStars((value) => value + 5);

      setCompleted((value) => ({
        ...value,
        [selectedStory.id]: true
      }));
    }
  }

  function nextVoice() {
    if (!filteredVoices.length) return;

    setVoiceIndex(
      (value) =>
        (value + 1) %
        filteredVoices.length
    );
  }

  return (
    <>
      <Head>
        <title>
          Stories | Chinnaari Kids
        </title>

        <meta
          name="description"
          content="Telugu and English stories with voice for children."
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

          <div className="heroIcon">
            📚✨
          </div>

          <h1>
            Story Time!
          </h1>

          <p>
            Listen, imagine and learn.
          </p>

          <div className="stars">
            ⭐ {stars} Stars
          </div>

        </section>

        <section className="storiesSection">

          <h2>
            🌟 Choose a Story
          </h2>

          <p className="subtitle">
            Listen to the complete story in
            Telugu or English.
          </p>

          <div className="storyGrid">

            {stories.map((story) => (

              <article
                key={story.id}
                className="storyCard"
                style={{
                  background:
                    story.color
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
                  className="readButton"
                  onClick={() =>
                    openStory(story)
                  }
                >
                  🎧 Listen to Story
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

              <div className="storyVisual">
                {selectedStory.emoji}
              </div>

              <div className="languageButtons">

                <button
                  className={
                    language === "telugu"
                      ? "languageButton selected"
                      : "languageButton"
                  }
                  onClick={() =>
                    changeLanguage(
                      "telugu"
                    )
                  }
                >
                  🇮🇳 తెలుగు
                </button>

                <button
                  className={
                    language === "english"
                      ? "languageButton selected"
                      : "languageButton"
                  }
                  onClick={() =>
                    changeLanguage(
                      "english"
                    )
                  }
                >
                  🇬🇧 English
                </button>

              </div>

              <div className="voiceStatus">

                {language === "telugu"
                  ? "🔊 తెలుగు Voice"
                  : "🔊 English Voice"}

              </div>

              <div className="storyFullText">

                {language === "telugu"
                  ? selectedStory.teluguPages.join(
                      " "
                    )
                  : selectedStory.pages.join(
                      " "
                    )}

              </div>

              <div className="voiceButtons">

                {!playing && !paused && (

                  <button
                    className="playButton"
                    onClick={playStory}
                  >
                    ▶️ Play Full Story
                  </button>

                )}

                {playing && (

                  <button
                    className="pauseButton"
                    onClick={pauseStory}
                  >
                    ⏸️ Pause
                  </button>

                )}

                {paused && (

                  <button
                    className="playButton"
                    onClick={resumeStory}
                  >
                    ▶️ Resume
                  </button>

                )}

                <button
                  className="replayButton"
                  onClick={replayStory}
                >
                  🔄 Replay
                </button>

              </div>

              {filteredVoices.length > 1 && (

                <button
                  className="voiceChange"
                  onClick={nextVoice}
                >
                  🎙️ Change Voice
                </button>

              )}

              <div className="moral">

                <strong>
                  🌟 Moral
                </strong>

                <p>
                  {language === "telugu"
                    ? selectedStory.teluguMoral
                    : selectedStory.moral}
                </p>

              </div>

              <button
                className="finishButton"
                onClick={completeStory}
              >
                ⭐ Mark Story Complete
              </button>

            </section>

          </div>

        )}

        <section className="tip">

          <div className="tipIcon">
            💡
          </div>

          <div>

            <h2>
              Little Reader Tip
            </h2>

            <p>
              Listen carefully, imagine the story
              and learn the good lesson. ❤️
            </p>

          </div>

        </section>

        <section className="navigation">

          <Link href="/dashboard">
            🌟 Dashboard
          </Link>

          <Link href="/games">
            🎮 Games
          </Link>

          <Link href="/learn">
            🔤 Learn
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

        .storyVisual {
          margin: 20px auto;
          min-height: 150px;
          max-width: 600px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 75px;
          background:
            linear-gradient(
              135deg,
              #e5f7ff,
              #fff0c9
            );
          box-shadow:
            inset 0 0 20px
            rgba(0,0,0,0.04);
        }

        .languageButtons {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin: 20px 0 12px;
        }

        .languageButton {
          border: none;
          padding: 11px 18px;
          border-radius: 25px;
          background: #eee;
          font-weight: bold;
          cursor: pointer;
        }

        .languageButton.selected {
          background: #4caf50;
          color: white;
        }

        .voiceStatus {
          display: inline-block;
          padding: 8px 15px;
          border-radius: 20px;
          background: #fff0b8;
          font-weight: bold;
          font-size: 13px;
        }

        .storyFullText {
          margin: 20px 0;
          padding: 25px;
          border-radius: 24px;
          background: #fff8df;
          font-size: 19px;
          line-height: 1.9;
          text-align: left;
        }

        .voiceButtons {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .playButton,
        .pauseButton,
        .replayButton,
        .voiceChange,
        .finishButton {
          border: none;
          padding: 13px 20px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .playButton {
          background: #4caf50;
          color: white;
        }

        .pauseButton {
          background: #ff9800;
          color: white;
        }

        .replayButton {
          background: #e5ddff;
          color: #333;
        }

        .voiceChange {
          margin-top: 12px;
          background: #dff2ff;
        }

        .moral {
          margin: 25px 0;
          padding: 20px;
          border-radius: 22px;
          background: #e9f7e5;
        }

        .moral p {
          line-height: 1.7;
          margin-bottom: 0;
        }

        .finishButton {
          background: #ff6b6b;
          color: white;
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

          .reader {
            padding: 35px 18px;
          }

          .storyVisual {
            min-height: 130px;
            font-size: 60px;
          }

          .storyFullText {
            font-size: 17px;
            padding: 20px;
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
