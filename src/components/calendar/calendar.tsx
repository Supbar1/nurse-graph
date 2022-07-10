import styled from "styled-components";
//Components
import PreviousMonth from "./elements/calendarHeader/previousMonth";
import NextMonth from "./elements/calendarHeader/nextMonth";
import PrevDays from "./elements/calendarBody/previousDays";
import WeekDays from "./elements/calendarHeader/weekDays";
import NextDays from "./elements/calendarBody/nextDays";
import ActiveDays from "./elements/calendarBody/activeDays";
import Month from "./elements/calendarHeader/month";

const CalendarStyled = styled.div`
  height: 60vh;
  border-radius: 12% 12% 5% 5%;
  box-shadow: 0 0.5rem 3rem rgba(143, 64, 248, 0.4);
`;
const MonthStyled = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
`;
const Days = styled.div`
  height: 70%;
  font-size: 1.5em;
  display: grid;
  grid-template-columns: repeat(7, 14.25%);

  div {
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

const Calendar: React.FC = () => {
  return (
    <>
      <CalendarStyled>
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
      </CalendarStyled>
    </>
  );
};

export default Calendar;
