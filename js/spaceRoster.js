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

return updatedCrew;
}

let updatedSquad = swapCrewMembers(squad, 2, 5);

console.log(updatedSquad);

function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length; i++) {
    for (let j = 0; j <crew.length - 1 - i; j++) {
if (crew[j].priority < crew[j + 1].priority) {
    const temp = crew[j];
    crew[j] = crew[j + 1];
    crew[j + 1] = temp
}
    }
  }
}

function getEVAReadyCrew(crew) {
  const eligible = [];
  for (let astronaut of crew) {
    if (astronaut.isEVAEligible === true) {
      eligible.push(astronaut)
    }
  }
 sortByPriorityDescending(eligible);
    return eligible; 
}

 const EVAReadySquad = getEVAReadyCrew(updatedSquad);
 for (let member of EVAReadySquad) {
  console.log(member.name);
 }

 function chunkCrew(crew, size) {
  if (size < 1) {
   console.log("Chunk size must be >= 1"); 
  return;
  }
  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
     chunks.push(crew.slice(i, i + size));
  }
  return chunks;
 }

 const EVAChunks = chunkCrew(EVAReadySquad, 3);

 for (let i = 0; i < EVAChunks.length; i++) {
  console.log(`Chunk ${i+1}:`);
  for (let j = 0; j < EVAChunks[i].length; j++) {
    console.log(EVAChunks[i][j].name);
  }
 }
 // same loop using for...of
 let chunkNumber = 1;
for (let chunk of EVAChunks) {
  console.log(`Chunk ${chunkNumber}:`);
  for (let member of chunk) {
    console.log(member.name);
  }
  chunkNumber++;
}

function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted);


  for (let astronaut of sorted) {
   console.log(astronaut.name);
  }

}

printCrewSummary(updatedSquad);