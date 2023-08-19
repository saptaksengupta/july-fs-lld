const arr = [1, 2, 3, 4, 5];

// add 5 with every element of an array and return a new array with the result.
// [6, 7, 8, 9, 10]
function copyArrayAndAddFive(arr) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] + 5);
    }
    return result;
}

// mul 5 with every element of an array and return a new array with the result.
function copyArrayAndMulFive(arr) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * 5);
    }
    return result;
}
// console.log(copyArrayAndAddFive(arr));
// console.log(copyArrayAndMulFive(arr));


const multiPlyFive = function(value) {
    return value * 5;
}

const addFive = function(value) {
    return value + 5;
};

function copyArrayAndManipulate(arr, instruction) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(instruction(arr[i]));
    }
    return result;
}

console.log(copyArrayAndManipulate(arr, multiPlyFive));
console.log(copyArrayAndManipulate(arr, addFive));
console.log(copyArrayAndManipulate(arr, addFive));











