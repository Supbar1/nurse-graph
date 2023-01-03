import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectActualNurse } from "../../../../store/slices/nursesSlice";
import { allShifts, setUndoDay } from "../../../../store/slices/monthsSlice";

interface ShiftButtonProps {
  day: number;
  actualDayShifts: allShifts;
}
const ShiftButton = ({ day, actualDayShifts }: ShiftButtonProps) => {
  const dispatch = useAppDispatch();
  const actualNurse = useAppSelector(selectActualNurse);

  const shiftIcon = (color: string, iconName: string) => {
    const fontAwsomeName = "fa-solid fa-" + iconName;
    return (
      <i
        onClick={() => dispatch(setUndoDay([day, 0]))}
        style={{ color: color }}
        className={fontAwsomeName}
      />
    );
  };
  const nurseShift = (actualDayShifts: allShifts) => {
    for (let shift in actualDayShifts) {
      if (
        actualDayShifts[shift].find((nurse: number) => nurse === actualNurse.id)
      ) {
        return shift;
      }
    }
  };
  switch (nurseShift(actualDayShifts)) {
    case "morningShift":
      return shiftIcon("white", "clock");
    case "dayShift":
      return shiftIcon("white", "clock");
    default:
      return shiftIcon("silver", "moon");
  }
};

export default ShiftButton;
