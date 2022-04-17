import { useState, useEffect } from "react";
import { useButtonContext } from "../../calendarContext";
import DaysList from "./daysList";
import styled from "styled-components";

const OtherDays = styled.div`
  opacity: 0.3;
`;
export default function PreviousDays() {
  const [prevDays, setPrevDays] = useState<number[]>([]);

  const { monthChange } = useButtonContext();

  const List = DaysList();
  useEffect(() => {
    setPrevDays(List.prevDays);
  }, [monthChange]);
  return (
    <>
      {prevDays.map((day, index) => (
        <OtherDays key={index}>{day}</OtherDays>
      ))}
    </>
  );
}
