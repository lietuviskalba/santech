import React, { useState } from "react";
import content from "./data/content.json";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("lt");
  const t = content[language];

  return (
    // "scrollBehavior: smooth" makes the jump between sections animate nicely
    <div style={{ fontFamily: "Arial, sans-serif", scrollBehavior: "smooth" }}>
      {/* 1. Navbar: We pass the language text AND the switcher function */}
      <Navbar
        data={t.navbar}
        setLanguage={setLanguage}
        currentLanguage={language}
      />

      {/* 2. Intro Section with ID="home" so the navbar link works */}
      <div id="home">
        <Intro data={t.intro} />
      </div>

      {/* 3. Contact Section */}
      <Contact data={t.contactSection} />

      {/* Placeholders for future sections so links don't break */}
      <div id="services" style={{ height: "300px", padding: "20px" }}>
        Services Section (Coming Soon)
      </div>
      <div id="experience" style={{ height: "300px", padding: "20px" }}>
        Experience Section (Coming Soon)
      </div>
    </div>
  );
}

export default App;
