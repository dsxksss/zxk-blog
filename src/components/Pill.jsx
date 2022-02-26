import React from "react";
export default function Pill({
  children,
  text = "black",
  bg = "#10d2f5",
  textW = "200",
  brd = "20px",
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: textW,
        backgroundColor: bg,
        borderRadius: brd,
        color: text,
        padding: "0.1rem 0.5rem",
        margin: "0rem 0.3rem",
      }}
    >
      {children}
    </span>
  );
}
