import React, { useState } from "react";

type ButtonType = {
  workHours: number;
  setWorkHours: React.Dispatch<React.SetStateAction<number>>;
  monthChange: number;
  setMonthChange: React.Dispatch<React.SetStateAction<number>>;
  workDays: WorkDaysType
  setWorkDays: React.Dispatch<React.SetStateAction<WorkDaysType>
  >;
};

type WorkDaysType = Array<{
  day: number;
  monthChange: number;
  workShift: string;
}>

const ButtonContext = React.createContext<ButtonType>({} as ButtonType);

const ButtonProvider: React.FC = ({ children }) => {
  const [workHours, setWorkHours] = useState(0);
  const [monthChange, setMonthChange] = useState(0);
  const [workDays, setWorkDays] = useState([
    { day: 0, monthChange: 0, workShift: "" },
  ]);
  return (
    <ButtonContext.Provider
      value={{
        workHours,
        setWorkHours,
        monthChange,
        setMonthChange,
        workDays,
        setWorkDays,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonProvider;

export const useButtonContext = () => React.useContext(ButtonContext);
