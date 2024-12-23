"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//const interface = "Audio";
//const private = 534;

function logger() {
  console.log("My name is Melissa");
}

// Call, Run, Invoke Function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');



//Function declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(1998);

//Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1998);
console.log(age1, age2);


//Arrow function
const calAge3 = (birthYear) => 2024 - birthYear;
const age3 = calAge3(1998)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1998, "Jeromy"));
console.log(yearsUntilRetirement(2000, "Melissa"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples 
  and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));


const calAge = function(birthYear){
  return 2024 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if(retirement>0){
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎉`)
    return -1;
  }

}

console.log(yearsUntilRetirement(1998, 'Jeromy'));
console.log(yearsUntilRetirement(1950, 'Melissa'));


//Coding Challenge 1
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3)/3
}

//const calcAverage = (a,b,c) => (a + b + c)/3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

// const scoreDolphins = calcAverage(85,54,41);
// const scoreKoalas = calcAverage(23,34,27);

function checkWinner (avgDolphins, avgKoalas){
  if (avgDolphins>= 2*avgKoalas){
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
      return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
  } else if(avgKoalas>= 2*avgDolphins){
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
      return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
  }
  else {
      console.log(`No team wins...`);
      return `No team wins...`
  }
}
checkWinner(scoreDolphins, scoreKoalas);

const friend1 ="Wina";
const friend2 ="Hawwa";
const friend3 ="Pei Yee";

const friends = ['Wina', 'Hawwa', 'Pei Yee'];
console.log(friends);

const y = new Array(1991, 1982, 2008, 2020);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[2] = 'Amir';
console.log(friends)
//friends = ['Bob', 'Alice'];
const firstName = 'Melissa';
const melissa = [firstName, 'Boudville', 2024 - 2000, 'teacher', friends];
console.log(melissa);
console.log(melissa.length);

//Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), 
calcAge(years[years.length - 1])];
console.log(ages)

// adds element
const friends = ['Wina', 'Hawwa', 'Pei Yee'];
const newLength = friends.push('Jason');  //end of array
console.log(friends)
console.log(newLength)

friends.unshift('Jin'); //start of array
console.log(friends);

//Remove element
friends.pop(); //last of array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first 
console.log(friends)

//index
console.log(friends.indexOf('Hawwa'))
console.log(friends.indexOf('Melissa'))

//boolean
friends.push(23);
console.log(friends.includes('Hawwa')) 
console.log(friends.includes('Melissa'))
console.log(friends.includes(23))

if (friends.includes('Danny')) {
  console.log('You have a friend called Danny')
}
else {
  console.log('You do not have friends, have you forgotten?')
}


//Coding Challenge 2

Your tasks:

Write a function calcTip that takes any bill value as an input and 
returns the corresponding tip, calculated based on the rules 
above (you can check out the code from the first tip calculator 
challenge if you need to). Use the function type you like the most. 
Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing 
the test data below.

Create an array called tips containing the tip value for each bill, 
calculated from the function you created before.

BONUS: Create an array totals containing the total values, 
so the bill + tip.

TEST DATA: 125, 555, and 44.


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips [0], bills[1] + tips [1], 
bills[2] + tips [2]];

console.log(
  `The bill was ${bills}, the tip was ${tips}, and the total value ${totals}`
);

const melArray = [
  'Melissa',
  'Boudville',
  2024 - 2000,
  'programmer', 
  ['Wina', 'Hawwa', 'Pei Yee']
];

const mel = {
  firstName: 'Melissa',
  lastName: 'Boudville',
  age: 2024 - 2000,
  job: 'programmer',
  friends: ['Wina', 'Hawwa', 'Pei Yee']
}

console.log(mel)

console.log(mel.lastName);
console.log(mel['lastName']);

const nameKey = 'Name';
console.log(mel['first' + nameKey]);
console.log(mel['last' + nameKey]);

//console.log(mel.'last' + nameKey);

const interestedIn = prompt(`What do you want to know about Mel?
Choose between firstName, lastName, age, job, and friends`);
  
  if (mel[interestedIn]) {
    console.log(mel[interestedIn]);
  } else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`)
  }

  mel.location = 'Malaysia';
  mel['twitter'] = '@demonicmeloric'
  console.log(mel);

