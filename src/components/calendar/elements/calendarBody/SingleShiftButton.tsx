import styled from "styled-components";
import HandleMonthSelect from "../../../../services/Months";
import { useAppSelector } from "../../../../store/hooks";
import {
  useNurseContext,
  allShifts,
  DayOfMonthType,
} from "../../../../context/NurseContext";
import { selectMonthChange } from "../../../../store/monthChangeSlice";

const MorningButtonIcon = styled.i`
  color: ${(props): any => props.color};
`;
interface WorkButtonType {
  activeDay: DayOfMonthType;
  shiftName: string;
  className: string;
  color: string;
}

const SingleShiftButton = ({
  activeDay,
  shiftName,
  className,
  color,
}: WorkButtonType) => {
  const {
    workSchedule,
    actualNurse,
  } = useNurseContext();
  const { monthChange } = useAppSelector(selectMonthChange);
  const work = () => {
    const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
    const shiftWithActualNurse = [...shiftsObject[shiftName], actualNurse.id];
    const wholeWorkDay: allShifts = { ...shiftsObject };

    wholeWorkDay[shiftName] = [...shiftWithActualNurse];

    const dayDigit = Number(Object.keys(activeDay));
    workSchedule[HandleMonthSelect(monthChange)][dayDigit - 1] = {
      [dayDigit]: [wholeWorkDay],
    };
  };
  return (
    <MorningButtonIcon color={color} onClick={work} className={className} />
  );
};

export default SingleShiftButton;
