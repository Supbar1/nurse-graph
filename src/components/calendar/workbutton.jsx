import React, { useState } from "react";
import MorningButton from "./morningbutton";
import NightButton from "./nightButton";

function WorkButton() {
  const [working, setWorking] = useState(false);
  return (
    <React.Fragment>
      {working === false ? (
        <div onClick={() => setWorking({ working: true })}>
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
