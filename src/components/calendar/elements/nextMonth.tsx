import { useButtonContext } from "../buttonContext";

function NextMonth() {
  const { monthChange, setMonthChange } = useButtonContext();

  return <i onClick={() => setMonthChange( monthChange + 1)} className="fas fa-angle-right next"></i>;
}

export default NextMonth;
