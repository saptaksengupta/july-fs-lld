var obj = {
    a: 10
}

function testFunction(param) {
    console.log("the value of object var is: ", this.a);
    console.log("Value of param is", param);
}

// Polyfill of call.
// myFunc.call(obj, 10, 20);

// functionName.myCall
Function.prototype.myCall = function (obj, ...args) {
    obj.funToCall = this; // instance of function on top of which it is called .
    obj.funToCall(...args);
}

// testFunction.myCall(obj, 100); // calling my polyfill

// apply
Function.prototype.myApply = function(obj, args) {
    obj.funRef = this;
    obj.funRef(...args);
}

// var binded = myFunc.myBIind(obj); 

// binded(10, 20);
// Bind 
Function.prototype.myBind = function(obj) {
    obj.fnRef = this;
    return function(...args) {
        // call that actual function
        obj.fnRef(...args);
    }
}

var binded = testFunction.myBind(obj); 

binded(100);
console.log(binded);




