//ONE PARAMETER
const greet = (name) => {
  return "Hello, " + name;
};
console.log(greet("Francois"));

//IMPLICIT
const square = n => n * n;
console.log(square(5));

//NO PARAMETERS
const sayHi = () => {
  console.log("Hi!");
};
sayHi();

