import styled from "styled-components";
import HandleMonthSelect from "../../../../services/Months";
import { useAppSelector } from "../../../../store/hooks";
import { selectMonthChange } from "../../../../store/slices/monthsSlice";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  i {
    font-size: 0.7rem;
  }
  div {
    margin: 0 auto;
    line-height: 1;
  }
`;
interface InfoButtonProps {
  day: number;
  nightNurses?: number;
  dayNurses?: number;
  morningNurses?: number;
  handleClick: () => void;
}
const InfoButton = ({ day, handleClick }: InfoButtonProps) => {
  const { monthChange, workSchedule } = useAppSelector(selectMonthChange);
  const actualDayShifts = workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0];

  const morningNursesNumber: number | undefined =
    actualDayShifts.morningShift?.length;

  const dayNursesNumber: number | undefined = actualDayShifts.dayShift?.length;

  const nightNursesNumber: number | undefined =
    actualDayShifts.nightShift?.length;

  const shiftInfo = (
    nursesQuantity: number,
    color: string,
    icon: string,
    shift: string
  ) => {
    const className = "fa-solid fa-" + icon;
    return (
      <>
        {nursesQuantity > 0 ? (
          <div>
            {
              workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0][
                shift
              ].length
            }{" "}
            <i style={{ color: color }} className={className} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <Container onClick={handleClick}>
      <div>{day}</div>
      {shiftInfo(morningNursesNumber, "yellow", "sun", "morningShift")}
      {shiftInfo(dayNursesNumber, "white", "clock", "dayShift")}
      {shiftInfo(nightNursesNumber, "silver", "moon", "nightShift")}
    </Container>
  );
};

export default InfoButton;
