import styled from "styled-components";
import { useNurseContext } from "../../../../context/NurseContext";
import HandleMonthSelect from "../../../../services/Months";

const PreviousMonthArrow = styled.i`
  cursor: pointer;
  font-size: 2rem;
  margin: 0 1rem;
`;
interface AnotherMonthProps {
  arrowDirection: string;
  changeMonth: number;
}
const AnotherMonthArrow = ({
  arrowDirection,
  changeMonth,
}: AnotherMonthProps) => {
  const { monthChange, setMonthChange } = useNurseContext();
  const className = "fas fa-angle-" + arrowDirection;

  const changeToNextMonth = () => {
    if (
      (HandleMonthSelect(monthChange) === "November" && changeMonth === -1) ||
      (HandleMonthSelect(monthChange) === "January" && changeMonth === 1)
    )
      return;
    setMonthChange(monthChange + changeMonth);
  };
  return (
    <PreviousMonthArrow onClick={changeToNextMonth} className={className} />
  );
};

export default AnotherMonthArrow;
