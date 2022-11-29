import { useNavigate } from "react-router";
import { useNurseContext } from "../../context/NurseContext";
import { ActiveDayStyled } from "./../calendar/elements/calendarBody/ActualDays.styles";
import styled from "styled-components";

const SetGraphButton = styled(ActiveDayStyled)`
  padding: 0.5rem 0.2rem;
  margin: 0.5rem;
  &:after {
    width: 450px;
    height: 450px;
  }
`;
const TableRow = styled.tr`
  margin-top: 10px;
`;
const Cell = styled.td`
  padding: 1rem;
  text-align: center;
`;

export const TableBody = () => {
  const { nurses, setActualNurse, setActiveDay, workSchedule, hours } =
    useNurseContext();

  const navigate = useNavigate();

  const changeUrl = (id?: number) => {
    let actualNurse = { ...nurses.find((item) => item.id === id) };
    setActualNurse(actualNurse);
    setActiveDay({});
    navigate("/graph");
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
      <tbody>
        {nurses.map((nurse) => (
          <TableRow key={nurse.id}>
            <td>
              <img alt="nurse" src={nurse?.picture} />
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
  );
};
