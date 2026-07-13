const squad = [];
const 	firstAstronaut = { id: 1,
	name: "Andy",
	role: "Commander",
	isEVAEligible: true,
	priority: 3,
}
const remainingCrew = 
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 };


function addCrewMember(crew, astronaut) {
 for (let member of crew) {
 if (member.id === astronaut.id) {
  console.log(`Duplicate ID: ${atronaut.id}`);
  return;
 }
}
 crew.push(astronaut);
console.log(`Added ${astronaut.name} as ${astronaut.role}`);

}

addCrewMember(squad, firstAstronaut);
addCrewMember(squad, remainingCrew); 



