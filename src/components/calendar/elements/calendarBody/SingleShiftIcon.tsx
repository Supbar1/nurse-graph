import styled from "styled-components";
import { useAppSelector } from "../../../../store/hooks";
import { selectActualNurse } from "../../../../store/slices/nursesSlice";
import { useAppDispatch } from "../../../../store/hooks";
import {
  allShifts,
  DayOfMonthType,
  setActiveDay,
  setWorkSchedule,
} from "../../../../store/slices/monthsSlice";

const SingleShiftIcon = styled.i`
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
  const actualNurse = useAppSelector(selectActualNurse);
  const dispatch = useAppDispatch();

  const work = () => {
    const shiftsObject: any = [...Object.values(activeDay)].flat(1)[0];
    const shiftWithActualNurse = [...shiftsObject[shiftName], actualNurse.id];
    const wholeWorkDay: allShifts = { ...shiftsObject };

    wholeWorkDay[shiftName] = [...shiftWithActualNurse];

    const dayDigit = Number(Object.keys(activeDay));
    const dayWithNurse = { [dayDigit]: [wholeWorkDay] };

    dispatch(setWorkSchedule(dayWithNurse));
    dispatch(setActiveDay({}));
  };
  return <SingleShiftIcon color={color} onClick={work} className={className} />;
};

export default SingleShiftButton;
