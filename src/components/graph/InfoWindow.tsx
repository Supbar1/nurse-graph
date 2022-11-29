import styled from "styled-components";
import { useNurseContext } from "./../../context/NurseContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    margin: 0;
  }
`;

const InfoWindow = () => {
  const { hours, actualNurse } = useNurseContext();
  return (
    <Container>
      <h5>
        Razem godzin:
        <span style={{ borderBottom: "1px solid black" }}>
          {hours(actualNurse.id)}
        </span>
      </h5>
    </Container>
  );
};
export default InfoWindow;
