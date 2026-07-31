// const num = 5;

function factorialCalculator(num) {

	let result = 1;

	for (let i = 1; i <= num; i++) {
		let newResult = i * result;
		result = newResult;
	}	
	return result;
}
	let factorial = factorialCalculator(num);

	let resultMsg = `Factorial of ${num} is ${factorial}`;

	console.log(resultMsg);

console.log(factorialCalculator(5)); 