import React, { useState, useEffect, createContext, ReactNode } from "react";
import http from "../services/httpService";
import config from "../services/config.json";
import DaysList from "../components/calendar/elements/calendarBody/DaysList";
import HandleMonthSelect from "../services/Months";
import ClearSchedule from "./ClearSchedule";
interface NurseProviderProps {
  children: ReactNode;
}

export interface allShifts {
  [key: string]: number[];
}

export interface DayOfMonthType {
  [day: number]: allShifts[];
}

export interface WorkScheduleType {
  [month: string]: DayOfMonthType[];
}
interface NurseType {
  id?: number;
  firstName?: string;
  lastName?: string;
  picture?: string;
}
interface NurseGraphContext {
  nurses: NurseType[];
  actualNurse: NurseType;
  setActualNurse: React.Dispatch<React.SetStateAction<NurseType>>;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  workSchedule: WorkScheduleType;
  setWorkSchedule: React.Dispatch<React.SetStateAction<WorkScheduleType>>;
  monthChange: number;
  setMonthChange: React.Dispatch<React.SetStateAction<number>>;
  activeDay: DayOfMonthType;
  setActiveDay: React.Dispatch<React.SetStateAction<DayOfMonthType>>;
  daysOfMonth: number[];
  userName: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  undoDay: number;
  setUndoDay: React.Dispatch<React.SetStateAction<number>>;
  hours: (id?: number) => number;
}

const NurseContext = createContext({} as NurseGraphContext);

const NurseProvider = ({ children }: NurseProviderProps) => {
  const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);
  const [actualNurse, setActualNurse] = useState<NurseType>({} as NurseType);
  const [month, setMonth] = useState<number>(0);
  const [monthChange, setMonthChange] = useState<number>(0);
  const [userName, setUsername] = useState<string>("");
  const [activeDay, setActiveDay] = useState<DayOfMonthType>(
    {} as DayOfMonthType
  );
  const [undoDay, setUndoDay] = useState<number>(0);

  const apiNurses = async (): Promise<any> => {
    let container: any = [];
    const { data } = await http.get(config.apiNurses);
    const { results } = data;
    container.push(...results);

    let nurse = [];
    for (let item of container) {
      const nurseObject = {
        firstName: item.name.first,
        lastName: item.name.last,
        picture: item.picture.thumbnail,
        id: item.location.street.number,
      };
      nurse.push(nurseObject);
    }
    setNurses(nurse);
  };
  const hours = (id?: number) => {
    let hours = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        for (let element in singleDay) {
          if (singleDay[element].find((nurseId: number) => nurseId === id))
            hours += 12;
        }
      }
    }
    return hours;
  };
  // ClearSchedule();
  // let threeMonthsSchedule = {} as WorkScheduleType;
  // for (let i = 0; i <= 2; i++) {
  //   const date = new Date();
  //   date.setUTCDate(1);
  //   let lastDayNumber = new Date(
  //     date.getFullYear(),
  //     date.getMonth() + 1 + i,
  //     0
  //   ).getDate();
  //   let monthDays = [] as DayOfMonthType[];
  //   const threeShifts = {
  //     morningShift: [],
  //     dayShift: [],
  //     nightShift: [],
  //   } as allShifts;
  //   for (let i = 1; i <= lastDayNumber; i++) {
  //     monthDays.push({ [i]: [threeShifts] });
  //   }
  //   threeMonthsSchedule[HandleMonthSelect(i)] = monthDays;
  // }

  useEffect(() => {
    apiNurses();
    // setWorkSchedule(ClearSchedule());
  }, []);

  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const List = DaysList();
  useEffect(() => {
    setDaysOfMonth(List.daysOfMonth);
  }, [monthChange]);
  const [workSchedule, setWorkSchedule] = useState<WorkScheduleType>({
    ...ClearSchedule(),
  } as WorkScheduleType);

  return (
    <NurseContext.Provider
      value={{
        nurses,
        actualNurse,
        setActualNurse,
        month,
        setMonth,
        workSchedule,
        setWorkSchedule,
        monthChange,
        setMonthChange,
        activeDay,
        setActiveDay,
        daysOfMonth,
        userName,
        setUsername,
        undoDay,
        setUndoDay,
        hours,
      }}
    >
      {children}
    </NurseContext.Provider>
  );
};

export default NurseProvider;

export const useNurseContext = () => React.useContext(NurseContext);
