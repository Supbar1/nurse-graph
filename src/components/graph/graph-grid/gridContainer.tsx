import styled from "styled-components";

export default styled.div`
  display: grid;
  width: min(60vw, 850px);

  grid-template-areas:
    "actual   window"
    "calendar nurses"
    "calendar ------"
    "cancelButton saveButton";
`;
