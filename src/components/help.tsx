interface ThisNursesDataType {
  nursesData: NursesDataType;
}

type NursesDataType = {
  nurses: NursesType[];
};

type NursesType = {
  _id: string;
  name: string;
  courses: { bloodTransfusion: boolean; RKO: boolean; EKG: boolean };
  selfEmplointment: boolean;
};

const NursesList = (props: ThisNursesDataType) => {
  const { nurses } = props.nursesData;
  return (
    <div className="flex">
      <div className="scroll">
        <div className="col-2">
          <div className="col ">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Imie i Nazwisko</th>
                  <th scope="col">Specka</th>
                  <th scope="col">Dni</th>
                  <th scope="col">Noce</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {nurses.map((nurse) => (
                  <tr key={nurse._id}>
                    <td>{nurse.name}</td>
                    <td className="line-break">
                      {nurse.courses.RKO === true ? "RKO " : ""}
                      {nurse.courses.bloodTransfusion === true
                        ? "Transfuzja "
                        : ""}
                      {nurse.courses.EKG === true ? "EKG " : ""}
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <button
                        // onClick={() => changeUrl()}
                        className="btn btn-info"
                      >
                        Grafik
                      </button>
                    </td>
                    <td>
                      <button
                        // onClick={() => handleDelete(nurse)}
                        className="btn btn-danger"
                      >
                        Usuń Pielęgniarkę
                      </button>
                    </td>
                  </tr>
                ))}
                ;
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function List() {
  const data: NursesDataType = {
    nurses: [
      {
        _id: "5b21ca3eeb7f6fbccd471815",
        name: "Izabela Kukier",
        courses: { bloodTransfusion: true, RKO: false, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd472003",
        name: "Grażyna Bąk",
        courses: { bloodTransfusion: true, RKO: true, EKG: false },
        selfEmplointment: true,
      },
      {
        _id: "5b21ca3eeb7f6fbccd479645",
        name: "Wojtek Zdun",
        courses: { bloodTransfusion: true, RKO: false, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd499115",
        name: "Wioleta Skiendziul",
        courses: { bloodTransfusion: true, RKO: true, EKG: false },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471007",
        name: "Beata Wojczulis",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471552",
        name: "Bożena Brzęczyszczykiewicz",
        courses: { bloodTransfusion: true, RKO: false, EKG: true },
        selfEmplointment: true,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471665",
        name: "Marzena Bobrownik",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471998",
        name: "Kleofas Kumok",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: true,
      },
      {
        _id: "5b21ca3eeb7f6fbccd448615",
        name: "Karina Kruk",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471934",
        name: "Fiona Shreka",
        courses: { bloodTransfusion: true, RKO: true, EKG: false },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471756",
        name: "Paulina Sikorek",
        courses: { bloodTransfusion: false, RKO: false, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471119",
        name: "Renata Dombir",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: true,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471473",
        name: "Krzysztofa Zagórska",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471957",
        name: "Eleonora Rozeubaum",
        courses: { bloodTransfusion: true, RKO: true, EKG: true },
        selfEmplointment: false,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471635",
        name: "Wiktoria Shmit",
        courses: { bloodTransfusion: false, RKO: false, EKG: true },
        selfEmplointment: false,
      },
    ],
  };
  return (
    <div>
      <NursesList nursesData={data} />
    </div>
  );
}
