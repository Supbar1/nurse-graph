import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Table from "./components/nursesList/table";
import Help from "./components/help";
import Main from "./components/main";
import NotFound from "./components/notFound";
import Graph from "./components/graph/graph";
import LoginForm from "./components/login/loginForm";
import "./App.css";
import NextNavigation from "./components/nextNavigation";
import Users from "./components/users";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Users /> */}
        <div className="main">
          <div className="glass">
            <div className="dashboard ">
              <NextNavigation />
            </div>
            <div className="mainWindow ">
              <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/graph" component={Graph} />
                <Route path="/table" component={Table} />
                <Route path="/help" component={Help} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/" exact component={Main} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
