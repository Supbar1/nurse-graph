import React, { Component } from "react";

class NightButton extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.thisNight();

          this.props.onClick();
        }}
        className="lewy"
      >
        <i className="fa-solid fa-moon silver"></i>
      </div>
    );
  }
}

export default NightButton;
