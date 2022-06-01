import { useButtonContext, workDays } from "../../buttonContext";
function BackButton() {
  const { workDays } = useButtonContext();
  function oneDayAccess() {
    workDays.shift();
    console.log(workDays);
  }
  return (
    <i
      onClick={() => oneDayAccess()}
      className="fa-solid fa-arrow-rotate-left"
    ></i>
  );
}
export default BackButton;
