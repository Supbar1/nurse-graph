import React, { Component } from "react";
import "./calendar.css";
import WorkButton from "./workbutton";
class Calendar extends Component {
  state = {
    date: new Date(),
    prevDays: [],
    daysOfMonth: [],
    nextDays: [],
    monthChange: 0,
    workDays: [],
    day: "",
    night: "",
    months: [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ],
  };

  componentDidMount() {
    const date = new Date();

    date.setUTCDate(1);

    let firstDayIndex = date.getDay() - 1;

    let prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth() + this.state.monthChange,
      0
    ).getDate();

    let lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + this.state.monthChange,
      0
    );

    let lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + this.state.monthChange,
      0
    ).getDay();

    let previousDays = [];
    for (let x = firstDayIndex; x > 0; x--) {
      previousDays.push(prevLastDay - x + 1);
    }

    let currentDate = new Date();
    let days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      currentDate.setUTCDate(i);
      days.push({ day: i, special: currentDate.getDay() === 0 ? true : false });
      //
    }

    let nextMonthDays = [];
    for (let y = 1; y <= 7 - lastDayIndex; y++) {
      nextMonthDays.push(y);
    }

    this.setState({
      prevDays: previousDays,
      daysOfMonth: days,
      nextDays: nextMonthDays,
    });
  }
  thisDay = () => {
    this.setState({ day: +1 });
  };
  thisNight = () => {
    this.setState({ night: +1 });
  };

  workDay = (dayObject) => {
    const allDays = [{ day: dayObject, special: 1 }, ...this.state.workDays];

    // console.log(allDays);
    this.setState({ workDays: allDays });
    // console.log(this.state.workDays);
    return <div>H U y</div>;
  };

  show(dday) {
    console.log(this.state.workDays);
    // for (let key in this.state.workDays) {
    //   if (this.state.workDays[key].day === dday)
    //     return console.log("hej", dday);
    //   return null;
    // }
  }
  handleDaySelect = (ddday) => {
    const preFilter = [...this.state.workDays];
    for (let key in preFilter) {
      if (preFilter[key].day === ddday) 
      return <WorkButton />;
      return ddday;
      //     return null;
      // const filtered = preFilter.filter(f => f.day === ddday)
    }
  };

  render() {
    const { prevDays, daysOfMonth, nextDays } = this.state;
    const date = new Date();
    let currentMonth = this.state.months[date.getMonth()];
    let currentDay = date.getDate();
    let currentYear = date.getFullYear();

    return (
      <React.Fragment>
        <div className="container">
          <div className="calendar">
            <div className="month">
              <i
                onClick={this.previousMonth}
                className="fas fa-angle-left next"
              ></i>
              <div className="date">
                <h1>{currentMonth}</h1>
                <p>
                  {" "}
                  {currentDay}.{date.getMonth() + 1}.{currentYear}
                </p>
              </div>
              <i onClick={this.dni} className="fas fa-angle-right next"></i>
            </div>
            <div className="weekdays">
              <div>Pon</div>
              <div>Wt</div>
              <div>Śr</div>
              <div>Czw</div>
              <div>Pt</div>
              <div>Sob</div>
              <div>Nie</div>
            </div>

            <div className="days">
              {prevDays.map((day) => (
                <div key={day} className="prev-date">
                  {day}
                </div>
              ))}
              {daysOfMonth.map((dayObject) => (
                <div
                  onClick={() => this.workDay(dayObject.day)}
                  key={dayObject.day}
                  className={`${
                    dayObject.day === new Date().getDate() ? "today" : ""
                  } ${dayObject.special ? "specialDay" : ""}`}
                >
                  {dayObject.day === this.show(dayObject.day) ? (
                    <WorkButton />
                  ) : (
                    dayObject.day
                  )}
                </div>
              ))}
              {nextDays.map((day) => (
                <div key={day} className="prev-date">
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar;
