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
    let container = null;
    const shifts: string[] = ["morningShift", "dayShift", "nightShift"];
    shifts.forEach((shiftName) => {
      let isActualNursePresent = actualDayShifts[shiftName].find(
        (index) => index === actualNurse.id
      );
      if (isActualNursePresent) {
        container = isActualNursePresent
      }
    });
    if (container) {
      return <ShiftButton day={day} actualDayShifts={actualDayShifts}/>;
    }
    if (Number(Object.keys(activeDay)) === day) {
      return (
        <WorkButton handleClick={() => setUndoDay(0)} activeDay={activeDay} />
      );
    }
    return <InfoButton day={day} handleClick={() => setUndoDay(0)} />;
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
