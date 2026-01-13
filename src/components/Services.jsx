import React from "react";

const Services = ({ data }) => {
  return (
    <div
      id="services"
      style={{ padding: "60px 20px", backgroundColor: "#f3e5f5" }}
    >
      <h2
        style={{ textAlign: "center", color: "#4a148c", marginBottom: "40px" }}
      >
        {data.title}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {data.list.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#333",
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
