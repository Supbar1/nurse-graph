import React, { Component } from "react";
import WorkButton from "./workbutton";
import "./calendar.css";

class Calendar extends Component {
  state = {
    date: new Date().setUTCDate(1),
    prevDays: [],
    daysOfMonth: [],
    nextDays: [],
    monthChange: 0,
    workDays: [],
    day: [],
    night: [],
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

  previousMonth = () => {
    this.setState({ monthChange: this.state.monthChange - 1 });
    this.componentDidMount();
  };
  nextMonth = () => {
    this.setState({ monthChange: this.state.monthChange + 1 });
    this.componentDidMount();
    // this.setState({ prevDays: [1,2,3] });
    console.log(this.state.daysOfMonth)
  };
  
  
  workDay = (dayObject) => {
    const allDays = [{ day: dayObject, special: 1 }, ...this.state.workDays];
    this.setState({ workDays: allDays });
    
  };
  handleDaySelect = (ddday) => {
    const preFilter = [...this.state.workDays];
    for (let key in preFilter)
    if (preFilter[key].day === ddday.day)
    return (
      <WorkButton
      thisNight={this.props.thisNight}
      thisDay={this.props.thisDay}
      />
        );
    return ddday.day;
  };
  componentDidMount() {
    const date = new Date();
    let actualMonth = date.getMonth();
    date.setUTCDate(1);
    date.setMonth(actualMonth+this.state.monthChange);

    let firstDayIndex = date.getDay() + 7;
    firstDayIndex > 7 ? firstDayIndex-=7 : firstDayIndex=firstDayIndex;
     
    date.setMonth(actualMonth+1);

    const lastPreviousDay = new Date(
      date.getFullYear(),
      date.getMonth()+this.state.monthChange,0).getDate();
    
    let lastDayNumber = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + this.state.monthChange,0).getDate();

      let lastCurrentDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1 + this.state.monthChange,
        0
        ).getDay();

        
        lastCurrentDayIndex +=7;
        lastCurrentDayIndex > 7 ? lastCurrentDayIndex-=7 : lastCurrentDayIndex=lastCurrentDayIndex;

let prevDays = [];

for (let x = firstDayIndex; x > 1; x--) {
    prevDays.push(lastPreviousDay - x +2);
}

let days = [];
for (let i = 1; i <= lastDayNumber; i++) {
    days.push(i);}
  
  let nextDays = [];
  for (let y = 1; y <= 7  - lastCurrentDayIndex; y++) {
    console.log(y, "next days")
    nextDays.push(y);
  }
  
  this.setState({
    prevDays: prevDays,
    daysOfMonth: days,
    nextDays: nextDays,
  });
  // console.log(daysOfMonth, "pojszlo")
  }
  
  render() {
    const { prevDays, daysOfMonth, nextDays } = this.state;
    return (
      <React.Fragment>
        <div className=" actualCalendar">
          <div className="calendar">
            <div className="month">
              <i
                onClick={this.previousMonth}
                className="fas fa-angle-left next"
              ></i>
              <div className="date">
             
              </div>
              <i
                onClick={this.nextMonth}
                className="fas fa-angle-right next"
              ></i>
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
                <div key={day} className=" grafButton btna-3 prev-date">
                  {day}
                </div>
              ))}

              {daysOfMonth.map((dayObject) => (
                <div
                  onClick={() => this.workDay(dayObject.day)}
                  key={dayObject.day}
                  className={`${dayObject.day === new Date().getDate() ? "today" : ""
                    } ${dayObject.special ? "specialDay" : ""}`}
                >aaas
                  {/* {this.handleDaySelect(dayObject)} */}
                </div>
              ))}
              
              {nextDays.map((day) => (
                <div key={day} className="prev-date grafButton btna-3">
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

    
      // handleDaySelect = (ddday) => {
      //   const preFilter = [...this.state.workDays];
      //   for (let key in preFilter)
      //     if (preFilter[key].day === ddday.day)
      //       return (
      //         <WorkButton
      //           thisNight={this.props.thisNight}
      //           thisDay={this.props.thisDay}
      //         />
      //       );
      //   return ddday.day;
      
    
      
        // console.log(this.state.previousDays)
        // const { previousDays, daysOfMonth, nextDays } = this.state;
        // const date = new Date();
        // let currentMonth = this.state.months[date.getMonth()];
        // let currentDay = date.getDate();
        // let currentYear = date.getFullYear();
    //--------------------------------------------------------------------------------------------------
    //     const data = new Date();
    //     let aktualnyMiesiąc = data.getMonth();
    //     data.setUTCDate(1);
    //     data.setMonth(aktualnyMiesiąc+this.state.monthChange);
    
    //     let pierwszyDzienIndex = data.getDay() + 7;
    //     pierwszyDzienIndex > 7 ? pierwszyDzienIndex-=7 : pierwszyDzienIndex=pierwszyDzienIndex;
        
    //     // console.log("pierwszy wypada w: ", pierwszyDzienIndex);    
    //     data.setMonth(aktualnyMiesiąc+1);
    
    //     const ostatniPoprzedniego = new Date(date.getFullYear(),
    //     date.getMonth()+this.state.monthChange,0).getDate();
        
    //     let ostatniObecnegoNumer = new Date(
    //       date.getFullYear(),
    //       date.getMonth() + 1 + this.state.monthChange,
    //       0
    //       ).getDate();
    
    //       let ostatniObecnegoIndex = new Date(
    //         date.getFullYear(),
    //         date.getMonth() + 1 + this.state.monthChange,
    //         0
    //         ).getDay();
    // ostatniObecnegoIndex +=7;
    // ostatniObecnegoIndex > 7 ? ostatniObecnegoIndex-=7 : ostatniObecnegoIndex=ostatniObecnegoIndex;
    
    
    
    // let poprzednieDni = [];
    
    // for (let x = pierwszyDzienIndex; x > 1; x--) {
    //   poprzednieDni.push(ostatniPoprzedniego - x +2);
    // }
    
    // // let currentDate = new Date();
    // let dniMiesiaca = [];
    // for (let i = 1; i <= ostatniObecnegoNumer; i++) {
    //   dniMiesiaca.push(i);}
      
    //   let dniNastepnegoMiesiaca = [];
    //   for (let y = 1; y <= 7 - ostatniObecnegoIndex; y++) {
    //     dniNastepnegoMiesiaca.push(y);
    //   }
    //   console.log("dni nastepnego miesiaca ", dniNastepnegoMiesiaca)
    
    //--------------------------------------------------------------------------------------------------
        