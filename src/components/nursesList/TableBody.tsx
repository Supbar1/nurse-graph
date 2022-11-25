import { useNavigate } from "react-router";
import { useNurseContext } from "../../context/NurseContext";
import { ActiveDayStyled } from "./../calendar/elements/calendarBody/ActualDays.styles";
import styled from "styled-components";

const SetGraphButton = styled(ActiveDayStyled)`
  padding: 0.5rem 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  cursor: pointer;
  /* line-height: 1.2; */
`;
const TableRow = styled.tr`
  margin-top: 10px;
  /* border: 2px solid red; */
`;
const Cell = styled.td`
  padding: 1rem;
  text-align: center;
  /* border: 1px solid black; */
`;
export interface INurse {
  nursesData: NursesDataType;
  handleDelete: (id: number) => void;
}

export type NursesDataType = {
  nurses: NursesType[];
};
type NursesType = {
  id: number;
  name: string;
  courses: { bloodTransfusion: boolean; RKO: boolean; EKG: boolean };
  selfEmplointment: boolean;
};
interface TabloBodyType {
  handleDelete: () => void;
}
export const TableBody = ({ handleDelete }: TabloBodyType) => {
  const { nurses, setActualNurse, setActiveDay, workSchedule } =
    useNurseContext();

  const navigate = useNavigate();

  const changeUrl = (id?: number) => {
    let actualNurse = { ...nurses.find((item) => item.id === id) };
    setActualNurse(actualNurse);
    setActiveDay({});
    navigate("/graph");
  };
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

  const displayShiftsAmmount = (shift: string, id?: number) => {
    let ammountOfShifts = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        if (singleDay[shift].find((nurse: number) => nurse === id)) {
          ammountOfShifts++;
        }
      }
    }
    return ammountOfShifts;
  };
  return (
    <>
      <tbody>
        {nurses.map((nurse) => (
          <TableRow key={nurse.id}>
            <td>
              <img alt="nurse picture" src={nurse?.picture} />
              &nbsp;
              {nurse?.firstName}&nbsp;{nurse?.lastName}
            </td>
            <Cell>
              <div>{displayShiftsAmmount("morningShift", nurse.id)}</div>
            </Cell>
            <Cell>{displayShiftsAmmount("dayShift", nurse.id)}</Cell>
            <Cell>{displayShiftsAmmount("nightShift", nurse.id)}</Cell>
            <Cell>{hours(nurse.id)}h/140h</Cell>
            <td>
              <SetGraphButton onClick={() => changeUrl(nurse.id)}>
                Ustaw grafik
              </SetGraphButton>
            </td>
          </TableRow>
        ))}
      </tbody>
    </>
  );
};
