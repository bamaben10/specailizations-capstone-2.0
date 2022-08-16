import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
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
