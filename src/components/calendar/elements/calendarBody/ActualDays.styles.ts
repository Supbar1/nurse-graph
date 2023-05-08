import styled from "styled-components";

export const ActiveDayStyled = styled.div`
  position: relative;
  border-radius: 18%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 80px;
  width: 80px;
  &:after {
    content: "";
    width: 350px;
    height: 350px;
    position: absolute;
    top: -70px;
    left: -100px;
    background: linear-gradient(
      to left bottom,
      rgba(143, 64, 248, 0.5),
      rgba(39, 200, 255, 0.5)
    );
    z-index: -1;
    transition: transform 0.2s ease;
  }
  &:hover {
    box-shadow: 3px -3px 3px 0 rgba(39, 200, 255, 0.2),
      -3px 3px 3px 0 rgba(143, 64, 248, 0.2);
  }
  &:hover::after {
    transform: rotate(180deg);
  }
`;
