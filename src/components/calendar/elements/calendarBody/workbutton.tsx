import React from "react";
import styled from "styled-components";
//Components
import DayButton from "./dayButton";
import NightButton from "./nightButton";
import MorningButton from "./morningButton";

const BigButton = styled.span`
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
const WorkButton = () => (
  <React.Fragment>
    <BigButton>
      <DayButton />
      <NightButton />
      <MorningButton />
    </BigButton>
  </React.Fragment>
);

export default WorkButton;
