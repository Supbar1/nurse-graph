import React, { useState } from "react";
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import "./graph.css";
import ButtonContext from "./buttonContext";
import NightButton from "../calendar/nightButton";

function Graph() {
  const [name, setName] = useState({ name: "bartosz" });
  const [count, setCount] = useState(0);
  const [days, setDays] = useState(0);
  
  function handleSave() {
    this.props.history.push("/table");
  }

  function incrementNights() {
    setNights({ nights: nights + 1 });
  }
  // incrementDays = () => {
    //   this.setState({ days: this.state.days + 1 });
    //   console.log(this.state.days);
    // };
    function thisDay() {
      setDays({ days: days + 1 });
    }
    function thisNight() {
      setNights({ nights: nights + 1 });
    }
    
    const [nights, setNights] = useState(0);
    return (
      <ButtonContext.Provider value={{ days, nights, count, setNights, setDays }}>
      <div className="grid-container">
        {/* <ActualNurse actualNurse={this.actualNurse} className="" /> */}
        {/* <NursesWindow className="nursesWindow" /> */}
        <NightButton />
        <Calendar
          thisNight={thisNight}
          thisDay={thisDay}
          className="actualCalendar frame"
        />

        <InfoWindow className="infoWindow" />

        {/* <button
          className="btn btn-warning frame backButton"
          onClick={handleSave}
        >
          Cofnij
        </button> */}

        <button
          className="btn btn-danger frame saveButton"
          onClick={handleSave}
        >
          Zapisz Zmiany
        </button>
      </div>
    </ButtonContext.Provider>
  );
}

export default Graph;
