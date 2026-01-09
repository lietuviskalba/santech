import React from "react";

// We pass "data" as a prop. This is the text for the current language.
const Intro = ({ data }) => {
  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        backgroundColor: "#f3e5f5", // Light purple background
        color: "#4a148c", // Dark purple text
      }}
    >
      <h1>{data.title}</h1>
      <p style={{ fontSize: "1.2rem" }}>{data.subtitle}</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#7b1fa2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {data.button}
      </button>
    </div>
  );
};

export default Intro;
