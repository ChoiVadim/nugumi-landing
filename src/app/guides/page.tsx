import Link from "next/link";
import type { Metadata } from "next";
import { getAllGuides, guideLabel, jsonLdScript } from "@/lib/guides";

const SITE = "https://nugumi.com";

export const metadata: Metadata = {
  title: "Nugumi Guides",
  description:
    "Practical guides on writing clearly, replying with confidence, and sounding natural at work — for non-native professionals.",
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    url: `${SITE}/guides`,
    title: "Nugumi Guides",
    description:
      "Practical guides on writing clearly, replying with confidence, and sounding natural at work.",
  },
};

export default function GuidesIndex() {
  const guides = getAllGuides();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/guides`,
        url: `${SITE}/guides`,
        name: "Nugumi Guides",
        description:
          "Practical guides on writing clearly, replying with confidence, and sounding natural at work.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Nugumi", item: SITE },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: `${SITE}/guides`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: guides.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: g.title,
          url: `${SITE}/guides/${g.slug}`,
        })),
      },
    ],
  };

  return (
    <section className="guides-hub">
      <div className="guides-hero">
        <p className="eyebrow">{guides.length} evergreen guides</p>
        <h1 className="guides-title">
          Guides for writing, replying, and <em>sounding sharp</em>.
        </h1>
        <p className="guides-lede">
          Practical, no-fluff resources on clear writing, professional replies,
          and sounding natural at work — for people who do it in another
          language every day.
        </p>
      </div>

      <div className="guides-grid">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
            <div className="guide-card-thumb" aria-hidden="true">
              <span>{guideLabel(g)}</span>
            </div>
            <div className="guide-card-body">
              <span className="guide-card-date">Updated {g.updated}</span>
              <h2>{g.title}</h2>
              <p>{g.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
    </section>
  );
}
