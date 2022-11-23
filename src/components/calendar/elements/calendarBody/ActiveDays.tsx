import { useState, useEffect } from "react";
import { ActiveDayStyled } from "./ActualDays.styles";
import styled from "styled-components";
import DaysList from "./DaysList";
import { useNurseContext } from "../../../../context/NurseContext";
import WorkButton from "./Workbutton";
import HandleMonthSelect, { months } from "../../../../services/Months";
import InfoButton from "./InfoButton";
import { workerData } from "worker_threads";
import UndoButton from "./UndoButton";

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

const ActiveDays = () => {
  const {
    monthChange,
    actualNurse,
    workSchedule,
    activeDay,
    setActiveDay,
    setWorkSchedule,
  } = useNurseContext();

  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const [gate, setGate] = useState<boolean>(false);
  const List = DaysList();

  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
    setActiveDay({});
  }, [monthChange]);

  const addWorkDay = (day: number) => {
   if (gate) return;
    setActiveDay(workSchedule[HandleMonthSelect(monthChange)].flat(1)[day - 1]);
  };

  const handleDaySelect = (day: number) => {
    console.log("new log");

    if (HandleMonthSelect(monthChange) === "November" && day > 30) return <></>;
    //==================LINE UPSTREAM NEED TO BE CHANGED==============
    //==================ERROR: DAY 31 DOESNT EXIST IN NOVEMBER===========
    const actualDayObject =
      workSchedule[HandleMonthSelect(monthChange)][day - 1];

    const actualDayShifts = actualDayObject[day][0];

    const morningNurses: number | undefined =
      actualDayShifts.morningShift?.length;

    const dayNurses: number | undefined = actualDayShifts.dayShift?.length;

    const nightNurses: number | undefined = actualDayShifts.nightShift?.length;

    // shiftNames.forEach(shiftName => console.log( actualDayShifts["nightShift"]));

    const isActualNurseAtThisNight = actualDayShifts["nightShift"]?.find(
      (index) => index === actualNurse.id
    );

    if (
      Number(Object.keys(activeDay)) === day &&
      (Object.values(activeDay)[0][0].morningShift.find(
        (index: number) => index === actualNurse.id
      ) ||
        Object.values(activeDay)[0][0].nightShift.find(
          (index: number) => index === actualNurse.id
        ) ||
        Object.values(activeDay)[0][0].dayShift.find(
          (index: number) => index === actualNurse.id
        ))
    ) {
      return (
        <UndoButton day={day} handleClick={() => console.log(activeDay)} />
      );
    }

    if (isActualNurseAtThisNight && nightNurses && nightNurses > 0) {
      return <i style={{ color: "silver" }} className="fa-solid fa-moon" />;
    }

    const isActualNurseAtThisDay = actualDayShifts.dayShift?.find(
      (index) => index === actualNurse.id
    );
    if (isActualNurseAtThisDay && dayNurses && dayNurses > 0)
      return <i style={{ color: "white" }} className="fa-solid fa-clock" />;

    let isActualNurseAtThisMorning = actualDayShifts.morningShift?.find(
      (index) => index === actualNurse.id
    );

    if (isActualNurseAtThisMorning && morningNurses && morningNurses > 0)
      return <i onClick={()=>setGate(true)} style={{ color: "yellow" }} className="fa-solid fa-sun" />;

    if (Number(Object.keys(activeDay)) === day) {
      return <WorkButton handleClick={()=>setGate(false)} activeDay={activeDay} />;
    }
    return (
      <InfoButton
        day={day}
        morningNurses={morningNurses}
        dayNurses={dayNurses}
        nightNurses={nightNurses}
        handleClick={()=>setGate(true)}
      />
    );
  };

  return (
    <>
      {daysOfMonth.map((day) => (
        <ActiveDayStyled onClick={() => addWorkDay(day)} key={day}>
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
      <button onClick={() => setActiveDay({})}>Button</button>
    </>
  );
};
export default ActiveDays;
