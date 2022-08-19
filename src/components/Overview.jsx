import React from "react";
import Card from "./Card";
import "./Overview.css";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  // console.log(symbol);
  return (
    <Card className="overview-card">
      <div>{symbol}</div>
      <div>${price}</div>
      <div>{currency}</div>
      <div>
        {change} ({changePercent}%)
      </div>
    </Card>
  );
};

export default Overview;
