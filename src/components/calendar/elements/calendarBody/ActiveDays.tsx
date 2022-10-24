import { useState, useEffect } from "react";
//Components
import DaysList from "./DaysList";
import WorkButton from "./Workbutton";
import { ActualDays } from "./ActualDays";
//Context
import { useButtonContext } from "../../ButtonContext";

const ActiveDays = () => {
  const { workDays, setWorkDays, monthChange } = useButtonContext();
  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);

  const List = DaysList();
  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);

  const workDay = (day: number) => {
    if (workDays[0].workShift === "none") return;

    for (let key in workDays) {
      if (
        workDays[key].day === day &&
        workDays[key].monthChange === monthChange
      )
        return;
    }
    const workDay = [
      {
        day: day,
        monthChange: monthChange,
        workShift: "none",
      },
      ...workDays,
    ];

    setWorkDays([...workDay]);
  };

  const handleDaySelect = (day: number) => {
    const preFilter = [...workDays];

    for (let key in preFilter) {
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "none"
      )
        return <WorkButton />;
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "day"
      )
        return <i style={{ color: "yellow" }} className="fa-solid fa-sun"></i>;
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "evening"
      )
        return <i style={{ color: "silver" }} className="fa-solid fa-moon"></i>;
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "morning"
      )
        return <i style={{ color: "white" }} className="fa-solid fa-clock"></i>;
    }

    return day;
  };

  return (
    <ActualDays
      daysOfMonth={daysOfMonth}
      workDay={workDay}
      handleDaySelect={handleDaySelect}
    />
  );
};
export default ActiveDays;
