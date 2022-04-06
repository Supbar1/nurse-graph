import * as React from "react";

import { useNavigate } from "react-router";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const DeleteButton = (props: ButtonProps) => {
  
  return (
    <button className="btn btn-danger" onClick={props.handleClick}>
      Usuń
    </button>
  );
};
