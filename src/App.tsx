import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Table from "./components/nursesList/Table";
import Help from "./components/help/Help";
import Main from "./components/main/Main";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import Graph from "./components/graph/Graph";
import NewLogin from "./components/login/Login";
import NurseProvider from "./context/NurseContext";
import ChangeMobileToHorizontalDimension from "./components/main/Information";

const Container = styled.div`
  font-weight: bold;
  font-size: 1rem;
  font-family: "Roboto";
  letter-spacing: 2px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WorkSpace = styled.div`
  height: max(60vh, 500px);
  width: max(50vw, 800px);
  @media (max-height: 500px) {
    height: 100%;
  }
`;

const App: React.FC = () => (
  <React.Fragment>
    <ChangeMobileToHorizontalDimension />
    <Container>
      <NurseProvider>
        <Navigation />
        <WorkSpace>
          <Routes>
            <Route path="/" element={<NewLogin />} />
            <Route path="/main" element={<Main />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/table" element={<Table />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WorkSpace>
      </NurseProvider>
    </Container>
  </React.Fragment>
);

export default App;
