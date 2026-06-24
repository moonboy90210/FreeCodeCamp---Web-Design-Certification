for (let i = 0; i <= 10; i+=3) {
	const element = i;
	// console.log(element);
}


const numbers = [2, 4, 5, 9, 11, 14, 15, 19, 20];
for (const num of numbers)  {
	console.log(num);
}

const people = [
  { name: 'Bobby', age: 30, team: 'Bucks' },
  { name: 'Shai', age: 25, team: 'OKC' },
  { name: 'Kuminga', age: 40, team: 'Lakers' }
];

for (const person of people) {
  console.log(`${person.name.toUpperCase()} is ${person.age} years old and plays for the ${person.team}.`);
}