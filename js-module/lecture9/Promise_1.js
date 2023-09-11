const fs = require('fs');

// fs.readFile("./test2.txt", readF2Cb);
const prom1 = fs.promises.readFile("./test1.txt");

// chaining
prom1
.then(function(data){
    console.log("Content " + data); // 
    return fs.promises.readFile("./test2.txt");
})
.then(function(data){
    console.log("Content " + data); // 
    return fs.promises.readFile("./test3.txt");
})
.then(function(data) {
    console.log("Content " + data);
})
.catch(function(err) {
    console.error(err);
});
