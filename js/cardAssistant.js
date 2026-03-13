let count = 0;

// function cardCounter(card) {
// 	if (card >= 2 && card<=10 ) {
// 	return card = Number;
// 	} else {
// 	return card = "string";
// 	}
// }

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
	 // Low cards increase the count
    count += 1;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
	 // High cards decrease the count
    count -= 1;
  } else {
	    // Cards 7, 8, 9 do not affect the count
    count += 0;
  }
  return count > 0 ? count + " Bet" : count + " Hold";
}

console.log(cardCounter("2"));
console.log(cardCounter(3));
console.log(cardCounter(7));
console.log(cardCounter("K"));
console.log(cardCounter("A"));

// count += card >= 2 && card <= 6 ? 1 : card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ? -1 : 0;
// 	return count;
