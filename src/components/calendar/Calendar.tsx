import styled from "styled-components";
import CalendarBody from "./elements/calendarBody/CalendarBody";
import CalendarHeader from "./elements/calendarBody/CalendarHeader";

const Container = styled.div`
  grid-area: calendar;
  height: 100%;
  border-radius: 12% 12% 5% 5%;
  box-shadow: 13px -13px 13px 0 rgba(39, 200, 255, 0.2),
    -13px 13px 13px 0 rgba(143, 64, 248, 0.2);
  display: grid;
  grid-template-rows: 12% 8% 80%;

  @media (max-height: 400px) {
    grid-template-rows: 10% 7% 83%;
    margin: 0;
    border-radius: 0;
  }
`;

const Calendar: React.FC = () => (
  <Container>
    <CalendarHeader />
    <CalendarBody />
  </Container>
);

export default Calendar;
