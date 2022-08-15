import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul className="search-options" custom-scrollbar>
      {results.map((item) => {
        return (
          <li key={item.symbol} className="drop-down">
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
