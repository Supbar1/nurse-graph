import { useNavigate } from "react-router";
import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";

const Button = styled.button`
  grid-area: withdrawButton;
  display: flex;
  align-items: center;
  border: 1px solid red;
`;
const WithdrawButton = () => {
  const { setActualNurse } = useNurseContext();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
    setActualNurse({});
  };
  return (
    <Button className="withdrawButton">
      <button className="btn btn-warning border " onClick={handleSave}>
        cofnij 1 dzien
      </button>
      <button className="btn btn-warning  border" onClick={handleSave}>
        cofnij wszystko
      </button>
    </Button>
  );
};
export default WithdrawButton;
