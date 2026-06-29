import Image from "next/image";
import { HeroVideo } from "./HeroVideo";
import {
  DownloadSimple,
  AppWindow,
  Lightning,
  CursorClick,
  NavigationArrow,
  Key,
  Cpu,
  Cloud,
} from "@phosphor-icons/react/dist/ssr";

const stats = [
  { value: "Any app", label: "Slack, Gmail, Notion, PDFs, websites." },
  {
    value: "Private",
    label: "Run locally with Ollama. Nothing you select leaves your computer.",
  },
  {
    value: "Personalized",
    label: "Adapts the tone and the right action to the app you're in.",
  },
];

const features = [
  {
    eyebrow: "Understand",
    title: "Understand anything you read.",
    body: "Select text in Slack, Gmail, Notion, GitHub, PDFs, or a website. Nugumi explains what it really means and breaks dense writing into plain words.",
    image: "/translate.png",
    video: "/understand.mp4",
    poster: "/understand-poster.jpg",
    alt: "Nugumi explaining selected text in place",
  },
  {
    eyebrow: "Write",
    title: "Write naturally. Send professionally.",
    body: "Write however it comes out. Nugumi rewrites it into something clear, natural, and ready to send.",
    image: "/pet.png",
    video: "/write.mp4",
    poster: "/write-poster.jpg",
    alt: "Nugumi polishing a selected draft into professional text",
  },
  {
    eyebrow: "Reply",
    title: "Answer messages faster.",
    body: "Select an incoming message and Nugumi drafts a reply in your style.",
    image: "/reply.png",
    video: "/reply.mp4",
    poster: "/reply-poster.jpg",
    alt: "Nugumi generating a full reply from a selected incoming message",
  },
  {
    eyebrow: "Ask Nugumi",
    title: "Know what to do on any screen.",
    body: "Press Control twice and ask about the visible screen: warnings, forms, menus, websites, or buttons. Nugumi explains the context and next action.",
    image: "/pet.png",
    video: "/ask.mp4",
    poster: "/ask-poster.jpg",
    alt: "Nugumi reading a website and pointing where to click",
  },
];

const valueProps = [
  {
    icon: CursorClick,
    title: "Built for non-native pros.",
    body: "For people who write, read, and reply all day and want it to land right.",
  },
  {
    icon: AppWindow,
    title: "Works where you work.",
    body: "No browser extension. No per-app setup. If you can select text, Nugumi can help.",
  },
  {
    icon: NavigationArrow,
    title: "More than the words.",
    body: "It helps with meaning, tone, replies, and confusing interfaces.",
  },
  {
    icon: Lightning,
    title: "No prompt loop.",
    body: "Select text, click the action, get the result. No copy-paste into ChatGPT.",
  },
];

const setupOptions = [
  {
    icon: Cloud,
    title: "Use your ChatGPT or Claude subscription",
    body: "Good default if you already pay for ChatGPT or Claude and want strong cloud models.",
  },
  {
    icon: Cpu,
    title: "Run locally with Ollama",
    body: "Best when privacy or cost matters. Text actions can stay on your computer.",
  },
  {
    icon: Key,
    title: "Connect your own API key",
    body: "Use direct cloud providers when you want control over model, speed, and billing.",
  },
];

const faqs = [
  {
    q: "How is this different from ChatGPT or Grammarly?",
    a: "Grammarly mostly fixes grammar. ChatGPT is powerful, but it lives in another tab. Nugumi sits next to the text or screen you are already working with and runs the right action from a click, so it sounds like you.",
  },
  {
    q: "Where does Nugumi run?",
    a: "You choose: ChatGPT or Claude subscription, local Ollama, or your own API key. Use Ollama for private local text actions. Use a cloud subscription or API key for stronger models and vision.",
  },
  {
    q: "Can Nugumi understand websites or screenshots?",
    a: "Yes. Ask Nugumi can read the visible screen when you explicitly ask a question like “What does this warning mean?” or “Where do I click?”",
  },
  {
    q: "Is my screen sent to the cloud?",
    a: "Only when you ask a screen question and use a cloud vision model. Text actions can run locally with Ollama.",
  },
  {
    q: "Which apps does it work in?",
    a: "Every app with selectable text: Slack, Gmail, Safari, Chrome, Notion, Notes, Mail, VS Code, PDFs, Discord, Telegram, and more.",
  },
  {
    q: "Is Nugumi free?",
    a: "Yes. Nugumi is free during early beta. You choose the model setup and any provider costs.",
  },
];

