import { useState, useEffect } from "react";
import DaysList from "./daysList";
import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";

const OtherDays = styled.div`
  border-radius: 19px;
  overflow: hidden;
  color: white;
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
