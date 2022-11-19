import { useNavigate } from "react-router";
import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";

const OneDayButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  padding: 8px;
  border: none;
  font-weight: bold;
  color: rgba(143, 64, 248, 1);

  border-radius: 4px;
  transition: ease-out 0.3s;
  font-size: 1rem;
  outline: none;
  z-index: 1;
  white-space: nowrap;
  position: relative;
  /* border: 3px solid rgba(39, 200, 255, 1); */
  border: 3px solid white;

  :hover {
    cursor: pointer;
    color: black;

    border: 3px solid rgba(39, 200, 255, 0.5);
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
    background-color: rgba(143, 64, 248, 0.5);
  }
  :hover::before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
  letter-spacing: 1px;
`;
const Button = styled.div`
  grid-area: withdrawButton;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: none; */
  background-color: rgba(255, 255, 255, 0);
  font-family: "Roboto";
`;
const WithdrawButton = () => {
  const { setActualNurse } = useNurseContext();

  const handleDelete = () => {
    setActualNurse({});
  };
  return (
    <Button>
      <OneDayButton onClick={handleDelete}>Cofnij dzień</OneDayButton>
      <OneDayButton onClick={()=>console.log("siema")}>Cofnij wszystko</OneDayButton>
    </Button>
  );
};
export default WithdrawButton;
