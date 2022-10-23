import styled from "styled-components";
import NewNursesList from "../../NewNursesList";
import { useState, useEffect } from "react";
import axios from "axios";
import http from "../../services/httpService";
import config from "../../services/config.json";
const Container = styled.div`
  width: min(60vw, 850px);
`;
const fetchRandomData = async () => {
  return axios
    .get("https:/randomuser.me/api")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
interface NameType {
  title: string;
  first: string;
  last: string;
}
interface WorkDayType {
  day: number;
  month: number;
  shift: string;
}
interface NurseType {
  firstName?: string;
  lastName?: string;
  // name: NameType;
  picture?: string;
  id?: number;
  workDays?: WorkDayType[];
}
//Number(element_name)
const Main = () => {
  const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);

  const apiNurses = async (): Promise<any> => {
    let container: any = [];
    for (let i = 0; i <= 3; i++) {
      const { data } = await http.get(config.apiNurses);
      const { results } = data;

      // const
      container.push(...results);

      // fetchRandomData().then(({ results }) => {
      // });
    }
    let nurse = [];
    for (let item of container) {
      const nurseName = item.name.first;
      const nurseSurname = item.name.last;
      const picture = item.picture.thumbnail;
      console.log(picture);
      const nurseObject = { firstName: nurseName, lastName: nurseSurname };
      // console.log(nurseObject);
      nurse.push(nurseObject);
    }
    setNurses(nurse);
  };

  useEffect(() => {
    apiNurses();
  }, []);

  return (
    <Container>
      <button onClick={() => console.log(nurses)}>Button</button>
      {/* {nurses && JSON.stringify(nurses)} */}
      {nurses &&
        nurses.map((item: any, index: number) => (
          <div key={index}>
            {item.name}
            {/* {item.name.last}{" "} */}
            {/* <img alt="sorry" src={item.picture.large} /> */}
          </div>
        ))}
    </Container>
  );
};
export default Main;
