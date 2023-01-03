import styled from "styled-components";

const Information = styled.div`
  display: none;
  @media (max-width: 739px) {
    justify-content: center;
    color: white;
    display: flex;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100%;
    opacity: 0.7;
    background-color: black;
  }
`;

const ChangeMobileToHorizontalDimension = () => (
  <Information>
    <div>Turn screen horizontally</div>
  </Information>
);

export default ChangeMobileToHorizontalDimension;
