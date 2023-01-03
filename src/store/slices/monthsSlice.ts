import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ClearSchedule from "../../services/ClearSchedule";
import HandleMonthSelect from "../../services/Months";
import { RootState } from "../store";

export interface allShifts {
  [key: string]: number[];
}

export interface DayOfMonthType {
  [day: number]: allShifts[];
}

export interface MonthType {
  [month: string]: DayOfMonthType[];
}

export interface WorkScheduleType {
  workSchedule: MonthType;
  monthChange: number;
  undoDay: number;
  activeDay: DayOfMonthType;
}
const initialSchedule = ClearSchedule();

const initialState: WorkScheduleType = {
  workSchedule: initialSchedule,
  monthChange: 0,
  undoDay: 0,
  activeDay: {} as unknown as DayOfMonthType,
};

const monthChangeSlice = createSlice({
  name: "monthChange",
  initialState,
  reducers: {
    switchMonth: (state, action: PayloadAction<any>) => {
      state.monthChange += action.payload;
    },
    setActiveDay: (state, action: PayloadAction<any>) => {
      state.activeDay = action.payload;
    },
    resetWorkSchedule: (state, action: PayloadAction<any>) => {
      state.workSchedule = action.payload;
    },
    setWorkSchedule: (state, action: PayloadAction<any>) => {
      const dayDigit = Number(Object.keys(action.payload));
      state.workSchedule[HandleMonthSelect(state.monthChange)][dayDigit - 1] =
        action.payload;
    },
    setUndoDay: (state, action: PayloadAction<any>) => {
      state.undoDay = action.payload[0];
      const day = action.payload[0];
      const nurseID = action.payload[1];
      if (nurseID !== 0) {
        const actualDayShifts =
          state.workSchedule[HandleMonthSelect(state.monthChange)][day - 1][
            day
          ][0];
        const shiftNames: string[] = ["morningShift", "dayShift", "nightShift"];
        shiftNames.forEach((shiftName) => {
          let index = actualDayShifts[shiftName].findIndex(
            (id: number) => id === nurseID
          );
          const shiftsObject: any = [...Object.values(state.activeDay)].flat(
            1
          )[0];
          if (index > -1) {
            shiftsObject[shiftName].splice(index, 1);
            const dayDigit = Number(Object.keys(state.activeDay));
            state.workSchedule[HandleMonthSelect(state.monthChange)][
              dayDigit - 1
            ] = {
              [dayDigit]: [shiftsObject],
            };
          }
        });
        state.undoDay = 0;
      }
    },
  },
});
export const selectMonthChange = (state: RootState) => state.monthChange;
export const selectWorkSchedule = (state: RootState) =>
  state.monthChange.workSchedule;
export const selectActiveDay = (state: RootState) =>
  state.monthChange.activeDay;
export const selectUndoDay = (state: RootState) => state.monthChange.undoDay;

export const {
  switchMonth,
  setActiveDay,
  setWorkSchedule,
  setUndoDay,
  resetWorkSchedule,
} = monthChangeSlice.actions;

export default monthChangeSlice.reducer;
