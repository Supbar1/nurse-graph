import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NewNavigation() {
  return (
    <div className="izunia">
      <img src="./images/avatar.png" alt="" />
      <Link className="navbar-link m" to="/">
        Grafik Pracy Oddziału<br></br> Kardiologi Inwazywnej
      </Link>
      <Link className="nav-link active i" aria-current="page" to="/graph">
        <div className="graph"></div>

        {/* <i className="fa-solid fa-calendar-days fa-6x"></i> */}
      </Link>

      <div className="link">
        <img src="./images/twitch.png" alt="" />
        <Link className="nav-link" to="/table">
          <div className="nurses"></div>
        </Link>
      </div>

      <div className="link">
        <img src="./images/steam.png" alt="" />
        <Link className="nav-link" to="/help">
          <div className="question"></div>
        </Link>
      </div>
      <div className="link">
        <img src="./images/steam.png" alt="" />
        <Link className="nav-link" to="/login">
          <div className="login"></div>
        </Link>
      </div>
    </div>
  );
}

export default NewNavigation;
