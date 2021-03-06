import { useState, useEffect } from "react";
import styled from "styled-components";
//Components
import { allNurses } from "./nursesList";
import { NursesDataType } from "./tableBody";
import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody";

const Scroll = styled.div`
  height: 75vh;
  overflow-y: scroll;

  width: min(60vw, 850px);
  &::-webkit-scrollbar {
    width: 0.8em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    background: rgba(2, 111, 236, 0.8);
  }
  table tbody tr:hover,
  table tbody tr {
    z-index: 1;
  }
  table thead {
    color: white;
    font: 900;
    overflow: auto;
    position: sticky;
    background: linear-gradient(
      to left bottom,
      rgba(144, 64, 248, 1),
      rgba(39, 201, 255, 1)
    );
    top: -1px;
    border-radius: 100vw;
  }
`;

function Table() {
  const [nurses, setNurses] = useState<NursesDataType>({ nurses: [] });

  const nursesArray: NursesDataType = allNurses();
  useEffect(() => {
    setNurses(nursesArray);
  }, []);

  function handleDelete(nurse: number) {
    const deleteNurses = nurses?.nurses.filter((d) => d.id !== nurse);
    setNurses({ nurses: deleteNurses });
  }

  return (
    <Scroll>
      <table className="table">
        <TableHeader />
        <TableBody nursesData={nurses} handleDelete={handleDelete} />
      </table>
    </Scroll>
  );
}

export default Table;
