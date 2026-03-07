import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "이상무 - Backend & Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #080c12 0%, #0f1d2e 50%, #0a1628 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#67e8f9",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio 2026
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#f1f5f9",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          이상무
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a5f3fc",
            marginBottom: 32,
          }}
        >
          Backend-Centered Product Engineer
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          가치 있는 것을 제대로 만드는 개발자
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
          }}
        >
          {["NestJS", "Docker", "K8s", "PostgreSQL", "TypeScript"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(103,232,249,0.3)",
                  background: "rgba(103,232,249,0.1)",
                  color: "#a5f3fc",
                  fontSize: 16,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
