import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { NurseType, selectNurses } from "../../store/slices/nursesSlice";
import { selectWorkSchedule } from "./../../store/slices/monthsSlice";
import HandleMonthSelect from "../../services/Months";
import {
  selectActiveDay,
  selectMonthChange,
} from "../../store/slices/monthsSlice";

const Container = styled.table`
  grid-area: nursesWindow;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  th {
    font-size: 1.2rem;
  }
  tr {
    font-size: 0.7rem;
  }
`;
const NursesWindow = () => {
  const nurses = useAppSelector(selectNurses);
  const activeDay = useAppSelector(selectActiveDay);
  const monthChange = useAppSelector(selectMonthChange).monthChange;
  const workSchedule = useAppSelector(selectWorkSchedule);
  const day = Number(Object.keys(activeDay));

  if (!activeDay[Number(Object.keys(activeDay))]) return <></>;
  const shiftNurses = (shiftName: string, container: any) => {
    const actualDay =
      workSchedule[HandleMonthSelect(monthChange)][day - 1][day][0][shiftName];
    for (let index of actualDay) {
      for (let nurse of nurses) if (index === nurse.id) container.push(nurse);
    }
  };

  const morningContainer: NurseType[] = [];
  const dayContainer: NurseType[] = [];
  const nightContainer: NurseType[] = [];

  shiftNurses("morningShift", morningContainer);
  shiftNurses("dayShift", dayContainer);
  shiftNurses("nightShift", nightContainer);

  const nursesNames = (label: string, shiftNurses: NurseType[]) => {
    return (
      <>
        <tr>
          <th>{label}</th>
        </tr>
        {shiftNurses.map((nurse: NurseType) => (
          <tr key={nurse.id}>
            <td onClick={() => console.log(nurse)}>
              {nurse.firstName}&nbsp;{nurse.lastName}
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <Container>
      <thead>
        <tr>
          <th>Już pracują:</th>
        </tr>
      </thead>
      <tbody>
        {nursesNames("Ranek:", morningContainer)}
        {nursesNames("Dzień:", dayContainer)}
        {nursesNames("Noc:", nightContainer)}
      </tbody>
    </Container>
  );
};
export default NursesWindow;
