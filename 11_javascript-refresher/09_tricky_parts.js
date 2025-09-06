//== vs ===
console.log(5 == "5");
console.log(5 === "5");

//undefined vs null
let f;
let d = null;

console.log(f);
console.log(d);

//regular vs function
const obj = {
  name: "Francois",
  
  regular: function() {
    console.log("Regular:", this.name); 
  },
  
  arrow: () => {
    console.log("Arrow:", this.name);   
  }
};

obj.regular();
obj.arrow();

//Arrays
let array1 = [1, 2, 3];
let array2 = array1;

array2.push(4);

console.log("array1:", array1);
console.log("array2:", array2);

let array3 = [1, 2, 3];
let array4 = [...array3];

array4.push(4);

console.log("array3:", array3);
console.log("array4:", array4);