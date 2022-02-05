import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Grafik Pracy Oddziału Kardiologi Inwazywnej
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/graph">
                Kalendarz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                Lista Pielęgniarek
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
                Pomoc
              </Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
