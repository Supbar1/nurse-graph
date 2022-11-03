import React, { useState, useEffect, createContext, ReactNode } from "react";
import http from "./services/httpService";
import config from "./services/config.json";

interface NurseProviderProps {
  children: ReactNode;
}
interface NurseGraphProviderProps {
  children: React.ReactNode;
}

export interface allShifts {
  morningShift?: string[];
  dayShift?: string[];
  nightShift?: string[];
}

export interface DayOfMonthType {
  [day: number]: (number | undefined)[];
}

export interface WorkScheduleType {
  [month: string]: DayOfMonthType[];
  // [month: string]: DayOfMonthType[];
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
  addDay: () => void;
  workSchedule: WorkScheduleType;
  setWorkSchedule: React.Dispatch<React.SetStateAction<WorkScheduleType>>;
  monthChange: number;
  setMonthChange: React.Dispatch<React.SetStateAction<number>>;
}

const NurseContext = createContext({} as NurseGraphContext);

const NurseProvider = ({ children }: NurseProviderProps) => {
  const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);
  const [actualNurse, setActualNurse] = useState<NurseType>({} as NurseType);
  const [month, setMonth] = useState<number>(0);
  const [monthChange, setMonthChange] = useState<number>(0);

  const [workSchedule, setWorkSchedule] = useState<WorkScheduleType>(
    {} as WorkScheduleType
  );

  const addDay = () => {};
  const apiNurses = async (): Promise<any> => {
    let container: any = [];
    for (let i = 0; i <= 9; i++) {
      const { data } = await http.get(config.apiNurses);
      const { results } = data;
      container.push(...results);
    }
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
  useEffect(() => {
    apiNurses();
  }, []);

  return (
    <NurseContext.Provider
      value={{
        nurses,
        actualNurse,
        setActualNurse,
        month,
        setMonth,
        addDay,
        workSchedule,
        setWorkSchedule,
        monthChange,
        setMonthChange,
      }}
    >
      {children}
    </NurseContext.Provider>
  );
};

export default NurseProvider;

export const useNurseContext = () => React.useContext(NurseContext);
