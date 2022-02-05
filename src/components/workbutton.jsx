import React, { Component } from "react";
import MorningButton from "./morningbutton";
import NightButton from "./nightButton";

class WorkButton extends React.Component {
  state = {
    used: false,
  };

  render() {
    return (
      <div>
        {this.state.used === false ? (
          <React.Fragment>
            <MorningButton
              onClick={() => this.setState({ used: true })}
              thisDay={this.props.thisDay}
            />
            <NightButton
              onClick={() => this.setState({ used: true })}
              thisNight={this.props.thisNight}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h5>Pracujesz</h5>
            <h6>xD</h6>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default WorkButton;
