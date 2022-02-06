import React, { Component } from "react";
import DateInfo from "./dateinfo";
import Calendar from "./calendar";
import "./calendar.css";
import LoginForm from "./loginForm";
import WorkButton from "./workbutton";

class Help extends Component {
  state = {
    day: "",
    night: "",
  };

  thisDay = () => {
    this.setState({ day: +1 });
  };
  thisNight = () => {
    this.setState({ night: +1 });
  };
  render() {
    const person = [
      {
        name: "mosh",
        age: 30,
      },
      {
        name: "mosha",
        age: 1,
      },
    ];
    for (let key in person) {
      if (person[key].age === 1) 
      console.log(person[key].age);
    }

    return (
      <React.Fragment>
        <WorkButton thisDay={this.thisDay} thisNight={this.thisNight} />
      </React.Fragment>
    );
  }
}

export default Help;

// const Help = () => {
//   return (
//     <React.Fragment>
//       <WorkButton />
//     </React.Fragment>
//   );
// };

// export default Help;
