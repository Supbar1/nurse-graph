import React from "react";
import "./myStyles.css";

function DateInfo() {
  const date = new Date();
  const day = date.toDateString();
  const d = day.slice(8, 10);
  
  return (
    <div className="dateInfo">
      <div className="dateWindow">{day}</div>
    </div>
  );
}

export default DateInfo;
