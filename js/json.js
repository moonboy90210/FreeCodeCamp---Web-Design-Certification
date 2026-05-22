const user = {
	name: "Perliks Panna",
	age: 29,
	occupation: "Software engineer",
	isAdmin: false,
	 ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
}

const json2String = JSON.stringify(user); 
console.log(json2String);
console.log(JSON.stringify(user, ["name", "occupation"]));

const jsonString = '{"name":"Perliks Panna","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString, null, 2);
console.log(userObject);

// object destructuring
const {name, age, occupation: userJob, isAdmin} = user;
console.log(isAdmin);
const ingre = user.ingredients.flour;
console.log(ingre);
const { ingredients: { flour } } = user;

console.log(flour); // "2 cups"
