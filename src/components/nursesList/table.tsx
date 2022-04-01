import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import { getList } from "./nurseslist";
import ListGroup from "./listGroup";
import "./list.css";
import List from "../help";

function Table() {
  const [nurses, setNurses] = useState({});

  useEffect(() => {
    setNurses(List());
  }, []);

  // function handleDelete(nurse) {
  //   const nursess = nurses.filter((l) => l._id !== nurse._id);
  //   setNurses(nursess);
  //   console.log(nursess);
  // }

  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/graph");
  };
  function klik() {
    console.log(nurses);
  }
  return (
    <List />
   
  );
}

export default Table;
