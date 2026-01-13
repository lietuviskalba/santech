import React from "react";

// 1. Tell Vite to find all images in this folder.
// "eager: true" means load them immediately, not when we scroll to them.
const imagesImport = import.meta.glob(
  "/src/assets/work_xp/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// 2. Convert the result into a simple array of URL strings
const images = Object.values(imagesImport).map((img) => img.default);

const Gallery = ({ data }) => {
  return (
    <div
      id="experience"
      style={{ padding: "60px 20px", backgroundColor: "#fff" }}
    >
      <h2
        style={{ textAlign: "center", color: "#4a148c", marginBottom: "40px" }}
      >
        {data.title}
      </h2>

      {/* If no images are found, show a message */}
      {images.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No images found in src/assets/work_xp
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "15px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {images.map((imgSrc, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={imgSrc}
                alt={`Work example ${index + 1}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover", // Ensures photos fill the square without stretching
                  transition: "transform 0.3s",
                }}
                // Simple hover effect to zoom in slightly
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
