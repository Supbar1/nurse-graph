import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import http from "../../services/httpService";
import config from "../../services/config.json";

const Container = styled.div`
  width: min(80vw, 1100px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    /* overflow: hidden; */

    /* overflow-y: hidden; */
    /* height: 100%; */
    opacity: 0.15;
    border-radius: 3rem;
    width: calc(150vh);
  }
`;

const Main = () => {
  return (
    <Container>
      <img
        src="https://assets.contenthub.wolterskluwer.com/api/public/content/3023bc9eed3f455f9ce4c036a8e3ca71?v=43d7453f"
        alt="nurses crew"
      />
    </Container>
  );
};
export default Main;
