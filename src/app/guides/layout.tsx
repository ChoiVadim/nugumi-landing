import Image from "next/image";
import Link from "next/link";

export default function GuidesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="page">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Nugumi home">
          <Image src="/app-icon.png" alt="" width={28} height={28} priority />
          <span>Nugumi</span>
        </Link>
        <nav className="topnav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/guides">Guides</Link>
          <Link className="topnav-cta" href="/download">
            Download
          </Link>
        </nav>
      </header>

      {children}

      <footer className="footer">
        <div className="footer-brand">
          <Image src="/app-icon.png" alt="" width={28} height={28} />
          <span>Nugumi</span>
        </div>
        <div className="footer-links">
          <Link href="/guides">Guides</Link>
          <Link href="/download">Download</Link>
          <a
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="footer-meta">© 2026 Nugumi.</p>
      </footer>
    </main>
  );
}
