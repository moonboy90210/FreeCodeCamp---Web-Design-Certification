


const fortune1 = "Be cautious of your new neighbors."
const fortune2 = "The weather will be nice tomorrow."
const fortune3 = "It would be wise to avoid the color red today."
const fortune4 = "You will find a new hobby soon."
const fortune5 = "Your cat will look very cuddly today."

const min = 1;
const max = 7;

const randomNumber = Math.floor(Math.random() * max) + min;
console.log(`Random number is ${randomNumber}`)

// const selectedFortune = randomNumber == 1 ? fortune1 : "try again";
// console.log(selectedFortune);

let selectedFortune;
let tryAgain = 'Not today, better luck next time'; 

if (randomNumber == 1) {
	selectedFortune = fortune1;
} else if (randomNumber == 2) {
	selectedFortune = fortune2;
} else if (randomNumber == 3) {
	selectedFortune = fortune3;
} else if (randomNumber == 4) {
	selectedFortune = fortune4;
} else if (randomNumber == 5) {
	selectedFortune = fortune5;
  } else if (randomNumber > 5) {
    selectedFortune = tryAgain;
  }



  console.log(selectedFortune);

