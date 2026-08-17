import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chinnaari Kids</title>

        <meta
          name="description"
          content="Chinnaari Kids - Stories, Games, Puzzles and Learning for children."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#ff6b6b" />

        <meta
          name="mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Chinnaari Kids"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />

        <link
          rel="apple-touch-icon"
          href="/icon-192.png"
        />
      </Head>

      <div className="app">

        {/* HEADER */}

        <header className="appHeader">

          <Link href="/" className="appLogo">
            🌈 Chinnaari Kids
          </Link>

          <div className="headerRight">
            <span>⭐</span>
            <span>🔊</span>
          </div>

        </header>

        {/* PAGE */}

        <main className="appContent">
          <Component {...pageProps} />
        </main>

        {/* BOTTOM NAVIGATION */}

        <nav className="bottomNav">

          <Link href="/" className="navItem">
            <span>🏠</span>
            <small>Home</small>
          </Link>

          <Link href="/stories" className="navItem">
            <span>📚</span>
            <small>Stories</small>
          </Link>

          <Link href="/games" className="navItem">
            <span>🎮</span>
            <small>Games</small>
          </Link>

          <Link href="/learn" className="navItem">
            <span>🔤</span>
            <small>Learn</small>
          </Link>

          <Link href="/dashboard" className="navItem">
            <span>⭐</span>
            <small>Progress</small>
          </Link>

        </nav>

      </div>
    </>
  );
}
            
