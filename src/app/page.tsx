import Image from "next/image";
import { DownloadSimple, PlayCircle } from "@phosphor-icons/react/dist/ssr";

const YOUTUBE_EMBED_URL = "";

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Nugumi home">
          <Image src="/app-icon.png" alt="" width={36} height={36} priority />
          <span>Nugumi</span>
        </a>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Local-first Mac AI</p>
          <h1>Write and respond like a native, anywhere on your Mac.</h1>
          <p className="lede">
            Nugumi is a local-first AI language assistant for non-native
            professionals. Select text anywhere, then translate, make it native,
            or reply in-place.
          </p>

          <a className="download-button" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download Nugumi for macOS</span>
          </a>
          <p className="download-note">Latest GitHub release, macOS 14 or newer.</p>
        </div>

        <div className="video-shell" aria-label="Nugumi demo video">
          {YOUTUBE_EMBED_URL ? (
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Nugumi demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="video-placeholder">
              <PlayCircle size={56} weight="duotone" aria-hidden="true" />
              <span>Demo video</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
