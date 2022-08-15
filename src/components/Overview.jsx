import React from "react";
import Card from "./Card";
import "./Overview.css";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span className="overview-info">
        {symbol}
        <div className="overview-look">
          <span className="overview">
            ${price}
            <span>{currency}</span>
          </span>
          <span
            className={`text-lg xl:text-xl 2xl:text-2xl ${
              change > 0 ? "text-lime-500" : "text-red-500"
            }`}
          >
            {change} <span>({changePercent}%)</span>
          </span>
        </div>
      </span>
    </Card>
  );
};

export default Overview;
