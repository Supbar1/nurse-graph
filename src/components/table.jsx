import React, { Component } from 'react';
import {getList} from '../components/nurseslist';

class Table extends React.Component {
  state = {
    nurses: getList()
  };

    handleDelete = nurse => {
      const nurses = this.state.nurses.filter(l => l._id !== nurse._id);
      this.setState({nurses});
    }

  render() { 
    
    const { nurses } = this.state;
    return (
    <React.Fragment> 
      <table className="table">
      <thead>
        <tr>
          <th scope="col">Imie i Nazwisko</th>
          <th scope="col">Specka</th>
          <th scope="col">Dni</th>
          <th scope="col">Noce</th>
          <th />
        </tr>
      </thead>
      <tbody>
        { nurses.map(nurse => (
          <tr key={nurse._id}>
            <td>{nurse.name}</td>
            <td>{nurse._id}</td>
            <td></td>
            <td></td>
            <td>
            <button onClick={() => this.handleDelete(nurse)} 
            className='btn btn-danger'>Usuń Pielęgniarkę</button></td>
          </tr>
          ))}
      </tbody>
      </table>
    </React.Fragment>
    )
  }
}

 
export default Table;