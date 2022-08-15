import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  console.log(children);
  return <div className="parent">{children}</div>;
};

export default Card;
