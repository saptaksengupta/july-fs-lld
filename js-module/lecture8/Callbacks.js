const doEat = function(){
    console.log("I am Eating!");
}

function startDay(cb) {
    var isWorkoutDone = true;
    if (isWorkoutDone) {
        cb();
    }
}
startDay(doEat);


var fs = require('fs');

console.log("first");

const onReadFile = function(err, data){ //
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
};

fs.readFile("./test.txt", "utf8", onReadFile);
fs.readFile();

console.log("Last!");


const mySetTimeOut = function(cb, timeInMs) {
    // wtire code here
}

mySetTimeOut(startDay, 1000);