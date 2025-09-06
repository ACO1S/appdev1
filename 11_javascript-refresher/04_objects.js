//aboutMe
const aboutMe = {
  name: "Francois",
  age: 20,
  course: "BSIS3A",

introduce() {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and my hobby is ${this.hobby || "still undecided"}.`);
  }
};

aboutMe.introduce();  

//HOBBY
aboutMe.hobby = "Editing";

aboutMe.introduce(); 
