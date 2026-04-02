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
	pop ? console.log(`${pop} removed from the end of the lunch menu.`) : console.log("No lunches to remove.");
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
	return randomLunch;
}
console.log(getRandomLunch(lunches));


function showLunchMenu(lunches) {
	lunches.length > 0 ? console.log(`Menu items: ${lunches.join(", ")}`) : console.log("The menu is empty.");
return lunches;
}
console.log(showLunchMenu(lunches));

// =============== SIMPLE TEXT INTERFACE USING NODE.JS ==================

const readline = require("readline");

let lunches = [];

function addLunchToEnd(str) {
    lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
}

function addLunchToStart(str) {
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
}

function removeLastLunch() {
    const removed = lunches.pop();
    if (removed) {
        console.log(`${removed} removed from the end of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
}

function removeFirstLunch() {
    const removed = lunches.shift();
    if (removed) {
        console.log(`${removed} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
}

function getRandomLunch() {
    if (lunches.length === 0) {
        console.log("No lunches available.");
        return;
    }
    const randomNum = Math.floor(Math.random() * lunches.length);
    console.log(`Randomly selected lunch: ${lunches[randomNum]}`);
}

function showLunchMenu() {
    if (lunches.length > 0) {
        console.log(`Menu items: ${lunches.join(", ")}`);
    } else {
        console.log("The menu is empty.");
    }
}

// Interactive menu
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showOptions() {
    console.log("\n--- Lunch Menu Program ---");
    console.log("1. Add lunch to end");
    console.log("2. Add lunch to start");
    console.log("3. Remove last lunch");
    console.log("4. Remove first lunch");
    console.log("5. Show lunch menu");
    console.log("6. Get random lunch");
    console.log("7. Exit");
    rl.question("Choose an option: ", handleChoice);
}

function handleChoice(choice) {
    switch (choice) {
        case "1":
            rl.question("Enter lunch item: ", item => {
                addLunchToEnd(item);
                showOptions();
            });
            break;
        case "2":
            rl.question("Enter lunch item: ", item => {
                addLunchToStart(item);
                showOptions();
            });
            break;
        case "3":
            removeLastLunch();
            showOptions();
            break;
        case "4":
            removeFirstLunch();
            showOptions();
            break;
        case "5":
            showLunchMenu();
            showOptions();
            break;
        case "6":
            getRandomLunch();
            showOptions();
            break;
        case "7":
            console.log("Goodbye!");
            rl.close();
            break;
        default:
            console.log("Invalid choice. Try again.");
            showOptions();
    }
}

showOptions();

