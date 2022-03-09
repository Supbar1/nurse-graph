import React, { Component, useEffect, useState, Fragment } from "react";
import MoviePage from "../mosh/MoviePage";
import UserContext from "../mosh/userContext";
import WorkButton from "./calendar/workbutton";
import MorningButton from "./calendar/morningbutton";
import NightButton from "./calendar/nightButton";
import CalendarContext from "./calendar/calendarContex";

function Help() {
  const [working, setWorking] = useState(false);

  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);
  // function dupczik() {
  //   console.log("dupczik");
  // }

  return (
    <CalendarContext.Provider
      value={{ working, setWorking, days, setDays, nights, setNights }}
    >
      {working === false ? (
        <React.Fragment>
          <div className="workbutton">
            <MorningButton />
            <NightButton />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h5>Nights: {nights}</h5>
          <h6>Days: {days}</h6>
        </React.Fragment>
      )}
    </CalendarContext.Provider>
  );
}

export default Help;
