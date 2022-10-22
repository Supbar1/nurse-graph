import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";

const Pointer = styled.i`
  cursor: pointer;
  font-size: 3rem;
`;
const NextMonth = () => {
  const { monthChange, setMonthChange } = useButtonContext();

  return (
    <Pointer
      onClick={() => setMonthChange(monthChange + 1)}
      className="fas fa-angle-right next"
    />
  );
};

export default NextMonth;
