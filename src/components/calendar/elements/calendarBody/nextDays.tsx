import { useState, useEffect } from "react";
import styled from "styled-components";
//Components
import DaysList from "./daysList";
//Context
import { useButtonContext } from "../../buttonContext";

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
