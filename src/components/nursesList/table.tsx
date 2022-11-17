import { useState, useEffect } from "react";
import styled from "styled-components";
//Components
import { allNurses } from "./Nurseslist";
import { NursesDataType } from "./TableBody";
import TableHeader from "./TableHeader";
import { TableBody } from "./TableBody";
import { useNurseContext } from "../../NurseContext";

const Scroll = styled.div`
  height: 100%;
  overflow-y: scroll;
  width: 100%;

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

const Table = () => {
  // const { nurses } = useNurseContext();
  const [nurses, setNurses] = useState<NursesDataType>({ nurses: [] });

  const nursesArray: NursesDataType = allNurses();
  useEffect(() => {
    setNurses(nursesArray);
  }, []);

  const handleDelete = (nurse: number) => {
    const deleteNurses = nurses?.nurses.filter((d) => d.id !== nurse);
    setNurses({ nurses: deleteNurses });
  };

  return (
    <Scroll>
      <table className="table">
        <TableHeader />
        <TableBody handleDelete={() => console.log(nurses)} />
      </table>
    </Scroll>
  );
};

export default Table;
