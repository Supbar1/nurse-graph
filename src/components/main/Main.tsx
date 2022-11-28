import styled from "styled-components";
import { useNurseContext } from "../../context/NurseContext";

const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  justify-content: center;
  text-align: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.8em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    background: rgba(2, 111, 236, 0.8);
  }
`;
const HeaderSpace = styled.h1`
  font-weight: bold;
  white-space: nowrap;
  font-size: min(15vh, 6rem);
  margin-bottom: 2rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
`;
const Text = styled.p`
  transform: scale(1, 1.2);
  line-height: 2.5rem;
  word-spacing: 2px;
  letter-spacing: 1px;
`;
const IconsLegend = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: left;
  i {
    color: #2785ff;
    font-size: 2rem;
    margin: 1rem;
    padding: 1rem;
  }
`;

const Main = () => {
  const { nurses } = useNurseContext();
  return (
    <Container>
      <HeaderSpace>NURSE GRAPH</HeaderSpace>
      <TextArea>
        <Text>Witam w Nurse Graph!</Text>
        <Text>
          Programie służącym do układania grafiku pracy na oddziale szpitalnym.
        </Text>
        <Text>Grafik można ustawiać maksymalnie 2 miesiące do przodu.</Text>
        <Text>
          Aktualnie program jako pracowników oddziału pobiera losowe:{" "}
          {nurses.length} osób.
        </Text>
        <Text>(api: https://randomuser.me/api)</Text>

        <IconsLegend>
          <span>
            <i className="fa-solid fa-hospital" />
            Informacje i instrukcja
          </span>
          <span>
            <i className="fa-solid fa-calendar-days" />
            Kalendarz
          </span>
          <span>
            <i className="fa-solid fa-users" />
            Tablica Pracowników
          </span>
          <span>
            <i className="fa-solid fa-arrow-right-to-bracket" />
            Login
          </span>
          <span>
            <i className="fa-solid fa-sun" /> Zmiana poranna
          </span>
          <span>
            <i className="fa-solid fa-clock" /> Zmiana dzienna
          </span>
          <span>
            <i className="fa-solid fa-moon" /> Zmiana nocna
          </span>
        </IconsLegend>
      </TextArea>
    </Container>
  );
};
export default Main;
