import styled from "styled-components";
import { DayOfMonthType } from "../../../../store/slices/monthsSlice";
import SingleShiftButton from "./SingleShiftIcon";

const GridContainer = styled.div`
  height: 100%;
  outline: none;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
interface WorkButtonType {
  activeDay: DayOfMonthType;
}
const WorkButton = ({ activeDay }: WorkButtonType) => {
  return (
    <GridContainer>
      <SingleShiftButton
        color="yellow"
        activeDay={activeDay}
        shiftName="morningShift"
        className="fa-solid fa-sun"
      />
      <SingleShiftButton
        color="white"
        activeDay={activeDay}
        shiftName="dayShift"
        className="fa-solid fa-clock"
      />
      <SingleShiftButton
        color="silver"
        activeDay={activeDay}
        shiftName="nightShift"
        className="fa-solid fa-moon"
      />
      <SingleShiftButton
        color="silver"
        activeDay={activeDay}
        shiftName="nightShift"
        className="fa-solid fa-moon"
      />
    </GridContainer>
  );
};

{
}
export default WorkButton;
