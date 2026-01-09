import React from "react";

// We pass "data" as a prop. This is the text for the current language.
const Contact = ({ data }) => {
  return (
    <div>
      <h1>Kontaktas: +3706785474877 {data.phone}</h1>
    </div>
  );
};

export default Contact;
