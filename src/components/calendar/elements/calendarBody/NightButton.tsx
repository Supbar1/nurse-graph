import styled from "styled-components";
import { useNurseContext, allShifts } from "../../../../context/NurseContext";
import HandleMonthSelect from "../../../../services/Months";

const NightButtonIcon = styled.i`
  color: darkblue;
`;
const NightButton = ({ activeDay }: any) => {
  const {
    monthChange,
    workSchedule,
    actualNurse,
    setWorkSchedule,
    setActiveDay,
  } = useNurseContext();

  const work = () => {
    // const arrayOfActiveDay: any = ;

    const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
    const shiftWithActualNurse = [
      ...shiftsObject["nightShift"],
      actualNurse.id,
    ];
    const wholeWorkDay: allShifts = { ...shiftsObject };

    wholeWorkDay["nightShift"] = [...shiftWithActualNurse];

    const dayDigit = Number(Object.keys(activeDay));
    const workScheduleObject = { ...workSchedule };
    //==========NOT SURE WHY ONLY THIS WAY WORKS ============
    //=====================DOUBLE SPREAD========== ============
    const newSchedule: any = { ...workScheduleObject };

    newSchedule[HandleMonthSelect(monthChange)][dayDigit - 1] = {
      [dayDigit]: [wholeWorkDay],
    };

    setWorkSchedule(newSchedule);
    setActiveDay({});
  };
  return <NightButtonIcon onClick={work} className="fa solid fa-moon " />;
};

export default NightButton;
