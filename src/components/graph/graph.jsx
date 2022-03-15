import React, { useState } from "react";
import { useNavigate } from "react-router";
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import ButtonContext from "./buttonContext";
import NightButton from "../calendar/nightButton";
import "./graph.css";

function Graph() {
  const [name, setName] = useState({ name: "bartosz" });
  const [count, setCount] = useState(0);
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);

  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
  };

  return (
    <ButtonContext.Provider
      value={{ days, nights, count, setNights, setDays, name }}
    >
      <div className="grid-container">
        <ActualNurse />
        <NursesWindow />
        <Calendar />
        <InfoWindow />

        <button
          className="btn btn-warning frame backButton"
          onClick={handleSave}
        >
          Cofnij
        </button>

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
