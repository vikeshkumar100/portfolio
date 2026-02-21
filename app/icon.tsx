import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png"

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 800,
          fontFamily: "Arial, Helvetica, sans-serif",
          borderRadius: 6,
        }}
      >
        V
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}
