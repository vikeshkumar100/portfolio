import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  const icon = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0F14",
          color: "#F5F7FA",
          fontSize: 32,
          fontWeight: 800,
          fontFamily: "Arial, Helvetica, sans-serif",
          borderRadius: 8,
        }}
      >
        V
      </div>
    ),
    {
      width: 48,
      height: 48,
    }
  )

  return new Response(icon.body, {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
