import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

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
          background:
            "linear-gradient(180deg, rgb(7, 87, 184) 0%, rgb(10, 55, 120) 100%)",
          borderRadius: "96px",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "24px",
            borderRadius: "80px",
            border: "2px solid rgba(255,255,255,0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          <div
            style={{
              fontSize: 176,
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            JMC
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "0.18em",
            }}
          >
            YYC
          </div>
        </div>
      </div>
    ),
    size,
  );
}
