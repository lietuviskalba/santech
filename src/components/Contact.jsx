import React from "react";

const Contact = ({ data }) => {
  return (
    <div id="contact" style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ color: "#4a148c", marginBottom: "30px" }}>{data.title}</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "20px",
          }}
        >
          {/* Phone Block */}
          <div
            style={{
              padding: "20px",
              border: "2px solid #e1bee7",
              borderRadius: "10px",
              minWidth: "250px",
            }}
          >
            <h3>{data.phoneLabel}</h3>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#7b1fa2",
              }}
            >
              <a
                href="tel:+37060000000"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +370 600 00000
              </a>
            </p>
          </div>

          {/* Area Block */}
          <div
            style={{
              padding: "20px",
              border: "2px solid #e1bee7",
              borderRadius: "10px",
              minWidth: "250px",
            }}
          >
            <h3>{data.areaTitle}</h3>
            <p>{data.areaText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
