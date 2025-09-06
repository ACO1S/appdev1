//GREET
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Francois"));

//SQUARE
const square = num => num * num;
console.log(square(10));

//CALCULATOR
const calculator = (a, b) => ({
  sum: a + b,
  product: a * b
});

const result = calculator(5, 5);
console.log("Sum:", result.sum);
console.log("Product:", result.product);