
  let cargo = {
	containerId: 68,
	destination: "Salinas",
	weight: 101,
	unit: "lb",
	hazmat: true
}


const normalizeUnits = (manifest) => {
	const lb_to_kg = 0.45;
  return {
    ...manifest,
    weight: manifest.unit === "lb" ? +(manifest.weight * lb_to_kg).toFixed(2) : manifest.weight,
    unit: manifest.unit === "lb" ? "kg" : manifest.unit
  };
}

function validateManifest(manifest) {
  const errors = {};
// return {...manifest,};
  // Check if manifest is missing entirely
  if (manifest === null) {
    return { manifest: "Missing" };
  }
  if (manifest === undefined) {
    return { manifest: "Invalid" };
  }

  // Validate required properties
  if (manifest.containerId == null) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number") {
    errors.containerId = "Invalid";
  }

  if (!manifest.destination) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    errors.destination = "Invalid";
  }

  if (manifest.weight == null) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  if (!manifest.unit) {
    errors.unit = "Missing";
  } else if (!["lb", "kg"].includes(manifest.unit)) {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat == null) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  // Return {} if no errors, otherwise return errors object
  return Object.keys(errors).length === 0 ? {} : errors;
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

 console.log(validateManifest({}));
 console.log(validateManifest({containerId: -2}));
 console.log(validateManifest({destination: ""}));
 console.log(validateManifest({weight: NaN}));
