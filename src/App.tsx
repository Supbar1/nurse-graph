import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./components/nursesList/table";
import Help from "./components/help";
import Main from "./components/main";
import Navigation from "./components/Navigation";
import NotFound from "./components/notFound";
import Graph from "./components/graph/graph";
// import LoginForm from "./components/login/loginForm";
import NewLogin from "./components/login/newLogin";
import "./App.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="glass">
          <div className="dashboard ">
            <Navigation />
          </div>
          <div className="mainWindow ">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<NewLogin />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/table" element={<Table />} />
              <Route path="/help" element={<Help />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
