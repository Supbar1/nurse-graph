import React, { useState, useEffect, createContext, ReactNode } from "react";
import http from "./services/httpService";
import config from "./services/config.json";
import ChangeMobileToHorizontalDimension from "./Information";
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
interface NurseProviderProps {
  children: ReactNode;
}
interface NurseGraphProviderProps {
  children: React.ReactNode;
}

export interface allShifts {
  morningShift?: number[];
  dayShift?: number[];
  nightShift?: number[];
}

export interface DayOfMonthType {
  [day: number]: allShifts[];
}

export interface WorkScheduleType {
  [month: string]: DayOfMonthType[] ;
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
  activeDay:DayOfMonthType;
   setActiveDay: React.Dispatch<React.SetStateAction<DayOfMonthType>>;
}

const NurseContext = createContext({} as NurseGraphContext);

const NurseProvider = ({ children }: NurseProviderProps) => {
  const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);
  const [actualNurse, setActualNurse] = useState<NurseType>({} as NurseType);
  const [month, setMonth] = useState<number>(0);
  const [monthChange, setMonthChange] = useState<number>(0);
  const [activeDay, setActiveDay] = useState<DayOfMonthType>(
    {} as DayOfMonthType
  );

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

  let threeMonthsSchedule = {} as WorkScheduleType;
  // ...Object.values(workSchedule)
  for (let i = 0; i <= 2; i++) {
    const handleMonthSelect = () => {
      const date = new Date();
      let miesiac = new Date(
        date.getFullYear(),
        date.getMonth() + i
      ).getMonth();
      return months[miesiac];
    };
    // threeMonthsSchedule.push({[handleMonthSelect()]: []})
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
    console.log("DLACZEGO SIE ODPALASZ JA SIE PYTAM!?");
    // threeMonthsSchedule[];
    threeMonthsSchedule[handleMonthSelect()] = monthDays;
    // let singleMonth ={ [handleMonthSelect()]: monthDays }
    //     workSchedule[threeMonthsSchedule] =singleMonth
    // threeMonthsSchedule.push({ [handleMonthSelect()]: monthDays });
    // console.log(threeMonthsSchedule);

    // console.log({ [handleMonthSelect()]: monthDays });
    // threeMonthsSchedule[handleMonthSelect()] = monthDays
  }
  // console.log(threeMonthsSchedule, "after big array");
  
  useEffect(() => {
    apiNurses();
    setWorkSchedule(threeMonthsSchedule);
    console.log("USE-EFFECT");
    
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
        activeDay, setActiveDay
      }}
    >
      {children}
    </NurseContext.Provider>
  );
};

export default NurseProvider;

export const useNurseContext = () => React.useContext(NurseContext);
