import { useNurseContext,MonthType } from "../../../../NurseContext";

import { ActiveDayStyled } from "./ActualDays.styles";
import { useEffect } from 'react';

interface ILIST {
  daysOfMonth: number[];
  handleDaySelect(day: number): {} | JSX.Element;
  workDay: (day: number) => void;
}

export const ActualDays: React.FC<ILIST> = ({
  daysOfMonth,
  handleDaySelect,
  workDay,
}) => {
  const { workSchedule, setWorkSchedule,actualNurse } = useNurseContext();
  
  

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
