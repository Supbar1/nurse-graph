import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";
const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 20% 80%;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  background-image: "https://assets.contenthub.wolterskluwer.com/api/public/content/3023bc9eed3f455f9ce4c036a8e3ca71?v=43d7453f";
`;
const HeaderSpace = styled.h1`
  white-space: nowrap;
  height: 100%;
  font-size: min(15vh, 6rem);
  letter-spacing: 3px;
  word-spacing: 2px;
  background: linear-gradient(
    to left bottom,
    rgba(143, 64, 248, 0.8),
    rgba(39, 200, 255, 0.8)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextArea = styled.div`
  transform: translateY(-10%);
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  transform: translateY(-10vh);
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  /* background-color: red; */
`;
const Text = styled.p`
  transform: scale(0.9, 1.2);
  line-height: 2.5rem;
  font-size: 1.2rem;
  word-spacing: 1px;
  letter-spacing: 1px;
`;
const Main = () => {
  const { nurses } = useNurseContext();
  return (
    <Container>
      <HeaderSpace>NURSE GRAPH</HeaderSpace>
      <TextArea>
        <Text>Witam w Nurse Graph</Text>
        <Text>
          Programie służącym do układania grafiku pracy na oddziale szpitalnym
        </Text>
        <Text>
          Aktualnie program jako pracowników oddziału pobiera losowe:{" "}
          {nurses.length} osób.
        </Text>
      </TextArea>
    </Container>
  );
};
export default Main;
