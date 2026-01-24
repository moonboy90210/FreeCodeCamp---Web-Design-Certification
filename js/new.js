

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
let newNotes = ' is another 4 digit number';

// let results = newNote + newNotes;

let results = newNote.toString().concat(newNotes);
console.log(results); // 1324 is another 4 digit number

let isAvailable = true;
// isAvailable = "The value is " + isAvailable;
console.log(isAvailable); 



