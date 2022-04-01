
import "./graph.css";
import { useButtonContext } from "./buttonContext";

function InfoWindow() {
  const { days, nights } = useButtonContext();
  return (
    <div className="infoWindow">
      <h2>Wesołe Okienko</h2>
       <p>Tyle dni {days}</p>
       <p>Tyle nocy {nights}</p>
      {/* <ButtonContext.Consumer>
        {(ButtonContext) => <p>Razem: {count}</p>}
      </ButtonContext.Consumer> */}
    </div>
  );
}
export default InfoWindow;
