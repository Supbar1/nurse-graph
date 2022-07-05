import { ActiveDayStyled } from "./actualDays.styles";
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

  return (
    <>
      {daysOfMonth.map((day, index) => (
        <ActiveDayStyled onClick={() => workDay(day)} key={index}>
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
