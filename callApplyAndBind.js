var emp1 = {
    basePay: 100,
    variablepay: 50
}

var emp2 = {
    basePay: 1000,
    variablepay: 500
}

var obj = {
    num: 100
};

var myFunc = function(arg1, arg2) {
    // `this` will be dynamic
    // var salary = this.basePay + this.variablepay;
    console.log(this.num + arg1 + arg2);
}

// bind
// returning the entire function
// not executing.
// 1. context
// currying functions
var binded = myFunc.bind(obj); 
console.log(binded);
// Now in binded we have the entire function stored. 
binded(10, 20);
binded(40, 50);

// Call
// 1. context, 2. params
// myFunc.call(obj, 10, 20); // executing that function 

//Apply
// 1. context, 2. array of params
// myFunc.apply(obj, resp); // executing that function 

// myFunc.call(emp1);
// myFunc.call(emp2);


var myFunc = function(arg1, arg2) {
    // `this` will be dynamic
    // var salary = this.basePay + this.variablepay;
    console.log(this.num + arg1 + arg2);
}


obj = {
    name: "Saptak",
    age: "28",
    work: "SDE"
}

// greeting : morning
// prefix: night
function info(greeting, prefix)
{
console.log(greeting, prefix, this.name, "age and profession is", this.age, this.work);
}
info.apply(obj, ["Morning", "", ""]);
info.call(obj, "morning", "", "", );
