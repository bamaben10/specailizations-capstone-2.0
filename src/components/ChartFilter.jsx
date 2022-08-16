import React from "react";
import "./ChartFilter.css";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? "bg-indigo-600 border-indigo-700 text-gray-100"
          : "border-indigo-300 text-indigo-300"
      }`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
