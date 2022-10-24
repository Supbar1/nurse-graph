//Components
import { DeleteButton } from "./DeleteButton";
import { GrafButton } from "./GrafButton";
import { useNavigate } from "react-router";
//Context
import {
  useNurseContext,
  WorkDayType,
  NurseType,
  NurseGraphContext,
} from "../../NurseContext";

export const TableBody: React.FC = () => {
  const navigate = useNavigate();
  const { nurses, actualNurse, setActualNurse } = useNurseContext();
  const setGraph = (id: number | undefined) => {
    setActualNurse({ ...nurses.find((nurse) => nurse.id === id) });
    navigate("/graph");
  };
  return (
    <tbody>
      {nurses.map((nurse) => (
        <tr key={nurse.id}>
          <td>
            <img alt="nurse photo" src={nurse.picture} />
          </td>
          <td>
            {nurse.firstName}&nbsp;{nurse.lastName}
          </td>
          <td></td>
          <td></td>
          <td>
            {/* <div onClick={() => setNurseName(nurse.name)}> */}
            <button onClick={() => setGraph(nurse.id)}>Grafik</button>
            {/* <GrafButton /> */}
            {/* </div> */}
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
