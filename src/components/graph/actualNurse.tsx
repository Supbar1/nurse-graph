import styled from "styled-components";
//Context
import { useNurseContext } from "../../NurseContext";

const Label = styled.h4`
  margin: auto;
`;
const Image = styled.img`
  border-radius: 20px;
`;
const Container = styled.div`
  grid-area: actual;
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
`;
const ActualNurse = () => {
  const { actualNurse } = useNurseContext();
  return (
    <Container>
      <Label>Aktualna pielęgniarka: </Label>
      <Label>
        {actualNurse.firstName}&nbsp;{actualNurse.lastName}&nbsp;
        <Image alt="nurse picture" src={actualNurse.picture} />
      </Label>
    </Container>
  );
};

export default ActualNurse;
