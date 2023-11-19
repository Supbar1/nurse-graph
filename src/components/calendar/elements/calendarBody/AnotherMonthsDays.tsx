import { useState, useEffect } from "react";
import styled from "styled-components";
import DaysList from "./DaysList";
import { selectMonthChange } from "../../../../store/slices/monthsSlice";
import { useAppSelector } from "../../../../store/hooks";

const OtherDays = styled.div`
  border-radius: 19px;
  overflow: hidden;
  color: white;
`;
interface AnotherDaysProps {
    days:string;
  }

const AnotherMonthsDays = ({days}:AnotherDaysProps) => {
  const [prevDays, setPrevDays] = useState<number[]>([]);
  const { monthChange } = useAppSelector(selectMonthChange);

  const List = DaysList();
//   useEffect(() => {
//     setPrevDays(days);
//   }, [monthChange]);

  return (
    <>
      {prevDays.map((day, index) => (
        <OtherDays key={index}>{day}</OtherDays>
      ))}
    </>
  );
};
export default AnotherMonthsDays;
