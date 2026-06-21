import { ImageResponse } from "next/og";

export const alt = "Strata Green — Institutional ESG Energy Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #00190d 0%, #002414 55%, #0a2f1f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <path d="M7 29 L20 19 L33 29" stroke="#2f6e3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22.5 L20 14 L31 22.5" stroke="#5bbf3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 16 L20 9 L29 16" stroke="#b7f569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, letterSpacing: "4px" }}>
            <span style={{ color: "#ffffff" }}>STRATA</span>
            <span style={{ color: "#b7f569" }}>GREEN</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "76px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-1px" }}>
            Engineering a
          </div>
          <div style={{ fontSize: "76px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-1px", color: "#b7f569" }}>
            Sustainable Civilization.
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "26px", color: "rgba(255,255,255,0.7)" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "9999px", background: "#b7f569" }} />
          Gigawatt-scale ESG energy infrastructure platform
        </div>
      </div>
    ),
    size
  );
}
