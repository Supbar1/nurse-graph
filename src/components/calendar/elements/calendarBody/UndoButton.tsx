import HandleMonthSelect from "../../../../services/Months";
import { useNurseContext } from "./../../../../context/NurseContext";

interface UndoButtonProps {
  day: number;
  handleClick: () => void;
}

const UndoButton = ({ day, handleClick }: UndoButtonProps) => {
  const { workSchedule, monthChange, actualNurse, setActiveDay, activeDay } =
    useNurseContext();

  const actualDayObject = workSchedule[HandleMonthSelect(monthChange)][day - 1];

  const actualDayShifts = actualDayObject[day][0];

  const undo = () => {
    const shiftNames: string[] = ["morningShift", "dayShift", "nightShift"];
    shiftNames.forEach((shiftName) => {
      let index = actualDayShifts[shiftName].findIndex(
        (id: number) => id === actualNurse.id
      );
      const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
      if (index > -1) {
        console.log(index);
        console.log(actualDayShifts[shiftName]);
        shiftsObject[shiftName].splice(index, 1);
        const dayDigit = Number(Object.keys(activeDay));
        workSchedule[HandleMonthSelect(monthChange)][dayDigit - 1] = {
          [dayDigit]: [shiftsObject],
        };
        setActiveDay({});
        console.log(workSchedule);
      }
    });
  };
  return (
    <>
      <i onClick={() => undo()} className="fa fa-undo" />
    </>
  );
};

export default UndoButton;
