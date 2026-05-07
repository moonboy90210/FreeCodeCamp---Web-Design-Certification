let agent = { 
	name: "Taz",
	age: 21,
	occupation: "web developer",
	origin: "Asgard",
	locaton: "Lagos"
};

// delete agent.age;
const {origin, locaton, ...remain} = agent; 

console.log(remain); 

console.log(agent.name, agent.occupation);
console.log(agent);