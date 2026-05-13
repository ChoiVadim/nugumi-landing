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
  { value: "1 click", label: "every text action, every Mac app." },
  { value: "0.5 s", label: "answers, before you blink." },
  {
    value: "Auto",
    label: "tunes to your app, your language, your style.",
  },
];

const features = [
  {
    eyebrow: "Translate",
    title: "Select. Left-click. Read.",
    body: "Highlight any text. Left-click. Read it in your language. If the text is already in your language, jargon gets rewritten in plain words. Works in every Mac app: chat, mail, PDFs, code, Notion, Safari. Optional local mode keeps sensitive text on your Mac.",
    image: "/translate.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/translate.mp4",
    poster: "https://df41nzkzrv2ws.cloudfront.net/nugumi/translate-poster.jpg",
    alt: "Nugumi translating selected text in place",
  },
  {
    eyebrow: "Make native",
    title: "Your draft. In your target language.",
    body: "Pick a target language once in settings. From then on, right-click any selection and Nugumi delivers it in the target. Wrote in your native language? It translates to the target. Wrote in the target already? It polishes the draft: grammar, tone, idiom, formatting, snippets. Same click, both directions. No keyboard switching, no ChatGPT tab.",
    image: "/pet.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/make-native.mp4",
    poster:
      "https://df41nzkzrv2ws.cloudfront.net/nugumi/make-native-poster.jpg",
    alt: "Nugumi polishing a selected draft into native-sounding text",
  },
  {
    eyebrow: "Reply",
    title: "Hand it over. Get a full reply back.",
    body: "Sometimes you don't want help with your draft. You want the AI to write the whole thing. Select an incoming message, a form question, an exam prompt. Nugumi writes the full reply, in your style, with your snippets and dictionaries. Edit, then paste. (And yes: that exam question on your screen? Highlight it. Nugumi answers it. We won't tell.)",
    image: "/reply.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/reply.mp4",
    poster: "https://df41nzkzrv2ws.cloudfront.net/nugumi/reply-poster.jpg",
    alt: "Nugumi generating a full reply from a selected incoming message",
  },
];

const valueProps = [
  {
    icon: CursorClick,
    title: "Reads the context.",
    body: "Nugumi sees which app you're in, which language you selected, and the style you write in. The same word in Mail gets a formal answer. In Slack, it stays casual. In a code editor, it gets a developer's explanation. Foreign text gets translated, same-language jargon gets explained in plain words.",
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
    a: "Both clicks are translators. They just go to different languages. Left-click translates to your native language. Right-click translates to your target language (the one you set in preferences). If your selection is already in the destination language, the click switches mode: left explains jargon in plain words, right polishes grammar, tone, and snippets. Same gesture, different direction, no dropdowns.",
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
              {"video" in f && f.video ? (
                <video
                  className="feature-video"
                  src={f.video}
                  poster={f.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={f.alt}
                />
              ) : (
                <Image
                  src={f.image}
                  alt={f.alt}
                  width={2000}
                  height={1300}
                  sizes="(max-width: 920px) 92vw, 620px"
                />
              )}
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
            <h3>Left-click → your language.</h3>
            <p>
              Translates the selection into the language you set as native. If
              it&apos;s already in your language, Nugumi explains the jargon in
              plain words instead.
            </p>
          </li>
          <li>
            <span className="step-num">3</span>
            <h3>Right-click → your target language.</h3>
            <p>
              Translates the selection into the language you set as target. If
              it&apos;s already in the target, Nugumi polishes it instead:
              grammar, tone, idiom, snippets.
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
        <p>
          Free, no signup, no account. Try it on your next foreign chat, your
          next sloppy draft, your next unread reply.
        </p>
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
