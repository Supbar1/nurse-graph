import styled from "styled-components";

const DaysLabel = styled.div`
  width: 100%;
  display: flex;
  /* height: 7%; */
  border: 1px solid green;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
