import styled from "styled-components";

const Nurse = styled.h3`
  width: 800px;
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1em;
  grid-column: 3 / span 3;
`;
function ActualNurse() {
  return <Nurse>Frania Chodnikowska</Nurse>;
}

export default ActualNurse;
