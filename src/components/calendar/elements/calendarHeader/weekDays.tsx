import styled from "styled-components";

const DaysLabel = styled.div`
  width: 100%;
  display: flex;
  height: 15%;
  display: grid;
  grid-template-columns: repeat(7, 14.25%);
  font-size: 1.5em;
  white-space: no;
  div {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
    margin: 2px;
  }
`;

const WeekDays = () => (
  <DaysLabel>
    <div>Pon</div>
    <div>Wt</div>
    <div>Śr</div>
    <div>Czw</div>
    <div>Pt</div>
    <div>Sob</div>
    <div>Nie</div>
  </DaysLabel>
);
export default WeekDays;
