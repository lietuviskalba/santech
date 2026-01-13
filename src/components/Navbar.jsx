import React from "react";

const Navbar = ({ data, setLanguage, currentLanguage }) => {
  // Styles for the navigation bar
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#4a148c", // Dark purple
    color: "white",
    position: "sticky", // Sticks to top when scrolling
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const btnStyle = (lang) => ({
    padding: "5px 10px",
    marginLeft: "5px",
    cursor: "pointer",
    backgroundColor: currentLanguage === lang ? "#ab47bc" : "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "4px",
  });

  return (
    <nav style={navStyle}>
      {/* Brand Name */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SANTECH</div>

      {/* Navigation Links */}
      <div>
        {/* We use standard <a href="#id"> tags for scrolling */}
        <a href="#home" style={linkStyle}>
          {data.home}
        </a>
        <a href="#contact" style={linkStyle}>
          {data.contact}
        </a>
        <a href="#services" style={linkStyle}>
          {data.services}
        </a>
        <a href="#experience" style={linkStyle}>
          {data.experience}
        </a>
      </div>

      {/* Language Switcher */}
      <div>
        <button style={btnStyle("lt")} onClick={() => setLanguage("lt")}>
          LT
        </button>
        <button style={btnStyle("en")} onClick={() => setLanguage("en")}>
          EN
        </button>
        <button style={btnStyle("ru")} onClick={() => setLanguage("ru")}>
          RU
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
