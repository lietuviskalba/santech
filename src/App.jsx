import React, { useState } from "react";
import content from "./data/content.json"; // Importing our "database"
import contactinfo from "./data/contactinfo.json"; // Importing our "database"
import Intro from "./components/Intro";
import Contact from "./components/Contact";

function App() {
  // 1. State to keep track of current language. Default is 'lt' (Lithuanian)
  const [language, setLanguage] = useState("lt");

  // 2. Get the content for the current language
  const t = content[language];
  const n = contactinfo;

  return (
    <div>
      {/* Temporary Language Switcher for testing */}
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "white",
          padding: 5,
        }}
      >
        <button onClick={() => setLanguage("lt")}>LT</button>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("ru")}>RU</button>
      </div>

      {/* 3. Render the Intro, passing the specific text data */}
      <Intro data={t.intro} />
      <Contact data={n.phone} />
    </div>
  );
}

export default App;
