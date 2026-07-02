function getVowelCount(sentence) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let vowel = "Apples are tasty fruits";
const vowelCount = getVowelCount(vowel);

console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  let count = 0;
  let vowels = "aeiouAEIOU";
//   const consonant = !vowels;

  for (let char of sentence) {
    if (/[a-z]/i.test(char)) {
      if (!vowels.includes(char)) {
        count++;
      }
    }
  }
  return count;
}

let conso = "Coding is fun";
let conso1 = "Hello World!";
const consoCount = getConsonantCount(conso1);

console.log(`Consonant Count: ${consoCount}`);

// console.log(getConsonantCount(conso1));


function getPunctuationCount(sentence) {
	let count= 0
	for (let char of sentence){
		if (char !== " " && !/[a-z]/i.test(char)) {
			count ++;
		}
	}
	return count
}
console.log(getPunctuationCount("What????!"));


const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");

console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
	
}