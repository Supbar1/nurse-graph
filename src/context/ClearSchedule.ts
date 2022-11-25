 import { WorkScheduleType,DayOfMonthType,allShifts } from './NurseContext';
import HandleMonthSelect from '../services/Months';


const ClearSchedule = () => {
    let threeMonthsSchedule = {} as WorkScheduleType;
    for (let i = 0; i <= 2; i++) {
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
      threeMonthsSchedule[HandleMonthSelect(i)] = monthDays;
    }
    return threeMonthsSchedule;
}
 
export default ClearSchedule;