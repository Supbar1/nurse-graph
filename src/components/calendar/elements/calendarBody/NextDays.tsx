import { useState, useEffect } from "react";
import styled from "styled-components";
import DaysList from "./DaysList";
import { useAppSelector } from "../../../../store/hooks";
import { selectMonthChange } from "./../../../../store/monthChangeSlice";

const OtherDays = styled.div`
  border-radius: 19px;
  overflow: hidden;
  color: white;
`;

const NextDays = () => {
  const [nextDays, setNextDays] = useState<number[]>([]);
  const { monthChange } = useAppSelector(selectMonthChange);
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
