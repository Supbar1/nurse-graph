import { BackButton } from "./backButton";

export interface INurse {
  nursesData: NursesDataType;
  handleDelete: (_id: string) => void;
};

export type NursesDataType = {
  nurses: NursesType[];
};
type NursesType = {
  _id: string;
  name: string;
  courses: { bloodTransfusion: boolean; RKO: boolean; EKG: boolean };
  selfEmplointment: boolean;
};

export const TableBody: React.FC<INurse> = ({ nursesData, handleDelete }) => {
  return (
    <tbody>
      {nursesData.nurses.map((nurse) => (
        <tr key={nurse._id}>
          <td>{nurse.name}</td>
          <td className="line-break">
            {nurse.courses.RKO === true ? "RKO " : ""}
            {nurse.courses.bloodTransfusion === true ? "Transfuzja " : ""}
            {nurse.courses.EKG === true ? "EKG " : ""}
          </td>
          <td></td>
          <td></td>
          <td>
            <BackButton />
          </td>
          <td>
            <button onClick={() => handleDelete(nurse._id)}>USUWAŃSKO</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

