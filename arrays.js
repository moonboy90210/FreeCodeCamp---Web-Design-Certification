

let str = "hel lolo ck1 920";
let charArray = str.split(" ");
let charArray2 = str.split("");
let charArray3 = str.split("-");

console.log(str); // hel lolo ck1 920
console.log(charArray); // [ 'hel', 'lolo', 'ck1', '920' ]
console.log(charArray2); // ['h', 'e', 'l', ' ', 'l', 'o', 'l', 'o', ' ', 'c', 'k', '1', ' ', '9', '2', '0']
console.log(charArray3); //[ 'hel lolo ck1 920' ]

let newStr = charArray.reverse();
console.log(newStr); // [ '920', 'ck1', 'lolo', 'hel' ]

let strReverse = newStr.join("");
console.log(strReverse); // 920ck1lolohel

let word = "hello";
let chars = word.split("");
chars.reverse();
console.log(chars.join("-"));

let str3 = "coding";
let reversed = str3.split("").reverse().join("");
console.log(reversed);

// let fruits = ["Banana", "Pineapple", "Watermelon", "Cherry", "Grapes", "Mango", "orange"];
// fruits[3] = "Strawberry";
return; 

console.log(fruits[6]);
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);

//Array methods push(), pop(), shift(), unshift(), splice()


// push() adds one or more element to the end of an array and returns the new length of the array.
const newFruits = fruits.push("cashew");
console.log(newFruits);
console.log(fruits);

// unshift() adds one or more element to the start of an array and returns the new length of the array.
let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3] 
console.log(newLength); // 3

// pop() removes the last element from an array and returns that element
const lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

return;

// shift() removes the first element from an array and returns that element
// let colors = ["red", "green", "blue"];
// let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"

// array destructuring 

let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"

// accessing by index 
// const fruits = ["apple", "banana", "orange"];

// const first = fruits[0];
// const second = fruits[1];
// const third = fruits[2];

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"

// skip elements you're not interested in by using commas.
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"

// the rest syntax, denoted by three dots (...). It allows you to capture the remaining elements of an array that haven’t been destructured into a new array. 
// let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
// let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]

