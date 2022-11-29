import styled from "styled-components";

const Container = styled.div`
  margin: 10px 0;
  white-space: nowrap;
`;
const Button = styled.button`
  cursor: pointer;
  border: 0;
  line-height: 1;
  border-radius: 100vmax;
  padding: 1.25em 2.5em;
  @media (max-width: 600px) {
    padding: 1em 1.75em;
  }
  font-weight: bold;
  /* color: */
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.5),
    rgba(39, 200, 255, 0.5)
  );
  box-shadow: 0 1.125em 1em -1em var(--clr-accent-500);
  white-space: nowrap;

  :hover,
  :focus-visible {
    background: linear-gradient(
      to left bottom,
      rgba(143, 64, 248, 0.7),
      rgba(39, 200, 255, 0.7)
    );
  }
`;
const Buttons = () => (
  <Container>
      <input type="checkbox" name="" />
      &nbsp;Remember me&nbsp;
      <Button>Zaloguj</Button>
    
  </Container>
);

export default Buttons;
