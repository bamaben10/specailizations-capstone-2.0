import React, { useState } from "react";
import "./App.css";
// import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";
// import api from "./api";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("tsla");
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
