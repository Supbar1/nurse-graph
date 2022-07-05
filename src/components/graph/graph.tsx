import { useNavigate } from "react-router";
import styled from "styled-components";
import GridContainer from "./graph-grid/gridContainer";
import InfoWindow from "./infoWindow";
import InfoWindowGrid from "./graph-grid/infoWindowGrid";
import Calendar from "../calendar/calendar";
import CalendarGrid from "./graph-grid/calendarGrid";
import NursesWindow from "./nursesWindow";
import NursesWindowGrid from "./graph-grid/nursesWindowGrid";
import ActualNurse from "./actualNurse";
import ActualNurseGrid from "./graph-grid/actualNurseGrid";
import ButtonProvider from "../calendar/buttonContext";

const SaveButton = styled.button`
  grid-area: saveButton;
`;

function Graph() {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
  };

  return (
    <ButtonProvider>
      <GridContainer>
        <ActualNurseGrid>
          <ActualNurse />
        </ActualNurseGrid>

        <CalendarGrid>
          <Calendar />
        </CalendarGrid>

        <InfoWindowGrid>
          <InfoWindow />
        </InfoWindowGrid>

        <NursesWindowGrid>
          <NursesWindow />
        </NursesWindowGrid>

        <SaveButton className="btn btn-danger  backButton" onClick={handleSave}>
          Zapisz Zmiany
        </SaveButton>
      </GridContainer>
    </ButtonProvider>
  );
}

export default Graph;
