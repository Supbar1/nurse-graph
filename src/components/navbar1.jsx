import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Główna</Link>
      </li>
      <li>
        <Link to="/calendar">Kalendarz</Link>
      </li>
      <li>
        <Link to="/table">Lista Pielęgniarek</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
    </ul>
  );
};

export default NavBar;
