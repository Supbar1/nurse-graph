import React, { Component } from "react";
import main from "../img/main.png";
import "./main.css";

const Main = () => {
  return (
    <React.Fragment>
      <div className="">
        <div className="">
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
        </div>
      </div>
      <div className="srodek">
        <img src={main} alt="pielęgniarka" className="nurse-img" />
      </div>

      {/* <div className="heyhihello">
        <div className="helloWorld">
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
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Main;
