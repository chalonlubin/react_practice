import { useState } from "react";

export default function Question({ question }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="question-container">
      <div className={isOpen ? "open" : "closed"} onClick={() => setOpen(!isOpen)}>
        <h4>{question.title}</h4>
        <button >{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </div>
  );
}
