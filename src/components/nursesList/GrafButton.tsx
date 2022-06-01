import { useNavigate } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  padding: 1.3vh;
  border-radius: 15%;
  background-color: rgba(39, 200, 255, 0.5);
  border: 1px solid rgba(39, 200, 255, 1);
`;
// type GrafProps = {
//   actualNurse: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

export const GrafButton = () => {
  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/graph");
  };

  return <Button onClick={changeUrl}>Grafik</Button>;
};
