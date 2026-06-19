const user1 = {
  name: {
    fName: "Timothy",
    lName: "Taz",
  },
   sayHello: function() {
    return "Hello, my name is " + this.name;
  },
  age: 21,
  occupation: "Basketballer",
  origin: "Asgard",
  location: "Lagos",
  position: "Point Guard",
}

user1.team = "Hurtman Panthers";
user1.contact = {
  email: "timothy.taz@example.com",
  phone: {
	home: "123-456-7890",
	work: "098-765-4321",
  },
};
user1.contact.phone.work = "070-820-6115"
console.log(user1.contact.phone);
delete user1.origin;
console.log(user1.hasOwnProperty("origin"));
console.log(user1);
console.log(Object.hasOwn(user1, "origin"));


console.log(Object.hasOwn(settings, "darkMode")); // true (value is false, but exists)
console.log(Object.hasOwn(settings, "fontSize")); // true (value is 0, but exists)
console.log(Object.hasOwn(settings, "theme"));    // false (property was never added)

// Using if() directly is unsafe for falsy values!
if (settings.darkMode) {
  console.log("Dark mode on"); // Does NOT print — misleading!
}

// Object.hasOwn() is the safe way
if (user1.hasOwnProperty("darkMode")) {
  console.log("darkMode exists, value is:", user1.darkMode); // darkMode exists, value is: false
}