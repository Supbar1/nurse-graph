import styled from "styled-components";
import HandleMonthSelect from "../../../../services/Months";
import {
  useNurseContext,
  DayOfMonthType,
  allShifts,
} from "../../../../context/NurseContext";

const DayButtonIcon = styled.i`
  color: white;
`;
interface DayButtonProps { 
  activeDay :  DayOfMonthType;
}
const DayButton = ({ activeDay }: DayButtonProps) => {
  const {
    monthChange,
    workSchedule,
    actualNurse,
    setWorkSchedule,
    setActiveDay,
  } = useNurseContext();

  const work = () => {
    const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
    const shiftWithActualNurse = [...shiftsObject["dayShift"], actualNurse.id];
    const wholeWorkDay: allShifts = { ...shiftsObject };

    wholeWorkDay["dayShift"] = [...shiftWithActualNurse];

    const dayDigit = Number(Object.keys(activeDay));
    const workScheduleObject = { ...workSchedule };
    //==========NOT SURE WHY ONLY THIS WAY WORKS ============
    //=====================DOUBLE SPREAD=======================
    const newSchedule: any = { ...workScheduleObject };

    newSchedule[HandleMonthSelect(monthChange)][dayDigit - 1] = {
      [dayDigit]: [wholeWorkDay],
    };
    setWorkSchedule(newSchedule);
    setActiveDay({});
  };

  return (
    <DayButtonIcon
      onClick={work}
      className="fa solid fa-clock "
    />
  );
};

export default DayButton;
