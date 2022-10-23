import React, { useState, useEffect, createContext } from "react";
import http from "./services/httpService";
import config from "./services/config.json";

interface NurseGraphProviderProps {
  children: React.ReactNode;
}

interface WorkDayType {
  day: number;
  month: number;
  shift: string;
}
//question marks to remove without workDays
interface NurseType {
  firstName?: string;
  lastName?: string;
  picture?: string;
  id?: number;
  workDays?: WorkDayType[];
  
}
interface NurseGraphContext {
  nurses: NurseType[];
}
const NurseContext = createContext({} as NurseGraphContext);

const NurseProvider = ({ children }: any) => {
  const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);

  const apiNurses = async (): Promise<any> => {
    let container: any = [];
    for (let i = 0; i <= 3; i++) {
      const { data } = await http.get(config.apiNurses);
      const { results } = data;

      // const
      container.push(...results);

      // fetchRandomData().then(({ results }) => {
      // });
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
      console.log(nurseObject);
      nurse.push(nurseObject);
    }
    setNurses(nurse);
  };

  useEffect(() => {
    apiNurses();
  }, []);
  return <NurseContext.Provider value={{nurses}}>{children}</NurseContext.Provider>;
};

export default NurseProvider;

export const useNurseContext = () => React.useContext(NurseContext);
