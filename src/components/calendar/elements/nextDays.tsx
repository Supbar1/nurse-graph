import { useState, useEffect } from "react";
import { useButtonContext } from "../buttonContext";
import DaysList from "./daysList";
export default function NextDays() {
  const [nextDays, setNextDays] = useState<number[]>([]);
  const { monthChange } = useButtonContext();

  const List = DaysList();
  useEffect(() => {
    setNextDays(List.nextDays);
  }, [monthChange]);
  return (
    <>
      {nextDays.map((day, index) => (
        <div key={index} className="other-days">
          {day}
        </div>
      ))}
    </>
  );
}
