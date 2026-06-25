// for loop 
for (let i = 0; i <= 10; i += 3) {
  const element = i;
  // console.log(element);
}

const numbers = [2, 4, 5, 9, 11, 14, 15, 19, 20];
for (const num of numbers) {
  console.log(num);
}

const people = [
  { name: "Bobby", age: 30, team: "Bucks" },
  { name: "Shai", age: 25, team: "OKC" },
  { name: "Kuminga", age: 40, team: "Lakers" },
  { name: "John", age: 30, address: { street: "123 Main St", city: "Anytown", state: "CA"}, team: "Lakers" },
];

// for...of (used to iterate over the values of an iterable object, such as an array)
for (const person of people) {
  console.log(
    `${person.name.toUpperCase()} is ${person.age} years old and plays for the ${person.team}.`,
  );
  console.log(person.name);
}
// for...in (not normally used for arrays, but can be used to iterate over the indices of an array)
for (const person in people) {
  console.log(
    `${people[person].name.toUpperCase()} is ${people[person].age} years old and plays for the ${people[person].team}.`,
  );
}

function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

for (const prop in people) {
  if (isObject(people[prop])) {
    for (const nestedProp in people[prop]) {
      console.log(people[prop][nestedProp]);
    }
  } else {
    console.log(people[prop]);
  }
};

const text = "break";
console.log(text.toUpperCase());

// while loop 
let counter = 0;
while (counter < 10) {
	console.log(counter);
	counter++;

}