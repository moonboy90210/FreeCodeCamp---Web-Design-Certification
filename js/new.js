

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
