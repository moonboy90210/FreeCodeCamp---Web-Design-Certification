const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 45,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe1Name = recipe1.name;
const recipe2CookingTime = recipe2.cookingTime;
const recipe3Ingredients = recipe3.ingredients;

console.log(recipe1Name);
console.log(recipe2CookingTime);
console.log(recipe3Ingredients);

// console.log(recipe1.nam);
console.log(recipes.push(recipe1));
console.log(recipes.push(recipe2));
console.log(recipes.push(recipe3));
console.log(recipes);

const getTotalIngredients = (ingredients) => {
  return ingredients.length;
};

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}



const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);
recipe1.totalIngredients = recipe1TotalIngredients;
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);
recipe1.difficultyLevel = recipe1DifficultyLevel;
// Check values
console.log(recipe1.totalIngredients);
console.log(recipe1.difficultyLevel);


const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
console.log(recipe2TotalIngredients);
recipe2.totalIngredients = recipe2TotalIngredients;
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
console.log(recipe2DifficultyLevel);
recipe2.difficultyLevel = recipe2DifficultyLevel;

const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe3TotalIngredients);
recipe3.totalIngredients = recipe3TotalIngredients;

const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe3DifficultyLevel);
recipe3.difficultyLevel = recipe3DifficultyLevel;


// Assume you have an array of recipes like [recipe1, recipe2, recipe3, ...]
const recipes = [recipe1, recipe2, recipe3]; 

for (const recipe of recipes) {
  // Set totalIngredients using the helper function
  recipe.totalIngredients = getTotalIngredients(recipe.ingredients);

  // Set difficultyLevel using the helper function
  recipe.difficultyLevel = getDifficultyLevel(recipe.cookingTime);

  // Optional: log results to confirm
  console.log(`Recipe ${recipe.name}`);
  console.log(`Total ingredients: ${recipe.totalIngredients}`);
  console.log(`Difficulty level: ${recipe.difficultyLevel}`);
}


console.log(recipes);


console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);


