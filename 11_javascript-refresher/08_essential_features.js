//HOBBIES
const hobbies = ["Eating", "Watching", "Editing"];
hobbies.map(hobby => console.log("hobbies:", hobby));

//Destructuring
const student = { name: "Francois", age: 20 };
const { name, age } = student;
console.log("Name:", name);
console.log("Age:", age);


//SPREAD OPPERATOR
const numbers = [1, 2, 3]
const moreNumbers = [...numbers, 4, 5]
console.log(moreNumbers)