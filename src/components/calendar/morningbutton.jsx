import React, { Component } from "react";
import "./calendar.css";

class MorningButton extends React.Component {
  render() {
    return (
      // <p className="dupa">Hajda Ha!</p>
      <div
        onClick={() => {
          this.props.thisDay();

          this.props.onClick();
        }}
        className="lewy"
      >
       
          <i className="fa-solid fa-sun yellow"></i>
      
      </div>
    );
  }
}

export default MorningButton;
