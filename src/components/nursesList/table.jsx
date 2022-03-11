import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getList, getCourses } from "./nurseslist";
import ListGroup from "./listGroup";
import "./list.css";

function Table() {
  const [nurses, setNurses] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setNurses(getList());
  }, []);

  function handleDelete(nurse) {
    const nursess = nurses.filter((l) => l._id !== nurse._id);
    setNurses(nursess);
    console.log(nursess);
  }

  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/graph");
  };

  return (
    <div className=" cwaniaczek">
      <ListGroup />
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
                {nurses.map((nurse) => (
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
                      <button
                        onClick={() => changeUrl()}
                        className="btn btn-info"
                      >
                        Grafik
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(nurse)}
                        className="btn btn-danger"
                      >
                        Usuń Pielęgniarkę
                      </button>
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
}

export default Table;
