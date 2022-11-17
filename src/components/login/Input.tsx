import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  margin-bottom: 5px;
  display: inline-block;
  color: var(--clr-primary-400);
  font-weight: 300;
  letter-spacing: 1px;
  font-size: var(--fs-body);
  @media (max-width: 60em) {
    font-size: var(--fs-400);
  }
`;
const SingleInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
`;
const Alert = styled.div`
  height: 50px;
  background-color: var(--clr-accent-300);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fs-400);
  @media (max-width: 60em) {
    font-size: var(--fs-300);
  }
`;
interface InputProps {
  name: string;
  // label: string;
  placeholder: string;
  error: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoFocus: boolean;
}
const Input = ({
  name,
  // label,
  placeholder,
  value,
  error,
  onChange,
  type,
  autoFocus,
}: InputProps) => (
  <Container>
    <InputBox>
      {/* <label htmlFor={name}></label> */}
      <SingleInput
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      {error && <Alert>{error}</Alert>}
    </InputBox>
  </Container>
);

export default Input;
