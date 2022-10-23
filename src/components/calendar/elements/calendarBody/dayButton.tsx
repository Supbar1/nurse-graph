import { useButtonContext } from "../../ButtonContext";

const DayButton = () => {
  const { workHours, setWorkHours, workDays } = useButtonContext();

  const work = () => {
    workDays[0].workShift = "day";
    setWorkHours(workHours + 12);
  };
  return (
    <i
      onClick={() => work()}
      style={{ color: "yellow" }}
      className="fa-solid fa-sun"
    ></i>
  );
};

export default DayButton;
