import React from "react";
import {useButtonContext} from "../graph/buttonContext";

function NightButton() {
  const {nights, setNights} = useButtonContext();
  return (
    <i
      onClick={() => setNights(nights + 1)}
      className="fa-solid fa-moon silver"
    ></i>
  );
}

export default NightButton;
