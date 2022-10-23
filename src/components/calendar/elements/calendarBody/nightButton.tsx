import styled from "styled-components";
import { useButtonContext } from "../../ButtonContext";

const SilverMoon = styled.i`
  color: silver;
`;
const NightButton = () => {
  const { workHours, setWorkHours, workDays } = useButtonContext();

  const work = () => {
    workDays[0].workShift = "evening";

    setWorkHours(workHours + 12);
  };
  return (
    <>
      <SilverMoon
        onClick={() => work()}
        className="fa-solid fa-moon silver"
      ></SilverMoon>
    </>
  );
};
export default NightButton;
