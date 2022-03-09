import React, { useContext } from "react";
import ButtonContext from "./../graph/buttonContext";

function NightButton() {
  const nightContext = useContext(ButtonContext);
  return (
    <i
      onClick={() => nightContext.setNights(nightContext.nights + 1)}
      className="fa-solid fa-moon silver"
    ></i>
  );
}

export default NightButton;
