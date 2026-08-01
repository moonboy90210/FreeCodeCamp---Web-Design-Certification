function mutation([strii]) {
 for (let str of strii) {
	if (str === strii.length) {
		return true;
	} else {
		return false; 
	}

 }
}

console.log(mutation(["hello", "hey"]));