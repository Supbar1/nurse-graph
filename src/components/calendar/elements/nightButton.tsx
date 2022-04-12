import { useButtonContext } from "../buttonContext";

function NightButton() {
  const { nights, setNights } = useButtonContext();
  return (
    <i
      onClick={() => console.log("hejo", nights + 1)}
      className="fa-solid fa-moon silver"
    ></i>
  );
}

export default NightButton;
