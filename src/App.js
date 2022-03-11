import React, { Component } from "react";
import {
  Route,
  Navigate,
  Routes,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import Table from "./components/nursesList/table";
import Help from "./components/help";
import Main from "./components/main";
import NotFound from "./components/notFound";
import Graph from "./components/graph/graph";
import LoginForm from "./components/login/loginForm";
import NextNavigation from "./components/nextNavigation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="glass">
          <div className="dashboard ">
            <NextNavigation />
          </div>
          <div className="mainWindow ">
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/table" element={<Table />} />
              <Route path="/help" element={<Help />} />
              <Route path="/not-found" element={<NotFound />} />
              {/* <Route to="/not-found" /> */}
            </Routes>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
