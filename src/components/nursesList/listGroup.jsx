import React, { Component } from "react";

const ListGroup = (props) => {
  const { items } = props;
  return (
    <ul className="list-group szerokosc">
      <li className="list-group-item list-group-item-primary">
        Transfuzja Krwi
      </li>
      <li className="list-group-item list-group-item-success">E Ka Ge</li>
      <li className="list-group-item list-group-item-danger">R Ka O</li>
      <li className="list-group-item list-group-item-warning">RKS HUWDU</li>
      <li className="list-group-item list-group-item-info">
        Biało-Czerwone <br></br>barwy nie zwyciężone
      </li>
    </ul>
  );
  ListGroup.defaultProps = {};
};

export default ListGroup;
