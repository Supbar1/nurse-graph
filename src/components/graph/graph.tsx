//Components
import InfoWindow from "./InfoWindow";
import Calendar from "../calendar/Calendar";
import NursesWindow from "./NursesWindow";
import ActualNurse from "./ActualNurse";
import SaveButton from "./SaveButton";
//Context
import ButtonProvider from "../calendar/ButtonContext";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  width: min(60vw, 850px);

  grid-template-areas:
    "actual   window"
    "calendar nurses"
    "calendar ------"
    "cancelButton saveButton";
`;

const Graph = () => (
  <ButtonProvider>
    <GridContainer>
      <ActualNurse />
      <Calendar />
      <InfoWindow />
      <NursesWindow />
      <SaveButton />
    </GridContainer>
  </ButtonProvider>
);

export default Graph;
