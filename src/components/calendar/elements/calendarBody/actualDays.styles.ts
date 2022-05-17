import styled from "styled-components";

export const ActiveDayStyled = styled.div`
  position: relative;
  border-radius: 30%;
  overflow: hidden;
  color: black;

  opacity: 0.9;
  &:after {
    content: "";
    width: 350px;
    height: 350px;
    position: absolute;
    top: -50px;
    left: -100px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(143, 64, 248, 0.5)
    );
    z-index: -1;
    transition: transform 0.5s ease;
  }
  &:hover {
    transform: translate(0, -6px);
    box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.5),
      -10px 10px 25px 0 rgba(39, 200, 255, 0.5);
  }
  &:hover::after {
    transform: rotate(180deg);
  }
`;
