import styled from "styled-components";
import { useNurseContext } from "../../../../NurseContext";

const Pointer = styled.i`
  cursor: pointer;
  font-size: 3rem;
`;
const PreviousMonth = () => {
  const { monthChange, setMonthChange } = useNurseContext();

  return (
    <Pointer
      onClick={() => setMonthChange(monthChange - 1)}
      className="fas fa-angle-left next"
    />
  );
};

export default PreviousMonth;
