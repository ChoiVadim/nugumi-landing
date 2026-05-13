import Image from "next/image";
import {
  DownloadSimple,
  GithubLogo,
  Lock,
  AppWindow,
  Lightning,
  CursorClick,
} from "@phosphor-icons/react/dist/ssr";

const heroActions = ["Translate", "Make native", "Reply", "Read screen"];

const stats = [
  { value: "3", label: "core actions, all from your selection." },
  { value: "<1 s", label: "to first word. streams as the model types." },
  { value: "1 click", label: "for the action you needed." },
];

const features = [
  {
    eyebrow: "Translate",
    title: "Select. Left-click. Read.",
    body: "The fastest path from foreign text to understanding. Highlight a chat, a PDF, a webpage, a code comment. Left-click the Nugumi button and the translation appears next to your selection. Same-language jargon? Same flow: Nugumi rewrites it in plain words instead. Optional local mode keeps sensitive business text on your Mac.",
    image: "/translate.png",
    alt: "Nugumi translating a Korean Telegram message in place",
  },
  {
    eyebrow: "Make native",
    title: "Your draft, before you send it.",
    body: "You've been pasting every Slack message into ChatGPT before sending. Stop. Select your draft, right-click, done. Nugumi rewrites it to sound natural in the target language, fixes grammar and tone, applies your formatting and saved snippets. Sounds like you, just sharper.",
    image: "/pet.png",
    alt: "Nugumi polishing a draft message right next to it",
  },
  {
    eyebrow: "Reply",
    title: "Hand it over. Get a full reply back.",
    body: "Sometimes you don't want help with your draft. You want the AI to write the whole thing. Select an incoming message, a form question, an exam prompt. Nugumi writes the full reply, in your style, with your snippets and dictionaries. Edit, then paste.",
    image: "/reply.png",
    alt: "Nugumi generating a full reply from a selected incoming message",
  },
];

const valueProps = [
  {
    icon: CursorClick,
    title: "One button, every action.",
    body: "Left-click runs translate, the most common case. Right-click opens the action menu next to your selection: make native, reply, shorten, read aloud. No app to switch to. No prompt to type. No mode to pre-pick.",
  },
  {
    icon: AppWindow,
    title: "Works in every Mac app.",
    body: "If macOS lets you select text in it, Nugumi works there. Telegram, Slack, Mail, Notes, PDFs, VS Code, Discord, Notion. No extensions to install. No per-app integration.",
  },
  {
    icon: Lightning,
    title: "Streams as it thinks.",
    body: "Nugumi parses tokens word-by-word straight from the model. You start reading before the slow words finish rendering. No waiting on a spinner.",
  },
  {
    icon: Lock,
    title: "Run it locally, if you want.",
    body: "Optional local mode: pair Nugumi with Ollama and the model runs entirely on your Mac. Nothing leaves it. Use it when privacy matters.",
  },
];

