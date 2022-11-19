import styled from "styled-components";
import { useNurseContext } from "../../../../context/NurseContext";
import HandleMonthSelect from "../../../../services/Months";
const NextMonthArrow = styled.i`
  cursor: pointer;
  font-size: 3rem;
`;

const NextMonth = () => {
  const { monthChange, setMonthChange } = useNurseContext();

  const changeToPreviousMonth = () => {
    if (HandleMonthSelect(monthChange) === "January") return;
    setMonthChange(monthChange + 1);
  };

  return (
    <NextMonthArrow
      onClick={changeToPreviousMonth}
      className="fas fa-angle-right next"
    />
  );
};

export default NextMonth;
