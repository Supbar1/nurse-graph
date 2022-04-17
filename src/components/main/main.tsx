import React from "react";
import main from "./main.png";
import styled from "styled-components";

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.1, 1.7);
  margin: 1em;
  padding: 0.8em 3em;
  color: white;
  font-size: 1.3em;
  letter-spacing: 0.15em;
  font-family: Roboto, sans-serif;
`;
const Image = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  border-radius: 13em;
  margin: auto;
  inset: 0;
  size: 100px;
`;
function Main() {
  return (
    <React.Fragment>
      <Paragraph>
        Witamy w Interaktywny Grafiku szpitala Jana Pawła II
      </Paragraph>
      <Paragraph>
        U dołu widzą państwo kozacką grafikę z pielęgniarką a u góry pasek
        nawigacyjny
      </Paragraph>
      <Paragraph>
        Proszę z niego skorzystać gdy w końcu nabierzecie ochoty by iść do
        roboty hehe
      </Paragraph>

      <Image>
        <img src={main} alt="pielęgniarka" />
      </Image>
    </React.Fragment>
  );
}

export default Main;
