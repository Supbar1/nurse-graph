import { useNavigate } from "react-router";
import { useNurseContext } from "../../context/NurseContext";

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

  const changeUrl = (id?: number ) => {
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
          <tr key={nurse.id}>
            <td>
              <img alt="nurse picture" src={nurse?.picture} />
              &nbsp;
              {nurse?.firstName}&nbsp;{nurse?.lastName}
            </td>
            <td>{displayShiftsAmmount("morningShift", nurse.id)}</td>
            <td>{displayShiftsAmmount("dayShift", nurse.id)}</td>
            <td>{displayShiftsAmmount("nightShift", nurse.id)}</td>
            <td>{hours(nurse.id)}h/140h</td>
            <td>
              <button
                style={{ border: "0", backgroundColor: "lightBlue" }}
                onClick={() => changeUrl(nurse.id)}
              >
                Ustaw grafik
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
