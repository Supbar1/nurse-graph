import React, { Component } from "react";

class MorningButton extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.thisDay();

            this.props.onClick();
          }}
          className="btn btn-warning"
        >
          Dzień
        </button>
      </div>
    );
  }
}

export default MorningButton;