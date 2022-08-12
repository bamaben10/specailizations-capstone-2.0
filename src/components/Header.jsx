import React from "react";
import Search from "./Search";
import "./Header.css";

const Header = ({ name }) => {
  return (
    <>
      <div className="header-container">
        <h1 className="header-card">{name}</h1>
        <Search />
      </div>
      {/* <ThemeIcon /> */}
    </>
  );
};

export default Header;
