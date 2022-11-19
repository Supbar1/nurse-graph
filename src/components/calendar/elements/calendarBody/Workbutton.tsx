import React from "react";
import styled from "styled-components";
//Components
import DayButton from "./DayButton";
import NightButton from "./NightButton";
import MorningButton from "./MorningButton";

const Container = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  font-size: 13px;
  margin: auto;
  span {
    margin: auto;
  }
`;
interface WorkButtonType {
  day: number;
}
const WorkButton = ({ activeDay }: any) => {
  return (
    <Container>
      <MorningButton activeDay={activeDay} />
      <DayButton activeDay={activeDay} />
      <NightButton activeDay={activeDay} />
    </Container>
  );
};

export default WorkButton;
