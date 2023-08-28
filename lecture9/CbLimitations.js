const fs = require('fs');

// f1 --> f2 ---> f3 


// 1. call back hell / pyramid of doom
// 2. IOC
fs.readFile('./test1.txt', function(err, data){
    if (err) {
        console.error(err);
    }    
    console.log("Content: " + data);
    fs.readFile("./test2.txt", function(err, data)   {
        if (err) {
            console.error(err);
        }    
        console.log("Content: " + data);
        fs.readFile("./test3.txt", function(err, data){
            if (err) {
                console.error(err);
            } 
            console.log("Content: " + data);
        })
    })
});

const readF1Cb = function(err, data) {
    if (err) {
        console.error(err);
    }    
    console.log("Content: " + data);
    fs.readFile("./test2.txt", readF2Cb);
}

const readF2Cb = function(err, data) {
    if (err) {
        console.error(err);
    }    
    console.log("Content: " + data);
    fs.readFile("./test3.txt", readF3Cb);
}

const readF3Cb = function(err, data) {
    if (err) {
        console.error(err);
    }    
    console.log("Content: " + data);
}

fs.readFile('./test1.txt', readF1Cb);