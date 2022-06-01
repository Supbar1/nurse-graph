import { useButtonContext } from "../../buttonContext";

function DayButton() {
  const { workHours, setWorkHours, workDays } = useButtonContext();


  function work() {
    workDays[0].workShift = "day";
    const workDay = workDays[0].workShift;
    console.log(workDay);
    setWorkHours(workHours + 12);
  }
  return (
    <i
      onClick={() => work()}
      style={{ color: "yellow" }}
      className="fa-solid fa-sun"
    ></i>
  );
}

export default DayButton;
