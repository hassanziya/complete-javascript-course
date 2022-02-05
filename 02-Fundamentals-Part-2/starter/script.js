/* "use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");

const private = "Audio"; */

/* function logger() {
  console.log("my Name is Hassan");
}

logger();
logger();
logger(); */

/* function juiceProccessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}



console.log(juiceProccessor(5, 0));
console.log(juiceProccessor(2, 4));

console.log(Number("77777823")); */

/* console.log(calAge1(1999));
function calAge1(birthYear) {
  return 2022 - birthYear;
}

const calAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log("hi" + calAge2(1999)); */

/* const yearUntillRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntillRetirement(1999, "Hassan"));
console.log(yearUntillRetirement(1991, "Bob")); */
//
//
//

/* function cutFruitPieces(Fruit) {
  return Fruit * 4;
}
function juiceProccessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(juiceProccessor(2, 4)); */

// Challenge ---1

/* const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    return "avgDolphins " + avgDolphins;
  } else if (avgKoalas > avgDolphins * 2) {
    return "avgKoalas  " + avgKoalas;
  } else {
    return "Draw";
  }
};

const aveDolphins = calcAverage(44, 23, 71);
const aveKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(aveDolphins, aveKoalas));

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas)); */

// Challenge ---- 2 -----
/* const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalBills); */
//
//
//
// Challenge ---- 3 ----
/* mark = {
  fullName: "Mark Miller",
  mass: 78,
  hieght: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.hieght ** 2;
    return this.bmi;
  },
};

john = {
  fullName: "John Smith",
  mass: 110,
  hieght: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.hieght ** 2;
    return this.bmi;
  },
};
mark.calBMI();
john.calBMI();
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi.toFixed(2)}) is greater than ${
      john.fullName
    }'s BMI(${john.bmi.toFixed(2)})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI(${john.bmi.toFixed(2)}) is greater than ${
      mark.fullName
    }'s BMI(${mark.bmi.toFixed(2)})`
  );
} */

//
//
//
//
// get the average of an array of numbers
/* const average = function (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(average(numbers)); */

// Return the current time in a 12 hour format
// const getTime = function () {
//   const date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   const ampm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
//   return time;
// };

// console.log(getTime());

/* const jonas = [
  "jonas",
  "asjkdnj",
  2037 - 1991,
  "teacher",
  ["computer", "programming", "javascript"],
  true,
];
const type = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);

  type.push(typeof jonas[i]);
}
console.log(type); */

/* const years = [1991, 2000, 2005, 2010, 2015, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages); */

// backwards loop
/* const jonas = [
  "jonas",
  "asjkdnj",
  2037 - 1991,
  "teacher",
  ["computer", "programming", "javascript"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
} */

/* for (let i = 0; i < 3; i++) {
  console.log(`------------ Starting Loop ${i} ------------`);
  for (let j = 0; j < 5; j++) {
    console.log(`Exercise ${i}: Lifting the wieght repetitions ${j}`);
  }
} */

/* let counter = true;
while (counter) {
  // generate random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  if (randomNumber === 6) {
    console.log("You rolled a 6");
    counter = false;
  }
} */

// Coding Challenge #4

/* const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totalBills.push(bills[i] + tips[i]);
} */
// print bills and tips to console log for each bill
/* for (let i = 0; i < bills.length; i++) {
  console.log(`Bill: ${bills[i]}`);
  console.log(`Tip: ${tips[i]}`);
  console.log(`Total: ${totalBills[i]}`);
  console.log("");
} */
// print below to console log on different lines
/* console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total Bills: ${totalBills}`);

// create a function that takes an array of numbers and returns average of all numbers
const average = function (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};
console.log(average(bills).toFixed(2));
console.log(average(tips).toFixed(2));
console.log(average(totalBills).toFixed(2)); */
