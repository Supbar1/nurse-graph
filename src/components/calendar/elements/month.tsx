import { useButtonContext } from "../buttonContext";

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
  return <h1>{handleMonthSelect()}</h1>;
}
