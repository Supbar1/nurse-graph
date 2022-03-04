import React, { Component } from 'react';

class help extends Component {
state ={
  lastPreviousDay:[]
}
funkcja() {
  let date = new Date();
  const kurwaDzialaj = new Date(date.getFullYear()).getDate();
console.log(kurwaDzialaj)
  // this.setState({lastPreviousDay})
  }
  render() {
    this.funkcja();
    return (
      <div>
        {this.state.lastPreviousDay}
      </div>
    );
  }
}

export default help;