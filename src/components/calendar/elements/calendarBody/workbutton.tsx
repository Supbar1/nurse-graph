import React, { useState } from "react";
import DayButton from "./dayButton";
import NightButton from "./nightButton";
import styled from "styled-components";
import { useButtonContext } from "../../buttonContext";
import { allNurses } from "../../../nursesList/nursesList";
import BackButton from "./backButton";
import MorningButton from "./morningButton";
const BigButton = styled.span`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
  justify-content: space-around;
  width: 100%;
  font-size: 13px;

  span {
    margin: auto;
  }
`;

function WorkButton() {
  return (
    <React.Fragment>
      <BigButton>
        <span>
          <DayButton />
        </span>
        <span>
          <NightButton />
        </span>
        <span>
          <MorningButton />
        </span>

        <span>
          <BackButton />
        </span>
      </BigButton>
    </React.Fragment>
  );
}

export default WorkButton;
