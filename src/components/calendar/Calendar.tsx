import styled from "styled-components";
//Components
import PreviousMonth from "./elements/calendarHeader/PreviousMonth";
import NextMonth from "./elements/calendarHeader/NextMonth";
import PrevDays from "./elements/calendarBody/PreviousDays";
import WeekDays from "./elements/calendarHeader/WeekDays";
import NextDays from "./elements/calendarBody/NextDays";
import ActiveDays from "./elements/calendarBody/ActiveDays";
import Month from "./elements/calendarHeader/MonthLabel";

const Container = styled.div`
  /* font-family: "Roboto"; */

  /* border: 2px solid green; */
  grid-area: calendar;
  height: 100%;
  /* overflow: hidden; */
  border-radius: 12% 12% 5% 5%;
  box-shadow: 13px -13px 13px 0 rgba(39, 200, 255, 0.2),
    -13px 13px 13px 0 rgba(143, 64, 248, 0.2);
`;
const MonthStyled = styled.div`
  height: 14%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  /* border: 2px solid black; */
`;
const Days = styled.div`
  height: 70%;
  /* font-size: 1.5em; */
  display: grid;
  grid-template-columns: repeat(7, 14.25%);
  /* grid-template-rows: repeat(5, 20%); */

  div {
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

const Calendar: React.FC = () => (
  <>
    <Container>
      <MonthStyled>
        <PreviousMonth />
        <Month />
        <NextMonth />
      </MonthStyled>
      <WeekDays />
      <Days>
        <PrevDays />
        <ActiveDays />
        <NextDays />
      </Days>
    </Container>
  </>
);

export default Calendar;
