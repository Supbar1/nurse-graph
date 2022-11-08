import { useNurseContext, WorkScheduleType } from "../../../../NurseContext";
import { ActiveDayStyled } from "./ActualDays.styles";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
interface ActualDaysProps {
  daysOfMonth: number[];
  handleDaySelect(day: number): {} | JSX.Element;
  workDay: (day: number) => void;
}

export const ActualDays = ({
  daysOfMonth,
  handleDaySelect,
  workDay,
}: ActualDaysProps) => {
  const { workSchedule, monthChange } = useNurseContext();


  // for (let i =1; i< workSchedule[handleMonthSelect()].length;i++){
  // }
  return (
    <>
      {daysOfMonth.map((day) => (
        <ActiveDayStyled onClick={() => workDay(day)} key={day}>
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
