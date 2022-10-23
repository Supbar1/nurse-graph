import styled from "styled-components";
import NewNursesList from "../../NewNursesList";
import { useState, useEffect } from "react";
import axios from "axios";
import http from "../../services/httpService";
import config from "../../services/config.json";
import { useNurseContext } from "../../NurseContext";
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
  picture?: string;
  id?: number;
  workDays?: WorkDayType[];
}
//Number(element_name)
const Main = () => {
  // const [nurses, setNurses] = useState<NurseType[]>([] as NurseType[]);
  const { nurses } = useNurseContext();

  const apiNurses = async (): Promise<any> => {
    let container: any = [];
    for (let i = 0; i <= 3; i++) {
      const { data } = await http.get(config.apiNurses);
      container.push(...data.results);
    }
    let nurse = [];
    for (let item of container) {
      const nurseObject = {
        firstName: item.name.first,
        lastName: item.name.last,
        picture: item.picture.thumbnail,
        id: item.location.street.number,
        workDays: [],
      };
      console.log(nurseObject);
      nurse.push(nurseObject);
    }
    // setNurses(nurse);
  };

  useEffect(() => {
    apiNurses();
  }, []);

  return (
    <Container>
      {nurses &&
        nurses.map((item: any, index: number) => (
          <div key={index}>
            {item.firstName} &nbsp; {item.lastName}&nbsp;
            <img alt="sorry" src={item.picture} />
          </div>
        ))}
    </Container>
  );
};
export default Main;
