const squad = [];
const firstAstronaut = {id: 1,  name: "Andy",  role: "Commander",  isEVAEligible: true,  priority: 3};


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

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4},
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Anu", role: "Tower", isEVAEligible: true, priority: 6 },
];

for (let astronaut of remainingCrew) {
  addCrewMember(squad, astronaut);
}


function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || toIndex < 0 || fromIndex >= crew.length || toIndex >= crew.length) {
    console.log("Invalid crew indices");
    return;
  }

const updatedCrew = crew.slice();
updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

for (let member of updatedCrew) {
  console.log(member.name);
}
return updatedCrew;
}

let updatedSquad = swapCrewMembers(squad, 2, 5);

console.log(updatedSquad);
