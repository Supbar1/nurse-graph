import { useNurseContext } from "../../../../context/NurseContext";

const DaysList = () => {

  const { monthChange } = useNurseContext();

  const date = new Date();
  date.setUTCDate(1);

  // Need to improve this index
  let firstDayIndex =
    new Date(date.getFullYear(), date.getMonth() + monthChange, 0).getDay() + 7;
  firstDayIndex > 7 ? (firstDayIndex -= 7) : (firstDayIndex = firstDayIndex);

  const lastPreviousDay = new Date(
    date.getFullYear(),
    date.getMonth() + monthChange,
    0
  ).getDate();

  let lastDayNumber = new Date(
    date.getFullYear(),
    date.getMonth() + 1 + monthChange,
    0
  ).getDate();

  let lastCurrentDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1 + monthChange,
    0
  ).getDay();

  let prevDays: number[] = [];
  for (let x = firstDayIndex; x > 0; x--) {
    prevDays.push(lastPreviousDay - x + 1);
  }

  let daysOfMonth = [];
  for (let i = 1; i <= lastDayNumber; i++) {
    daysOfMonth.push(i);
  }


  let nextDays = [];
  for (let y = 1; y <= 7 - lastCurrentDayIndex; y++) {
    nextDays.push(y);
  }
  const daysToRender = { prevDays, daysOfMonth, nextDays };
  return daysToRender;
};
export default DaysList;
