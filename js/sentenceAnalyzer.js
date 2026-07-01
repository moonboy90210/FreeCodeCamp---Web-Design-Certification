function getVowelCount(sentence) {
	let vowels = "aeiouAEIOU";
	let count = 0;
    for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
	return count 
}

let vowel = "Apples are tasty fruits"
const vowelCount = getVowelCount(vowel);

console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
	let count = 0
	let vowels = "aeiouAEIOU";

	for (let char of sentence) {
		if (!vowels.includes(char)) {
		count++;
		}
	}
	return count;
}