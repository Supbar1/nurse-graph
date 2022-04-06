import * as React from "react";

import { useNavigate } from "react-router";

// type ButtonProps = {
//   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

export const BackButton = () => {
  const navigate = useNavigate();
  const changeUrl = () => {
    navigate("/graph");
  };
  return (
    <button className="btn btn-info" onClick={changeUrl}>
      Grafik
    </button>
  );
};
