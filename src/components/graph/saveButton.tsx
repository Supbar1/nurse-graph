import { useNavigate } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  grid-area: saveButton;
`;
const SaveButton = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
  };
  return (
    <Button className="btn btn-danger  backButton" onClick={handleSave}>
      Zapisz Zmiany
    </Button>
  );
};
export default SaveButton;
