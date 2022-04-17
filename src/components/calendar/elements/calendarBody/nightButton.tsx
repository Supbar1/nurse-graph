import { useButtonContext } from "../../calendarContext";
import styled from "styled-components";

const SilverMoon = styled.i`
  color: silver;
`;
function NightButton() {
  const { nights, setNights } = useButtonContext();
  return (
    <SilverMoon
      onClick={() => setNights(nights + 1)}
      className="fa-solid fa-moon silver"
    ></SilverMoon>
  );
}

export default NightButton;
