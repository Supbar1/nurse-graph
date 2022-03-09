import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const wspanialaZabawa = useContext(UserContext);
  const chwalebnaSluzba = useContext(CartContext);

  return (
    <div>
      -----
      <br></br>
      Linijka nizej{" "}
      {wspanialaZabawa ? wspanialaZabawa : ""}
    </div>
    
  );
}

export default MovieRow;

<div
      onClick={() => {
        this.props.thisDay();

        this.props.onClick();
      }}
      className="lewy"
    >
      <i className="fa-solid fa-sun yellow"></i>
    </div>