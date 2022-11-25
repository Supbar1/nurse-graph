import { WorkScheduleType, useNurseContext } from "./NurseContext";

const Hours = ({ workSchedule }: WorkScheduleType, id?: number) => {
  // const {workSchedule} =useNurseContext();
  let hours = 0;
  //   console.log(workSchedule);

  //   console.log("hours");
  for (let element in workSchedule) {
    for (let day in workSchedule[element]) {
      const singleDay: any = Object.values(workSchedule[element][day])[0][0];
      for (let element in singleDay) {
        if (singleDay[element].find((nurseId: number) => nurseId === id))
          hours += 12;
      }
    }
  }
  return hours;
};

export default Hours;
