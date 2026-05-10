import Image from "next/image";
import {
  DownloadSimple,
  GithubLogo,
  PlayCircle,
} from "@phosphor-icons/react/dist/ssr";

const YOUTUBE_EMBED_URL = "";
const actions = ["Translate", "Make native", "Reply"];

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
          <p className="eyebrow">No copy-paste. No prompt loop.</p>
          <h1>Instant AI actions on selected text.</h1>
          <p className="lede">
            Nugumi brings AI help to the apps where work happens: Slack, Gmail,
            Telegram, Notion, browsers, PDFs, and CRMs. Highlight anything, hit
            a shortcut, then translate, make it native, shorten, or reply
            in-place.
          </p>

          <div className="action-list" aria-label="Core Nugumi actions">
            {actions.map((action) => (
              <span key={action}>{action}</span>
            ))}
          </div>

          <div className="cta-row">
            <a className="download-button" href="/download">
              <DownloadSimple size={20} weight="bold" aria-hidden="true" />
              <span>Download Nugumi for macOS</span>
            </a>
            <a
              className="repo-button"
              href="https://github.com/ChoiVadim/nugumi"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={20} weight="bold" aria-hidden="true" />
              <span>GitHub repo</span>
            </a>
          </div>
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
