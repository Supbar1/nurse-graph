import styled from "styled-components";
import CalendarDays from "./CalendarDays";
import DaysList from "./DaysList";

const Container = styled.div<CalendarBodyProps>`
  display: grid;
  grid-template-columns: repeat(7, 14.25%);
  grid-template-rows: ${({ buttonSize }) =>
    buttonSize === "big" ? "repeat(5, 20%)" : "repeat(6, 1/6fr)"};
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
`;
interface CalendarBodyProps {
  buttonSize: string;
}

const CalendarBody: React.FC = () => {
  const List = DaysList();
  const daysCount =
    List.actualDays.length + List.nextDays.length + List.prevDays.length;
  const buttonSize = daysCount === 35 ? "small" : "big";
  return (
    <Container buttonSize={buttonSize}>
      <CalendarDays days={List["prevDays"]} size={buttonSize} />
      <CalendarDays days={List["actualDays"]} size={buttonSize} active />
      <CalendarDays days={List["nextDays"]} size={buttonSize} />
    </Container>
  );
};

export default CalendarBody;
