import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
//Components
import Table from "./components/nursesList/Table";
import Help from "./components/help/Help";
import Main from "./components/main/Main";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import Graph from "./components/graph/Graph";
import NewLogin from "./components/login/NewLogin";
//Context
import NurseProvider from "./NurseContext";
import ChangeMobileToHorizontalDimension from "./Information";
import NursesWindow from "./components/graph/NursesWindow";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WorkSpace = styled.div`
  height: 100%;

  @media (max-height: 400px) {
    width: 90vw;
    /* width: 100%; */
    height: 100%;
  }
`;

const App: React.FC = () => (
  <React.Fragment>
    <ChangeMobileToHorizontalDimension />
    <Container>
      <Navigation />
      <NurseProvider>
        <WorkSpace>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/table" element={<Table />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<NewLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WorkSpace>
      </NurseProvider>
    </Container>
  </React.Fragment>
);

export default App;
