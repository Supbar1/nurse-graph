import React, { Component } from "react";
import InfoWindow from "./infoWindow";
import Calendar from "./calendar";
import "./calendar.css";

class Graph extends React.Component {
  state = {
    count: 0,
    days: 0,
    nights: 0,
  };

  handleSave = () => {
    this.props.history.push("/table");
  };

  incrementNights = () => {
    this.setState({ nights: this.state.nights + 1 });
    console.log(this.state.nights);
  };
  incrementDays = () => {
    this.setState({ days: this.state.days + 1 });
    console.log(this.state.days);
  };
  thisDay = () => {
    this.setState({ days: this.state.days + 1 });
  };
  thisNight = () => {
    console.log("noc");
    this.setState({ nights: this.state.nights + 1 });
  };
  render() {
    return (
      <div className="grid-container">
        <button className="btn btn-primary one item1" onClick={this.handleSave}>
          Zapisz Zmiany
        </button>
        <div className="itemX"></div>
        <InfoWindow
          className="item2"
          nights={this.state.nights}
          days={this.state.days}
        />
        <Calendar
          thisNight={this.thisNight}
          thisDay={this.thisDay}
          className="item3"
        />
      </div>
    );
  }
}

export default Graph;
