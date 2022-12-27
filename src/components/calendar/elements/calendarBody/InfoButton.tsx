import styled from "styled-components";
import HandleMonthSelect from "../../../../services/Months";
import { useNurseContext } from "./../../../../context/NurseContext";

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
  day?: number;
  nightNurses?: number;
  dayNurses?: number;
  morningNurses?: number;
  handleClick: () => void;
}
const InfoButton = ({ day, handleClick }: InfoButtonProps) => {
  const { workSchedule, monthChange } = useNurseContext();
  if (!day) return <></>;
  const actualDayObject = workSchedule[HandleMonthSelect(monthChange)][day - 1];

  const actualDayShifts = actualDayObject[day][0];

  const morningNursesNumber: number | undefined =
    actualDayShifts.morningShift?.length;

  const dayNursesNumber: number | undefined = actualDayShifts.dayShift?.length;

  const nightNursesNumber: number | undefined =
    actualDayShifts.nightShift?.length;

  const shiftInfo = (nursesQuantity: number, color: string, icon: string) => {
    const className = "fa-solid fa-" + icon;
    return (
      <>
        {nursesQuantity > 0 ? (
          <div>
            {
              workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0]
                .morningShift?.length
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
      {shiftInfo(morningNursesNumber, "yellow", "sun")}
      {shiftInfo(dayNursesNumber, "white", "clock")}
      {shiftInfo(nightNursesNumber, "silver", "moon")}
    </Container>
  );
};

export default InfoButton;
