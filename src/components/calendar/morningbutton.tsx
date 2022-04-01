import React from "react";
import { useButtonContext } from "../graph/buttonContext";

function MorningButton() {
  const { days, setDays } = useButtonContext();
  return (
    <i onClick={() => setDays(days + 1)} className="fa-solid fa-sun yellow"></i>
  );
}

export default MorningButton;
