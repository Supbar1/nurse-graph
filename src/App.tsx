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
import ChangeMobileToHorizontalDimension from "./components/main/Information";
import { useAppSelector } from "./store/hooks";
import { selectActiveLink } from "./store/slices/activeLinkSlice";

const Container = styled.div<LinkProps>`
  font-weight: bold;
  font-size: 1rem;
  font-family: "Roboto";
  letter-spacing: 2px;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  display: grid;
  grid-template-columns: ${({ activelink }) =>
    activelink === "" ? "auto" : "70px 700px"};

  @media (max-width: 786px) {
    gap: 0;
    grid-template-columns: 10vw 90vw;
  }
`;
const NavigationStyled = styled.div<LinkProps>``;

const WorkSpaceStyled = styled.div`
  height: 500px;
  overflow-y: hidden;
  border: 1px solid red;
  @media (max-height: 500px) {
    height: 100%;
  }
`;
interface LinkProps {
  activelink?: string;
}
export interface ScreenSize {
  width: string;
  height: string;
}
const App = () => {
  const activelink = useAppSelector(selectActiveLink);

  return (
    <React.Fragment>
      {/* <ChangeMobileToHorizontalDimension /> */}
      <Container>
        <NavigationStyled activelink={activelink}>
          <Navigation />
        </NavigationStyled>
        <WorkSpaceStyled>
          <Routes>
            <Route path="/" element={<NewLogin />} />
            <Route path="/main" element={<Main />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/table" element={<Table />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WorkSpaceStyled>
      </Container>
    </React.Fragment>
  );
};

export default App;
