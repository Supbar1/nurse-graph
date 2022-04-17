import styled from "styled-components";
import { useButtonContext } from "../../calendarContext";

function MorningButton() {
  const { days, setDays } = useButtonContext();
  return (
    <i
      onClick={() => setDays(days + 1)}
      style={{ color: "yellow" }}
      className="fa-solid fa-sun"
    ></i>
  );
}

export default MorningButton;
