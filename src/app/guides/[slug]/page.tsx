import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllGuides,
  getGuide,
  getGuideSlugs,
  jsonLdScript,
} from "@/lib/guides";

const SITE = "https://nugumi.com";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = `${SITE}/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      url,
      title: guide.title,
      description: guide.description,
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const all = getAllGuides();
  const related = (guide.related ?? [])
    .map((s) => all.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .slice(0, 5);

  const url = `${SITE}/guides/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        datePublished: guide.updated,
        dateModified: guide.updated,
        author: { "@type": "Organization", name: "Nugumi" },
        publisher: { "@type": "Organization", name: "Nugumi" },
        mainEntityOfPage: url,
        image: `${url}/opengraph-image`,
      },
      ...(guide.faq && guide.faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: guide.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
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
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <article className="guide">
      <Link className="guide-back" href="/guides">
        ← Back to guides
      </Link>
      <h1 className="guide-h1">{guide.title}</h1>
      <p className="guide-byline">By Nugumi · Updated {guide.updated}</p>

      <div className="guide-prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{guide.body}</ReactMarkdown>
      </div>

      {guide.faq && guide.faq.length > 0 && (
        <section className="guide-faq">
          <h2>FAQ</h2>
          {guide.faq.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      )}

      {related.length > 0 && (
        <section className="guide-related">
          <h2>Related guides</h2>
          <ul>
            {related.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`}>{g.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/guides">All Nugumi guides</Link>
            </li>
          </ul>
        </section>
      )}

      <section className="guide-cta">
        <h2>Put this into practice.</h2>
        <p>
          Nugumi reads, replies, and polishes your words right inside the app
          you&apos;re in — free during beta.
        </p>
        <Link className="btn btn-primary" href="/download">
          Download free for macOS
        </Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
    </article>
  );
}
