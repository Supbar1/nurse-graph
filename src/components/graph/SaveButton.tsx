import { useNavigate } from "react-router";
import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";

const Button = styled.button`
  grid-area: saveButton;
`;
const SaveButton = () => {
  const { setActualNurse } = useNurseContext();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
    setActualNurse({});
  };
  return (
    <Button className="btn btn-danger  backButton" onClick={handleSave}>
      Zapisz Zmiany
    </Button>
  );
};
export default SaveButton;
