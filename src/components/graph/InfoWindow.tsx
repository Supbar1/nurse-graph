
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: grid; */
  /* grid-area: infoWindow; */
`;

const InfoWindow = () => {
  return (
    <Container>
      <h5>Razem godzin: </h5>
    </Container>
  );
};
export default InfoWindow;
