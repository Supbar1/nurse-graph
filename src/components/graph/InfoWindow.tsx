
import styled from "styled-components";
import ActualNurse from './ActualNurse';
import { useNurseContext } from './../../context/NurseContext';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* display: grid; */
  /* grid-area: infoWindow; */
`;

const InfoWindow = () => {
  const {hours,actualNurse} = useNurseContext();
  return (
    <Container>
      <h5>Razem godzin: {hours( actualNurse.id)}</h5>
    </Container>
  );
};
export default InfoWindow;
