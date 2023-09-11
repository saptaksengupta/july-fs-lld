
var obj = {a: 20, b: 30};
const {a, b} = {...obj};
console.log(a);
console.log(b);

const arr = [10, 20];
const [f] = [...arr];

console.log(f);


// 1. Add the elements of an existing array into a new array.

var linesToAppend = ["Appended later", "Second LIne to appened"];

var article = 
    [
        "I am the first line", 
        "Second line",
        ...linesToAppend,
        "Third Line"
];

console.log(article);

// 2. coppy array, concat array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, ...arr2]; 
// var arr3 = arr1.concat(arr2);
arr3.push(10);
console.log(arr3);
// 
function sum(a, b){
    console.log("Sum is: ", a + b);
}
sum(2, 3); // simple
var myAr = [2, 4, 6];
sum(...myAr); // spread OP

// REST OP
function sumTwo(a, b, ...numbers){
    console.log(...numbers);
    var sum = 0;
    var mul = a * b;
    for (const num of numbers) {
        sum += num;
    }
    console.log(sum, mul);
}

sumTwo(1, 3, 2,2,2, 10);


// Default param
function doPrint(name, prefix = "My name is:") {
    console.log(prefix, name);
}


