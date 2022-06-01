import { useButtonContext } from "../calendar/buttonContext";
import styled from "styled-components";

const Window = styled.div``;

function InfoWindow() {
  const { workHours } = useButtonContext();
  return (
    <Window>
      <h2>Wesołe Okienko</h2>
      <p>Razem godzin: {workHours}</p>
    </Window>
  );
}
export default InfoWindow;
