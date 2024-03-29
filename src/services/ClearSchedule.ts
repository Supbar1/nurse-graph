import HandleMonthSelect from "./Months";
import {
  allShifts,
  DayOfMonthType,
  WorkScheduleType,
} from "../store/slices/monthsSlice";

const ClearSchedule = () => {
  let fourMonthsSchedule = {} as WorkScheduleType["workSchedule"];
  for (let i = 0; i <= 3; i++) {
    const date = new Date();
    date.setUTCDate(1);
    let lastDayNumber = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + i,
      0
    ).getDate();
    let monthDays = [] as DayOfMonthType[];
    const threeShifts = {
      morningShift: [],
      dayShift: [],
      nightShift: [],
    } as allShifts;
    for (let i = 1; i <= lastDayNumber; i++) {
      monthDays.push({ [i]: [threeShifts] });
    }
    fourMonthsSchedule[HandleMonthSelect(i)] = monthDays;
  }

  return fourMonthsSchedule;
};

export default ClearSchedule;
