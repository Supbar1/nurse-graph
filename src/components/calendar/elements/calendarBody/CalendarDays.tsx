import styled from "styled-components";
import PrevDays from "./PreviousDays";
import NextDays from "./NextDays";
import ActiveDays from "./ActiveDays";
import AnotherMonthsDays from "./AnotherMonthsDays";


const Days = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: repeat(7, 14.25%);
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
`;

const CalendarDays: React.FC = () => (
  <Days>
    <AnotherMonthsDays days="prevDays" />
    <PrevDays />
    <ActiveDays />
    <NextDays />
  </Days>
);

export default CalendarDays;
