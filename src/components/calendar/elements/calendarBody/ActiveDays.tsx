import { useState, useEffect } from "react";
//Components
import DaysList from "./DaysList";
import WorkButton from "./Workbutton";
import { ActualDays } from "./ActualDays";
//Context
import {
  useNurseContext,
  DayOfMonthType,
  allShifts,
  WorkScheduleType,
} from "../../../../NurseContext";
import { getValue } from "@testing-library/user-event/dist/utils";
import { object } from "joi";

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

  const addWorkDay = (day: number) => {
    console.log("---------------------------------");

    let workScheduleObject = workSchedule;

    if (!workScheduleObject[handleMonthSelect()]) {
      // If sprawdzający czy miesiąc istnieje
      workScheduleObject[handleMonthSelect()] = [];
    }
    let newMonthArray = [...workScheduleObject[handleMonthSelect()]];
    // console.log([...workScheduleObject[handleMonthSelect()]]);

    const index = newMonthArray.findIndex(
      (object) => Number(Object.keys(object)) === day
    );

    if (index !== -1) {
      // console.log("sprawdzamy to");
      const nursesAlreadyAttachedToClickedDay = Object.values(
        workScheduleObject[handleMonthSelect()][index]
      ).flat(1);

      // console.log(nursesAlreadyAttachedToClickedDay);
      const isActualNurseIncluded = nursesAlreadyAttachedToClickedDay.find(
        (particularId) => particularId === actualNurse.id
      );
      if (isActualNurseIncluded === undefined) {
        // console.log("NIE MA TAKIEJ JESZCZE WIEC LECIMY DALEJ");
      }
      if (isActualNurseIncluded !== undefined) {
        console.log(
          isActualNurseIncluded,
          "JEST TAKA I WYGLADA TAK WIEC RETURN"
        );
        return;
      }
    }

    console.log(newMonthArray, "to dostaję na warsztat");

    let newDayObject = {} as DayOfMonthType;

    if (newMonthArray.length > 0) {
      for (let element of newMonthArray) {

        if (Number(Object.keys(element)) === day) {
          const extraArray = Object.values(newMonthArray[index]).flat(1);

          extraArray.push(actualNurse.id);
          const clickedDay = Number(Object.keys(newMonthArray[index]));

          newDayObject = {
            [clickedDay]: extraArray,
          } as DayOfMonthType;

          newMonthArray[index] = newDayObject; //=================
          workScheduleObject[handleMonthSelect()] = newMonthArray;
          setWorkSchedule(workScheduleObject);
          return
        }
      }
      newDayObject = { [day]: [actualNurse.id] };
      workScheduleObject[handleMonthSelect()].push(newDayObject);
      setWorkSchedule(workScheduleObject);
      return;
    }
    if (newMonthArray.length === 0) {
      newDayObject = { [day]: [actualNurse.id] };
      workScheduleObject[handleMonthSelect()].push(newDayObject); //
      setWorkSchedule(workScheduleObject);
      return;
    }
    setWorkSchedule(workScheduleObject);
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
        // for (let element in index) {
        //   if (Number(element) === day) return "dupczik";
        // }
      }
    }
    return day;
  };

  return (
    <>
      <button onClick={() => setWorkSchedule({})}>Zerowanie</button>
      <button onClick={() => console.log(workSchedule)}>Caly grafik</button>
      <button onClick={() => console.log(...workSchedule[handleMonthSelect()])}>
        Grafik ten miesiac
      </button>
      <ActualDays
        daysOfMonth={daysOfMonth}
        workDay={addWorkDay}
        handleDaySelect={handleDaySelect}
      />
    </>
  );
};
export default ActiveDays;
