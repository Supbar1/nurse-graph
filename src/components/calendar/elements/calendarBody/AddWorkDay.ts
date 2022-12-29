import HandleMonthSelect from "../../../../services/Months";
import { useAppSelector } from "../../../../store/hooks";
import { selectMonthChange } from "../../../../store/slices/monthChangeSlice";
import {
  WorkScheduleType,
  allShifts,
  DayOfMonthType,
  NurseType,
} from "./../../../../context/NurseContext";

interface DayButtonProps {
  shiftName: string;
  activeDay: DayOfMonthType;
  actualNurse: NurseType;
  workSchedule: WorkScheduleType;
}
const Work = ({
  shiftName,
  activeDay,
  actualNurse,
  workSchedule,
}: DayButtonProps) => {
  const { monthChange } = useAppSelector(selectMonthChange);

  const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
  const shiftWithActualNurse = [...shiftsObject[shiftName], actualNurse.id];
  const wholeWorkDay: allShifts = { ...shiftsObject };
  wholeWorkDay[shiftName] = [...shiftWithActualNurse];
  const dayDigit = Number(Object.keys(activeDay));

  workSchedule[HandleMonthSelect(monthChange)][dayDigit - 1] = {
    [dayDigit]: [wholeWorkDay],
  };
};

export default Work;
