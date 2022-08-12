import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";

const Search = () => {
  const [input, setInput] = useState(""); //this input will track the user query (what company/stock they are looking for)
  const [bestMatches, setBestMatches] = useState(mockSearchResults.results);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };
  return <div className="search-container"></div>;
};

export default Search;
