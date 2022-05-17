import { ActiveDayStyled } from "./actualDays.styles";

interface ILIST {
  daysOfMonth: number[];
  handleDaySelect(day: number): number | JSX.Element;
  workDay: (day: number) => void;
}

export const ActualDays: React.FC<ILIST> = ({
  workDay,
  daysOfMonth,
  handleDaySelect,
}) => {
  return (
    <>
      {daysOfMonth.map((day, index) => (
        <ActiveDayStyled onClick={() => workDay(day)} key={index} >
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
