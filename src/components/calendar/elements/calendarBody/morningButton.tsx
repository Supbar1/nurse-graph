import styled from "styled-components";
import { useButtonContext } from "../../buttonContext";

const YellowSun = styled.i`
  color: white;
`;
function MorningButton() {
  const { workHours, setWorkHours, workDays } = useButtonContext();

  function work() {
    workDays[0].workShift = "morning";

    setWorkHours(workHours + 8);
  }
  return (
    <>
      <YellowSun
        onClick={() => work()}
        className="fa-solid fa-clock"
      ></YellowSun>
    </>
  );
}

export default MorningButton;
