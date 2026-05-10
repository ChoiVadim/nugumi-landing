import Image from "next/image";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const appDetails = [
  ["Selected text", "Translate text from any Mac app"],
  ["Screenshots", "Capture an area and translate recognized text"],
  ["macOS", "Built for macOS 14 and newer"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Yaku home">
          <Image src="/app-icon.png" alt="" width={36} height={36} priority />
          <span>Yaku</span>
        </a>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Mac translation app</p>
          <h1>Translate selected text and screenshots without leaving flow.</h1>
          <p className="lede">
            Yaku lives in your macOS menu bar and gives you fast translation
            from selected text or a captured screen area.
          </p>
          <a className="download-button" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download Yaku for macOS</span>
          </a>
          <p className="download-note">Latest GitHub release, macOS 14 or newer.</p>
        </div>

        <div className="product-visual" aria-label="Yaku app preview">
          <div className="visual-header">
            <Image src="/app-icon.png" alt="" width={52} height={52} priority />
            <div>
              <span>Yaku</span>
              <strong>Ready in the menu bar</strong>
            </div>
          </div>
          <div className="visual-card">
            <span className="status-dot" />
            <p>Screenshot text captured</p>
            <strong>Ready to translate</strong>
          </div>
          <div className="visual-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="details-section" aria-label="Yaku details">
        {appDetails.map(([label, detail]) => (
          <div className="detail-row" key={label}>
            <span>{label}</span>
            <p>{detail}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
