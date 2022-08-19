import React, { useEffect, useState } from "react";
import "./StockCard.css";
// import axios from "axios";
import { fetchQuote } from "../../api/stock-api";

const StockCard = ({ stock, index, handleDelete }) => {
  console.log(stock);
  useEffect(() => {});

  const [price, setPrice] = useState();

  const getPrice = async () => {
    const result = await fetchQuote({ symbol: stock.stockSymbol });
    setPrice(result);
  };
  //   getPrice();
  //   console.log(price);

  return (
    <div className="stock-card-container">
      <button
        className="small-btn"
        onClick={(index) => {
          handleDelete(index);
        }}
      >
        X
      </button>
      <div className="stock-name">
        <h3>{stock.stockSymbol}</h3>
        {/* <h3>{price.c}</h3> */}
      </div>
    </div>
  );
};

export default StockCard;