const faqs = [
  {
    q: "How is this different from Google Translate or ChatGPT?",
    a: "Google Translate only does one thing: translate. ChatGPT does everything but lives in a separate tab and needs a fresh prompt every time. Nugumi gives you the three text actions you do dozens of times a day: translate foreign text, polish your draft, draft a reply. All without leaving the app you're already in, and without typing a prompt.",
  },
  {
    q: "How do I pick which action runs?",
    a: "Left-click runs translate. That's the fastest and most common case. Right-click opens the action menu next to your selection: make native, reply, shorten, read aloud. You don't retype the same prompt every time and you don't switch to a different app. The choice happens right at your cursor.",
  },
  {
    q: "Where does it run?",
    a: "You can run it locally via Ollama. Nugumi walks you through setup on first launch. In local mode, the model lives on your Mac and your text stays with you.",
  },
  {
    q: "Which apps does it work in?",
    a: "Every macOS app with selectable text: Telegram, Slack, Safari, Chrome, Notion, Notes, Mail, VS Code, PDFs in Preview, web pages, Discord, Messages. If the OS lets you select it, Nugumi reads it.",
  },
  {
    q: "Is Nugumi free?",
    a: "Yes. It's open source on GitHub and free to download.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Nugumi home">
          <Image src="/app-icon.png" alt="" width={28} height={28} priority />
          <span>Nugumi</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#features">Actions</a>
          <a href="#why">Approach</a>
          <a href="#faq">FAQ</a>
          <a
            className="topnav-cta"
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">AI text actions for your Mac</p>
        <h1 className="hero-title">
          Instant AI actions on <em>selected text</em>.
        </h1>
        <p className="hero-lede">
          Select anything in any Mac app. Nugumi delivers the action you needed:
          translate, make native, reply. Right where you are. No prompt loop. No
          copy-paste loop.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download for macOS</span>
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={20} weight="bold" aria-hidden="true" />
            <span>Star on GitHub</span>
          </a>
        </div>
        <p className="hero-meta">
          Free · macOS 14+ · Apple Silicon &amp; Intel
        </p>

        <div className="hero-chips" aria-label="What Nugumi does">
          {heroActions.map((action) => (
            <span key={action} className="chip">
              {action}
            </span>
          ))}
        </div>

        <figure className="hero-shot">
          <video
            className="hero-video"
            src="https://df41nzkzrv2ws.cloudfront.net/nugumi/hero.mp4"
            poster="https://df41nzkzrv2ws.cloudfront.net/nugumi/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Nugumi running an AI action on selected text"
          />
        </figure>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      <section id="features" className="features">
        {features.map((f, i) => (
          <article
            key={f.title}
            className={`feature ${i % 2 === 1 ? "feature-flip" : ""}`}
          >
            <div className="feature-copy">
              <p className="feature-eyebrow">{f.eyebrow}</p>
              <h2>{f.title}</h2>
              <p>{f.body}</p>
            </div>
            <figure className="feature-shot">
              <Image
                src={f.image}
                alt={f.alt}
                width={2000}
                height={1300}
                sizes="(max-width: 920px) 92vw, 620px"
              />
            </figure>
          </article>
        ))}
      </section>

      <section id="why" className="why">
        <div className="why-head">
          <p className="eyebrow eyebrow-dark">Approach</p>
          <h2>AI text actions, where the text already is.</h2>
          <p>
            Most AI text tools live in a separate tab. You select, switch apps,
            paste, prompt, wait, copy, switch back. Nugumi lives in the gap
            between your selection and your cursor. The action happens in the
            app you&apos;re already in.
          </p>
        </div>

        <div className="why-grid">
          {valueProps.map(({ icon: Icon, title, body }) => (
            <div key={title} className="why-card">
              <Icon size={22} weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="how">
        <div className="how-head">
          <p className="eyebrow">How it works</p>
          <h2>Three steps. Zero ceremony.</h2>
        </div>
        <ol className="how-steps">
          <li>
            <span className="step-num">1</span>
            <h3>Highlight any text.</h3>
            <p>In any Mac app. Chat, mail, PDF, browser, code editor.</p>
          </li>
          <li>
            <span className="step-num">2</span>
            <h3>Left-click for the fast path.</h3>
            <p>
              Translates foreign text. Explains same-language jargon in plain
              words. The result appears next to your selection.
            </p>
          </li>
          <li>
            <span className="step-num">3</span>
            <h3>Right-click for the menu.</h3>
            <p>
              Make native, reply, shorten, read aloud. Pick the action, get the
              result, paste back. Your snippets and styles included.
            </p>
          </li>
        </ol>
      </section>

      <section id="faq" className="faq">
        <h2>Questions, answered.</h2>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closer">
        <h2>
          AI actions, <em>where you already are</em>.
        </h2>
        <p>Free, open source, signed end-to-end. Made with 🩷 in Seoul.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download Nugumi</span>
          </a>
          <a
            className="btn btn-ghost btn-ghost-dark"
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={20} weight="bold" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Image src="/app-icon.png" alt="" width={28} height={28} />
          <span>Nugumi</span>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/ChoiVadim/nugumi/releases/latest"
            target="_blank"
            rel="noreferrer"
          >
            Releases
          </a>
          <a href="https://ollama.com" target="_blank" rel="noreferrer">
            Powered by Ollama
          </a>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} Nugumi. MIT licensed.
        </p>
      </footer>
    </main>
  );
}
