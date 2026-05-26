import Image from "next/image";
import {
  DownloadSimple,
  Lock,
  AppWindow,
  Lightning,
  CursorClick,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";

const heroActions = [
  "Before sending",
  "Before replying",
  "Before clicking",
  "No copy-paste",
];

const stats = [
  { value: "1 click", label: "to read, write, or ask your screen." },
  { value: "Any app", label: "Slack, Gmail, Notion, GitHub, PDFs, websites." },
  {
    value: "Local mode",
    label: "for private text actions with Ollama.",
  },
];

const moments = [
  {
    title: "Before sending",
    body: "Does this sound too direct, too casual, or machine-translated? Nugumi helps you choose the low-risk professional phrasing for the situation.",
  },
  {
    title: "Before replying",
    body: "When you understand the words but not the right answer, Nugumi drafts a clear reply in your style so you can edit and send faster.",
  },
  {
    title: "Before clicking",
    body: "On foreign-language forms, dialogs, and websites, ask what the screen wants from you and which action is safe to take next.",
  },
];

const features = [
  {
    eyebrow: "Understand",
    title: "Read any language without leaving work.",
    body: "Highlight a Slack message, Gmail thread, Notion doc, GitHub issue, PDF, or webpage. Left-click and Nugumi turns it into your language right where you are. If the text is already in your language, it explains jargon in plain words. Optional local mode keeps sensitive text on your Mac.",
    image: "/translate.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/translate.mp4",
    poster: "https://df41nzkzrv2ws.cloudfront.net/nugumi/translate-poster.jpg",
    alt: "Nugumi translating selected text in place",
  },
  {
    eyebrow: "Send with confidence",
    title: "Write in your language. Send it professionally.",
    body: "Pick a target language once. Write the thought in the language that feels natural to you, select it, right-click, and Nugumi turns it into clear professional English, Korean, Japanese, or whatever you work in. Already wrote in the target language? Nugumi fixes grammar, tone, idiom, formatting, and snippets so it fits the situation. No keyboard switching. No ChatGPT tab. No confidence tax.",
    image: "/pet.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/make-native.mp4",
    poster:
      "https://df41nzkzrv2ws.cloudfront.net/nugumi/make-native-poster.jpg",
    alt: "Nugumi polishing a selected draft into professional text",
  },
  {
    eyebrow: "Reply",
    title: "Reply across languages in your own voice.",
    body: "Sometimes you don't want a translation. You want the answer. Select an incoming message, customer request, recruiting note, or work thread. Nugumi drafts a full reply in your style, using your snippets and dictionaries. Edit, then paste. Perfect for global workers who live in Slack, Gmail, Notion, Telegram, and GitHub all day.",
    image: "/reply.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/reply.mp4",
    poster: "https://df41nzkzrv2ws.cloudfront.net/nugumi/reply-poster.jpg",
    alt: "Nugumi generating a full reply from a selected incoming message",
  },
  {
    eyebrow: "Ask Nugumi",
    title: "Stuck on a foreign website? Ask what to click.",
    body: "Press Control twice and ask Nugumi about what's on your screen. It can explain a foreign-language website, form, dialog, or app — and point to the button, field, or menu item you need. For when translation is not enough and you need to know what to do next.",
    image: "/pet.png",
    video: "https://df41nzkzrv2ws.cloudfront.net/nugumi/demo.mp4",
    poster: "https://df41nzkzrv2ws.cloudfront.net/nugumi/demo-poster.jpg",
    alt: "Nugumi reading a foreign-language website and pointing where to click",
  },
];

const valueProps = [
  {
    icon: CursorClick,
    title: "Built for non-native professionals.",
    body: "Nugumi is for people who work across languages every day: founders, engineers, support teams, recruiters, students abroad, immigrants, and remote workers. Understand the message. Answer clearly. Send with confidence instead of sounding like machine translation.",
  },
  {
    icon: AppWindow,
    title: "Works in every Mac app.",
    body: "If macOS lets you select text in it, Nugumi works there. Telegram, Slack, Mail, Notes, PDFs, VS Code, Discord, Notion. No extensions to install. No per-app integration.",
  },
  {
    icon: NavigationArrow,
    title: "Guides you through foreign interfaces.",
    body: "Nugumi doesn't just translate words. It helps you understand what a page wants from you, which button to click, and what step comes next.",
  },
  {
    icon: Lightning,
    title: "No prompt loop.",
    body: "Most AI tools make you switch tabs, paste text, explain what you want, copy the result, and switch back. Nugumi already knows the action from your click, so the AI happens where the text already is.",
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
    a: "Google Translate only translates. ChatGPT can do everything, but it lives in another tab and asks for a fresh prompt every time. Nugumi is for the workflow you repeat dozens of times a day: understand foreign text, make your writing sound professional, draft replies, and ask what to do on a confusing screen. All without leaving the app you're already in.",
  },
  {
    q: "Can Nugumi understand websites or screenshots?",
    a: "Yes. With a vision-capable model, Ask Nugumi can read what is on your screen and answer questions like 'Where do I click to submit this?' or 'What does this warning mean?' Nugumi guides you, but you stay in control.",
  },
  {
    q: "Is my screen sent to the cloud?",
    a: "Ask Nugumi captures your screen only when you ask a question. If you use a cloud vision model, the screenshot is sent to that provider. Text actions can run locally with Ollama when privacy matters.",
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
    a: "Yes. Nugumi is free during early beta. No signup, no account.",
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
          <a className="topnav-cta" href="/download">
            Download
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">For non-native professionals on Mac</p>
        <h1 className="hero-title">
          Confidence before you <em>send, reply, or click</em>.
        </h1>
        <p className="hero-lede">
          Know what to say or click in another language. Nugumi helps when
          translation is not enough: understand context, choose a low-risk
          reply, and know the safe next action — right inside the Mac app
          you&apos;re using.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download free for macOS</span>
          </a>
        </div>
        <p className="hero-meta">
          Early beta · No signup · macOS 14+ · Local text mode available
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
            src="https://df41nzkzrv2ws.cloudfront.net/nugumi/demo.mp4"
            poster="https://df41nzkzrv2ws.cloudfront.net/nugumi/demo-poster.jpg"
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

      <section className="moments" aria-labelledby="moments-title">
        <div className="moments-head">
          <p className="eyebrow">When translation is not enough</p>
          <h2 id="moments-title">For the moments you don&apos;t want to guess.</h2>
          <p>
            You understand the words, but you&apos;re not sure what to reply, how
            it sounds, or what button is safe to click.
          </p>
        </div>
        <div className="moments-grid">
          {moments.map((moment) => (
            <article key={moment.title} className="moment-card">
              <h3>{moment.title}</h3>
              <p>{moment.body}</p>
            </article>
          ))}
        </div>
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
          <h2>The AI layer for people who work between languages.</h2>
          <p>
            Global work happens in messy, mixed-language places: Slack threads,
            Gmail replies, Notion docs, PDFs, GitHub issues, Telegram chats, and
            foreign websites. Nugumi lives in the gap between your selection,
            your screen, and your cursor, so understanding and action happen in
            the app you&apos;re already in.
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
          <h2>Text or screen. One gesture.</h2>
        </div>
        <ol className="how-steps">
          <li>
            <span className="step-num">1</span>
            <h3>Highlight any text.</h3>
            <p>In any Mac app. Chat, mail, PDF, browser, code editor.</p>
          </li>
          <li>
            <span className="step-num">2</span>
            <h3>Left-click → understand.</h3>
            <p>
              Translates the selection into the language you set as native. If
              it&apos;s already in your language, Nugumi explains the jargon in
              plain words instead.
            </p>
          </li>
          <li>
            <span className="step-num">3</span>
            <h3>Right-click → send with confidence.</h3>
            <p>
              Translates the selection into the language you set as target. If
              it&apos;s already in the target, Nugumi polishes it instead:
              grammar, tone, idiom, snippets.
            </p>
          </li>
          <li>
            <span className="step-num">4</span>
            <h3>Control twice → ask your screen.</h3>
            <p>
              Ask “Where do I click?”, “What does this warning mean?”, or “What
              should I fill next?” Nugumi reads the screen and guides you.
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
          Work across languages, <em>where you already are</em>.
        </h2>
        <p>
          Free during early beta. Try it on your next foreign work thread,
          important English draft, unread reply, or confusing website — before
          you send, reply, or click.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download Nugumi</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Image src="/app-icon.png" alt="" width={28} height={28} />
          <span>Nugumi</span>
        </div>
        <div className="footer-links">
          <a href="/download">Download</a>
          <a href="https://ollama.com" target="_blank" rel="noreferrer">
            Powered by Ollama
          </a>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} Nugumi.
        </p>
      </footer>
    </main>
  );
}
