const date = new Date();

date.setUTCDate(1);
let firstDayIndex = date.getDay() - 1;

let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

let lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();

let previousDays = [];
for (let x = firstDayIndex; x > 0; x--) {
  previousDays.push(prevLastDay - x + 1);
}

let days = [];
for (let i = 1; i <= lastDay; i++) {
  days.push(i);
}

let nextMonthDays = [];
for (let y = 1; y <= 7 - lastDayIndex; y++) {
  nextMonthDays.push(y);
}
const renderCalendar = () => {
  date.setUTCDate(1);
  let firstDayIndex = date.getDay() - 1;

  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  let previousDays = [];
  for (let x = firstDayIndex; x > 0; x--) {
    previousDays.push(prevLastDay - x + 1);
  }

  let days = [];
  for (let i = 1; i <= lastDay; i++) {
    days.push(i);
  }

  let nextMonthDays = [];
  for (let y = 1; y <= 7 - lastDayIndex; y++) {
    nextMonthDays.push(y);
  }
};
export function getDays() {
  return days;
}
export function getPrevDays() {
  return previousDays;
}
export function getNextDays() {
  return nextMonthDays;
}

// import { monthSend } from './prevMonth';
// import PrevMonth from './prevMonth';
// let ostatecznosc = 7 + monthSend();
// let date = new Date();
// export function decrementMonth () {date.setMonth(date.getMonth()-1)};
// let poslady = date.setMonth(date.getMonth()-monthSend());

// export function armagedon() {
//   return ostatecznosc;
// }
// export function sendNudes() {
//   return poslady;
// }

// function dupeczka() {

//   console.log(poslady, "Czemu nie widze posladow?");
//   console.log(monthSend(), "Czemu nie widze nudeskow?");
// };
// dupeczka();

// let firstDayIndex = date.getDay() -1;

// let prevLastDay = new Date(date.getFullYear(),
// date.getMonth(), 0).getDate();
// let lastDay = new Date(date.getFullYear(),
// date.getMonth() +1 ,0).getDate();

// let lastDayIndex = new Date(date.getFullYear(),
// date.getMonth() +1, 0).getDay();

// let previousDays = [];
// for ( let x = firstDayIndex; x > 0; x--) {
//   previousDays.push(prevLastDay - x+1);
// };

// let days = [];
// for(let i = 1; i <= lastDay; i++){
//   days.push(i);
// };

// let nextMonthDays = [];
// for (let y= 1; y <= 7 - lastDayIndex; y++){
//   nextMonthDays.push(y);
// };
// export function getDays() {
//   return days;
// };
// export function getPrevDays() {
//   return previousDays;
// };
// export function getNextDays() {
//   return nextMonthDays;
// };
// export function getMovie(id) {
//   return movies.find(m => m._id === id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
