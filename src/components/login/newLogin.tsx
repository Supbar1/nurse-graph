import styled from "styled-components";

const Container = styled.form`
  width: min(60vw, 850px);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transform: translateX(-40%);
`;
function NewLogin() {
  return (
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
}
export default NewLogin;
