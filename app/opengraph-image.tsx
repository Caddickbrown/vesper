import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vesper — Web tools, built in 48 hours";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#090909",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.2em",
            color: "#555",
            textTransform: "uppercase",
          }}
        >
          VESPER
        </div>

        {/* Middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            From brief
            <br />
            to live in
            <br />
            48 hours.
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#555",
              maxWidth: 580,
              lineHeight: 1.5,
            }}
          >
            Custom web tools and applications — properly built and shipped fast.
          </div>
        </div>

        {/* Bottom: pricing pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Page — £299", "Tool — £999", "Retainer — £249/mo"].map((label) => (
            <div
              key={label}
              style={{
                border: "1px solid #222",
                borderRadius: 6,
                padding: "10px 20px",
                fontSize: 14,
                color: "#888",
                letterSpacing: "0.05em",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
