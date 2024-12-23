/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jeromy");
console.log(26);

let firstName = "Jeromy";
let middleName = "Kho";
let lastName = "Chung Ming";

console.log(firstName + " " + middleName + " " + lastName);

let jeromy_kho = "JK";
let $function = 27;

let person = "jeromy";
let PI = 3.1415;

let myFirstJob = "Mobile Frontend";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

//Values and Variables
let country = "Malaysia";
let continent = "Southeast Asian";
let population = 33.92;

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof false);
console.log(typeof javascriptIsFun);
console.log(typeof 26);
console.log(typeof "Jeromy");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 26;
age = 27;

const birthYear = 1998;
// birthYear = 2000;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Boudville";
console.log(lastName);

//let, const and var
let language = "Malay";
const isIsland = false;
isIsland = true;

//Math operators
const currentYear = 2024;
const ageJeromy = currentYear - 1998;
const ageMelissa = currentYear - 2000;
console.log(ageJeromy, ageMelissa);

console.log(ageJeromy * 2, ageJeromy / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Jeromy";
const middleName = "Kho";
const lastName = "Chung Ming";
console.log(firstName + " " + middleName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJeromy > ageMelissa); // >, <, >=, <=
console.log(ageMelissa >= 24);

const isFullAge = ageMelissa >= 18;

console.log(currentYear - 1998 > currentYear - 2000);

//Basic Operator
let country = "Malaysia";
let continent = "Southeast Asian";
let language = "Malay";
let population = 33.92;
console.log(population / 2);
console.log(population + 1);
const Finland = 6;
console.log(population > Finland);
const avgPopulation = 33;
console.log(population < avgPopulation);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

const currentYear = 2024;
const ageJeromy = currentYear - 1998;
const ageMelissa = currentYear - 2000;

console.log(currentYear - 1998 > currentYear - 2000);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y); // 10, 10

const avgAge = (ageJeromy + ageMelissa) / 2;
console.log(ageJeromy, ageMelissa, avgAge);

//Coding Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const firstName = "Jeromy";
const job = "programmer";
const birthYear = "1998";
const currentYear = "2024";
const jeromy =
  "I'm" +
  firstName +
  ", a" +
  (currentYear - birthYear) +
  "years old" +
  job +
  "!";
console.log(jeromy);

const jeromyNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(jeromyNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(
  `String
  multiple
  lines`
);

const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;

  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🚗`);
}

//isOldEnough && console.log("Sarah can start driving license 🚗");

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//const massMark = 95;
//const heightMark = 1.89;
//const massJohn = 85;
//const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//Coding Challenge #2
if (BMIMark > BMIJohn)
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
else console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);

const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jeromy"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old ");
console.log(`I am 23 years old`);
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; //'11'
n = n - 1; // 11 - 1
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jeromy"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 2;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNdefined");
}

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 27) {
  console.log("Cool! 27 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 27 or 7 or 9");
}

if (favourite !== 27) console.log("Why not 27?");

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//Coding Challenge #3
// const scoreDolphins = (99 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// }

// Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy");
// }

//Bonus 2
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("Nobody win the trophy");
}

const day = "monday";

switch (day) {
  case "monday": //day === 'monday'
    console.log("Kiss Jeromy");
    console.log("Hug Jeromy");
    break;
  case "tuesday":
    console.log("Hold Jeromy's hand");
    break;
  case "wednesday":
  case "thursday":
    console.log("Go on a date with Jeromy!");
    break;
  case "friday":
    console.log("Wait for Jeromy to fetch me");
    console.log("Go to Jeromy's house");
    break;
  case "saturday":
  case "sunday":
    console.log("Hang out with Baby Jeromy");
    break;
  default:
    console.log("Couldn't meet Jeromy baby :C");
}

if (day === "monday") {
  console.log("Kiss Jeromy");
  console.log("Hug Jeromy");
} else if (day === "tuesday") {
  console.log("Hold Jeromy's hand");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Go on a date with Jeromy!");
} else if (day === "friday") {
  console.log("Wait for Jeromy to fetch me");
  console.log("Go to Jeromy's house");
} else if (day === "saturday" || day === "sunday") {
  console.log("Hang out with Baby Jeromy");
} else {
  console.log("Couldn't meet Jeromy baby :C");
}

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jeromy";
console.log(`I'm ${2024 - 1998} years old ${me}`);

const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 🥤`);

const drink = age >= 18 ? "wine 🍷" : "water 🥤";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 🥤";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🥤"}`);
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

const Wina = true;
console.log(`${Wina ? `Get Bf` : `Not Get Bf`}`);

const Melissa = false;
console.log(`${Melissa ? `Get dick` : `Not Get dick`}`);



