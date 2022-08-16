import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);
  return (
    <ul className="search-options" custom-scrollbar>
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="drop-down"
            onClick={() => {
              setStockSymbol(item.symbol);
            }}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
