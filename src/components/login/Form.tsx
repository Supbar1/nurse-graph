import Input from "./Input";
import Buttons from "./Buttons";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ActiveDayStyled } from "./../calendar/elements/calendarBody/ActualDays.styles";
import { useAppSelector } from "../../store/hooks";
import {
  selectUsername,
  setActualAcount,
} from "../../store/slices/usernameSlice";
import { useAppDispatch } from "./../../store/hooks";
import { setActiveLink } from "../../store/slices/activeLinkSlice";
import { useState } from "react";

const FormBox = styled.form`
  width: min(70%, 500px);
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const ActiveDayStyledWide = styled(ActiveDayStyled)`
  padding: 2rem;
`;

interface LoginProps {
  username: string;
  password: string;
}

interface FormProps {
  username: string;
  usernameErrors: string;
  password: string;
  passwordErrors: string;
  account: LoginProps;
  setAccount: React.Dispatch<React.SetStateAction<LoginProps>>;
  errors: LoginProps;
  setErrors: React.Dispatch<React.SetStateAction<LoginProps>>;
  schema: any;
  onSubmit: () => void;
}
const Form = ({
  username,
  usernameErrors,
  password,
  passwordErrors,
  account,
  schema,
  setErrors,
  errors,
  setAccount,
  onSubmit,
}: FormProps) => {
  const actualAccount = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();
  const [validated, setValidated] = useState<boolean>(false);
  const Joi = require(`joi`);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    setValidated(true);
    e.preventDefault();
    const submitErrors = validate();
    setErrors(submitErrors || {});
    if (submitErrors) return;
    dispatch(setActiveLink("table"));
    navigate("/table");
    onSubmit();
  };

  const validate = () => {
    const result = schema.validate(account);
    if (!result.error) return null;
    const validateErrors = {} as any;
    for (let item of result.error.details)
      validateErrors[item.path[0]] = item.message;
    return validateErrors;
  };

  const validateProperty = ({
    name,
    value,
  }: EventTarget & HTMLInputElement) => {
    const obj = { [name]: value };
    const rule = schema.extract(name);
    const propertySchema = Joi.object({ [name]: rule });
    const { error } = propertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const validateErrors: any = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      validateErrors[input.name] = errorMessage;
    } else {
      delete validateErrors[input.name];
    }
    const newAccount: any = { ...account };
    newAccount[input.name] = input.value;
    setErrors(validateErrors);
    setAccount(newAccount);
  };

  return actualAccount.username ? (
    <div>
      <ActiveDayStyledWide onClick={() => dispatch(setActualAcount(null))}>
        Wyloguj
      </ActiveDayStyledWide>
    </div>
  ) : (
    <FormBox onSubmit={handleSubmit}>
      <Input
        name="username"
        value={username}
        placeholder="Użytkownik"
        onChange={handleChange}
        type="text"
        error={usernameErrors}
        autoFocus={true}
        validated={validated}
      />
      <Input
        name="password"
        value={password}
        placeholder="Hasło"
        onChange={handleChange}
        type="password"
        error={passwordErrors}
        autoFocus={false}
        validated={validated}
      />
        <Buttons />
    </FormBox>
  );
};
export default Form;
