let fruits = ["Banana", "Pineapple", "Watermelon", "Cherry", "Grapes", "Mango", "orange"];
fruits[3] = "Strawberry";

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

// pop() removes the last element from an array and returns that element
const lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

// unshift() adds one or more element to the start of an array and returns the new length of the array.
let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3] 
console.log(newLength); // 3

// shift() removes the first element from an array and returns that element
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"

