import styled from "styled-components";
import { DayOfMonthType } from "../../../../store/slices/monthsSlice";
import SingleShiftButton from "./SingleShiftIcon";

const GridContainer = styled.div`
  position: relative;
  height: 100%;
  line-height: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
interface WorkButtonType {
  activeDay: DayOfMonthType;
}

interface SingleIconType {
  color: string;
  shiftName: string;
  className: string;
}

const WorkButton = ({ activeDay }: WorkButtonType) => {
  const iconsArray: SingleIconType[] = [
    {
      color: "yellow",
      shiftName: "morningShift",
      className: "fa-solid fa-sun",
    },
    {
      color: "white",
      shiftName: "dayShift",
      className: "fa-solid fa-clock",
    },
    {
      color: "silver",
      shiftName: "nightShift",
      className: "fa-solid fa-moon",
    },
  ];
  return (
    <GridContainer>
      <div style={{ transform: "translate(5%, 18%)" }}>
        {Object.keys(activeDay)}
      </div>

      {iconsArray.map(({ color, shiftName, className }) => {
        return (
          <SingleShiftButton
            color={color}
            activeDay={activeDay}
            shiftName={shiftName}
            className={className}
            key={shiftName}
          />
        );
      })}
    </GridContainer>
  );
};

export default WorkButton;
