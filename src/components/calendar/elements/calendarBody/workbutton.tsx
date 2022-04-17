import React, { useState } from "react";
import MorningButton from "./morningbutton";
import NightButton from "./nightButton";
import styled from "styled-components";

const Animation = styled.div`
 &:after {
  content: "";
  width: 400px;
  height: 400px;
  position: absolute;
  top: -50px;
  left: -100px;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #f97362 0%,
    #d987d7 50%,
    #51b3f8 100%
  );
  z-index: -1;
  transition: transform 0.5s ease;
}
`
function WorkButton() {
  const [working, setWorking] = useState(false);
  return (
    <React.Fragment>
      {working === false ? (
        <div onClick={() => setWorking(true)}>
          <MorningButton />
          <NightButton />
        </div>
      ) : (
        <h5>Pracujesz</h5>
      )}
    </React.Fragment>
  );
}

export default WorkButton;
