import React, { Component } from "react";
import main from "../img/main.png";

const Main = () => {
  return (
    <React.Fragment>
      <div className="hello">
        <p>Witamy w Interaktywny Grafiku szpitala Dzieciątka Judasz</p>
        <p>
          U dołu widzą państwo kozacką grafikę z pielęgniarką a u góry pasek
          nawigacyjny
        </p>
        <p>
          Proszę z niego skorzystać gdy w końcu nabierzecie ochoty by iść do
          roboty hehe
        </p>
        <img src={main} alt="dupa" className="mainImage" />
      </div>
      <div className="grid-container">
        <div className="item">
          <p className="button">Kalendarz</p>
        </div>
        <div className="item">
          <p className="button">Lista pigułek</p>
        </div>
        <div className="item">
          <p className="button">Przycisk pocisk</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
