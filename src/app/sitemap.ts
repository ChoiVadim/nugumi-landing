import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";

const SITE = "https://nugumi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllGuides().map((g) => ({
    url: `${SITE}/guides/${g.slug}`,
    lastModified: g.updated,
  }));

  return [
    { url: SITE, lastModified: "2026-06-29" },
    { url: `${SITE}/guides`, lastModified: "2026-06-29" },
    ...guides,
  ];
}
