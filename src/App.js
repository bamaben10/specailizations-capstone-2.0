import React, { useState } from "react";
import "./App.css";
// import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Dashboard />
      {/* <App /> */}
      {/* <Card /> */}
    </ThemeContext.Provider>
  );
}

export default App;
