import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.2rem;
`;

export default function Month() {
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

  function handleMonthSelect() {
    const date = new Date();
    let miesiac = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[miesiac];
  }
  return <Header>{handleMonthSelect()}</Header>;
}
