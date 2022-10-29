const DayButton = () => {
  const work = () => {};
  return (
    <i
      onClick={() => work()}
      style={{ color: "yellow" }}
      className="fa-solid fa-sun"
    ></i>
  );
};

export default DayButton;
