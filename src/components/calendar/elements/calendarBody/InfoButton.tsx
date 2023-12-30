import styled from "styled-components";
import HandleMonthSelect from "../../../../services/Months";
import { useAppSelector } from "../../../../store/hooks";
import { selectMonthChange } from "../../../../store/slices/monthsSlice";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  div {
    margin: auto;
    line-height: 1;
  }
`;
interface InfoButtonProps {
  day: number;
  morningNurses?: number;
  dayNurses?: number;
  nightNurses?: number;
  handleClick: () => void;
}
const InfoButton = ({ day, handleClick }: InfoButtonProps) => {
  const { monthChange, workSchedule } = useAppSelector(selectMonthChange);
  const actualDayShifts =
    workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0];

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
          <div style={{ display: "flex" }}>
            {
              workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0][
                shift
              ].length
            }
         
            <i style={{ color: color }} className={className} />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      {morningNursesNumber + dayNursesNumber + nightNursesNumber === 0 && (
        <div>{day}</div>
      )}
      {morningNursesNumber + dayNursesNumber + nightNursesNumber > 0 && (
        <Container onClick={handleClick}>
          <div>{day}</div>
          {shiftInfo(morningNursesNumber, "yellow", "sun", "morningShift")}
          {shiftInfo(dayNursesNumber, "white", "clock", "dayShift")}
          {shiftInfo(nightNursesNumber, "silver", "moon", "nightShift")}
        </Container>
      )}
    </>
  );
};

export default InfoButton;
