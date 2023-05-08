import styled from "styled-components";
import PrevDays from "./elements/calendarBody/PreviousDays";
import WeekDays from "./elements/calendarHeader/WeekDays";
import NextDays from "./elements/calendarBody/NextDays";
import ActiveDays from "./elements/calendarBody/ActiveDays";
import Month from "./elements/calendarHeader/MonthLabel";
import AnotherMonthArrow from "./elements/calendarHeader/AnotherMonthArrow";

const Container = styled.div`
  grid-area: calendar;
  height: 100%;
  border-radius: 12% 12% 5% 5%;
  box-shadow: 13px -13px 13px 0 rgba(39, 200, 255, 0.2),
    -13px 13px 13px 0 rgba(143, 64, 248, 0.2);
`;
const MonthStyled = styled.div`
  height: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;
const Days = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(7, 14.25%);
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
`;

const Calendar: React.FC = () => (
  <Container>
    <MonthStyled>
      <AnotherMonthArrow arrowDirection="left next" changeMonth={-1} />
      <Month />
      <AnotherMonthArrow arrowDirection="right next" changeMonth={1} />
    </MonthStyled>
    <WeekDays />
  <Days>
    <PrevDays />
    <ActiveDays />
    <NextDays />
  </Days>
   </Container>
);

export default Calendar;
