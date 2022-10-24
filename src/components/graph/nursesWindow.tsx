import styled from "styled-components";

const NursesShift = styled.div`
  white-space: nowrap;
  padding: 1em;
  grid-area: nurses;
`;

const NursesWindow = () => (
  <NursesShift>
    <ul>Pracują już :</ul>
    <li>Beatka</li>
    <li>Bożenka</li>
    <li>Barbara</li>
  </NursesShift>
);

export default NursesWindow;
