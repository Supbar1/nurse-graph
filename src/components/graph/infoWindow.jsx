import React, { useContext } from "react";
import "./graph.css";
import ButtonContext from "./buttonContext";

function InfoWindow() {
  const { days, nights, count } = useContext(ButtonContext);
  return (
    <React.Fragment>
      <div className="infoWindow">
        <h2>Wesołe Okienko</h2>
        <ButtonContext.Consumer>
          {(buttonContext) => <p>Tyle dni {days}</p>}
        </ButtonContext.Consumer>
        <ButtonContext.Consumer>
          {(ButtonContext) => <p>Tyle nocy {nights}</p>}
        </ButtonContext.Consumer>
        <ButtonContext.Consumer>
          {(ButtonContext) => <p>Razem: {count}</p>}
        </ButtonContext.Consumer>
      </div>
    </React.Fragment>
  );
}
export default InfoWindow;
