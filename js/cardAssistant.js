let count = 0;


function cardCounter(card) {
	if (card >= 2 && card<=10 ) {
	return card = Number;
	} else {
	return card = "string";
	}
}

	
function updatecount(card) {
	
	if (count += card >= 2 && card <=6) {
		count += 1;
	} else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
		 count -= 1;
	} else {
		count +=0;
	}
}


updatecount(3)
console.log(count ? "Bet" : "Hold";);
console.log(cardCounter(12));
console.log(count);

// count += card >= 2 && card <= 6 ? 1 : card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ? -1 : 0;
// 	return count;