var obj = {
    a: 20,
    sayHi: function( ){
        console.log("Hello!");
    }
};

// var obj2 = new Object();
// obj2.a = "asdsad";

//callable object
function sum() {
    console.log("asdas");
}

// console.log(sum.__proto__ === Function.prototype); 
// console.log(sum.__proto__.__proto__ === Object.prototype);

// object subtype
// var arr = [1, 2, 3];
// console.dir(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); 
// console.log(arr.__proto__.__proto__ === Object.prototype);

var obj1 = {
    name: "Saptak"
};

var obj2 = Object.create(obj1);
obj2.age = 40;
console.log(obj2);
console.log(obj2.name); // saptak

console.log(obj2.__proto__); // parent
console.log(obj2.__proto__.__proto__ === Object.prototype); // true
console.log(obj1.isPrototypeOf(obj2)); // true

// Bottom - up


