import styled from "styled-components";
import WeekDays from "../calendarHeader/WeekDays";
import Month from "../calendarHeader/MonthLabel";
import AnotherMonthArrow from "../calendarHeader/AnotherMonthArrow";

const MonthStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;

const CalendarHeader = () => (
  <>
    <MonthStyled>
      <AnotherMonthArrow arrowDirection="left next" changeMonth={-1} />
      <Month />
      <AnotherMonthArrow arrowDirection="right next" changeMonth={1} />
    </MonthStyled>
    <WeekDays />
  </>
);

export default CalendarHeader;
