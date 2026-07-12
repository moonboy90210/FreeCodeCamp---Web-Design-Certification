const squad = [];
const 	firstAstronaut = { id: 1,
	name: "Andy",
	role: "Commander",
	isEVAEligible: true,
	priority: 3,
}

function addCrewMember(crew, astronaut) {
 for (let astronaut of crew) {
 if (astronaut.id === firstAstronaut.id) {
  console.log(`Duplicate ID: ${firstAstronaut.id}`);
  return;
 }
}
 crew.push(astronaut);
console.log(`Added ${astronaut.name} as ${astronaut.role}`);

}

console.log(addCrewMember(squad, firstAstronaut));
