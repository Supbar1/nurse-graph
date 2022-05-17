import styled from "styled-components";

const GridContainter = styled.div`
  height: 100%;

  width: min(60vw, 850px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  justify-content: center;
  align-items: center;
`;
const BackButton = styled.div`
  border: 1px solid black;
  grid-column: 3;
  grid-row: 1;
  height: 100%;
  width: 100px;
  background-color: red;
`;
const Calendar = styled.div`
  grid-column: 2;
  grid-row: 2;
  height: 100%;
  width: 100%;
  border: 2px solid brown;
  background-color: red;
`;
const Back = styled.div`
  grid-column: 3;
  grid-row: 2;
  /* height: 100%; */
  width: 100px;
  background-color: red;
`;
const Ccc = styled.div`
  grid-column: 4;
  grid-row: 2;
  height: 100px;
  width: 100px;
  background-color: red;
`;
const Pielęgniarka = styled.div`
  grid-column: 2;
  grid-row: 1;
  height: fit-content;
  width: 100px;
  background-color: green;
`;
const SaveButton = styled.button`
  /* grid-column: 3 / span 1;
  grid-row: 3; */
`;

export default function Help() {
  return (
    <GridContainter>
      <Pielęgniarka>Anastazja Romanowicz</Pielęgniarka>
      <BackButton>Back Button</BackButton>
      <Calendar>Tu jest kalendarz</Calendar>
      <Back>Back</Back>
      {/* <Ccc /> */}
    </GridContainter>
  );
}
