import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectActiveLink,
  setActiveLink,
} from "../store/slices/activeLinkSlice";
import { selectActualNurse } from "../store/slices/nursesSlice";
import { selectUsername } from "../store/slices/usernameSlice";

interface LinkProps {
  activelink?: string;
}

const Container = styled.div<LinkProps>`
  display: ${({ activelink }) => (activelink === "" ? "none" : "flex")};
  border: 1px solid blue;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  font: var(--fa-font-solid);
  font-size: calc(1.5vh + 2rem);
  height: 300px;
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.5),
    rgba(39, 200, 255, 0.5)
  );
  @media (max-height: 400px) {
    font-size: calc(2vh + 2.4rem);
    margin-right: 0;

    border-radius: 0;
    height: 100vh;
  }
`;
const LinkToMain = styled(Link)<LinkProps>`
  background-color: ${(props) =>
    props.activelink === "main" ? "rgba(39, 200, 255, 0.5)" : null};
  border-radius: 10px;
  :before {
    display: inline-block;
    content: "\f0f8";
  }
  &:hover {
    background-color: rgba(39, 200, 255, 0.5);
  }
`;
const Graph = styled(Link)<LinkProps>`
  background-color: ${({ activelink }) =>
    activelink === "graph" ? "rgba(39, 200, 255, 0.5)" : null};
  border-radius: 5px;
  :before {
    display: inline-block;
    content: "\f073";
  }
  &:hover {
    background-color: rgba(39, 200, 255, 0.5);
  }
`;
const LinkToTable = styled(Link)<LinkProps>`
  background-color: ${(props) =>
    props.activelink === "table" ? " rgba(143, 64, 248, 0.5)" : null};
  border-radius: 15px;
  :before {
    display: inline-block;
    content: "\f0c0";
  }
  &:hover {
    background-color: rgba(143, 64, 248, 0.5);
  }
`;

const LinkToLogin = styled(Link)<LinkProps>`
  background-color: ${(props) =>
    props.activelink === "login" ? " rgba(143, 64, 248, 0.5)" : null};
  border-radius: 20px;
  :before {
    display: inline-block;
    content: "\f2f6";
  }
  &:hover {
    background-color: rgba(143, 64, 248, 0.5);
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#2785ff",
};

const Navigation = () => {
  const dispatch = useAppDispatch();
  const activelink = useAppSelector(selectActiveLink);
  const { username } = useAppSelector(selectUsername);
  const actualNurse = useAppSelector(selectActualNurse);
  return (
    <>
      {username && (
        <Container activelink={activelink}>
          <LinkToMain
            onClick={() => dispatch(setActiveLink("main"))}
            to="/main"
            style={linkStyle}
            activelink={activelink}
          />
          {actualNurse.firstName && (
            <Graph
              onClick={() => dispatch(setActiveLink("graph"))}
              to="/graph"
              style={linkStyle}
              activelink={activelink}
            />
          )}
          <LinkToTable
            onClick={() => dispatch(setActiveLink("table"))}
            to="/table"
            style={linkStyle}
            activelink={activelink}
          />
          <LinkToLogin
            onClick={() => dispatch(setActiveLink("login"))}
            to="/"
            style={linkStyle}
            activelink={activelink}
          />
        </Container>
      )}
    </>
  );
};
export default Navigation;
