import { useNavigate } from "react-router";
import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";
import ClearSchedule from "../../context/ClearSchedule";

interface ButtonProps {
  warning?: boolean;
}

const OneDayButton = styled.button<ButtonProps>`
  background-color: rgba(255, 255, 255, 0);
  padding: 8px;
  border: none;
  font-weight: bold;
  color: rgba(143, 64, 248, 1);
  width: 100%;
  border-radius: 4px;
  transition: ease-out 0.5s;
  outline: none;
  z-index: 1;
  white-space: nowrap;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0);
  :hover {
    cursor: pointer;
    color: black;
    border: 1px solid rgba(143, 64, 248, 0.5);
  }
  ::before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${(props) =>
      props.warning ? "palevioletred" : "rgba(39, 200, 255, 0.5)"};
  }
  :hover::before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
  letter-spacing: 1px;
  @media (max-width: 980px) {
    font-size: 0.7rem;
    padding: 4px;
  }
`;
const Container = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
`;
const WithdrawButton = () => {
  const { setActualNurse, setWorkSchedule, setActiveDay, setActiveLink } =
    useNurseContext();

  const navigate = useNavigate();

  const handleSave = () => {
    setActualNurse({});
    setActiveLink("table");
    navigate("/table");
  };
  const withdrawChanges = () => {
    setWorkSchedule(ClearSchedule());
    setActiveDay({});
  };
  return (
    <Container>
      <OneDayButton onClick={handleSave}>Zapisz Zmiany</OneDayButton>
      <OneDayButton warning onClick={withdrawChanges}>
        Cofnij wszystko
      </OneDayButton>
    </Container>
  );
};
export default WithdrawButton;