// Challenge
// Print this "Melissa has 3 friends, and her best friend is called Wina"

console.log(`${mel.firstName} has ${mel.friends.length} friends, and her best friend is called ${mel.friends[0]}`)

const mel = {
  firstName: "Melissa",
  lastName: "Boudville",
  birthYear: 2000,
  job: "programmer",
  friends: ["Wina", "Hawwa", "Pei Yee"],
  hasDriversLicense: true,

  // calAge: function(birthYear) {
  //   return 2024 - birthYear;
  // }

  // calAge: function() {
  //   // console.log(this)
  //   return 2024 - this.birthYear;
  // }
  

  calAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
    
  getSummary: function(){
    return `${this.firstName} is a ${this.calAge()}-year old ${this.job}, and she ${this.hasDriversLicense ? `has a` : `doesn't have`} driver's license`
  },

};

console.log(mel.calAge());

console.log(mel.age);
console.log(mel.age);
console.log(mel.age);
// console.log(mel['calAge'](2000));

//Challenge
//"Melissa is a 24-year old programmer, and she has a driver's license."
console.log(mel.getSummary());


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi)
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${
      john.fullName
    }'s BMI (${john.bmi})`
  );
else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${
      mark.fullName
    }'s BMI (${mark.bmi})`
  );
}


// console.log("Lifting weights repetition 1🏋️‍♂️");
// console.log("Lifting weights repetition 2🏋️‍♂️");
// console.log("Lifting weights repetition 3🏋️‍♂️");
// console.log("Lifting weights repetition 4🏋️‍♂️");
// console.log("Lifting weights repetition 5🏋️‍♂️");
// console.log("Lifting weights repetition 6🏋️‍♂️");
// console.log("Lifting weights repetition 7🏋️‍♂️");
// console.log("Lifting weights repetition 8🏋️‍♂️");
// console.log("Lifting weights repetition 9🏋️‍♂️");
// console.log("Lifting weights repetition 10🏋️‍♂️");

//for loop keeps running while condition is TRUE
for(let rep = 1; rep <=10; rep++){
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}


const melArray = [
  'Melissa',
  'Boudville',
  2024 - 2000,
  'programmer', 
  ['Wina', 'Hawwa', 'Pei Yee'],
  true
];

const types = [];


for(let i = 0; i < melArray.length; i++){
  console.log(melArray[i], typeof melArray[i])

  //Filling types array
  //types[i] = typeof melArray[i];
  types.push(typeof melArray[i])
}

console.log(types)

const years = [1968, 1994, 1996, 1998, 2000];
const ages =[];

for (let i = 0; i < years.length; i++){
  ages.push(2024 - years[i])
}

console.log(ages)

//continue and break
console.log('--- ONLY STRING ---')
for (let i = 0; i < melArray.length; i++){
  if (typeof melArray[i] != 'string') continue;

  console.log(melArray[i], typeof melArray[i])
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < melArray.length; i++){
  if (typeof melArray[i] === 'number') break;

  console.log(melArray[i], typeof melArray[i])
}

const melArray = [
  "Melissa",
  "Boudville",
  2024 - 2000,
  "programmer",
  ["Wina", "Hawwa", "Pei Yee"],
  true,
];

//0, 1, ..., 4
//4, 3, ..., 0

for (let i = melArray.length - 1; i >= 0; i--) {
  console.log(i, melArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}


let rep = 1;
while (rep <= 10) {
  //console.log(`WHILE: Lifting weight repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
  */

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips, totals);

const calAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calAverage(totals));
