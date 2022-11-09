import styled from "styled-components";

const Container = styled.div`
  width: min(60vw, 850px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Help = () => (
  <Container>
    <h3>What else do I need?</h3>
  </Container>
);

export default Help;
