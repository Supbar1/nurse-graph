import { useState } from "react";
import styled from "styled-components";
import { setActualAcount } from "../../store/slices/usernameSlice";
import Form from "./Form";
import { useAppDispatch } from "./../../store/hooks";

const Container = styled.div`
  height: 100%;
`;
const HeaderSpace = styled.h1`
  border-right: 0.7rem solid white;
  white-space: nowrap;
  font-weight: bold;
  font-size: min(15vh, 6rem);
  text-align: center;
  letter-spacing: 3px;
  word-spacing: 2px;
  margin-bottom: min(30vh, 10rem);
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.8),
    rgba(39, 200, 255, 0.8)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ContentBox = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-10%);
  text-align: center;

  justify-content: center;
  align-items: center;
  @media (max-width: 60em) {
    width: 100%;
  }
`;
interface LoginProps {
  username: string;
  password: string;
}
const Login = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  } as LoginProps);
  const [errors, setErrors] = useState({} as LoginProps);
  const Joi = require(`joi`);

  const username = Joi.string().min(3).max(30).required().label("Username");
  const password = Joi.string().min(3).max(30).required().label("Password");

  const schema = Joi.object({
    username: username,
    password: password,
  });
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(setActualAcount(account.username));
  };
  return (
    <Container>
      <HeaderSpace>NURSE GRAPH</HeaderSpace>
      <ContentBox>
        <Form
          onSubmit={onSubmit}
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
      </ContentBox>
    </Container>
  );
};
export default Login;
