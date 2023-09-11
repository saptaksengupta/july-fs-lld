function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHi = function() {
        console.log(`Hi I am person ${this.name}, my age is ${this.age}`);
    }
}

var perOne = new Person('Saptak', 50);
var perTwo = new Person('Scaler', 100);

console.log(perOne.sayHi());
console.log(perTwo.sayHi());

