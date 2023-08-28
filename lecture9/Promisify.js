const fs = require('fs');

const promisifyFileRead = function(filePath) {
    return new Promise(function(res, rej) {
        fs.readFile(filePath, function(err, data){
            if (err){
                rej(err);
            } else{
                res(data);
            }
        })
    })
}


promisifyFileRead("./test1asda.txt")
.then(function(data) {
    console.log("content " + data);
})
.catch(function(err){
    console.error(err);
})