import React, { useState } from "react";
import MorningButton from "./morningbutton";
import NightButton from "./nightButton";
import styled from "styled-components";
const Buttons = styled.div`
  justify-content: space-between;
  padding: 5px;
`;
const WorkingIcon = styled.div`
  color: rgba(2, 111, 236, 0.9);
`;
const Space = styled.div`
  width: 8px;
`;
function WorkButton() {
  const [working, setWorking] = useState(false);
  return (
    <React.Fragment>
      {working === false ? (
        <Buttons onClick={() => setWorking(true)}>
          <MorningButton />
          <Space />
          <NightButton />
        </Buttons>
      ) : (
        <WorkingIcon className="fa-solid fa-user-doctor"></WorkingIcon>
      )}
    </React.Fragment>
  );
}

export default WorkButton;
