const num = 9;

function factorialCalculator(no) {

	let result = 1;

	for (let i = 1; i <= no; i++) {
		let newResult = i * result;
		result = newResult;

	}
	let factorial = factorialCalculator(no);

	let resultMsg = `Factorial of ${no} is ${factorial}`;

	console.log(resultMsg);
	
}


console.log(factorialCalculator(9));