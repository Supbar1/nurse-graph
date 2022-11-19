import styled from "styled-components";
import { useNurseContext, allShifts } from "../../../../context/NurseContext";
import HandleMonthSelect from "../../../../services/Months";

const MorningButtonIcon = styled.i`
  color: yellow;
`;

const MorningButton = ({ activeDay }: any) => {
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
      ...shiftsObject["morningShift"],
      actualNurse.id,
    ];
    const wholeWorkDay: allShifts = { ...shiftsObject };

    wholeWorkDay["morningShift"] = [...shiftWithActualNurse];

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
  return <MorningButtonIcon onClick={work} className="fa-solid fa-sun" />;
};

export default MorningButton;
