import React, { useContext } from "react";
import "./Card.css";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children, className }) => {
  const { darkMode } = useContext(ThemeContext);
  return <div className={"card-container " + className}>{children}</div>;
};

export default Card;
