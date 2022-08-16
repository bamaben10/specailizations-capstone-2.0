import React, { useContext } from "react";
import "./Card.css";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return <div className={"parent"}>{children}</div>;
};

export default Card;
