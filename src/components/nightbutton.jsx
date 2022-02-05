import React, { Component } from "react";

class NightButton extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.thisNight();

            this.props.onClick();
          }}
          className="btn btn-secondary"
        >
          Noc
        </button>
      </div>
    );
  }
}

export default NightButton;
