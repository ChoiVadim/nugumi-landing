import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import { jsonLdScript } from "@/lib/guides";

const SITE = "https://nugumi.com";

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}#org`,
      name: "Nugumi",
      url: SITE,
      logo: `${SITE}/app-icon.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}#website`,
      url: SITE,
      name: "Nugumi",
      publisher: { "@id": `${SITE}#org` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Nugumi",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "macOS 14+",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: SITE,
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const TITLE = "Nugumi · Confidence before you hit send";
const DESCRIPTION =
  "Nugumi is a Mac assistant for non-native professionals. Read, reply, and polish your words so they come out natural, error-free, and right in tone.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/app-icon.png",
    shortcut: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Nugumi",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nugumi — Confidence before you hit send",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
