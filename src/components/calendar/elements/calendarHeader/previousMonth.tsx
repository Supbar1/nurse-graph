import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";

const Pointer = styled.i`
  cursor: pointer;
  font-size: 3rem;
`;
const PreviousMonth = () => {
  const { monthChange, setMonthChange } = useButtonContext();

  return (
    <Pointer
      onClick={() => setMonthChange(monthChange - 1)}
      className="fas fa-angle-left next"
    />
  );
};

export default PreviousMonth;
