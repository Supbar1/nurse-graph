import styled from "styled-components";
import SingleShiftButton from "./SingleShiftButton";
import { DayOfMonthType } from "../../../../context/NurseContext";

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
  handleClick: () => void;
}
const WorkButton = ({ activeDay, handleClick }: WorkButtonType) => {
  return (
    <Container onClick={handleClick}>
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
