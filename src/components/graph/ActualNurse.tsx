import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { selectActualNurse } from "../../store/slices/nursesSlice";

const Container = styled.div`
  grid-area: actualNurse;
  display: grid;
  text-align: center;
`;
const Label = styled.div`
  margin: auto;
  font-size: 0.9rem;
`;
const Nurse = styled.div`
  font-weight: 900;
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 1),
    rgba(39, 200, 255, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
  font-size: 1rem;
`;
const ActualNurse = () => {
  const actualNurse = useAppSelector(selectActualNurse);
  return (
    <Container>
      <Label>Aktualna pielęgniarka:</Label>
      <Nurse>
        {actualNurse?.firstName}&nbsp;{actualNurse?.lastName}
      </Nurse>
    </Container>
  );
};

export default ActualNurse;
