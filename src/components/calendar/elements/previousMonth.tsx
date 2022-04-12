// import { useMonthContext } from "./monthContext";
import { useButtonContext} from "../buttonContext"

function PreviousMonth() {
  const { monthChange, setMonthChange } = useButtonContext();

  return (
    <i
      onClick={() => setMonthChange(monthChange - 1)}
      className="fas fa-angle-left next"
    ></i>
  );
}

export default PreviousMonth;
