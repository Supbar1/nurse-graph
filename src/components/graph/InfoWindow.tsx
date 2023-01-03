import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { selectActualNurse } from "../../store/slices/nursesSlice";
import { selectWorkSchedule } from './../../store/slices/monthsSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    margin: 0;
  }
`;

const InfoWindow = () => {
  const actualNurse = useAppSelector(selectActualNurse);
  const workSchedule = useAppSelector(selectWorkSchedule);
  const hours = (id?: number) => {
    let hours = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        for (let element in singleDay) {
          if (singleDay[element].find((nurseId: number) => nurseId === id))
            hours += 12;
        }
      }
    }
    return hours;
  };
  return (
    <Container>
      <h5>
        Razem godzin:
        <span style={{ borderBottom: "1px solid black" }}>
          {hours(actualNurse.id)}
        </span>
      </h5>
    </Container>
  );
};
export default InfoWindow;
