import styled from "styled-components";
import { useButtonContext } from "../../buttonContext";

const SilverMoon = styled.i`
  color: silver;
`;
export default function NightButton() {
  const { workHours, setWorkHours, workDays } = useButtonContext();

  function work() {
    workDays[0].workShift = "evening";

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
