import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Service Worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => {
          console.log("Chinnaari Kids Service Worker registered");
        })
        .catch((error) => {
          console.log("Service Worker error:", error);
        });
    }

    // App already installed?
    const checkInstalled = () => {
      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true
      ) {
        setInstalled(true);
      }
    };

    checkInstalled();

    // Install prompt
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );

    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setInstallPrompt(null);
    });

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  async function installApp() {
    if (!installPrompt) {
      alert(
        "Install option is not available right now. Chrome menu ⋮ → Add to Home screen / Install app."
      );
      return;
    }

    installPrompt.prompt();

    const result = await installPrompt.userChoice;

    console.log("Install result:", result.outcome);

    setInstallPrompt(null);
  }

  return (
    <>
      <Head>
        <title>Chinnaari Kids</title>

        <meta
          name="description"
          content="Chinnaari Kids - Telugu and English stories, games and learning for children."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <meta
          name="theme-color"
          content="#ff6b6b"
        />

        <link
          rel="manifest"
          href="/manifest.json"
        />

        <link
          rel="icon"
          href="/icon-192.png"
        />

        <link
          rel="apple-touch-icon"
          href="/icon-192.png"
        />

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
      </Head>

      <div className="app">

        {/* TOP HEADER */}

        <header className="appHeader">

          <Link href="/" className="appLogo">
            🌈 Chinnaari Kids
          </Link>

          <div className="headerActions">

            {!installed && (
              <button
                className="installSmallButton"
                onClick={installApp}
              >
                📱 Install
              </button>
            )}

          </div>

        </header>

        {/* INSTALL BANNER */}

        {!installed && (
          <div className="installBanner">

            <div className="installBannerText">
              <strong>
                📱 Get Chinnaari Kids App
              </strong>

              <span>
                Install on your phone for easy access.
              </span>
            </div>

            <button
              className="installButton"
              onClick={installApp}
            >
              Install App
            </button>

          </div>
        )}

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
