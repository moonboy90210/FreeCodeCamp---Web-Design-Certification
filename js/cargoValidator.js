let manifest = {
  containerId: 350,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true,
};

const normalizeUnits = (manifest) => {
  const lb_to_kg = 0.45;
  return {
    ...manifest,
    weight:
      manifest.unit === "lb"
        ? +(manifest.weight * lb_to_kg).toFixed(2)
        : manifest.weight,
    unit: manifest.unit === "lb" ? "kg" : manifest.unit,
  };
};

function validateManifest(manifest) {
  const errors = {};

  // Handle manifest itself being null/undefined
  if (manifest === null) {
    return { manifest: "Missing" };
  }
  if (manifest === undefined) {
    return { manifest: "Invalid" };
  }

  // Check containerId
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || !Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  // Check destination
  if (manifest.destination === undefined || manifest.destination === "") {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    errors.destination = "Invalid";
  } else if (manifest.destination.trim().length === 0) {
     errors.destination = "Invalid";
  }

  // Check weight
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0) {
    errors.weight = "Invalid";
  } else if (isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  // Check unit
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  // Check hazmat
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  // Return {} if valid, otherwise return errors object
  return Object.keys(errors).length === 0 ? {} : errors;
  
}


console.log(validateManifest(manifest));

// Case: only destination is whitespace
console.log(validateManifest({ destination: "  " }));
// { containerId: "Missing", destination: "Invalid", weight: "Missing", unit: "Missing", hazmat: "Missing" }

// Case: containerId is decimal
console.log(validateManifest({ containerId: 3.5 }));
// { containerId: "Invalid", destination: "Missing", weight: "Missing", unit: "Missing", hazmat: "Missing" }

// Case: fully valid manifest
console.log(validateManifest({
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true;
}));


// let processManifest = (manifest) => {
//   if (manifest.hazmat === true) {
//     return `Validation success: ${containerId}
// 		Total weight: ${normalizeUnits(manifest)} kg`;
//   } else {
//     return `Validation error: ${containerId} 
// 		${validateManifest(manifest)}`;
//   }
// };

// console.log(validateManifest({}));
// console.log(validateManifest({ containerId: -2 }));
// console.log(validateManifest({ destination: "" }));
// console.log(validateManifest({ weight: NaN }));
