import React, { useState } from "react";
import { mockSearchResults } from "../constants/mock";
import "./Search.css";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";

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
  return (
    <div className="search-container">
      <input
        type="text"
        value={input}
        className="drop-down"
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear}>
          <XIcon className="x-button" />
        </button>
      )}

      <button onClick={updateBestMatches} className="search-icon-1">
        <SearchIcon className="search-icon" />
      </button>

      {/* {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null} */}
    </div>
  );
};

export default Search;
