import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type GuideFaq = { q: string; a: string };

export type GuideFrontmatter = {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  audience?: string;
  category?: string;
  label?: string;
  updated: string;
  related?: string[];
  faq?: GuideFaq[];
};

export type Guide = GuideFrontmatter & { body: string };

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

// Foundational guides rank first on the hub, then everything alphabetical.
const CATEGORY_RANK: Record<string, number> = {
  foundational: 0,
  comparison: 1,
};

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(GUIDES_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const slug = (data.slug as string) || file.replace(/\.md$/, "");
      return { ...(data as GuideFrontmatter), slug, body: content };
    })
    .sort((a, b) => {
      const ra = CATEGORY_RANK[a.category ?? ""] ?? 5;
      const rb = CATEGORY_RANK[b.category ?? ""] ?? 5;
      if (ra !== rb) return ra - rb;
      return a.title.localeCompare(b.title);
    });
}

export function getGuide(slug: string): Guide | undefined {
  return getAllGuides().find((g) => g.slug === slug);
}

export function getGuideSlugs(): string[] {
  return getAllGuides().map((g) => g.slug);
}

// Serialize JSON-LD safely for inline injection: escaping "<" prevents a
// "</script>" inside any string field from breaking out of the script tag.
// ponytail: this is the only sanitization needed — JSON-LD is data, not HTML.
export function jsonLdScript(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

// Short label shown on the gradient card thumbnail.
export function guideLabel(g: Guide): string {
  if (g.label) return g.label;
  if (g.category === "foundational") return "Nugumi";
  return (g.audience ?? g.category ?? "Guide").toUpperCase();
}
