// ref based

var foo = {
    a: 100, //
    b: 200, // 
    c: [10, 20, 30, [1, 2, 3]],
    d: {
        foo: "bar",
        test: "some nested value"
    },
    test: function() {
      console.log("Hello");  
    }
}

// var bar = foo; // new object // shallow copy
// var bar = Object.assign({}, foo);
// var bar = {...foo};
// var bar = JSON.parse(JSON.stringify(foo));

var deepClone = function(value) { // [1, 2, 3]
    if (
        typeof value === 'string' || 
        typeof value === 'boolean'||
        typeof value === 'number' ||
        typeof value === 'function'
        ) {
            return value;
        } else if(Array.isArray(value)) {
            return value.map(val => deepClone(val)); // deepClone([1])
        } else {
            return Object.keys(value).reduce((acc, key)=> {
                acc[key] = deepClone(value[key]);
                return acc;
            }, {});
        }
        
}
var bar = deepClone(foo);
// bar.a = 500;
// bar.c.push(40);

console.log(foo);
console.log(bar);






