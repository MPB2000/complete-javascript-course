// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const calAge = birthYear => 2037 - birthYear;

console.log(calAge(2000));

//PROBLEM
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 0, 13, 17, 15, 14, 8, 5];

//1) Understanding the problem
//What is the temp amplitude? Answer: difference between the highest and lowest temp
//How to get max and min temp from array?
//What's a sensor error? And what to do?

//2)Breaking into sub-problem
//-How to ignore errors?
//-Find min value in temp array
//-Find max value in temp array
//-Subtract min from max(amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
//Function should now receive 2 arrays of temps

//1)Understanding the problem
//-With 2 array, should the function run twice? No, just merge two arrays

//2)Breaking up into sub-problems
//Merge arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
    const measurement ={
        type: 'temp',
        unit: 'celsius',
        // C) Fix bug
        value: prompt('Degrees celsius: ')

        }

        // B) Find bug
        console.log(measurement);
        console.table(measurement);
        // console.log(measurement.value);
        // console.warn(measurement.value);
        // console.error(measurement.value);

    const kelvin = Number(measurement.value) + 273;
    return kelvin;
}

// A) Identify the bug
console.log(measureKelvin());