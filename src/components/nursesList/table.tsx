import "./list.css";
import { NursesList, NursesDataType } from "./interface";
import { allNurses } from "./nursesList";
import { useState, useEffect } from "react";

function Table() {
  const [nurses, setNurses] = useState<NursesDataType>({ nurses: [] });

  const nursesArray: NursesDataType = allNurses();
  useEffect(() => {
    setNurses(nursesArray);
  }, []);

  function handleDelete(nurse: string) {
    const deleteNurses = nurses?.nurses.filter((d) => d._id !== nurse);
    setNurses({nurses: deleteNurses});
    console.log({nurses: deleteNurses});
  }

  return (
    <>
      {nurses && (
        <NursesList
          nursesData={nurses}
          handleClick={(nurse) => handleDelete(nurse)}
        />
      )}
    </>
  );
}

export default Table;
