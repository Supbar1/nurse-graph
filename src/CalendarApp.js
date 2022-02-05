import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";
import MorningButton from "./components/morningbutton";
import NightButton from "./components/nightbutton";
// import Calendar from "./components/calendar";
import NavBar from "./components/navBar";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const locales = {
  "en-US": require("date-fns/locale/en-Us"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacatio",
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
];

function App() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccesor="start"
        endAccesor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default App;

// <main className="container">
//   <NavBar />
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="calendar" element={<Calendar />} />
//       <Route path="table" element={<Table />} />
//     </Routes>
//   </BrowserRouter>
// </main>
