import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Generated as a PNG so iOS renders a proper home-screen icon (SVG apple
// touch icons are not reliably supported).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#00190d",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
          <path d="M7 29 L20 19 L33 29" stroke="#2f6e3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22.5 L20 14 L31 22.5" stroke="#5bbf3a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 16 L20 9 L29 16" stroke="#b7f569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size
  );
}
