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
  const { nurses, setActualNurse, setActiveDay } = useNurseContext();

  const navigate = useNavigate();

  const changeUrl = (id: number | undefined) => {
    // setActualNurse({ ...nurses.find((nurse) => nurse.id === id) });
    let actualNurse = { ...nurses.find((item) => item.id === id) };
    setActualNurse(actualNurse);
    setActiveDay({})
    navigate("/graph");
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
            <td></td>
            <td></td>
            <td></td>
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
