import styled from "styled-components";
//Context
import { useNurseContext } from "../../nurseContext";

const Nurse = styled.h3`
  margin: auto;
`;
const Label = styled.h4`
  margin: auto;
`;
const Flex = styled.div`
  display: flex;
  padding: 20px;
`;
function ActualNurse() {
  const { name } = useNurseContext();
  return (
    <Flex>
      <Label>Aktualna pielęgniarka: </Label>
      <Nurse>{name}</Nurse>
    </Flex>
  );
}

export default ActualNurse;
