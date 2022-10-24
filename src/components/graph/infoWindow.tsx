import { useButtonContext } from "../calendar/ButtonContext";
import styled from "styled-components";

const Container = styled.div`
  grid-area: window;
`;

const InfoWindow = () => {
  const { workHours } = useButtonContext();
  return (
    <Container>
      <h2>Wesołe Okienko</h2>
      <p>Razem godzin: {workHours}</p>
    </Container>
  );
};
export default InfoWindow;
