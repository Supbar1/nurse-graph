//Components
import InfoWindow from "./InfoWindow";
import Calendar from "../calendar/Calendar";
import NursesWindow from "./NursesWindow";
import ActualNurse from "./ActualNurse";
import SaveButton from "./SaveButton";
//Styling
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1.2fr 1fr 5fr 1fr;
  grid-template-areas:
    "calendar actualNurse"
    "calendar infoWindow"
    "calendar nursesWindow"
    "calendar saveButton";
`;

const Graph = () => (
  <Container>
    <Calendar />
    <ActualNurse />

    <InfoWindow />

    <NursesWindow />
    <SaveButton />
  </Container>
);

export default Graph;
