import { useAppSelector } from "../../../../store/hooks";
import { selectMonthChange } from "../../../../store/monthChangeSlice";

const DaysList = () => {
  const { monthChange } = useAppSelector(selectMonthChange);
  const date = new Date();
  date.setUTCDate(1);

  let firstDayIndex =
    new Date(date.getFullYear(), date.getMonth() + monthChange, 0).getDay();

    let lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1 + monthChange,
      0
    ).getDate();

  const lastPreviousMonthDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + monthChange,
    0
  ).getDate();


  let lastCurrentDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1 + monthChange,
    0
  ).getDay();

  let prevDays: number[] = [];
  for (let x = firstDayIndex; x > 0; x--) {
    prevDays.push(lastPreviousMonthDayIndex - x + 1);
  }

  let daysOfMonth: number[] = [];
  for (let i = 1; i <= lastDayIndex; i++) {
    daysOfMonth.push(i);
  }

  let nextDays: number[] = [];
  for (let y = 1; y <= 7 - lastCurrentDayIndex; y++) {
    nextDays.push(y);
  }
  const daysToRender = { prevDays, daysOfMonth, nextDays };
  return daysToRender;
};
export default DaysList;
