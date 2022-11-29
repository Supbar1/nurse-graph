import styled from "styled-components";
import { useNurseContext, allShifts,DayOfMonthType } from "../../../../context/NurseContext";
import HandleMonthSelect from "../../../../services/Months";

const MorningButtonIcon = styled.i`
  color: yellow;
`;
interface WorkButtonType {
  activeDay: DayOfMonthType;
}

const MorningButton = ({ activeDay }: WorkButtonType) => {
  const {
    monthChange,
    workSchedule,
    actualNurse,
  } = useNurseContext();

  const work = () => {
    const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
    const shiftWithActualNurse = [
      ...shiftsObject["morningShift"],
      actualNurse.id,
    ];
    const wholeWorkDay: allShifts = { ...shiftsObject };

    wholeWorkDay["morningShift"] = [...shiftWithActualNurse];

    const dayDigit = Number(Object.keys(activeDay));
    workSchedule[HandleMonthSelect(monthChange)][dayDigit - 1] = {
      [dayDigit]: [wholeWorkDay],
    };
  };
  return <MorningButtonIcon onClick={work} className="fa-solid fa-sun" />;
};

export default MorningButton;
