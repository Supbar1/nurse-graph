import { useState, useEffect } from "react";
import { useButtonContext } from "../buttonContext";
import DaysList from "./daysList";

export default function PrevDays() {
  const [prevDays, setPrevDays] = useState<number[]>([]);

  const { monthChange } = useButtonContext();

  const List = DaysList();
  useEffect(() => {
    setPrevDays(List.prevDays);
  }, [monthChange]);
  return (
    <>
      {prevDays.map((day, index) => (
        <div key={index} className="other-days">
          {day}
        </div>
      ))}
    </>
  );
}
