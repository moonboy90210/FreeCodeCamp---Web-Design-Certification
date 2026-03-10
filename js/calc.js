console.log("Sum");

function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

console.log("Difference");

function calculateDifference(num1, num2) {
  return num1 - num2;
}
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

console.log("Product");

function calculateProduct(num1, num2) {
  return num1 * num2;
}
console.log(calculateProduct(13, 5));
console.log(calculateProduct(12, 1));
console.log(calculateProduct(17, 9));

console.log("Quotient");

function calculateQuotient(num1, num2) {
  // if (num2 === 0) {
  // 	return("Error: Division by zero");
  // } else {
  // 	return num1 / num2;
  // }
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
console.log(calculateQuotient(7, 0));
console.log(calculateQuotient(300, 10));
console.log(calculateQuotient(18, 9));

console.log("Exponents");

function calculateSquare(num) {
  return num ** 2;
}
console.log(calculateSquare(2));
console.log(calculateSquare(9));
console.log(calculateSquare(17));

console.log("Square Root");

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
