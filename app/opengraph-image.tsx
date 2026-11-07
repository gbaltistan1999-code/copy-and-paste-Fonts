import { ImageResponse } from "next/og";

export const alt = "CopyFontStyle – Copy and Paste Fonts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social preview image, generated at build time (no external assets). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#1f2328",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
          Copy<span style={{ color: "#6d28d9" }}>Font</span>Style
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 24, letterSpacing: -2 }}>
          Copy and Paste Fonts
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#4b5563", marginTop: 20 }}>
          Type once. Get 50+ font styles for bios, captions and chats.
        </div>
        <div style={{ display: "flex", marginTop: 48, height: 12, width: 160, background: "#6d28d9", borderRadius: 6 }} />
      </div>
    ),
    size,
  );
}
