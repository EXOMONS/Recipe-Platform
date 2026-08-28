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

console.log(recipes);

function validateRecipeName(name) {
  if (name === "") {
    return false;
  }

  return true;
}

console.log(validateRecipeName("Doro Wat"));
console.log(validateRecipeName(""));

for (let recipe of recipes) {
  console.log(recipe.name + " - " + recipe.difficulty);
}

function calculateTotalTime(preparationTime, cookingTime) {
  return preparationTime + cookingTime;
}

console.log(calculateTotalTime(20, 40));
console.log(calculateTotalTime(30, 60));
console.log(calculateTotalTime(15, 45));

function searchRecipes(searchTerm) {
  return recipes.filter(function (recipe) {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

console.log(searchRecipes("doro"));
console.log(searchRecipes("shiro"));
