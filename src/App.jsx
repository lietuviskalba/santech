import React, { useState } from "react";
import content from "./data/content.json";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Services from "./components/Services"; // New
import Gallery from "./components/Gallery"; // New

function App() {
  const [language, setLanguage] = useState("lt");
  const t = content[language];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", scrollBehavior: "smooth" }}>
      <Navbar
        data={t.navbar}
        setLanguage={setLanguage}
        currentLanguage={language}
      />

      <div id="home">
        <Intro data={t.intro} />
      </div>

      {/* Services before Contact usually flows better */}
      <Services data={t.services} />

      <Contact data={t.contactSection} />

      <Gallery data={t.gallery} />

      {/* Simple Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#333",
          color: "white",
        }}
      >
        &copy; 2026 Santech. Vilnius.
      </footer>
    </div>
  );
}

export default App;
