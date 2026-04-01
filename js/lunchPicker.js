let lunches = [];


function addLunchToEnd(lunches, str) {
	lunches.push(str);
	console.log(`${str} added to the end of the lunch menu.`);
	return lunches;
}
console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(lunches, "Chicken Tender"));

console.log(addLunchToEnd(lunches, "Burger"));
console.log(lunches);


function addLunchToStart(lunches, str) {
	lunches.unshift(str);
	console.log(`${str} added to the start of the lunch menu.`);
	return lunches;
}
console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(lunches = ['Sushi', 'Tacos', 'Chicken Tender', 'Burger'], "Pizza") );
console.log(lunches);


function removeLastLunch(lunches) {
	const pop = lunches.pop();
	pop ? console.log(`${pop} removed from the end of the lunch menu.`) : console.log("No lunches to remove");
	return lunches;
}
console.log(removeLastLunch(lunches));
console.log(lunches);


function removeFirstLunch(lunches) {
	const popped = lunches.shift();
	popped ? console.log(`${popped} removed from the start of the lunch menu.`) : console.log("No lunches to remove.");
	return lunches;
}
console.log(removeFirstLunch(lunches));
console.log(lunches);



function getRandomLunch(lunches) {
	if (lunches.length === 0) {
		console.log("No lunches available.");
		return;
	}
	const randomNum = Math.floor(Math.random() * lunches.length);
	const randomLunch = lunches[randomNum];
	console.log(`Randomly selected lunch: ${randomLunch}`);
}

console.log(getRandomLunch(lunches));

function showLunchMenu(lunches) {
	const menu = lunches.length > 0 ? console.log(`Menu items:${lunches}`) : console.log("The menu is empty");
return menu;
}
