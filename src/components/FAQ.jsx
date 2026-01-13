import React, { useState } from "react";

const FAQ = ({ data }) => {
  // State to track which question is open. Null means all closed.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    // If clicking the one already open, close it (set to null). Otherwise open new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="section-container"
      style={{ backgroundColor: "#fff" }}
    >
      <h2 className="section-title">{data.title}</h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {data.items.map((item, index) => (
          <div
            key={index}
            style={{ marginBottom: "10px", borderBottom: "1px solid #ddd" }}
          >
            {/* The Question (Clickable) */}
            <button
              onClick={() => toggleQuestion(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "15px",
                background: "none",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "var(--text-color)", // We will set this variable soon
              }}
            >
              {item.q}
              <span
                style={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0)",
                  transition: "0.3s",
                }}
              >
                ▼
              </span>
            </button>

            {/* The Answer (Hidden/Shown) */}
            {openIndex === index && (
              <div
                style={{
                  padding: "0 15px 20px 15px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
