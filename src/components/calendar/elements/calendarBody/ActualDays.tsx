import { useNurseContext, WorkScheduleType } from "../../../../NurseContext";
import { ActiveDayStyled } from "./ActualDays.styles";
import DaysList from "./DaysList";
import { useState, useEffect } from "react";
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
  const { monthChange } = useNurseContext();
  // console.log(daysOfMonth, " ++++++++++++++++");

  // for (let i =1; i< workSchedule[handleMonthSelect()].length;i++){
  // }
  // const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  // const List = DaysList();

  // useEffect(() => {
  //   console.log(daysOfMonth, "THIS IS MY TIME YOU FOOLS!");
    
  //   setDaysOfMonth(List.daysOfMonth);
  // }, [monthChange]);
  return (
    <><button onClick={()=>console.log(daysOfMonth)}>Button</button>
      {daysOfMonth.map((day) => (
        <ActiveDayStyled onClick={() => workDay(day)} key={day}>
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
