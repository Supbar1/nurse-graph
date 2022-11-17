import styled from "styled-components";
import HandleMonthSelect from "../calendar/elements/calendarBody/months";
import { useNurseContext } from "../../context/NurseContext";

const Container = styled.table`
  display: grid;
  grid-area: nursesWindow;
  tr {
    text-align: center;
  }
  align-items: flex-start;
  justify-content: center;
  thead {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
const NursesWindow = () => {
  const { activeDay, nurses } = useNurseContext();
  if (!activeDay[Number(Object.keys(activeDay))]) return <></>;

  let actualMorning = [...Object.values(activeDay)[0][0].morningShift];
  let morningContainer: any = [];
  for (let index of actualMorning) {
    for (let nurse of nurses)
      if (index === nurse.id) morningContainer.push(nurse);
  }

  let actualDay = [...Object.values(activeDay)[0][0].dayShift];
  let dayContainer: any = [];
  for (let index of actualDay) {
    for (let nurse of nurses) if (index === nurse.id) dayContainer.push(nurse);
  }

  let actualNight = [...Object.values(activeDay)[0][0].nightShift];
  let nightContainer: any = [];
  for (let index of actualNight) {
    for (let nurse of nurses)
      if (index === nurse.id) nightContainer.push(nurse);
  }
  return (
    <Container>
      <thead>
        <tr>
          <th>Już pracują:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dzien:</th>
        </tr>
        <tr>
          {morningContainer.map((item: any) => (
            <tr key={item.id}>
              {item.firstName}&nbsp;{item.lastName}
            </tr>
          ))}
        </tr>
        <tr>
          <th>Doba:</th>
        </tr>

        <tr>
          {dayContainer.map((item: any) => (
            <tr key={item.id}>
              {item.firstName}&nbsp;{item.lastName}
            </tr>
          ))}
        </tr>
        <tr>
          <th>Noc:</th>
        </tr>
        {nightContainer.map((item: any) => (
          <tr key={item.id}>
            {item.firstName}&nbsp;{item.lastName}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};
export default NursesWindow;
