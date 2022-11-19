import { useNavigate } from "react-router";
import { useNurseContext } from "../../context/NurseContext";
import ActualNurse from "./../graph/ActualNurse";

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

  const changeUrl = (id: number | undefined) => {
    let actualNurse = { ...nurses.find((item) => item.id === id) };
    setActualNurse(actualNurse);
    setActiveDay({});
    navigate("/graph");
  };
  const hours = (id: number | undefined) => {
    let hours = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        for (let element in singleDay) {
          if (singleDay[element].find((nurseId: number) => nurseId === id))
            hours += 12;
          // return console.log(singleDay[element]);
        }
      }
    }
    return hours;
  };
  const mornings = (id: number | undefined) => {
    let mornings = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        if (singleDay.morningShift.find((nurse: number) => nurse === id)) {
          mornings++;
        }
      }
    }
    return mornings;
  };
  const days = (id: number | undefined) => {
    let days = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        if (singleDay.dayShift.find((nurse: number) => nurse === id)) {
          days++;
        }
      }
    }
    return days;
  };
  const nights = (id: number | undefined) => {
    let nights = 0;
    for (let element in workSchedule) {
      for (let day in workSchedule[element]) {
        const singleDay = Object.values(workSchedule[element][day])[0][0];
        if (singleDay.nightShift.find((nurse: number) => nurse === id)) {
          nights++;
        }
      }
    }
    return nights;
  };
  // days(undefined);
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
            <td>{mornings(nurse.id)}</td>
            <td>{days(nurse.id)}</td>
            <td>{nights(nurse.id)}</td>
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
