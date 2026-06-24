const user1 = {
	"pages": 932,
  name: {
    fName: "Timothy",
    lName: "Taz",
	"surname": "Taz",
	
  },
   sayHello: function() {
    return "Hello, my name is " + this.name;
  },
  age: 21,
  occupation: "Basketballer",
  origin: "Asgard",
  location: "Lagos",
  position: "Point Guard", 
  2344: {
   name: "Rilo Kiley",
   nickname: "lilRilo",
  }
}

user1.team = "Hurtman Panthers";
user1.contact = {
  email: "timothy.taz@example.com",
  phone: {
	home: "123-456-7890",
	work: "098-765-4321",
  },
};
user1.contact.phone.work = "070-820-6115"; 

console.log(user1.contact.phone);
delete user1.origin;
console.log(user1.hasOwnProperty("origin"));
console.log(user1);
console.log(Object.hasOwn(user1, "origin"));


console.log(Object.hasOwn(user1, "darkMode")); // true (value is false, but exists)
console.log(Object.hasOwn(user1, "fontSize")); // true (value is 0, but exists)
console.log(Object.hasOwn(user1, "theme"));    // false (property was never added)



// Object.hasOwn() is the safe way
if (user1.hasOwnProperty("darkMode")) {
  console.log("darkMode exists, value is:", user1.darkMode); // darkMode exists, value is: false
} else {
	console.log(`darkMode does not exist`);
}
 console.log(user1.name.surname); 