//Components
import InfoWindow from "./infoWindow";
import Calendar from "../calendar/calendar";
import NursesWindow from "./nursesWindow";
import ActualNurse from "./actualNurse";
import SaveButton from "./saveButton";
//Styling
import GridContainer from "./graph-grid/gridContainer";
import InfoWindowGrid from "./graph-grid/infoWindowGrid";
import NursesWindowGrid from "./graph-grid/nursesWindowGrid";
import ActualNurseGrid from "./graph-grid/actualNurseGrid";
import CalendarGrid from "./graph-grid/calendarGrid";
import ButtonGrid from "./graph-grid/buttonGrid";
//Context
import ButtonProvider from "../calendar/buttonContext";

const Graph = () => (
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

      <ButtonGrid>
        <SaveButton />
      </ButtonGrid>
    </GridContainer>
  </ButtonProvider>
);

export default Graph;
