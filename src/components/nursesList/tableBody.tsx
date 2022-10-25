import { useNavigate } from "react-router";
import { ReactNode } from "react";
import { DeleteButton } from "./DeleteButton";
import { GrafButton } from "./GrafButton";
//Context
import { useNurseContext } from "../../NurseContext";

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
  const { nurses, setActualNurse } = useNurseContext();

  const navigate = useNavigate();

  const changeUrl = (id: number | undefined) => {
    setActualNurse({ ...nurses.find((nurse) => nurse.id === id) });
    let actualNurse = { ...nurses.find((item) => item.id === id) };
    setActualNurse(actualNurse);

    navigate("/graph");
  };
  return (
    <tbody>
      {nurses.map((nurse) => (
        <tr key={nurse.id}>
          <td>
            <img alt="nurse picture" src={nurse?.picture} />
            &nbsp;
            {nurse?.firstName}&nbsp;{nurse?.lastName}
          </td>
          {/* <td className="line-break">
            {nurse.courses.RKO === true ? "RKO " : ""}
            {nurse.courses.bloodTransfusion === true ? "Transfuzja " : ""}
            {nurse.courses.EKG === true ? "EKG " : ""}
          </td> */}
          <td></td>
          <td>empty now</td>
          <td>
            empty now
            {/* <div onClick={() => setNurseName(nurse.name)}>
              <GrafButton />
            </div> */}
          </td>
          <td>
            <button onClick={() => changeUrl(nurse.id)}>Button</button>
            {/* </td> */}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
