import { useState, useEffect } from "react";
//Components
import DaysList from "./DaysList";
import WorkButton from "./Workbutton";
import { ActualDays } from "./ActualDays";
//Context
import {
  useNurseContext,
  MonthType,
  allShifts,
} from "../../../../NurseContext";

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

const ActiveDays = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const [activeButton, isActiveButton] = useState<boolean>(false);
  const { monthChange, actualNurse, workSchedule, setWorkSchedule } =
    useNurseContext();
  const List = DaysList();
  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);
  const handleMonthSelect = () => {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  };
  let workDaysArray = [] as MonthType[];
  const [singleShift, setSingleShift] = useState<MonthType>({});
  const workDay = (day: number) => {
    const newWorkDay = {} as MonthType;
    newWorkDay[day] = [actualNurse.id];
    setSingleShift({ ...singleShift, ...newWorkDay });

    const filter = workSchedule[handleMonthSelect()];

    workSchedule[handleMonthSelect()] = [newWorkDay];
    workDaysArray.push(newWorkDay);
    //obiekt typek do dnia w aktualnym miesiacu
    // console.log(newWorkDay);
    //obiekt wszystkie dni miesiaca z ludzmi
    // console.log(workSchedule[handleMonthSelect()]);

    // for (let key of filter) {
    //   if (key === newWorkDay) console.log("powtórka");

    // for (let element in filter[key]) {
    // console.log(element);
    // console.log(key);
    // if (Number(element) === day) {
    // }
    // }
    //   console.log(element.valueOf());
    // }

    // console.log(workSchedule);

    // const singleWorkDay = {} as SingleShift;
    // singleWorkDay.day = day;
    // singleWorkDay.shift = "super";
    // workArray.push({ ...singleWorkDay });
    // workArray.month = monthChange; // workDaysOfMonth.month = monthChange;
    // const result = workDaysOfMonth.workDays.push(singleWorkDay);
    // // console.log(workArray);
    // actualNurse.workDaysOfMonth = workArray;
    // console.log({ ...actualNurse.workDaysOfMonth });
    // actualNurse.workDays=singleWorkDay;
    // if (workDays[0].workShift === "none") return;
    // for (let key in workDays) {
    //   if (
    //     workDays[key].day === day &&
    //     workDays[key].monthChange === monthChange
    //   )
    //     return;
    // }
    // const workDay = [
    //   {
    //     day: day,
    //     monthChange: monthChange,
    //     workShift: "none",
    //   },
    //   ...workDays,
    // ];
    // setWorkDays([...workDay]);
  };
  const handleDaySelect = (day: number) => {
    const handleMonthSelect = () => {
      const date = new Date();
      let miesiac = new Date(
        date.getFullYear(),
        date.getMonth() + monthChange
      ).getMonth();
      return months[miesiac];
    };

    if (workSchedule[handleMonthSelect()]) {
      for (let index of workSchedule[handleMonthSelect()]) {
        for (let element in index) {
          if (Number(element) === day) return "dupczik";
        }
      }
    }
    return day;
  };

  return (
    <ActualDays
      daysOfMonth={daysOfMonth}
      workDay={workDay}
      handleDaySelect={handleDaySelect}
    />
  );
};
export default ActiveDays;
