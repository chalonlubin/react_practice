import { useState, useEffect } from "react";
import "./quoteGenerator.css"

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <section>
      <h1>Compontent 3: Quote Generator</h1>
      <div className="qg-container">
        <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}"
        </h3>
        {quote.author &&
        <i>- {quote.author}</i>
        }
      </div>
    </section>
  );
}
