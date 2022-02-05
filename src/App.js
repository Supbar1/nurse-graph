import React, { Component } from "react";
import NavBar from "./components/navBar";
import Calendar from "./components/calendar";
import { Route, Redirect, Switch } from "react-router-dom";
import Table from "./components/table";
import Help from "./components/help";
import Main from "./components/main";
import NotFound from "./components/notFound";
import Graph from "./components/graph";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
     
        <div>
          <NavBar />
          <main>
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
        
      </React.Fragment>
    );
  }
}

export default App;
