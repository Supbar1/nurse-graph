import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNurseContext } from "../context/NurseContext";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  font: var(--fa-font-solid);
  font-size: calc(2vh + 2.4rem);
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.5),
    rgba(39, 200, 255, 0.5)
  );
  @media (max-height: 400px) {
    font-size: calc(15vh);
    width: 10vw;
    border-radius: 0;
    height: 100%;
  }
`;

const Main = styled.div`
  /* border: 1px solid black; */
  padding: 0.5vh;
  :before {
    display: inline-block;
    content: "\f0f8";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Graph = styled.div`
  padding: 1.5vh;
  :before {
    display: inline-block;
    content: "\f073";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Table = styled.div`
  padding: 1.5vh;
  /* height: 150px; */
  :before {
    display: inline-block;
    content: "\f0c0";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Help = styled.div`
  padding: 1vh 0 0 0;
  /* border: 1px solid black; */
  :before {
    display: inline-block;
    content: "\f128";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;
const Login = styled.div`
  /* border: 1px solid black; */
  padding: 0.5vh;
  :before {
    display: inline-block;
    content: "\f2f6";
    color: linear-gradient(rgba(143, 64, 248, 0.5), rgba(39, 200, 255, 0.5));
  }
`;

const Navigation = () => {
  const { userName, actualNurse } = useNurseContext();

  return (
    <Container>
      {userName && (
        <>
          <Link to="/main">
            <Main />
          </Link>
          {actualNurse.firstName && (
            <Link to="/graph">
              <Graph />
            </Link>
          )}
          <Link to="/table">
            <Table />
          </Link>
          <Link to="/">
            <Login />
          </Link>
        </>
      )}
    </Container>
  );
};
export default Navigation;
