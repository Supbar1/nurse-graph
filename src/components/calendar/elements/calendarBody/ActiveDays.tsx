// import styled from "styled-components";
import { useState, useEffect } from "react";
import DaysList from "./daysList";

import WorkButton from "./workButton";
import { ActualDays } from "./actualDays";
import { useButtonContext } from "../../buttonContext";

export default function ActiveDays() {
  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);

  const { workDays, setWorkDays, monthChange } = useButtonContext();

  const List = DaysList();
  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);

  function workDay(day: number) {
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
    console.log(workDay);
  }

  function handleDaySelect(day: number) {
    const preFilter = [...workDays];
    for (let key in preFilter) {
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "none"
      )
        return <WorkButton />;
    }

    for (let key in preFilter) {
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "day"
      )
        return <i style={{ color: "yellow" }} className="fa-solid fa-sun"></i>;
    }
    for (let key in preFilter) {
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "evening"
      )
        return <i style={{ color: "silver" }} className="fa-solid fa-moon"></i>;
    }
    for (let key in preFilter) {
      if (
        preFilter[key].day === day &&
        preFilter[key].monthChange === monthChange &&
        preFilter[key].workShift === "morning"
      )
        return <i style={{ color: "white" }} className="fa-solid fa-clock"></i>;
    }
    return day;
  }
  return (
    <ActualDays
      daysOfMonth={daysOfMonth}
      workDay={workDay}
      handleDaySelect={handleDaySelect}
    />
  );
}
