import React, { useState } from "react";
import axios from "axios";
import "../style.css";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setQuote(res.data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="title">'Quote Generator'</h1>
      <button onClick={getQuote}>Get quote</button>
      {quote && <h1 className="quote">{quote}</h1>}
    </div>
  );
};

export default QuoteGenerator;
