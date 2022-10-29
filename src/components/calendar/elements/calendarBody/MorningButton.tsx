import styled from "styled-components";

const YellowSun = styled.i`
  color: white;
`;
const MorningButton = () => {

  const work = () => {
  };
  return <YellowSun onClick={() => work()} className="fa-solid fa-clock" />;
};

export default MorningButton;
