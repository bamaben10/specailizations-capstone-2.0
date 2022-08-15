import React from "react";
import "./ChartFilter.css";
import { chartConfig } from "../constants/config";

const ChartFilter = ({ text, active, onClick }) => {
  // console.log(onClick)
  return <button onClick={onClick} className="filter-btn"></button>;
};

export default ChartFilter;
