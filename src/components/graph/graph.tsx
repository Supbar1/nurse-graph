import { useNavigate } from "react-router";
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import ButtonProvider from "../calendar/buttonContext";
import styled from "styled-components";

export const GridContainter = styled.div`
  display: grid;
  width: min(60vw, 850px);
  grid-template-areas:
    "actual   xxx"
    "calendar window"
    "calendar nurses"
    "backButton saveButton";
`;

const Actual = styled.div`
  grid-area: actual;
`;
const CalendarGrid = styled.div`
  grid-area: calendar;
`;
const WindowGrid = styled.div`
  grid-area: window;
`;
const NursesGrid = styled.div`
  grid-area: nurses;
`;
const SaveButton = styled.button`
  grid-area: saveButton;
`;
const BackButton = styled.button`
  grid-area: backButton;
`;

function Graph() {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/table");
  };

  return (
    <ButtonProvider>
      <GridContainter>
        <Actual>
          <ActualNurse />
        </Actual>

        <CalendarGrid>
          <Calendar />
        </CalendarGrid>

        <WindowGrid>
          <InfoWindow />
        </WindowGrid>

        <NursesGrid>
          <NursesWindow />
        </NursesGrid>

        <BackButton
          className="btn btn-warning  backButton"
          onClick={handleSave}
        >
          Cofnij
        </BackButton>
        {/* <SaveButton onClick={handleSave}>Zapisz Zmiany</SaveButton> */}
      </GridContainter>
    </ButtonProvider>
  );
}

export default Graph;
