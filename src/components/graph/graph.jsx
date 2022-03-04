import React, { Component } from "react";
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import "./graph.css";

class Graph extends React.Component {
  state = {
    count: 0,
    days: 0,
    nights: 0,
    actualNurse: "",
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
    console.log(this.state.actualNurse);
    this.setState({ nights: this.state.nights + 1 });
  };
  actualNurse = (nurse) => {
    console.log("MexicanoTv");
    // this.setState({ actualNurse: nurse.name });
  };
  render() {
    return (
      <div className="grid-container">
        <ActualNurse actualNurse={this.actualNurse} className="" />
        {/* <NursesWindow className="nursesWindow" /> */}

        <Calendar
          thisNight={this.thisNight}
          thisDay={this.thisDay}
          //className="actualCalendar frame"
        />

        <InfoWindow
          nights={this.state.nights}
          days={this.state.days}
          className="infoWindow"
        />

        <button
          className="btn btn-warning frame backButton"
          onClick={this.handleSave}
        >
          Cofnij
        </button>

        <button
          className="btn btn-danger frame saveButton"
          onClick={this.handleSave}
        >
          Zapisz Zmiany
        </button>
      </div>
    );
  }
}

export default Graph;
