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

const getTotalIngredients = (recipe) => {
  return recipe.ingredients.length;
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



let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);
recipe1.totalIngredients = recipe1TotalIngredients;
let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);
recipe1.difficultyLevel = recipe1DifficultyLevel;
// Check values
console.log(recipe1.totalIngredients);
console.log(recipe1.difficultyLevel);


const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
console.log(recipe2TotalIngredients);
console.log(recipe2DifficultyLevel);
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;
const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe3TotalIngredients);
console.log(recipe3DifficultyLevel);
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;


console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

getotalIngredients(recipe1);
getDifficultyLevel(recipe1);

console.log(getTotalIngredients(recipe1));
console.log(getTotalIngredients(recipe2));
console.log(getTotalIngredients(recipe3));
