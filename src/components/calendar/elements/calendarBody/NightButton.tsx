import styled from "styled-components";
import {
  useNurseContext,
  DayOfMonthType,
  allShifts,
  WorkScheduleType,
} from "../../../../context/NurseContext";
// import MorningButton from './MorningButton';

const NightButtonIcon = styled.i`
  color: darkblue;
`;
interface MorningButtonType {
  log: () => void;
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const NightButton = ({ activeDay }: any) => {
  const { monthChange, workSchedule, actualNurse, setWorkSchedule } =
    useNurseContext();
  const handleMonthSelect = () => {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  };

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

    newSchedule[handleMonthSelect()][dayDigit - 1] = {
      [dayDigit]: [wholeWorkDay],
    };

    setWorkSchedule(newSchedule);
  };
  return <NightButtonIcon onClick={work} className="fa solid fa-moon " />;
};

export default NightButton;
