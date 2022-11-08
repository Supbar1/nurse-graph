import styled from "styled-components";

const Container = styled.form`
  border: 1px solid blue;
  width: min(60vw, 850px);
  display: flex;
  align-items: center;
  flex-direction: column;
  /* transform: translateX(-40%); */
`;
const NewLogin = () => (
  <Container>
    <fieldset>
      <label htmlFor="name">Name:</label>
      <input autoFocus type="text" id="name" />
    </fieldset>
    <fieldset>
      <label htmlFor="password">Password:</label>
      <input type="password" />
    </fieldset>
    <button type="submit">Login</button>
  </Container>
);

export default NewLogin;
