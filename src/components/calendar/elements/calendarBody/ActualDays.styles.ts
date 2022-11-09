import styled from "styled-components";

export const ActiveDayStyled = styled.div`
  border: 0;
  position: relative;
  border-radius: 18%;
  overflow: hidden;
  color: black;
  opacity: 1;
  &:after {
    content: "";
    width: 350px;
    height: 350px;
    position: absolute;
    top: -50px;
    left: -100px;
    background: linear-gradient(
      to left bottom,
      rgba(143, 64, 248, 0.3),
      rgba(39, 200, 255, 0.3)
    );
    z-index: -1;
    transition: transform 0.5s ease;
  }
  &:hover {
    transform:scale(1.3);
    z-index: 2;
    box-shadow: 8px -8px 21px 0 rgba(143, 64, 248, 0.3),
      8px -8px 21px 0 rgba(39, 200, 255, 0.3);
  }
  &:hover::after {
    transform: rotate(180deg);
  }
`;
