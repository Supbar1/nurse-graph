import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectActualNurse } from "../../../../store/slices/nursesSlice";
import {
  setUndoDay,
} from "../../../../store/slices/monthsSlice";

interface UndoButtonProps {
  day: number;
}

const UndoButton = ({ day }: UndoButtonProps) => {
  const dispatch = useAppDispatch();
  const actualNurse = useAppSelector(selectActualNurse);
  const dayWithNurse = [day, actualNurse.id];

  const undo = () => {
    dispatch(setUndoDay(dayWithNurse));
  };
  return <i onClick={undo} className="fa fa-undo" />;
};

export default UndoButton;