const testimonials = [
  {
    quote: "I've completely stopped using ChatGPT for everyday text work.",
    name: "Alina",
    role: "Switched from ChatGPT",
    avatar: "/app-icon-cmo.png",
  },
  {
    quote:
      "I'd use this for work, especially Slack and KakaoTalk with the Nugumi reply feature. It saves time and nerves.",
    name: "Eundal",
    role: "Slack & KakaoTalk",
    avatar: "/app-icon-cpo.png",
  },
  {
    quote:
      "Honestly, I run into this exact problem all the time. I really like something like this.",
    name: "Dan",
    role: "Early user",
    avatar: "/app-icon-cto.png",
  },
  {
    quote: "Kudos to you, man! Really nice work.",
    name: "Salomon Diei",
    role: "Early user",
    avatar: "/app-icon-cfo.png",
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
          <a href="#setup">Setup</a>
          <a href="#faq">FAQ</a>
          <a href="/guides">Guides</a>
          <a className="topnav-cta" href="/download">
            Download
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <p className="eyebrow">Runs locally on your Mac</p>
        <h1 className="hero-title">
          Confidence before you <em>hit send</em>.
        </h1>
        <p className="hero-lede">
          Nugumi reads, replies, and polishes your words so they come out
          natural, error-free, and right in tone for the app you&apos;re in.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="/download">
            <DownloadSimple size={20} weight="bold" aria-hidden="true" />
            <span>Download free for macOS</span>
          </a>
        </div>
        <p className="hero-meta">
          300+ downloads · Free in beta ·{" "}
          <a
            className="hero-meta-link"
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source
          </a>
        </p>

        <HeroVideo />
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
          <h2>The AI layer between your cursor and what comes next.</h2>
          <p>
            Nugumi is not another chat box. It turns the text you selected or
            the screen you asked about into the next useful action.
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
          <h2>It&apos;s this simple to use.</h2>
        </div>
        <ol className="how-steps">
          <li>
            <span className="step-num">1</span>
            <h3>Select text.</h3>
            <p>In any app: chat, mail, PDF, browser, or code editor.</p>
          </li>
          <li>
            <span className="step-num">2</span>
            <h3>Left-click to understand.</h3>
            <p>See what it really means, or simplify dense writing.</p>
          </li>
          <li>
            <span className="step-num">3</span>
            <h3>Right-click to rewrite.</h3>
            <p>Make your draft clear, natural, and ready to send.</p>
          </li>
          <li>
            <span className="step-num">4</span>
            <h3>Control twice to ask.</h3>
            <p>Ask what a screen means and what to click next.</p>
          </li>
        </ol>
      </section>

      <section id="setup" className="setup">
        <div className="setup-head">
          <p className="eyebrow">Model setup</p>
          <h2>Use Nugumi the way you already use AI.</h2>
          <p>
            Start with the setup that matches your privacy, quality, and cost
            needs. You can change it later.
          </p>
        </div>
        <div className="setup-grid">
          {setupOptions.map(({ icon: Icon, title, body }) => (
            <article key={title} className="setup-card">
              <Icon size={24} weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
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

      <section className="testimonials">
        <div className="testimonials-head">
          <p className="eyebrow">Early users</p>
          <h2>People are already hooked.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption className="testimonial-author">
                <span className="testimonial-avatar">
                  <Image src={t.avatar} alt="" width={44} height={44} />
                </span>
                <span className="testimonial-author-meta">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="closer">
        <h2>
          Hit send with <em>confidence</em>.
        </h2>
        <p>
          Read, reply, and polish anything you send, so it always sounds like
          you, only sharper.
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
          <a href="/guides">Guides</a>
          <a href="#setup">Model setup</a>
          <a
            href="https://github.com/ChoiVadim/nugumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Nugumi.</p>
      </footer>
    </main>
  );
}
