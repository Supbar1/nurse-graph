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

const NextDays = () => {
  const [nextDays, setNextDays] = useState<number[]>([]);
  const { monthChange } = useButtonContext();

  const List = DaysList();
  useEffect(() => {
    setNextDays(List.nextDays);
  }, [monthChange, List.nextDays]);
  return (
    <>
      {nextDays.map((day, index) => (
        <OtherDays key={index}>{day}</OtherDays>
      ))}
    </>
  );
};
export default NextDays;
