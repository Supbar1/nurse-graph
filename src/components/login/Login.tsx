import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";

const Container = styled.div`
  /* position: relative; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  height: 100%;
`;
const Header = styled.h1`
  transform: translateY(5vh);
  white-space: nowrap;
  font-size: min(15vh, 5rem);
  height: 30%;
  letter-spacing: 6px;
  word-spacing: 2px;
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.8),
    rgba(39, 200, 255, 0.8)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
interface LoginProps {
  username: string;
  password: string;
}
const Login = () => {
  const [account, setAccount] = useState({} as LoginProps);
  const [errors, setErrors] = useState({} as LoginProps);
  const Joi = require(`joi`);

  const username = Joi.string().min(3).max(30).required().label("Username");
  const password = Joi.string().min(3).max(30).required().label("Password");

  const schema = Joi.object({
    username: username,
    password: password,
  });

  return (
    <Container>
      <Header>NURSE-GRAPH</Header>
      <Form
        account={account}
        setAccount={setAccount}
        errors={errors}
        setErrors={setErrors}
        schema={schema}
        username={account.username}
        usernameErrors={errors.username}
        password={account.password}
        passwordErrors={errors.password}
      />
    </Container>
  );
};
export default Login;
