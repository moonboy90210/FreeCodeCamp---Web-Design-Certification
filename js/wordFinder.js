const sentence = "The quick brown fox jumped over the lazy dog";

function findLongestWordLength(str) {

	const words = str.split(" ");

	let longest = 0;

 for (let i = 0; i < words.length; i++) {
	if (words[i].length > longest) {
		longest = words[i].length;
	}
 }
return longest;

}

console.log(findLongestWordLength(sentence));