import { useState, useEffect } from "react";
import { ActualDays } from "./elements/actualDays";
import { useButtonContext } from "./buttonContext";
import DaysList from "./elements/daysList";
import WorkButton from "./elements/workbutton";

interface workingDays {
  day: number;
}
export default function ActiveDays() {
  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const { monthChange } = useButtonContext();
  const [workDays, setworkDays] = useState<workingDays[]>([]);

  const List = DaysList();
  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);

  function workDay(day: number) {
    const workDay = [{ day: day }, ...workDays];
    setworkDays([...workDay]);
  }
  function handleDaySelect(day: number) {
    const preFilter = [...workDays];
    for (let key in preFilter)
      if (preFilter[key].day === day) return <WorkButton />;
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
