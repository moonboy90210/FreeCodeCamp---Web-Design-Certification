
let oldData = ["folder", "zone", "inline", "param:", "32 Eastern"];
let removed = oldData.splice(1, 3);
let adjusted = oldData.push("neglet", "port 18:02", "network:");

console.log(oldData);
console.log(removed);
console.log(adjusted);

let digits = [1, 9, 9, 7, 2, 3, 6, 8];
let copy = [...digits];
copy.splice(1, 3, 5, 4, 6);
console.log(digits);
console.log(copy);


function calculateTotal(rate, amount) {

  let calc = rate - amount;

  if (calc >= rate) {
    return `price is greater than ${rate}`;
  } else if (calc == rate) {
    return `price is greater equals ${rate}`;
  } else if (calc <= rate) {
    return `price is less than ${rate}`;
  } else {
    return `no price inputed`;
  }
}

console.log(calculateTotal(230,19));


let count = 2 * 2;  

const ans = count === 5  ? `answer is ${count}` : `no available answer`;

console.log(ans);  
