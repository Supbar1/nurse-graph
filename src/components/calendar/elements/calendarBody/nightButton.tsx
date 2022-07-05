import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";

const SilverMoon = styled.i`
  color: silver;
`;
export default function NightButton() {
  const { workHours, setWorkHours, workDays } = useButtonContext();

  function work() {
    workDays[0].workShift = "evening";
    const workDay = workDays[0].workShift;

    console.log(workDay);
    setWorkHours(workHours + 12);
  }
  return (
    <>
      <SilverMoon
        onClick={() => work()}
        className="fa-solid fa-moon silver"
      ></SilverMoon>
    </>
  );
}


