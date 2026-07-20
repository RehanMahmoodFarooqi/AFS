import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AFS Development — Custom Web, Mobile & E-Commerce Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #ff5722 100%)",
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        {/* Logo text */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <span style={{ fontSize: 100, fontWeight: 900, color: "#ffffff", letterSpacing: -4 }}>
            AFS
          </span>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#ff9d7a",
            letterSpacing: 12,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          DEVELOPMENT
        </div>

        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Custom Web · Mobile Apps · E-Commerce · WordPress · Shopify · SEO
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          www.afsdevelopment.com
        </div>
      </div>
    ),
    { ...size }
  );
}
