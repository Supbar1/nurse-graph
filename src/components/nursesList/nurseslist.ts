import { date } from "joi";

export const allNurses = () => {
  const today = new Date();
  const Stoday = new Date();

  return {
    nurses: [
      {
        id: 101,
        name: "Izabela Kukier",
        courses: { bloodTransfusion: true, RKO: false, EKG: true },
        selfEmplointment: false,
        workDays: [{ today }],
      },
      {
        id: 102,
        name: "Grażyna Bąk",
        courses: { bloodTransfusion: true, RKO: true, EKG: false },
        selfEmplointment: true,
        workDays: {},
      },
      {
        id: 103,
        name: "Wojtek Zdun",
        courses: { bloodTransfusion: true, RKO: false, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 104,
        name: "Wioleta Skiendziul",
        courses: { bloodTransfusion: true, RKO: true, EKG: false },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 105,
        name: "Beata Wojczulis",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 106,
        name: "Bożena Brzęczyszczykiewicz",
        courses: { bloodTransfusion: true, RKO: false, EKG: true },
        selfEmplointment: true,
        workDays: {},
      },
      {
        id: 107,
        name: "Marzena Bobrownik",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 108,
        name: "Kleofas Kumok",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: true,
        workDays: {},
      },
      {
        id: 109,
        name: "Karina Kruk",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 110,
        name: "Fiona Shreka",
        courses: { bloodTransfusion: true, RKO: true, EKG: false },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 111,
        name: "Paulina Sikorek",
        courses: { bloodTransfusion: false, RKO: false, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 112,
        name: "Renata Dombir",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: true,
        workDays: {},
      },
      {
        id: 113,
        name: "Krzysztofa Zagórska",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 114,
        name: "Eleonora Rozeubaum",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
      {
        id: 115,
        name: "Wiktoria Shmit",
        courses: { bloodTransfusion: false, RKO: false, EKG: true },
        selfEmplointment: false,
        workDays: {},
      },
    ],
  };
};
