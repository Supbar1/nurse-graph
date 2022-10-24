//Components
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

export const TableBody: React.FC<INurse> = ({ nursesData, handleDelete }) => {
  const { nurses } = useNurseContext();

  return (
    <tbody>
      {nurses.map((nurse) => (
        <tr key={nurse.id}>
          <td>{nurses[0]?.firstName}</td>
          {/* <td className="line-break">
            {nurse.courses.RKO === true ? "RKO " : ""}
            {nurse.courses.bloodTransfusion === true ? "Transfuzja " : ""}
            {nurse.courses.EKG === true ? "EKG " : ""}
          </td> */}
          <td></td>
          <td></td>
          <td>
            {/* <div onClick={() => setNurseName(nurse.name)}>
              <GrafButton />
            </div> */}
          </td>
          <td>
            {/* <DeleteButton
              onDelete={() => {
                handleDelete(nurse.id);
              }}
            /> */}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
