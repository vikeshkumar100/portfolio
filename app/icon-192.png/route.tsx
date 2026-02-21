import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
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
          fontSize: 130,
          fontWeight: 800,
          fontFamily: "Arial, Helvetica, sans-serif",
          borderRadius: 32,
        }}
      >
        V
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  )
}
