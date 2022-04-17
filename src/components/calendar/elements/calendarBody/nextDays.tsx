import { useState, useEffect } from "react";
import DaysList from "./daysList";
import { useButtonContext } from "../../calendarContext";
import styled from "styled-components";

const OtherDays = styled.div`
  opacity: 0.3;
`;

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
        <OtherDays key={index}>{day}</OtherDays>
      ))}
    </>
  );
}
