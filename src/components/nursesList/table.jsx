import React, { Component } from "react";
import { getList, getCourses } from "./nurseslist";
import ListGroup from "./listGroup";
import "./list.css";

class Table extends React.Component {
  state = {
    nurses: [],
    courses: [],
    id: [],
  };

  componentDidMount() {
    this.setState({ nurses: getList(), courses: getCourses() });
  }

  handleDelete = (nurse) => {
    const nurses = this.state.nurses.filter((l) => l._id !== nurse._id);
    this.setState({ nurses });
  };
  handleSave = (nurse) => {
    this.props.history.push("/graph");
  };
  handleCourseSelect = () => {
    console.log("Kursy jakie masz");
  };
  render() {
    const { nurses } = this.state;
    return (
      <div className=" cwaniaczek">
        <ListGroup
          items={this.state.courses}
          onItemSelect={this.handleCourseSelect}
        />

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
                          onClick={() => {
                            // this.state.actualNurse(this.nurse.name);
                            this.handleSave();
                          }}
                          className="btn btn-info"
                        >
                          Grafik
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => this.handleDelete(nurse)}
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
}

export default Table;
