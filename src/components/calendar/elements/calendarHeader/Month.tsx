
import styled from "styled-components";
import { useNurseContext } from "../../../../NurseContext";

const Header = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.2rem;
`;

const Month = () => {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesien",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const {monthChange}= useNurseContext();

  const handleMonthSelect = () => {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  };
  return <Header>{handleMonthSelect()}</Header>;
};
export default Month;
