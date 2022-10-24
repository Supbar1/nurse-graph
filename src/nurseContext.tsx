import React, { useState, useEffect, createContext } from "react";
import http from "./services/httpService";
import config from "./services/config.json";
interface WorkDay{
  day: number;
  shift: string;
}
export interface WorkDayType {
  month: number;
  workDays: WorkDay[];
}
//question marks to remove without workDays
export interface NurseType {
  firstName?: string;
  lastName?: string;
  picture?: string;
  id?: number;
  workDays?: WorkDayType[];
}
export interface NurseGraphContext {
  nurses: NurseType[];
  setNurses: React.Dispatch<React.SetStateAction<NurseType[]>>;
  actualNurse: NurseType;
  setActualNurse: React.Dispatch<React.SetStateAction<NurseType>>;
}

const NurseContext = createContext({} as NurseGraphContext);

const NurseProvider = ({ children }: any) => {
  const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);
  const [actualNurse, setActualNurse] = useState<NurseType>({} as NurseType);

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
        workDays: [],
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
      value={{ nurses, setNurses, actualNurse, setActualNurse }}
    >
      {children}
    </NurseContext.Provider>
  );
};

export default NurseProvider;

export const useNurseContext = () => React.useContext(NurseContext);
