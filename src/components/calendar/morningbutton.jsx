import React, { useContext } from "react";
import ButtonContext from "./../graph/buttonContext";

function NightButton() {
  const dayContext = useContext(ButtonContext);
  return (
    <i
      onClick={() => dayContext.setDays(dayContext.days + 1)}
      className="fa-solid fa-sun yellow"
    ></i>
  );
}

export default NightButton;
