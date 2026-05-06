const programmingLanguages = ["JavaScript", "Python", "C++"];
const newList = programmingLanguages.concat("Perl");
const newStz = programmingLanguages.push("fish")

console.log(newList); // ["JavaScript", "Python", "C++", "Perl"]
console.log(programmingLanguages); 





const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// const add = names.length();
// console.log(add);
let included = names.includes("Par");
console.log(included);
let copyArray = [...names];
copyArray[2] = ("Falcon");
console.log(copyArray);


const finder = names.indexOf("Eagle");
console.log(finder);

const spliced = names.splice(2, 3);
console.log(spliced);
console.log(names);

let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1); 
}

console.log(fruits); // ["apple", "banana", "mango"]

let arrayer = [1, 2, 3, 4, 5];
arrayer.splice(0);
console.log(arrayer); 

