import Input from "./Input";
import Buttons from "./Buttons";
import styled from "styled-components";
import { useNurseContext } from "./../../context/NurseContext";


const FormBox = styled.form`
  width: min(70%, 200px);
  @media (max-width: 600px) {
    width: 80%;
  }
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
}: FormProps) => {
  const { setUsername } = useNurseContext();
  const Joi = require(`joi`);

  const validate = () => {
    const result = schema.validate(account);
    if (!result.error) return null;
    const validateErrors = {} as any;
    for (let item of result.error.details)
      validateErrors[item.path[0]] = item.message;
    return validateErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    // function that prevents full page reload
    e.preventDefault();
    const submitErrors = validate();
    setErrors(submitErrors || {});
    if (!errors) return;
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

  return (
      <FormBox onSubmit={handleSubmit}>
        <Input
          name="username"
          value={username}
          placeholder="Użytkownik"
          onChange={handleChange}
          type="text"
          error={usernameErrors}
          autoFocus={true}
        />
        <Input
          name="password"
          value={password}
          placeholder="Hasło"
          onChange={handleChange}
          type="password"
          error={passwordErrors}
          autoFocus={false}
        />
        <Buttons />
      </FormBox>
  );
};
export default Form;
