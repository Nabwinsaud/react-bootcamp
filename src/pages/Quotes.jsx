import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://type.fit/api/quotes";
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  //   const quoteIndex = Math.random() * quotes.length;
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  console.log(quotes[quoteIndex]);

  const getQuotes = async () => {
    const response = await axios.get(url);
    setQuotes(response.data);
  };
  //   getQuotes(); // infinte loop
  useEffect(() => {
    const timeout = setTimeout(() => {
      getQuotes();
    }, 2000);
    // cleanup function
    return () => {
      clearTimeout(timeout);
    };
  }, [quoteIndex]);
  //
  return (
    <div className="quotes">
      <p className="title">Random quote generator</p>
      <div className="quote">
        <span className="text">{quotes[quoteIndex]?.text}</span>
        <span className="author">{quotes[quoteIndex]?.author}</span>
      </div>
    </div>
  );
};

export default Quotes;
