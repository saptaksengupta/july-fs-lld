var name = "Saptak";
function greetMe() {
    console.log("Hello ", name); // ?
}
name = "Scaler";
greetMe();

let f = function() {
    let i = 10;  
    let j = 20;
    return () => {
        console.log(i);
    }
}
var someVar = f();

console.dir(someVar);
console.dir(someVar());

// When a variable is being used from it's outer/parent scope 
// then it forms a closure


// 
function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        return count;
    }
}

const inner = outerFunction(); // call this outer func
const inner2 = outerFunction();

console.log(inner()); // 1
console.log(inner()); // 2

console.log(inner2()); // 1
console.log(inner2()); // 2

// build a calculator.
var counter = (function(){
    var privateCounter = 0;
    function changeBy(value) {
        privateCounter += value;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        displayValue: function() {
            return privateCounter;
        }
    }
})();
console.log(counter.displayValue());
counter.increment(); //
counter.increment(); //
counter.increment(); //
console.log(counter.displayValue());
counter.decrement(); // 
console.log(counter.displayValue());

// create a sum function sum(1)(2);
// var addSixWith = sum(6);
// addSixWith(10);


// create a memoize function;
// var memoizedFunc = memo(func);
// memoizedFunc(1, 2);

function memoized(func) {
    var existingFuncParams = {};
    
    return function(...args) {
        var self = this;
        var paramsAsString = args.join(',');
        // if value is in storage return it 
        // otherwise execute the fun and store it and then return 
        if (!existingFuncParams[paramsAsString]) {
            existingFuncParams[paramsAsString] = func.apply(self, [...args]);    
        }
        return existingFuncParams[paramsAsString];
    }
}


function doConsicutiveSum(val) {
    let sum = 0;
    for(let i = 0; i < val; i++) {
        sum += i;
    }
    return sum;
}

let memoizedFunction = memoized(doConsicutiveSum);


memoizedFunction(10000);
memoizedFunction(500);
memoizedFunction(10000);












