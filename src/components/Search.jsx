import React, { useState, useContext, useEffect } from "react";
import "./Search.css";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { searchSymbols, fetchStockSymbols, fetchQuote } from "../api/stock-api";

const Search = () => {
  const [input, setInput] = useState(""); //this input will track the user query (what company/stock they are looking for)
  const [bestMatches, setBestMatches] = useState({});
  const [stock, setStock] = useState({});

  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  useEffect(() => {
    getStockQuote();
  }, [bestMatches]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        setStockSymbol(input.toUpperCase());
        console.log(searchResults[0]);
        await setBestMatches(searchResults[0]);
      }
    } catch (error) {
      // setBestMatches([]);
      console.log(error);
    }
  };

  const getStockQuote = async () => {
    const result = await fetchQuote(bestMatches);
    await setStock(result);
  };
  // const stockData = async () => {
  //   await updateBestMatches();
  //   await getStockQuote();
  // };
  // console.log(stock);

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

      <button onClick={() => updateBestMatches()} className="search-icon-1">
        <SearchIcon className="search-icon" />
      </button>

      {/* {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null} */}
    </div>
  );
};

export default Search;
