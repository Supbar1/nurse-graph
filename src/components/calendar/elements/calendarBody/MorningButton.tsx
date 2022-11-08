import styled from "styled-components";
import {
  useNurseContext,
  DayOfMonthType,
  allShifts,
  WorkScheduleType,
} from "../../../../NurseContext";
// import MorningButton from './MorningButton';

const MorningButtonIcon = styled.i`
  color: white;
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
const MorningButton = ({ activeDay }: any) => {
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

    const arrayOfDay: any = [...Object.values(activeDay)];
    const shiftsObject = arrayOfDay.flat(1)[0];
    let experimentalArray = [...shiftsObject["morningShift"], actualNurse.id];
    let experimentalObject: any = {};
    experimentalObject = { ...shiftsObject };
    experimentalObject["morningShift"] = [...experimentalArray];

    const day = Number(Object.keys(activeDay));
    const workScheduleObject = { ...workSchedule };


    let justObject: any = { ...workScheduleObject };

    justObject[handleMonthSelect()][day-1] = { [day]: [experimentalObject] };

    setWorkSchedule(justObject)
  };
  return <MorningButtonIcon onClick={work} className="fa-solid fa-clock" />;
};

export default MorningButton;
