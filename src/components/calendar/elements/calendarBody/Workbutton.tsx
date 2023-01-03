import styled from "styled-components";
import { DayOfMonthType } from "../../../../store/slices/monthsSlice";
import SingleShiftButton from "./SingleShiftIcon";

const Container = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: auto;
`;
interface WorkButtonType {
  activeDay: DayOfMonthType;
}
const WorkButton = ({ activeDay }: WorkButtonType) => {
  return (
    <Container>
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
    </Container>
  );
};

export default WorkButton;
