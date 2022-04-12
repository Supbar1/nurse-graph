import React from "react";
import main from "./main.png";
import "./main.css";

function Main() {
  return (
    <React.Fragment>
      <p className="hello">
        Witamy w Interaktywny Grafiku szpitala Dzieciątka Judasz
      </p>
      <p className="hello">
        U dołu widzą państwo kozacką grafikę z pielęgniarką a u góry pasek
        nawigacyjny
      </p>
      <p className="hello">
        Proszę z niego skorzystać gdy w końcu nabierzecie ochoty by iść do
        roboty hehe
      </p>

      <div className="srodek">
        <img src={main} alt="pielęgniarka" className=" nurse-img" />
      </div>
    </React.Fragment>
  );
}

export default Main;
