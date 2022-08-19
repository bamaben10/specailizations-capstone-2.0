import React from "react";
import Search from "./Search";
import "./Header.css";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
      <div className="header-container">
        <Search />
        <h1 className="header-card">{name}</h1>
        <div />
      </div>
      <ThemeIcon />
    </>
  );
};

export default Header;
