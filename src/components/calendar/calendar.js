import React, { Component } from "react";
import NavBar from "./components/navBar";
import Calendar from "./components/calendar";
import { Route, Redirect, Switch } from "react-router-dom";
import Table from "./components/table";
import Help from "./components/help";
import Main from "./components/main";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/calendar" component={Calendar} />
              <Route path="/table" component={Table} />
              <Route path="/help" component={Help} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" exact component={Main} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
