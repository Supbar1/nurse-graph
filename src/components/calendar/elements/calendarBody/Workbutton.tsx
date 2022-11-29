import styled from "styled-components";
import DayButton from "./DayButton";
import NightButton from "./NightButton";
import MorningButton from "./MorningButton";
import {DayOfMonthType} from "../../../../context/NurseContext"

const Container = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  span {
    margin: auto;
  }
`;
interface WorkButtonType {
  activeDay: DayOfMonthType;
  handleClick: ()=> void;
}
const WorkButton = ({ activeDay,handleClick }: WorkButtonType) => {
  return (
    <Container onClick={handleClick}>
      <MorningButton activeDay={activeDay} />
      <DayButton activeDay={activeDay} />
      <NightButton activeDay={activeDay} />
    </Container>
  );
};

export default WorkButton;
