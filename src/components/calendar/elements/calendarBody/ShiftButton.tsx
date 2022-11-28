import { useNurseContext, allShifts } from "./../../../../context/NurseContext";

interface ShiftButtonProps {
  day: number;
  actualDayShifts: allShifts;
}
const ShiftButton = ({ day, actualDayShifts }: ShiftButtonProps) => {
  const { actualNurse, setUndoDay } = useNurseContext();

  const shiftIcon = (color: string, iconName: string) => {
    const fontAwsomeName = "fa-solid fa-" + iconName;
    return (
      <i
        onClick={() => setUndoDay(day)}
        style={{ color: color }}
        className={fontAwsomeName}
      />
    );
  };

  const isActualNurseAtThisNight = actualDayShifts.nightShift?.find(
    (index) => index === actualNurse.id
  );
  if (isActualNurseAtThisNight) {
    return shiftIcon("silver", "moon");
  }

  const isActualNurseAtThisDay = actualDayShifts.dayShift?.find(
    (index) => index === actualNurse.id
  );
  if (isActualNurseAtThisDay) return shiftIcon("white", "clock");

  let isActualNurseAtThisMorning = actualDayShifts.morningShift?.find(
    (index) => index === actualNurse.id
  );
  if (isActualNurseAtThisMorning) return shiftIcon("yellow", "sun");
  return <></>;
};
// }

export default ShiftButton;
