import React, { Component } from "react";

class InfoWindow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="list-group">
          <h2>Wesołe Okienko</h2>
          <p>{this.props.days} dni</p>
          <p>{this.props.nights} noc</p>
          <h2>Razem: {this.props.nights + this.props.days}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default InfoWindow;
