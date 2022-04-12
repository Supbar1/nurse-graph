import { useState, useEffect } from "react";
import { allNurses } from "./nursesList";
import { NursesDataType } from "./tableBody";
import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody";
import "./list.css";

function Table() {
  const [nurses, setNurses] = useState<NursesDataType>({ nurses: [] });

  const nursesArray: NursesDataType = allNurses();
  useEffect(() => {
    setNurses(nursesArray);
  }, []);

  function handleDelete(nurse: string) {
    const deleteNurses = nurses?.nurses.filter((d) => d._id !== nurse);
    setNurses({ nurses: deleteNurses });
  }

  return (
    <div className="scroll">
      <table className="table">
        <TableHeader />
        <TableBody nursesData={nurses} handleDelete={handleDelete} />
      </table>
    </div>
  );
}

export default Table;
