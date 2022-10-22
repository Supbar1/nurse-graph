import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
//Components
import Table from "./components/nursesList/table";
import Help from "./components/help/help";
import Main from "./components/main/main";
import Navigation from "./components/Navigation";
import NotFound from "./components/notFound";
import Graph from "./components/graph/graph";
import NewLogin from "./components/login/newLogin";
//Context
import NurseProvider from "./nurseContext";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Interface = styled.div`
  height: 80%;
  border-radius: 6em;
  display: flex;
  margin: auto;
  align-items: center;
  @media (max-width: 750px) {
    width: 100%;
  }
  @media (max-height: 360px) {
    height: 100%;
  }
  background-color: rgba(255, 255, 255, 0.2);
`;
const DashBoard = styled.div`
  display: flex;
  justify-content: center;
  padding: 3vh 0 2vh 0;
  width: 10vw;
  border-radius: 2rem;
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.5),
    rgba(39, 200, 255, 0.5)
  );
  @media (max-height: 360px) {
    padding: 2vh;
    height: 100%;
    padding: 0;
    transform: translateX(-42.5vw);
    width: 15vw;
  }
`;
const Margin = styled.div`
  margin: auto;
`;
const App: React.FC = () => (
  <React.Fragment>
    <Container>
      <Interface>
        <DashBoard>
          <Navigation />
        </DashBoard>
        <Margin>
          <NurseProvider>
            <Routes>
              <Route path="/login" element={<NewLogin />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/table" element={<Table />} />
              <Route path="/help" element={<Help />} />
              <Route path="/" element={<Main />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </NurseProvider>
        </Margin>
      </Interface>
    </Container>
  </React.Fragment>
);

export default App;
