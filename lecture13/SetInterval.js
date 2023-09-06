
var counter = 0;
function greeting() {
    counter++;
    console.log("Hi, How you doing?");
    if(counter >= 3){
        clearInterval(intervalId);
    }
}
var intervalId = setInterval(greeting, 1000);

// Create setInterval polyfill with the help of setTimeout.

var date = new Date();



function mySetTimeout(func, delay) {
    return function() {
        // call this `func` based on some condition...
    }
}

// usage

mySetTimeout(sum, 1000);

const sum = function() {
    console.log("sum: ", 4);
}