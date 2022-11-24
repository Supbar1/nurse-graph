import { useState, useEffect } from "react";
import { ActiveDayStyled } from "./ActualDays.styles";
import DaysList from "./DaysList";
import { useNurseContext } from "../../../../context/NurseContext";
import WorkButton from "./Workbutton";
import HandleMonthSelect from "../../../../services/Months";
import InfoButton from "./InfoButton";
import UndoButton from "./UndoButton";
import ShiftButton from "./ShiftButton";

const ActiveDays = () => {
  const {
    monthChange,
    actualNurse,
    workSchedule,
    activeDay,
    setActiveDay,
    undoDay,
    setUndoDay,
  } = useNurseContext();

  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const List = DaysList();

  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
    setActiveDay({});
  }, [monthChange]);

  const addWorkDay = (day: number) => {
    setActiveDay(workSchedule[HandleMonthSelect(monthChange)].flat(1)[day - 1]);
  };

  const handleDaySelect = (day: number) => {
    if (HandleMonthSelect(monthChange) === "November" && day > 30) return <></>;
    //==================LINE UPSTREAM NEED TO BE CHANGED==============
    //==================ERROR: DAY 31 DOESNT EXIST IN NOVEMBER===========

    if (undoDay === day) {
      return <UndoButton day={day} />;
    }

    const actualDayObject =
      workSchedule[HandleMonthSelect(monthChange)][day - 1];

    const actualDayShifts = actualDayObject[day][0];

    const morningNurses: number | undefined =
      actualDayShifts.morningShift?.length;

    const dayNurses: number | undefined = actualDayShifts.dayShift?.length;

    const nightNurses: number | undefined = actualDayShifts.nightShift?.length;

    const isActualNurseAtThisNight = actualDayShifts["nightShift"]?.find(
      (index) => index === actualNurse.id
    );
    const isActualNurseAtThisDay = actualDayShifts.dayShift?.find(
      (index) => index === actualNurse.id
    );
    let isActualNurseAtThisMorning = actualDayShifts.morningShift?.find(
      (index) => index === actualNurse.id
    );

    if (isActualNurseAtThisNight ) {
      return (
        <i
          onClick={() => setUndoDay(day)}
          style={{ color: "silver" }}
          className="fa-solid fa-moon"
        />
      );
    }

    if (isActualNurseAtThisDay && dayNurses && dayNurses > 0)
      return (
        <i
          onClick={() => setUndoDay(day)}
          style={{ color: "white" }}
          className="fa-solid fa-clock"
        />
      );

    if (isActualNurseAtThisMorning && morningNurses && morningNurses > 0)
      return (
        <i
          onClick={() => {
            setUndoDay(day);
          }}
          style={{ color: "yellow" }}
          className="fa-solid fa-sun"
        />
      );
    // if (
    //   morningNurses &&
    //   dayNurses &&
    //   nightNurses &&
    //   (morningNurses | dayNurses | nightNurses) > 0
    // ) {
    //   <ShiftButton
    //     day={day}
    //     isActualNurseAtThisNight={isActualNurseAtThisNight}
    //     isActualNurseAtThisDay={isActualNurseAtThisDay}
    //     isActualNurseAtThisMorning={isActualNurseAtThisMorning}
    //   />;
    // }
    if (Number(Object.keys(activeDay)) === day) {
      return (
        <WorkButton handleClick={() => setUndoDay(0)} activeDay={activeDay} />
      );
    }
    return (
      <InfoButton
        day={day}
        morningNurses={morningNurses}
        dayNurses={dayNurses}
        nightNurses={nightNurses}
        handleClick={() => setUndoDay(0)}
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
      <button onClick={() => console.log(undoDay)}>Button</button>
    </>
  );
};
export default ActiveDays;
