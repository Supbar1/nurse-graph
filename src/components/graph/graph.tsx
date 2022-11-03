//Components
import InfoWindow from "./InfoWindow";
import Calendar from "../calendar/Calendar";
import NursesWindow from "./NursesWindow";
import ActualNurse from "./ActualNurse";
import SaveButton from "./SaveButton";
//Styling
import GridContainer from "./graph-grid/gridContainer";
import InfoWindowGrid from "./graph-grid/infoWindowGrid";
import NursesWindowGrid from "./graph-grid/nursesWindowGrid";
import ActualNurseGrid from "./graph-grid/actualNurseGrid";
import CalendarGrid from "./graph-grid/calendarGrid";
import ButtonGrid from "./graph-grid/buttonGrid";
//Context

const Graph = () => (
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
);

export default Graph;
