import { Link } from "react-router-dom";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font: var(--fa-font-solid);
  font-size: calc(2vh + 2.5rem);

  @media (max-height: 360px) {
    font-size: calc(17vh);
  }
`;

const Main = styled.div`
  padding: 0.5vh;
  :before {
    content: "\f0f8";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Graph = styled.div`
  padding: 1.5vh;
  :before {
    content: "\f073";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Nurses = styled.div`
  padding: 1.5vh;
  :before {
    display: inline-block;
    content: "\f0c0";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Help = styled.div`
  padding: 1vh 0 0 0;
  :before {
    display: inline-block;
    content: "\f128";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Login = styled.div`
  padding: 0.5vh;
  :before {
    display: inline-block;
    content: "\f2f6";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;

const Navigation = () => (
  <Centered>
    <Link to="/">
      <Main />
    </Link>
    <Link to="/graph">
      <Graph />
    </Link>
    <Link to="/table">
      <Nurses />
    </Link>
    <Link to="/help">
      <Help />
    </Link>
    <Link to="/login">
      <Login />
    </Link>
  </Centered>
);

export default Navigation;
