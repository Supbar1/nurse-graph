import React, { Component } from 'react';

const List = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Izabela Kukier",
    courses: { bloodTransfusion: true, RKO: false, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd472003",
    name: "Grażyna Bąk",
    courses: { bloodTransfusion: true, RKO: true, EKG: false  },
    selfEmplointment: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd479645",
    name: "Wojtek Zdun",
    courses: { bloodTransfusion: true, RKO: false, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd499115",
    name: "Wioleta Skiendziul",
    courses: { bloodTransfusion: true, RKO: true, EKG: false  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471007",
    name: "Beata Wojczulis",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471552",
    name: "Bożena Brzęczyszczykiewicz",
    courses: { bloodTransfusion: true, RKO: false, EKG: true  },
    selfEmplointment: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471665",
    name: "Marzena Bobrownik",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471998",
    name: "Kleofas Kumok",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd448615",
    name: "Karina Kruk",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471934",
    name: "Fiona Shreka",
    courses: { bloodTransfusion: true, RKO: true, EKG: false  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471756",
    name: "Paulina Sikorek",
    courses: { bloodTransfusion: false, RKO: false, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471119",
    name: "Renata Dombir",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471473",
    name: "Krzysztofa Zagórska",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471957",
    name: "Eleonora Rozeubaum",
    courses: { bloodTransfusion: true, RKO: true, EKG: true  },
    selfEmplointment: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471635",
    name: "Wiktoria Shmit",
    courses: { bloodTransfusion: false, RKO: false, EKG: true  },
    selfEmplointment: false
  },
];

export function getList() {
  return List;
}

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
