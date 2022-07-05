import { useNurseContext } from "../../nurseContext";
import { DeleteButton } from "./DeleteButton";
import { GrafButton } from "./GrafButton";

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
  const { setNurseName } = useNurseContext();

  return (
    <tbody>
      {nursesData.nurses.map((nurse) => (
        <tr key={nurse.id}>
          <td>{nurse.name}</td>
          <td className="line-break">
            {nurse.courses.RKO === true ? "RKO " : ""}
            {nurse.courses.bloodTransfusion === true ? "Transfuzja " : ""}
            {nurse.courses.EKG === true ? "EKG " : ""}
          </td>
          <td></td>
          <td></td>
          <td>
            <div onClick={() => setNurseName(nurse.name)}>
              <GrafButton />
            </div>
          </td>
          <td>
            <DeleteButton
              onDelete={() => {
                handleDelete(nurse.id);
              }}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
