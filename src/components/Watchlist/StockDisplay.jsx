import React, { useEffect, useState } from "react";
import StockCard from "./StockCard";
import axios from "axios";
import "./StockDisplay.css";

const StockDisplay = (props) => {
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/watchlist").then((res) => {
      console.log(res.data);
      setWatchlist(res.data);
    });
  }, [props.stockList]);

  const stockDisplay = watchlist.map((stock, index) => {
    return (
      <StockCard
        stock={stock}
        index={index}
        handleDelete={props.handleDelete}
      />
    );
  });

  return (
    <div className="stock-container">
      <h2 className="stock-container-title">My Stocks</h2>
      {stockDisplay}
    </div>
  );
};

export default StockDisplay;
