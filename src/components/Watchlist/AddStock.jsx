import React, { useState, useContext } from "react";
import "./AddStock.css";
import Card from "../Card";
import StockDisplay from "./StockDisplay";
import axios from "axios";
import StockContext from "../../context/StockContext";

const AddStock = () => {
  const stock = useContext(StockContext);
  const [stockList, setStockList] = useState([]);

  const handleDelete = (index) => {
    axios.delete("http://localhost:5000/watchlist", index).then(setStockList);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:5000/watchlist", stock)
      .then((res) => setStockList(res.data));
  };
  console.log(stockList);
  return (
    <Card>
      <div className="add-stock-title-container">
        <h1>Add {stock.stockSymbol} to Watchlist</h1>

        <button className="add-btn" onClick={handleClick}>
          Add Stock
        </button>
      </div>
      <StockDisplay
        stock={stock.stockSymbol}
        stockList={stockList}
        handleDelete={handleDelete}
      />
    </Card>
  );
};

export default AddStock;
