import React from "react";
import { useNavigate } from "react-router";
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import ButtonProvider from "../calendar/buttonContext";
// import MonthProvider from "../calendar/monthContext";
import "./graph.css";

function Graph() {

  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
  };

  return (
    <ButtonProvider>
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
    </ButtonProvider>
  );
}

export default Graph;
