import React, { useState } from "react";
import { allNurses } from "./components/nursesList/nursesList";

// const backEndNurses = allNurses().nurses;

interface actualNurse {
  name: string;
}
type NurseType = {
  name: string;
  setNurseName: React.Dispatch<React.SetStateAction<string>>;
};
const NurseContext = React.createContext<NurseType>({} as NurseType);

const NurseProvider: React.FC = ({ children }) => {
  const [name, setNurseName] = useState("");
  return (
    <NurseContext.Provider value={{ name, setNurseName }}>
      {children}
    </NurseContext.Provider>
  );
};

export default NurseProvider;

export const useNurseContext = () => React.useContext(NurseContext);
