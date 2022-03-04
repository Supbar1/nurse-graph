import React, { Component } from "react";
import "./myStyles.css";

class DateInfo extends Component {
  state = {};
  render() {
    const date = new Date();
    const day = date.toDateString();
    const d = day.slice(8, 10);
    console.log(d);
    return (
      <div className="dateInfo">
        <div className="dateWindow">{day}</div>
      </div>
    );
  }
}

export default DateInfo;
