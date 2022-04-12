import { TableBody, INurse } from "./tableBody";
import { TableHeader } from "./tableHeader";

export const NursesList: React.FC<INurse> = ({ nursesData, handleDelete }) => {
  return (
    <div className="scroll">
      <div className="col-2">
        <div className="col ">
          <table className="table">
            <TableHeader />
            <TableBody nursesData={nursesData} handleDelete={handleDelete} />
          </table>
        </div>
      </div>
    </div>
  );
};
