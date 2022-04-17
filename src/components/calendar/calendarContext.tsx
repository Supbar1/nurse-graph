import React, { useState } from "react";

type ButtonType = {
  days: number;
  nights: number;
  monthChange : number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
  setNights: React.Dispatch<React.SetStateAction<number>>;
  setMonthChange: React.Dispatch<React.SetStateAction<number>>;
};
const ButtonContext = React.createContext<ButtonType>({} as ButtonType);

const ButtonProvider: React.FC = ({ children }) => {
  const [days, setDays] = useState(0);
  const [nights, setNights] = useState(0);
  const [monthChange, setMonthChange] = useState(0);
  return (
    <ButtonContext.Provider value={{ days, setDays, nights, setNights, monthChange, setMonthChange }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonProvider;

export const useButtonContext = () => React.useContext(ButtonContext);
