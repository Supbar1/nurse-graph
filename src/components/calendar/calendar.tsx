import React, { useEffect, useState, Fragment } from "react";
import WorkButton from "./workbutton";
import "./calendar.css";

interface workingDays {
  day: number,
  working: boolean;
}

const Calendar: React.FC = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const [nextDays, setNextDays] = useState<number[]>([]);
  const [prevDays, setPrevDays] = useState<number[]>([]);
  const [monthChange, setMonthChange] = useState(0);
  const [workDays, setworkDays] = useState<workingDays[]>([]);
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesien",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  useEffect(() => {
    
    const date = new Date();
    date.setUTCDate(1);

    let firstDayIndex =
      new Date(date.getFullYear(), date.getMonth() + monthChange, 0).getDay() +
      7;
    firstDayIndex > 7 ? (firstDayIndex -= 7) : (firstDayIndex = firstDayIndex);

    const lastPreviousDay = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange,
      0
    ).getDate();

    

    let lastDayNumber = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + monthChange,
      0
    ).getDate();

    let lastCurrentDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + monthChange,
      0
    ).getDay();

    let prevDays = [];
    for (let x = firstDayIndex; x > 0; x--) {
      prevDays.push(lastPreviousDay - x + 1);
    }
    setPrevDays(prevDays);

    let newDaysOfMonth = [];
    for (let i = 1; i <= lastDayNumber; i++) {
      newDaysOfMonth.push(i);
    }
    setDaysOfMonth(newDaysOfMonth);

    let nextDays = [];
    for (let y = 1; y <= 7 - lastCurrentDayIndex; y++) {
      nextDays.push(y);
    }
    setNextDays(nextDays);
  }, [monthChange]);

  function workDay(dayObject: number) {
    const workDay = [{ day: dayObject, working: true }, ...workDays];
    setworkDays([...workDay]);
  }
  function handleDaySelect(ddday: number) {
    const preFilter = [...workDays];
    for (let key in preFilter)
      if (preFilter[key].day === ddday) return <WorkButton />;
    return ddday;
  }
  function handleMonthSelect() {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  }
  return (
    <Fragment>
      <div className=" actualCalendar">
        <div className="calendar">
          <div className="month">
            <i
              onClick={() => setMonthChange(monthChange - 1)}
              className="fas fa-angle-left next"
            ></i>
            <h1>{handleMonthSelect()}</h1>
            <i
              onClick={() => setMonthChange(monthChange + 1)}
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


            {prevDays.map((day, index) => (
              <div key={index} className="other-days">
                {day}
              </div>
            ))}

            {daysOfMonth.map((day, index) => (
              <div
                onClick={() => workDay(day)}
                key={index}
                className="active-days animation"
              >
                {handleDaySelect(day)}
              </div>
            ))}

            {nextDays.map((day, index) => (
              <div key={index} className="other-days">
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calendar;
