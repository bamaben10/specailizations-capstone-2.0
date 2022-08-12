import React from "react";
import Card from "./Card";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="chart">
      <div className="header-card">
        <Card>Header</Card>
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
