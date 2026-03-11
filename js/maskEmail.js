function booWho(num) {
  return typeof num === "boolean";

  // return num === Boolean ? true : false;
}
console.log(booWho());

function maskEmail(email) {
  let [user, domain] = email.split("@");

  if(user.length <= 2) {
	return user + "@" + domain;
  }

  let maskedUser = user[0] + "*".repeat(user.length - 2) + user[user.length - 1];
  
  return maskedUser + "@" + domain;
}
// let email = "apple.pie@example.com";
let email = "zumarock19@gmail.com"

console.log(maskEmail(email));
