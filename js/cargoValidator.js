
  let cargo = {
	containerId: 50,
	destination: "Cancun",
	weight: 29,
	unit: "kg",
	hazmat: true
}


const normalizeUnits = (manifest) => {
	if (cargo.unit === "lb") {
		return cargo.weight * 0.453592;
	} else {
		return cargo.weight;
	}

}

function validateManifest(manifest) {
	if (manifest != null) {
		return {};
	} else if (manifest === undefined) {
		return "Invalid";
	} else if (manifest === null) {
		return "Missing";
	}
}
console.log(validateManifest(cargo.unit));

 let processManifest = (manifest) => {
	if (manifest.hazmat === true) {
		return `Validation success: ${containerId}
		Total weight: ${normalizeUnits(manifest)} kg`;
	} else {
		return `Validation error: ${containerId} 
		${validateManifest(manifest)}`; 
	}
 }