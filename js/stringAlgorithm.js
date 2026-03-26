 function truncateString(str1, num) {
if (str1.length > num) {
	  return str1.slice(0, num) + "...";
	} else {
	  return str1;
	}

}

let str1 = "This is a string";
let num = 44;
let result = truncateString(str1, num);
console.log(result);   