import styled from "styled-components";
import HandleMonthSelect from "../../../../services/Months";
import { useNurseContext } from "./../../../../context/NurseContext";

const ShiftsButton = styled.div`
  width: 100%;
  height: 100%;
  i {
    /* font-size: 1rem; */
  }
  div {
    flex-direction: column;
    margin: 0 auto;
    line-height: 1;
    div {
      flex-direction: row;
    }
  }
`;
interface InfoButtonProps {
  day?: number;
  nightNurses?: number;
  dayNurses?: number;
  morningNurses?: number;
  handleClick: () => void;
}
const InfoButton = ({
  day,
  nightNurses,
  dayNurses,
  morningNurses,
  handleClick,
}: InfoButtonProps) => {
  const { workSchedule, monthChange } = useNurseContext();
  if (!day) return <></>;
  return (
    <ShiftsButton onClick={handleClick}>
      <div>{day}</div>
      <div>
        {morningNurses && morningNurses > 0 ? (
          <div>
            {
              workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0]
                .morningShift?.length
            }{" "}
            <i style={{ color: "yellow" }} className="fa-solid fa-sun" />
          </div>
        ) : (
          <></>
        )}
        {dayNurses && dayNurses > 0 ? (
          <div>
            {
              workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0]
                .dayShift?.length
            }{" "}
            <i style={{ color: "white" }} className="fa-solid fa-clock" />
          </div>
        ) : (
          <></>
        )}
        {nightNurses && nightNurses > 0 ? (
          <div>
            {
              workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0]
                .nightShift?.length
            }{" "}
            <i className="fa-solid fa-moon silver" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </ShiftsButton>
  );
};

export default InfoButton;
