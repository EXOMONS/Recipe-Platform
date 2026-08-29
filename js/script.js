// Ethiopian Recipe Platform
// Week 3 - JavaScript

const recipes = [
  {
    name: "Doro Wat",
    category: "Chicken",
    difficulty: "Medium",
    cookingTime: 60,
  },
  {
    name: "Shiro",
    category: "Vegetarian",
    difficulty: "Easy",
    cookingTime: 40,
  },
  {
    name: "Tibs",
    category: "Meat",
    difficulty: "Easy",
    cookingTime: 30,
  },
];

console.log("All recipes:", recipes);

// Validate recipe name
function validateRecipeName(name) {
  if (name.trim() === "") {
    return false;
  }

  return true;
}

console.log("Valid name:", validateRecipeName("Doro Wat"));
console.log("Empty name:", validateRecipeName(""));
console.log("Spaces only:", validateRecipeName("   "));

// Loop through recipes
for (let recipe of recipes) {
  console.log(recipe.name + " - " + recipe.difficulty);
}

// Calculate total cooking time
function calculateTotalTime(preparationTime, cookingTime) {
  return preparationTime + cookingTime;
}

console.log("Total time:", calculateTotalTime(20, 40));
console.log("Total time:", calculateTotalTime(30, 60));
console.log("Total time:", calculateTotalTime(15, 45));

// Search recipes
function searchRecipes(searchTerm) {
  const term = searchTerm.trim().toLowerCase();

  if (term === "") {
    return [];
  }

  return recipes.filter(function (recipe) {
    return recipe.name.toLowerCase().includes(term);
  });
}

console.log("Search Doro:", searchRecipes("doro"));
console.log("Search Shiro:", searchRecipes("shiro"));
console.log("Search Pizza:", searchRecipes("pizza"));
console.log("Empty search:", searchRecipes(""));
console.log("Capital letters:", searchRecipes("DORO"));
