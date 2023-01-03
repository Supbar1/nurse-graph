import { useEffect } from "react";
import { ActiveDayStyled } from "./ActualDays.styles";
import DaysList from "./DaysList";
import WorkButton from "./Workbutton";
import HandleMonthSelect from "../../../../services/Months";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectWorkSchedule } from "./../../../../store/slices/monthsSlice";
import InfoButton from "./InfoButton";
import UndoButton from "./UndoButton";
import ShiftButton from "./ShiftButton";
import { selectActualNurse } from "../../../../store/slices/nursesSlice";
import {
  selectMonthChange,
  selectActiveDay,
  setActiveDay,
  selectUndoDay,
} from "../../../../store/slices/monthsSlice";

const ActiveDays = () => {
  const { monthChange } = useAppSelector(selectMonthChange);
  const activeDay = useAppSelector(selectActiveDay);
  const workSchedule = useAppSelector(selectWorkSchedule);
  const undoDay = useAppSelector(selectUndoDay);
  const dispatch = useAppDispatch();
  const actualNurse = useAppSelector(selectActualNurse);

  const List = DaysList();

  useEffect(() => {
    dispatch(setActiveDay({}));
  }, [monthChange]);

  const addWorkDay = (day: number) => {
    dispatch(
      setActiveDay(
        workSchedule[HandleMonthSelect(monthChange)].flat(1)[day - 1]
      )
    );
  };

  const handleDaySelect = (day: number) => {
    if (undoDay === day) {
      return <UndoButton day={day} />;
    }

    const actualDayShifts =
      workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0];
    const shiftNames: string[] = ["morningShift", "dayShift", "nightShift"];
    let actualNursePresent = null;
    shiftNames.forEach((shiftName) => {
      const index = actualDayShifts[shiftName].findIndex(
        (id: number) => id === actualNurse.id
      );
      if (index >= 0) {
        actualNursePresent = [index];
      }
    });

    if (actualNursePresent) {
      return <ShiftButton day={day} actualDayShifts={actualDayShifts} />;
    }
    if (Number(Object.keys(activeDay)) === day) {
      return <WorkButton activeDay={activeDay} />;
    }
    return <InfoButton day={day} handleClick={() => console.log("")} />;
  };

  return (
    <>
      {List.daysOfMonth.map((day) => (
        <ActiveDayStyled onClick={() => addWorkDay(day)} key={day}>
          {handleDaySelect(day)}
        </ActiveDayStyled>
      ))}
    </>
  );
};
export default ActiveDays;
