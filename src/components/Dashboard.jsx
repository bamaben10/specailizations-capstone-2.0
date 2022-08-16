import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockDetails();
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
          {/* <div className="news-card"><Card>News</Card></div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
