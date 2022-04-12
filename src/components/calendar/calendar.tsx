import PreviousMonth from "./elements/previousMonth";
import NextMonth from "./elements/nextMonth";
import PrevDays from "./elements/prevDays";
import WeekDays from "./elements/weekDays";
import NextDays from "./elements/nextDays";
import ActiveDays from "./workingDays";
import Month from "./elements/month";
import "./calendar.css";

const Calendar: React.FC = () => {
  return (
    <>
      <div className=" actualCalendar">
        <div className="calendar">
          <div className="month">
            <PreviousMonth />
            <Month />
            <NextMonth />
          </div>
          <WeekDays />
          <div className="days">
            <PrevDays />
            <ActiveDays />
            <NextDays />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
