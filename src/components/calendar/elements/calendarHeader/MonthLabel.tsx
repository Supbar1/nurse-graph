import styled from "styled-components";
import { useAppSelector } from "../../../../store/hooks";
import { selectMonthChange } from "../../../../store/monthChangeSlice";

const Header = styled.h1`
  letter-spacing: 0.2rem;
`;

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

const Month = () => {
  const { monthChange } = useAppSelector(selectMonthChange);

  const handleMonthSelect = () => {
    const date = new Date();
    let month = new Date(
      date.getFullYear(),
      date.getMonth() + monthChange
    ).getMonth();
    return months[month];
  };
  return <Header>{handleMonthSelect()}</Header>;
};
export default Month;
