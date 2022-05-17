import { useButtonContext } from "../calendar/buttonContext";
import styled from "styled-components";

const Window = styled.div``;

function InfoWindow() {
  const { days, nights } = useButtonContext();
  return (
    <Window>
      <h2>Wesołe Okienko</h2>
      <p>Tyle dni {days}/6</p>
      <p>Tyle nocy {nights}/5</p>
      <p>Razem: {nights + days}</p>
    </Window>
  );
}
export default InfoWindow;
