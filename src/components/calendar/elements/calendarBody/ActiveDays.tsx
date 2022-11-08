import { useState, useEffect } from "react";
import styled from "styled-components";
import DaysList from "./DaysList";
import { ActualDays } from "./ActualDays";
//Context
import {
  useNurseContext,
  DayOfMonthType,
  allShifts,
  WorkScheduleType,
} from "../../../../NurseContext";
import MorningButton from "./MorningButton";
import WorkButton from "./Workbutton";
// import { WorkScheduleType } from './../../../../NurseContext';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ActiveDays = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  // const [activeDay, setActiveDay] = useState<DayOfMonthType>(
  //   {} as DayOfMonthType
  // );
  const {
    monthChange,
    actualNurse,
    workSchedule,
    setWorkSchedule,
    activeDay,
    setActiveDay,
  } = useNurseContext();

  const handleMonthSelect = () => {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  };
  // let daysOfMonth2 = Object.keys(workSchedule[handleMonthSelect()]).map(
  //   (i) => Number(i) + 1
  // );

  const List = DaysList();

  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);

  const addWorkDay = (day: number) => {
    const workScheduleObject = workSchedule;

    setActiveDay(workScheduleObject[handleMonthSelect()].flat(1)[day - 1]);
    console.log("addWorkDay");
  };
  const ShiftsButton = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    i {
      font-size: 1rem;
    }
    div {
      flex-direction: column;
      margin: 0 auto;
      line-height: 1;
      div {
        flex-direction: row;
      }
    }
  `;
  const handleDaySelect = (day: number) => {
    console.log("=================");
    if (Number(Object.keys(activeDay)) === day) {
      return <WorkButton activeDay={activeDay} />;
    }

    // console.log(
    //   workSchedule[handleMonthSelect()][day - 1][day][0].morningShift?.length
    // );

    return (
      <ShiftsButton>
        <div>{day}</div>
        <div>
          <div>
            {
              workSchedule[handleMonthSelect()][day - 1][day][0].dayShift
                ?.length
            }{" "}
            <i style={{ color: "yellow" }} className="fa-solid fa-sun" />
          </div>
          <div>
            {
              workSchedule[handleMonthSelect()][day - 1][day][0].morningShift
                ?.length
            }{" "}
            <i style={{ color: "white" }} className="fa-solid fa-clock" />
          </div>
          <div>
            {
              workSchedule[handleMonthSelect()][day - 1][day][0].nightShift
                ?.length
            }{" "}
            <i className="fa-solid fa-moon silver" />
          </div>
        </div>
      </ShiftsButton>
    );
  };

  return (
    <>
      <button onClick={() => console.log(activeDay)}>Reset</button>
      <button onClick={() => console.log(workSchedule)}>Whole graph</button>
      <button onClick={() => console.log(...workSchedule[handleMonthSelect()])}>
        Actual Days
      </button>

      <ActualDays
        daysOfMonth={daysOfMonth}
        workDay={addWorkDay}
        handleDaySelect={handleDaySelect}
      />
    </>
  );
};
export default ActiveDays;
