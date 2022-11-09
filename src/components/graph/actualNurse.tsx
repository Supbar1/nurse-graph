import styled from "styled-components";
//Context
import { useNurseContext } from "../../NurseContext";

const Container = styled.div`
  grid-area: actualNurse;
  display: grid;
`;
const Label = styled.div`
  margin: auto;
  font-weight: bold;
`;
const Nurse = styled.div`
  margin: auto;
`;
const ActualNurse = () => {
  const { nurses, actualNurse } = useNurseContext();
  return (
    <Container>
      <Label>Aktualna pielęgniarka:</Label>
      <Nurse>
        {actualNurse?.firstName}&nbsp;{actualNurse?.lastName}{" "}
      </Nurse>
    </Container>
  );
};

export default ActualNurse;
