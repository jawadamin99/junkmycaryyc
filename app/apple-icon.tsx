import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

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
          background:
            "linear-gradient(180deg, rgb(7, 87, 184) 0%, rgb(10, 55, 120) 100%)",
          borderRadius: "36px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
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
              fontSize: 62,
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            JMC
          </div>
          <div
            style={{
              marginTop: 2,
              fontSize: 20,
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
