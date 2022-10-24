import { useButtonContext } from "../calendar/ButtonContext";

const InfoWindow = () => {
  const { workHours } = useButtonContext();
  return (
    <>
      <h2>Wesołe Okienko</h2>
      <p>Razem godzin: {workHours}</p>
    </>
  );
};
export default InfoWindow;
