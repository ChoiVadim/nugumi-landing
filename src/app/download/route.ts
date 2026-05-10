import { NextResponse } from "next/server";

type GitHubReleaseAsset = {
  browser_download_url?: string;
  name?: string;
};

type GitHubRelease = {
  assets?: GitHubReleaseAsset[];
  html_url?: string;
};

const RELEASES_URL = "https://github.com/ChoiVadim/yaku/releases/latest";
const LATEST_RELEASE_API = "https://api.github.com/repos/ChoiVadim/yaku/releases/latest";

export async function GET() {
  const releaseResponse = await fetch(LATEST_RELEASE_API, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "yaku-landing",
    },
    next: { revalidate: 300 },
  });

  if (!releaseResponse.ok) {
    return NextResponse.redirect(RELEASES_URL);
  }

  const release = (await releaseResponse.json()) as GitHubRelease;
  const dmgAsset = release.assets?.find((asset) =>
    asset.name?.toLowerCase().endsWith(".dmg"),
  );

  if (dmgAsset?.browser_download_url) {
    return NextResponse.redirect(dmgAsset.browser_download_url);
  }

  return NextResponse.redirect(release.html_url ?? RELEASES_URL);
}
