import styled from "styled-components";

const DaysLabel = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    width: 14%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

export default function WeekDays() {
  return (
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
}
