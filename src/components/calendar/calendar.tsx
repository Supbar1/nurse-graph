import PreviousMonth from "./elements/calendarHeader/previousMonth";
import NextMonth from "./elements/calendarHeader/nextMonth";
import PrevDays from "./elements/calendarBody/previousDays";
import WeekDays from "./elements/calendarHeader/weekDays";
import NextDays from "./elements/calendarBody/nextDays";
import ActiveDays from "./elements/calendarBody/workingDays";
import Month from "./elements/calendarHeader/month";
import styled from "styled-components";

const CalendarStyled = styled.div`
  grid-column: 2 / span 5;
  grid-row: 2;
  margin: 0;
  height: 70vh;
  width: 100%;
  border-radius: 15%;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.2);
`;
const MonthStyled = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
`;
const Days = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-wrap: wrap;
  div {
    width: 14%;
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
