import styled from "styled-components";
//Context
import { useNurseContext } from "../../NurseContext";

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
const ActualNurse = () => {
  // const {  firstName } = useNurseContext();
  return (
    <Flex>
      <Label>Aktualna pielęgniarka: </Label>
      {/* <Nurse>{firstName}</Nurse> */}
    </Flex>
  );
};

export default ActualNurse;
