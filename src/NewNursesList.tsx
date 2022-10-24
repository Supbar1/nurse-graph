// import React, { useEffect, useState } from "react";
// import axios from "axios";
import config from "./services/config.json";
import http from "./services/httpService";

const fetchRandomData = async () => {
  // return axios
  //   .get("https:/randomuser.me/api")
  //   .then(({ data }) => {
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
};
const getFullUserName = (userInfo: any) => {
  const {
    name: { first, last },
  } = userInfo;
  console.log(first);
  return `${first} ${last}`;
};

const NewNursesList = () => {
  // const [userInfos, setUserInfos] = useState([]);

  // const [randomNurses, setRandomNurses] = useState([]);

  // const apiNurses = async (): Promise<any> => {
  //   const { data } = await http.get(config.apiNurses);
  //   const { results } = data;
  //   console.log(...results);

  //   let container: any = [];
  //   for (let i = 0; i <= 3; i++) {
  //     fetchRandomData().then(({ results }) => {
  //       container.push(...results);
  //     });
  //     setRandomNurses(container);
  //   }
  // };

  // useEffect(() => {
  //   apiNurses();

  //   fetchRandomData().then((randomData) => {
      //   setRandomUserData(JSON.stringify(randomData) || "No user Data");
  //     setUserInfos(randomData.results);
  //   });
  // }, []);
  // return randomNurses;
};
export default NewNursesList;
