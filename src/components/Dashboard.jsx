import React from "react";
import Card from "./Card";
import { mockCompanyDetails } from "../constants/mock";
import "./Dashboard.css";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="chart">
      <div className="header-card">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="main">
        <div className="chart-card">
          <Card>Chart</Card>
        </div>
        <div className="right">
          <div className="overview-card">
            <Overview
              symbol={mockCompanyDetails.ticker}
              price={300}
              change={30}
              changePercent={10.0}
              currency={"USD"}
            />
          </div>
          <div className="details-card">
            <Details details={mockCompanyDetails} />
          </div>
          <div className="news-card">
            <Card>News</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
