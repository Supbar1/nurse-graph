import React from "react";
import main from "./main.png";
import styled from "styled-components";
// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   opacity: 0.1;
//   padding: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
const Name = styled.div`
  white-space: nowrap;
`;
const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* content: "Witamy w Interaktywny Grafiku szpitala Jana Pawła II"; */
  transform: scale(1.1, 1.7);
  margin: 1em;
  padding: 2em;
  color: white;
  /* line-break: ; */
  font-size: min(3vh, 20px);
  letter-spacing: 0.15em;
  font-family: Roboto, sans-serif;
`;
const Image = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  width: 100%;
  background-size: cover;
  margin: auto;
  inset: 0;
`;
const Tank = styled.div`
  position: absolute;
  height: 90vh;
  width: 80vw;
  border-radius: 6em;
  opacity: 0.1;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background: linear-gradient(to right, #f9d423, #e65c00);
  /* animation: moving 5s linear infinite; */
  @keyframes moving {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(20vw);
    }
  }
`;
const Text = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: poppins;
  color: transparent;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 85px;
  margin: 0;
  -webkit-text-stroke: 3px rgba(0, 0, 0, 0.7);
  line-height: 85px;
`;
const Container = styled.div`
  width: min(60vw, 850px);
`;
function Main() {
  return <Container></Container>;
}

export default Main;
