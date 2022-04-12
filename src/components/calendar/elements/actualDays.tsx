interface ILIST {
  daysOfMonth: number[];
  handleDaySelect(day: number): number | JSX.Element;
  workDay: (day: number) => void;
}
export const ActualDays: React.FC<ILIST> = ({
  workDay,
  daysOfMonth,
  handleDaySelect,
}) => {
  return (
    <>
      {daysOfMonth.map((day, index) => (
        <div
          onClick={() => workDay(day)}
          key={index}
          className="active-days animation"
        >
          {handleDaySelect(day)}
        </div>
      ))}
    </>
  );
};
