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
const PreviousDays=()=> {
  const [prevDays, setPrevDays] = useState<number[]>([]);

  const { monthChange } = useButtonContext();

  const List = DaysList();
  useEffect(() => {
    setPrevDays(List.prevDays);
  }, [monthChange,List.prevDays]);
  return (
    <>
      {prevDays.map((day, index) => (
        <OtherDays key={index}>{day}</OtherDays>
      ))}
    </>
  );
}
export default  PreviousDays;