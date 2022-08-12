import React from "react";
import Card from "./Card";
import { mockCompanyDetails } from "../constants/mock";
import "./Dashboard.css";
import Header from "./Header";

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
            <Card>Overview</Card>
          </div>
          <div className="details-card">
            <Card>Details</Card>
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
