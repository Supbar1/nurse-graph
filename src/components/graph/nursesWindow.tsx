import styled from "styled-components";

const NursesShift = styled.div`
  white-space: nowrap;
  padding: 1em;
`;

function NursesWindow() {
  return (
    <NursesShift>
      <ul>Pracują już :</ul>
      <li>Beatka</li>
      <li>Bożenka</li>
      <li>Barbara</li>
    </NursesShift>
  );
}

export default NursesWindow;
