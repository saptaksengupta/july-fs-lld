// // Map 
// // Filter
// // reduce 
// // find

// const addFive = function(value, index){
//     return value + 1;    
// }

// // const res = [1,3,4,5,6].map(addFive); // taking a cb and iterating over array and doing that op

// Array.prototype.myMap = function(cb) {
//     // iterate over the array
//     const res = [];
//     for(var i = 0; i < this.length; i++) {
//         res.push(cb(this[i], i));
//     }
//     return res;
// }

// console.log([1,3,4,5,6].myMap(addFive));

// Filter
// const isOdd = function(value){
//     return value % 2 !== 0;
// };

// const isEven = function(value) {
//     return value % 2 ===0;
// };

// const odd = [1, 5, 6, 17, 18, 39, 57].filter(isOdd);
// const even = [1, 5, 6, 17, 18, 39, 57].filter(isEven);

// console.log(odd);
// console.log(even);

// Array.prototype.myFilter = function(cb) {
//     const res = [];
//     for (var i = 0; i < this.length; i++) {
//         if (cb(this[i])){
//             res.push(this[i]);
//         }
//     }
//     return res;
// }

// const odd = [1, 5, 6, 17, 18, 39, 57].myFilter(isOdd);
// const even = [1, 5, 6, 17, 18, 39, 57].myFilter(isEven);

// console.log(odd);
// console.log(even);

// I want to give me the sum of all elements of this array
// 1. redeucer function
// 2. initial vallue or accumulator
[6 + 6 + 17 +18+ 39]

// const sum = [1, 5, 6, 17, 18, 39, 57].reduce(function(acc, currentValue){
//     acc = acc + currentValue;
//     return acc;
// }, 0);

// console.log(sum);

// [{a: 1}, {b: 10}, {c: 3}, {d: 8}]; // 22

// const res = [{x: 1}, {x: 10}, {x: 3}, {x: 8}].reduce(function(acc, currentValue){
//     acc = acc + currentValue.x;
//     return acc;
// }, 0);

Array.prototype.myReduce = function(cb, initialValue) {
    if (typeof cb !== 'function'){
        return;
    }

    let acc;
    if(initialValue === undefined || initialValue === null) {
        acc = this[0];
    } else {
        acc = initialValue;
    }
    
    for(var i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc;
}


// const res = [1, 5, 6, 17, 18, 39, 57].myReduce(function(acc, currentValue){
//     acc = acc + currentValue;
//     return acc;
// }, 0);

const res = [{x: 1}, {x: 10}, {x: 3}, {x: 8}].myReduce(function(acc, currentValue){
    acc = acc + currentValue.x;
    return acc;
}, null);


var obj = {
    a: 10, 
    b: 20,
    c: 30,
    d: {
        foo: 50
    }
}
console.log(Object.values(obj));

// console.log(res);




