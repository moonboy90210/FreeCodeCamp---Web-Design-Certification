function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    // If the next character isn't exactly +1 in sequence
    if (nextCode !== currentCode + 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  return undefined; // if no letter is missing
}   


// my first logic attempt 

function fearNotLetter(str) {
	letters = "abcdefghijklmnopqrstuvwxyz"

	for(let i = 0; i < letters.length; i++){

	  return i = 5; 
	}

}

