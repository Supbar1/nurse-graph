import { useButtonContext } from "../calendar/calendarContext";
import styled from "styled-components";

const Window = styled.div`
  grid-column: 7;
  grid-row: 2;
`;

function InfoWindow() {
  const { days, nights } = useButtonContext();
  return (
    <Window>
      <h2>Wesołe Okienko</h2>
      <p>Tyle dni {days}</p>
      <p>Tyle nocy {nights}</p>
      <p>Razem: {nights + days}</p>
    </Window>
  );
}
export default InfoWindow;
