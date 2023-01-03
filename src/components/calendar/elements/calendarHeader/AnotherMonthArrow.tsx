import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  switchMonth,
  selectMonthChange,
} from "../../../../store/slices/monthsSlice";

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
  const { monthChange } = useAppSelector(selectMonthChange);
  const dispatch = useAppDispatch();
  const arrow = "fas fa-angle-" + arrowDirection;

  const changeToNextMonth = () => {
    if (
      (monthChange === 0 && changeMonth === -1) ||
      (monthChange === 3 && changeMonth === 1)
    )
      return;
    dispatch(switchMonth(changeMonth));
  };
  return <PreviousMonthArrow onClick={changeToNextMonth} className={arrow} />;
};

export default AnotherMonthArrow;
