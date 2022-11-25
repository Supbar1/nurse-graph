import styled from "styled-components";
import { useNurseContext } from "../../../../context/NurseContext";
import HandleMonthSelect from "../../../../services/Months";
const PreviousMonthArrow = styled.i`
  cursor: pointer;
  /* font-size: 3rem; */
`;

const PreviousMonth = () => {
  const { monthChange, setMonthChange } = useNurseContext();

  const changeToNextMonth = () => {
    if (HandleMonthSelect(monthChange) === "November") return;
    setMonthChange(monthChange - 1);
  };
  return (
    <PreviousMonthArrow
      onClick={changeToNextMonth}
      className="fas fa-angle-left next"
    />
  );
};

export default PreviousMonth;
