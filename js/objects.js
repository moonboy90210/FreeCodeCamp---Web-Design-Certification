let player = {
  name: {
    fName: "Adam",
    lName: "Jones",
  },
  age: 20,
  salary: "$360,000",
  position: "Power Forward",
  team: "Zuma Suns",
  contact: {
    email: "jadams12@yahoo.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" },
  ],
};
console.log(player.name.lName);
console.log(player.addresses[0].city);





let agent = {
  name: "Taz",
  age: 21,
  occupation: "web developer",
  origin: "Asgard",
  locaton: "Lagos",
};

// delete agent.age;
const { origin, locaton, ...remain } = agent;
console.log(remain);

console.log(Object.hasOwn(agent, "occupation"));
console.log(Object.hasOwn(agent, "origin"));
console.log(Object.hasOwn(agent, "level"));

console.log("name" in agent);

console.log("Name:", agent.name, "Job:", agent.occupation);
console.log(agent);
