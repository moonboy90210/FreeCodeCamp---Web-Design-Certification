const squad = [];
const 	firstAstronaut = { id: 1,
	name: "Andy",
	role: "Commander",
	isEVAEligible: true,
	priority: 3,
}
const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
	{ id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 }
];


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


for (let i = 0; i < remainingCrew.length; i++ ) {
	addCrewMember(squad, remainingCrew[i]);
	
}





