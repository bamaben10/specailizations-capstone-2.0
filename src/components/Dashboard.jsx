import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails, searchSymbols } from "../api/stock-api";
import Card from "./Card";
import Watchlist from "./Watchlist/AddStock";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        console.log(result);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote({ symbol: stockSymbol });
        console.log(result);
        setQuote(result);
      } catch (error) {
        // setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div className="chart">
      <div className="header-card">
        <Header name={stockDetails.name} />
      </div>
      <div className="main">
        <div className="chart-card">
          <Chart />
        </div>
        <div className="right">
          <div className="overview-card">
            <Overview
              symbol={stockSymbol}
              price={quote.pc}
              change={quote.d}
              changePercent={quote.dp}
              currency={stockDetails.currency}
            />
          </div>
          <div className="details-card">
            <Details details={stockDetails} />
          </div>
          <div className="watchlist-card">
            <Watchlist>Watchlist</Watchlist>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
