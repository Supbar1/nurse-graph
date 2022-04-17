import { useNavigate } from "react-router";
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import ButtonProvider from "../calendar/calendarContext";
import styled from "styled-components";

const GridContainter = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const BackButton = styled.button`
  grid-column: 2 / span 2;
  grid-row: 7;
`;
const SaveButton = styled.button`
  grid-column: 5 / span 2;
  grid-row: 7;
`;

function Graph() {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
  };

  return (
    <ButtonProvider>
      <GridContainter>
        <ActualNurse />
        <NursesWindow />
        <Calendar />
        <InfoWindow />

        <BackButton
          className="btn btn-warning  backButton"
          onClick={handleSave}
        >
          Cofnij
        </BackButton>

        <SaveButton className="btn btn-danger saveButton" onClick={handleSave}>
          Zapisz Zmiany
        </SaveButton>
      </GridContainter>
    </ButtonProvider>
  );
}

export default Graph;
