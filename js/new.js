
const userSettings = { 
  theme: "dark",
  volume: 0,
  notification: null,
  network: 'LTE',
  tracking: false,
};

let theme = userSettings.notification ?? 'tone';
console.log(theme);

// && check if both values are true 
// || check if one the values are true
// ?? displays the second value if the first is null or undefined  


let newUser = condition ? expressionIfTrue : expressionIfFalse; 




// COnditionals (IF/ELSE)============
let fName = "Taz";
let age = 25;

if (fName == age ) {
  console.log("Your name is correct");
} else {
  console.log("Incorrect name");
}

// IF/ELSE Shorthand

// condition ? expressionIfTrue : expressionIfFalse;
// const ternary = condition ? expressionTrue : expressionFalse; 

const day = "Wednesday";
const day1 = "Tuesday"

const todayDate = day !== day1 ? `yes, it's ${day}!` : `No, it's not ${day1}!`;

console.log(`${todayDate}`);

 const location = "Stevs place"
 const mallLocay = "the Mall"
  const liveLocation = location !== location ? `yes I'm at ${location}` : `No hes at ${mallLocay}`;
  console.log(liveLocation);


return;
// booleans

let isOldEnoughToDrink = false;

if (isOldEnoughToDrink) {
  console.log("You're old enough to drink");
} else {
  console.log("You're not old enough to drink");
}

console.log(10 == 10);
return;


// FCC LAB - Debug Increment and Decrement Operator Errors in a Buggy App

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);



//  FCC prefix & postfix

 let x = 10;
console.log(++x);

let a = 13;
let b = (++a);
console.log(b);

let c = 24;
let d = (c++);
console.log(d);

// ======== compound operator behaviour =========

let num = 5;
num = num + 2
// use instead
let numm = 537;
numm += 223;
console.log(numm);

let total = 30;
total *= 3;
console.log(total);

let scores = 76;
let newscores = scores -= 30;
console.log(newscores);




// FCC lab - Type coersion
const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = "8" - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = false + 22;
console.log(`0 + 22 = ${sixthResult}`);


return;

// concatenation of strings 

let firstName = "Timothy";
let lastName = "Taz";

let fullName = firstName + " " + lastName;
fullName = "I am " + fullName + ".";
console.log(fullName);

let person = {
  name: "Kube",
  age: 25,
  city: "Lagos",
};  
console.log(person.name + " is " + person.age + " years and was born in " + person.city + ".");



// ----using concat() to join variables -------
let str1 = 'Hello';
let str2 = ' The World'; 
let str3 = ' is yours!!!!!'

let result = str1.concat(str2); 
console.log(result); // "Hello  The World is yours!"

// ---- data types ------
let newNote = 1324;
let newNotes = ' is another 4 \ndigit number';

// let results = newNote + newNotes;

let results = newNote.toString().concat(newNotes);
console.log(results); // 1324 is another 4 digit number

let isAvailable = true;
// isAvailable = "The value is " + isAvailable;
console.log(isAvailable); 

let greeting = "hello";
console.log(greeting[1]); // "e"

let newGreeting = greeting[0] + greeting[3];
console.log(newGreeting); // "hl"


let stat = "many people will cashout"
let tellStat = "hello," + " " + stat;
console.log(tellStat);

let carDealer =  {
  name: "Polanco",
  occupation: "Car dealer"
}
let stati = "many people will cashout"
let tellStati = `hello, ${stati} and everyone will visit ${carDealer.name} who is a ${carDealer.occupation}.`;
console.log(tellStati);


//------------ using prompt -----------------

//  <button id="prompt-btn">Show Prompt</button>
// <p id="output"></p>




// const btn = document.getElementById("prompt-btn");
// const output = document.getElementById("output");
// btn.addEventListener("click", () => {
//   const userName = prompt("What is your name?", "Guest");
//   output.textContent = "Hello, " + userName + "!";
// });


// ---- using string search and slice -----

let phrase = "this is a phrase";
let resulter = phrase.includes("is");
console.log(resulter);

//  slice 

let resulterr = phrase.slice(-6);
console.log(resulterr) 


let phrase1 = "   this is a white space phrase sentence    "
console.log(phrase1);
let trimmedPhrase = phrase1.trim();
console.log(trimmedPhrase);


const organization = "freeCodeCamp";
console.log(organization.indexOf("f"));  


// ======== NUMBERS ======
// (+)
const num1 = 123;
const num2 = 34;
const num3 = 89;

const result1 = num1 + num2;
const result2 = num1 + num3;
const result3 = num1 + num2 + num3;

console.log(result1);

// (-)

const difference = 1473 - 874;
console.log(difference);

// (*)
const num11 = 123;
const num22 = 34;
const num33 = 89;

const result11 = num1 * num2;
const result22 = num1 * num3;
const result33 = num1 * num2 * num3;

// concatinating strings & number


const concat1 = '20' + 5;
console.log(concat1);

