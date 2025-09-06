//FAVORITE FOOD
let favoriteFoods = ["Sisig", "Pizza", "Buldak"];

favoriteFoods.push("Fries");

favoriteFoods.shift();

console.log("My Favorite Foods:");
for (const food of favoriteFoods) {
  console.log(food);
}

// .map()

const likedFoods = favoriteFoods.map(food => `I like ${food}`);
console.log(likedFoods);