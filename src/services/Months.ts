

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const HandleMonthSelect = (monthChange: number) => {
  // const { monthChange } = useNurseContext();
  const date = new Date();
  let miesiac = new Date(
    date.getFullYear(),
    date.getMonth() + monthChange
  ).getMonth();
  return months[miesiac];
};

export default HandleMonthSelect;
