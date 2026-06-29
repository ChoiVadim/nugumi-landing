import { ImageResponse } from "next/og";
import { getGuide } from "@/lib/guides";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nugumi guide";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const title = guide?.title ?? "Nugumi Guide";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background:
          "linear-gradient(135deg, #0c1a15 0%, #16352c 55%, #2bb6a3 160%)",
        color: "#f1f6f3",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 34 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "rgba(255,255,255,0.12)",
            marginRight: 16,
          }}
        />
        Nugumi
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 64,
          lineHeight: 1.1,
          fontWeight: 600,
          maxWidth: 1000,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", fontSize: 28, opacity: 0.7 }}>
        nugumi.com/guides
      </div>
    </div>,
    size,
  );
}
