import { useButtonContext } from "../../ButtonContext";
import styled from "styled-components";

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

  const { monthChange } = useButtonContext();

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
