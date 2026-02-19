import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Vikesh Kumar - Backend-Focused Full Stack Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            marginBottom: 20,
            background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Vikesh Kumar
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#94a3b8",
            marginBottom: 40,
            display: "flex",
          }}
        >
          Backend-Focused Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#64748b",
            display: "flex",
            gap: 20,
          }}
        >
          <span>MCA @ VIT</span>
          <span>·</span>
          <span>CGPA 9.46</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontSize: 24,
            color: "#475569",
            display: "flex",
          }}
        >
          vikesh.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
