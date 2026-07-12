const squad = [];
const 	firstAstronaut = { id: 1,
	name: "Andy",
	role: "Commander",
	isEVAEligible: true,
	priority: 3,
}

function addCrewMember(crew, astronaut) {
 for (let id in crew) {
 if (crew === firstAstronaut.id) {
  console.log(`Duplicate ID: ${firstAstronaut.id}`)
  return;
 }
}
}