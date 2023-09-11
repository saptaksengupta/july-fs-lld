// species -> animal -> bird
const species = Object.create({
    type: 'species',
    speak: function() {
        console.log(`${this.type} is speaking!`);
    }
});

var animal = Object.create(species);
animal.walk = function() {
    console.log("Animal is walking!");
}

var bird = Object.create(animal);
bird.fly = function() {
    console.log("Bird is flying");
}

// console.log(bird); 
// console.log(Object.keys(bird)); // returns all the key in current object.
// console.log(Object.keys(bird.__proto__.__proto__)); // ? speak, type

for (let key in bird) {
    if (bird.hasOwnProperty(key)) {
        console.log(key);
    }
    console.log(key);
}

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};
  
function Developer(name, age, gender, id, specialization) {
  
    // Adding a new parameter
    this.specialization = specialization;
}
  
// Creating objects
let Employee1 = new Employee("Suraj", 28, "Male", 564);
let Developer1 = new Developer("Karishma", 31, "Female", 345,
    "Frontend Developer");
console.log(Employee1);
console.log(Developer1);




