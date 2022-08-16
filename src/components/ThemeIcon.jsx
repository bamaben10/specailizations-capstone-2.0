import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";
import "./ThemeIcon.css";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <MoonIcon className="moon-btn" />
    </button>
  );
};

export default ThemeIcon;
