import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link className="navbar-link m" to="/">
        Grafik Pracy Oddziału<br></br> Kardiologi Inwazywnej
      </Link>
      <Link className="nav-link active i" aria-current="page" to="/graph">
        <div className="graph"></div>
      </Link>

      <div className="link">
        <Link className="nav-link" to="/table">
          <div className="nurses"></div>
        </Link>
      </div>

      <div className="link">
        <Link className="nav-link" to="/help">
          <div className="question"></div>
        </Link>
      </div>
      <div className="link">
        <Link className="nav-link" to="/login">
          <div className="login"></div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
