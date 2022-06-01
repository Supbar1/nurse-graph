import "./style.css";
import fish from "./fish.jpg";
import React from "react";
import MorningButton from "./../calendar/elements/calendarBody/morningButton";

export default function Help() {
  function getBadgeClasses() {
    let classes = "badge m-2";
    classes += "warning";
    return classes;
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="card">
          <div className="imgBox">
            <img src={fish} alt="cos tu nie gra" />
            <div className="contentBx">
              <h2>Say hello to fish! </h2>
              <div className="size">
                <h3>I'm fucking fish</h3>
                <span>R</span>
                <span>Y</span>
                <span>B</span>
                <span>Y</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div className={getBadgeClasses()}></div>
      </div>
    </React.Fragment>
  );
}
