function mutation(strii) {

	const first = strii[0].toLowerCase();
	const second = strii[1].toLowerCase();
 for (let char of second) {
	if (first.indexOf(char) === -1) {
		return false; 
	}
 }
 return true; 
}

console.log(mutation(["hello", "helLo"]));