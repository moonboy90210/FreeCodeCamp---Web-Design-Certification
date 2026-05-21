let manifest = {
  containerId: 30,
  destination: "Cancun",
  weight: 250,
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
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
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
console.log(
  validateManifest({
    containerId: 68,
    destination: "Salinas",
    weight: 101,
    unit: "lb",
    hazmat: true,
  }),
);

const processManifest = (manifest) => {
  // run validation first
  const validationResult = validateManifest(manifest);

  if (Object.keys(validationResult).length === 0) {
    //if manifest is valid
    console.log(`Validation success: ${manifest.containerId}`);
    // normalize units to kg
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // ❌ Invalid manifest
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationResult);
  }
};

console.log(processManifest(manifest));
// Valid manifest
processManifest({
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true
});
// Logs:
// Validation success: 68
// Total weight: 45.45 kg

// Invalid manifest
processManifest({ destination: " cancun" });
// Logs:
// Validation error: undefined
// { containerId: "Missing", destination: "Invalid", weight: "Missing", unit: "Missing", hazmat: "Missing" }
