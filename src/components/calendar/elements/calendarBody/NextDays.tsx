import { useState, useEffect } from "react";
import styled from "styled-components";
//Components
import DaysList from "./DaysList";
//Context
import { useNurseContext } from "../../../../NurseContext";

const OtherDays = styled.div`
  border-radius: 19px;
  overflow: hidden;
  color: white;
`;

const NextDays = () => {
  const [nextDays, setNextDays] = useState<number[]>([]);
  const { monthChange } = useNurseContext();

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
};
export default NextDays;
