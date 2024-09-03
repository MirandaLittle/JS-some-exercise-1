'use strict';

// JS find() exercise

const guestList = require('./mockData.js').data;

// Your code here

const foundWomen = guestList.some(({ gender }) => gender === "Female");
const foundWomen2 = guestList.some(person => person.gender === "Female"); //same as above
const foundBirthYear = guestList.some(({ birth_year }) => birth_year === 1992);
console.log(foundBirthYear)
console.log(foundWomen)
console.log(foundWomen2)