import React, { useState } from "react";
import "./App.css";
// import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
// import api from "./api";

const stockArr = ["TSLA", "NFLX", "GME", "BBBY", "AMZN"];
const starterStock = stockArr[Math.floor(Math.random() * stockArr.length)];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState(starterStock);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
      {/* <App /> */}
      {/* <Card /> */}
    </ThemeContext.Provider>
  );
}

export default App;
