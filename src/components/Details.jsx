import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Card from "./Card";
import "./Details.css";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);
  const detailsList = {
    name: "Name",
    country: "Country",
    ipo: "IPO Date",
    exchange: "Exchange",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="market-cap-deats">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="list-items">
              <span>{detailsList[item]}</span>
              <span>
                {item === "marketCapitalization"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
