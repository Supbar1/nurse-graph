import styled from "styled-components";

export const ActiveDay = styled.div`
  font-size: 1.5rem;
  position: relative;
  margin: 1px;
  border-radius: 19px;
  overflow: hidden;
  color: white;
  opacity: 0.9;
  
&:after {
  content: "";
  width: 400px;
  height: 400px;
  position: absolute;
  top: -50px;
  left: -100px;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #f97362 0%,
    #d987d7 50%,
    #51b3f8 100%
  );
  z-index: -1;
  transition: transform 0.5s ease;}
&:hover {
  transform: translate(0, -6px);
  box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.5),
    -10px 10px 25px 0 rgba(39, 200, 255, 0.5);}
&:hover::after {
  transform: rotate(180deg);
}`;
