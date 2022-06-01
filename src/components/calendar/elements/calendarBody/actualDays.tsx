import { ActiveDayStyled } from "./actualDays.styles";

import { useButtonContext } from "../../buttonContext";
interface ILIST {
  daysOfMonth: number[];
  handleDaySelect(day: number): {} | JSX.Element;
  workDay: (day: number, monthChange: number) => void;
}

export const ActualDays: React.FC<ILIST> = ({
  daysOfMonth,
  handleDaySelect,
  workDay,
 
}) => {
  const { monthChange } = useButtonContext();
  return (
    <>
      {daysOfMonth.map((day, index) => (
        <ActiveDayStyled
          onClick={() => workDay(day, monthChange)}
          key={index}
        >
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
