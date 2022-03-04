import React, { Component } from "react";
import Table from "./nursesList/table";

import Help from "./help";
import Main from "./main";
import NotFound from "./notFound";
import Graph from "./graph/graph";
import LoginForm from "./loginForm";
import { Link } from "react-router-dom";
import { Route, Redirect, Switch } from "react-router-dom";
import "../App.css";
import NewNavigation from "./nextNavigation";

const Navigation = () => {
  return (
    <div className="main">
      <div className="glass main">
        <NewNavigation />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/graph" component={Graph} />
            <Route path="/table" component={Table} />
            <Route path="/help" component={Help} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Main} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    </div>
    //------------------------------------------
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">

    //     <div className="collapse navbar-collapse" id="navbarNav">
    // <ul className="navbar-nav">
    //   <li className="nav-item">

    //   </li>
    //   <li className="nav-item">
    //     <Link className="nav-link" to="/table">
    //       Lista Pielęgniarek
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link className="nav-link" to="/help">
    //       Pomoc
    //     </Link>
    //     </li>
    //   <li className="nav-item">

    //   </li>
    // </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navigation;
