import { useState, useEffect } from "react";
import { ActiveDayStyled } from "./ActualDays.styles";
import styled from "styled-components";
import DaysList from "./DaysList";
import { useNurseContext } from "../../../../context/NurseContext";
import WorkButton from "./Workbutton";
import HandleMonthSelect from "../../../../services/Months";

const ShiftsButton = styled.div`
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
  const { monthChange, actualNurse, workSchedule, activeDay, setActiveDay } =
    useNurseContext();

  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const List = DaysList();

  const handleMonthSelect = () => {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  };
  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);

  const addWorkDay = (day: number) => {
    const workScheduleObject = workSchedule;
    setActiveDay(
      workScheduleObject[handleMonthSelect()].flat(1)[day - 1]
    );
  };

  const handleDaySelect = (day: number) => {
    if (handleMonthSelect() === "November" && day > 30) return <></>;
    //==================LINE UPSTREAM NEED TO BE CHANGED==============
    //==================ERROR: DAY 31 DOESNT EXIST IN NOVEMBER===========
    console.log("==================");
    // console.log(workSchedule[handleMonthSelect()]);
    console.log(workSchedule);
    const night =
      workSchedule[handleMonthSelect()][day - 1][day][0].nightShift
        ?.length;

    const wholeDay =
      workSchedule[handleMonthSelect()][day - 1][day][0].dayShift
        ?.length;

    const morning =
      workSchedule[handleMonthSelect()][day - 1][day][0].morningShift
        ?.length;

    let x = workSchedule[handleMonthSelect()][day - 1][
      day
    ][0].nightShift?.find((index) => index === actualNurse.id);
    if (x && night && night > 0) {
      return <i style={{ color: "silver" }} className="fa-solid fa-moon" />;
    }

    let y = workSchedule[handleMonthSelect()][day - 1][
      day
    ][0].dayShift?.find((index) => index === actualNurse.id);
    if (y && wholeDay && wholeDay > 0)
      return <i style={{ color: "white" }} className="fa-solid fa-clock" />;

    let z = workSchedule[handleMonthSelect()][day - 1][
      day
    ][0].morningShift?.find((index) => index === actualNurse.id);
    if (z && morning && morning > 0)
      return <i style={{ color: "yellow" }} className="fa-solid fa-sun" />;

    if (Number(Object.keys(activeDay)) === day) {
      return <WorkButton activeDay={activeDay} />;
    }
    return (
      <ShiftsButton>
        <div>{day}</div>
        <div>
          {morning && morning > 0 ? (
            <div>
              {
                workSchedule[handleMonthSelect()][day - 1][day][0]
                  .morningShift?.length
              }{" "}
              <i style={{ color: "yellow" }} className="fa-solid fa-sun" />
            </div>
          ) : (
            <></>
          )}
          {wholeDay && wholeDay > 0 ? (
            <div>
              {
                workSchedule[handleMonthSelect()][day - 1][day][0]
                  .dayShift?.length
              }{" "}
              <i style={{ color: "white" }} className="fa-solid fa-clock" />
            </div>
          ) : (
            <></>
          )}
          {night && night > 0 ? (
            <div>
              {
                workSchedule[handleMonthSelect()][day - 1][day][0]
                  .nightShift?.length
              }{" "}
              <i className="fa-solid fa-moon silver" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </ShiftsButton>
    );
  };

  return (
    <>
      {daysOfMonth.map((day) => (
        <ActiveDayStyled onClick={() => addWorkDay(day)} key={day}>
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
export default ActiveDays;
