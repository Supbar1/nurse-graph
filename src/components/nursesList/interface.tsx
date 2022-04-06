import { BackButton } from "./backButton";
import { DeleteButton } from "./deleteButton";

export interface INurse {
  nursesData: NursesDataType;
  handleClick: (_id: string)=>void;
}

export type NursesDataType = {
  nurses: NursesType[];
};
 type NursesType = {
  _id: string;
  name: string;
  courses: { bloodTransfusion: boolean; RKO: boolean; EKG: boolean };
  selfEmplointment: boolean;
};


export const NursesList: React.FC<INurse>= ({nursesData, handleClick} ) => {
 
  return (
    <div className="flex">
      <div className="scroll">
        <div className="col-2">
          <div className="col ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Imie i Nazwisko</th>
                  <th scope="col">Specka</th>
                  <th scope="col">Dni</th>
                  <th scope="col">Noce</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
              {nursesData.nurses.map((nurse) => (
                  <tr key={nurse._id}>
                    <td>{nurse.name}</td>
                    <td className="line-break">
                      {nurse.courses.RKO === true ? "RKO " : ""}
                      {nurse.courses.bloodTransfusion === true
                        ? "Transfuzja "
                        : ""}
                      {nurse.courses.EKG === true ? "EKG " : ""}
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <BackButton />
                    </td>
                    <td>
              <button onClick={()=>handleClick(nurse._id)}>USUWAŃSKO</button>
              </td>
                  </tr>
                 ))} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
