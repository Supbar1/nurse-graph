import { Link } from "react-router-dom";
import styled from "styled-components";

const Contered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Graph = styled.div`
  :before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font: var(--fa-font-solid);
    content: "\f073";
    font-size: 5em;
    color: Tomato;
  }
`;
const Nurses = styled.div`
  :before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font: var(--fa-font-solid);
    content: "\f0c0";
    font-size: 5em;
    color: Tomato;
  }
`;
const Help = styled.div`
  :before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font: var(--fa-font-solid);
    content: "\f128";
    font-size: 5em;
    color: Tomato;
  }
`;
const Login = styled.div`
  :before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font: var(--fa-font-solid);
    content: "\f2f6";
    font-size: 5em;
    color: Tomato;
  }
`;

function Navigation() {
  return (
    <Contered>
      <Link to="/">
        Grafik Pracy Oddziału<br></br> Kardiologi Inwazywnej
      </Link>
      <Link className="nav-link active i" aria-current="page" to="/graph">
        <Graph></Graph>
      </Link>

      <Link className="nav-link" to="/table">
        <Nurses></Nurses>
      </Link>

      <Link className="nav-link" to="/help">
        <Help></Help>
      </Link>

      <Link className="nav-link" to="/login">
        <Login></Login>
      </Link>
    </Contered>
  );
}

export default Navigation;
