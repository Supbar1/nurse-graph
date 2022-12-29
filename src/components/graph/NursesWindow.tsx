import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";
import { useAppSelector } from "../../store/hooks";
import { selectNurses } from './../../store/nursesSlice';

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
  const { activeDay } = useNurseContext();
  if (!activeDay[Number(Object.keys(activeDay))]) return <></>;

  const shiftNurses = (shiftName: string, container: any) => {
    let actualShift = [...Object.values(activeDay)[0][0][shiftName]];
    for (let index of actualShift) {
      for (let nurse of nurses) if (index === nurse.id) container.push(nurse);
    }
  };

  let morningContainer: any = [];
  let dayContainer: any = [];
  let nightContainer: any = [];

  shiftNurses("morningShift", morningContainer);
  shiftNurses("dayShift", dayContainer);
  shiftNurses("nightShift", nightContainer);

  const nursesNames = (label: string, shiftName: any) => {
    return (
      <>
        <tr>
          <th>{label}</th>
        </tr>
        {shiftName.map((item: any) => (
          <tr key={item.id}>
            <td>
              {item.firstName}&nbsp;{item.lastName}
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
