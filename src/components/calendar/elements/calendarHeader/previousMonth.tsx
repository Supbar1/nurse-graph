import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";

const Pointer = styled.i`
  cursor: pointer;
  font-size: 3rem;
`;
function PreviousMonth() {
  const { monthChange, setMonthChange } = useButtonContext();

  return (
    <Pointer
      onClick={() => setMonthChange(monthChange - 1)}
      className="fas fa-angle-left next"
    ></Pointer>
  );
}

export default PreviousMonth;
