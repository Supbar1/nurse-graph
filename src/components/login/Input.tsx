import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  margin-bottom: 5px;
  display: inline-block;
  font-weight: 300;
  letter-spacing: 1px;
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
  font-weight: bold;
  height: 50px;
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.3),
    rgba(39, 200, 255, 0.3)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface InputProps {
  name: string;
  placeholder: string;
  error: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoFocus: boolean;
}
const Input = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  type,
  autoFocus,
}: InputProps) => (
  <Container>
    <InputBox>
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
