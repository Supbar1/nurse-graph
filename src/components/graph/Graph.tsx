import InfoWindow from "./InfoWindow";
import Calendar from "../calendar/Calendar";
import NursesWindow from "./NursesWindow";
import ActualNurse from "./ActualNurse";
import WithdrawButton from "./WithdrawButton";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr 0.5fr 5fr 0.5fr;
  grid-template-areas:
    "calendar actualNurse"
    "calendar infoWindow"
    "calendar nursesWindow"
    "calendar buttons";
`;

const Graph = () => (
  <Container>
    <Calendar />
    <ActualNurse />
    <InfoWindow />
    <NursesWindow />
    <WithdrawButton />
  </Container>
);

export default Graph;
