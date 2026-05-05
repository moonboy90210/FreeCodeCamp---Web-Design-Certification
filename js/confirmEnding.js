function confirmEnding(str, trgt) {
	return str.slice(str.length - trgt.length) === trgt;
}
console.log(confirmEnding("BAstiaz", "az"));


const calculateArea = (length, width) => {
	const area = length * width;
	return ` The area of the rectangle is ${area} square units.`;
}

console.log(calculateArea(10,2));

const calculateTotal = (amount, taxRate = 0.05) => {
  const total = amount + (amount * taxRate);
  return `The total amount including tax is $${total.toFixed(2)}.`;
};

console.log(calculateTotal(100));

function exampleFunction() {
  return "Hello";
  return "World!";
};
console.log(exampleFunction()); 