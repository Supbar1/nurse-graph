import React, { Component } from "react";
import "./graph.css";

class NursesWindow extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="nursesWindow">
          <p>Pracują już:</p>
          <p>-Beatka</p>
          <p>-Bożenka</p>
          <p>-Barbara</p>
        </div>
      </React.Fragment>
    );
  }
}

export default NursesWindow;
