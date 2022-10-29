import styled from "styled-components";

const SilverMoon = styled.i`
  color: silver;
`;
const NightButton = () => {

  const work = () => {
  };
  return (
    <>
      <SilverMoon
        onClick={() => work()}
        className="fa-solid fa-moon silver"
      ></SilverMoon>
    </>
  );
};
export default NightButton;
