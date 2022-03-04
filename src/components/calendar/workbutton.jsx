import React, { Component } from "react";
import MorningButton from "./morningbutton";
import NightButton from "./nightButton";
import "./calendar.css";
class WorkButton extends React.Component {
  state = {
    used: false,
  };

  render() {
    return (
      <React.Fragment>
        {this.state.used === false ? (
          <React.Fragment>
            {/* <div className="kolumny">
              <div className=" dupa">Dzien</div>
              <div className="jaja">Noc</div>
            </div> */}

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
      </React.Fragment>
    );
  }
}
export default WorkButton;
