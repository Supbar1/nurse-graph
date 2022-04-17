import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./components/nursesList/table";
import Help from "./components/help/help";
import Main from "./components/main/main";
import Navigation from "./components/Navigation";
import NotFound from "./components/notFound";
import Graph from "./components/graph/graph";
import NewLogin from "./components/login/newLogin";
import styled from "styled-components";


const MainWindow = styled.div`
  height: 100%;
  width: 60vw;
  display: flex;
  flex-direction: column;
`;
const DashBoard = styled.div`
  padding: 5vh 0 5vh 0;
  width: 15%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 2rem;
`;
const GlassInterface = styled.div`
  min-height: 90vh;
  width: 80vw;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Gradient = styled.div`
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(
    to right,
    #f97362,
    #fa72a1,
    #d987d7,
    #9ca0f6,
    #51b3f8
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Gradient>
        <GlassInterface>
          <DashBoard>
            <Navigation />
          </DashBoard>
          <MainWindow>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<NewLogin />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/table" element={<Table />} />
              <Route path="/help" element={<Help />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </MainWindow>
        </GlassInterface>
      </Gradient>
    </React.Fragment>
  );
};

export default App;
