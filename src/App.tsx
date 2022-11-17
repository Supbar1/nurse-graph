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
import NewLogin from "./components/login/Login";
//Context
import NurseProvider from "./context/NurseContext";
import ChangeMobileToHorizontalDimension from "./components/main/Information";
import NursesWindow from "./components/graph/NursesWindow";

const Container = styled.div`
  font-family: "Trocchi", sans-serif;
  letter-spacing: 2px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 1),
    rgba(39, 200, 255, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;
const WorkSpace = styled.div`
  height: max(80vh, 380px);
  /* border: 1px solid blue; */

  width: min(70vw, 900px);
  @media (max-width: 1000px) {
    width: 90vw;
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
