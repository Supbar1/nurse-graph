import { useButtonContext } from "../../buttonContext";
import styled from "styled-components";
import { useState } from "react";

const SilverMoon = styled.i`
  color: silver;
`;
function NightButton() {
  const { workHours, setWorkHours, workDays } = useButtonContext();
  const [working, setWorking] = useState(false);

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

export default NightButton;
