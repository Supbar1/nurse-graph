import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: "https://assets.contenthub.wolterskluwer.com/api/public/content/3023bc9eed3f455f9ce4c036a8e3ca71?v=43d7453f";

  h1 {
    transform: translateY(-30vh);
    font-size: min(15vh, 6rem);
    /* font-weight: bold; */
    letter-spacing: 3px;
    word-spacing: 2px;
    background: linear-gradient(
      to left bottom,
      rgba(143, 64, 248, 0.8),
      rgba(39, 200, 255, 0.8)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Main = () => {
  return (
    <Container>
      <h1>NURSE GRAPH</h1>
    </Container>
  );
};
export default Main;
