function repeatStringNumTimes(str, size) {
  if (size <= 0) {
    return "";
  }
  let result = "";

  for (let i = 0; i < size; i++) {
	result += str;
  }
  return result;
}

let set = repeatStringNumTimes("setup", 7);
console.log(set);

// one-liner
function repeatStringNumTimes(str, size) {
  return size > 0 ? str.repeat(size) : "";
}