import styled from "styled-components";
import { useButtonContext } from "../../ButtonContext";
import { useNurseContext } from "./../../../../NurseContext";

const SilverMoon = styled.i`
  color: silver;
`;
const NightButton = () => {
  const { workSchedule, setWorkSchedule } = useNurseContext();

  const work = () => {
    console.log("night");
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
