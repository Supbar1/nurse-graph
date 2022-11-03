import { useNurseContext } from "../../../../NurseContext";
import { ActiveDayStyled } from "./ActualDays.styles";

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
