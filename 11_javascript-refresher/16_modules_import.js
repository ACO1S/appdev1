const { greeting, aboutMe } = require('./15_modules_export.js');

console.log(greeting(aboutMe.name));
console.log(`My name is ${aboutMe.name} and I am ${aboutMe.age} years old.`);