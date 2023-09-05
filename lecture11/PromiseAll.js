// var prom1 = new Promise(res, rej); // settled 
// var prom2 = new Promise(res, rej);
// var prom3 = new Promise(res, rej);

// // async & await... 
// var prom1 = await somePromise();
// var val = await someOtherPromise(prom1); // waiting for prom1 to be finished and executed.


const { rejects } = require('assert');
const fs = require('fs');

// const promise1 = fs.promises.readFile("./f1.txt");
// const promise2 = fs.promises.readFile("./f2.txt");

// it takes an array of promises and executes 
// all the promises all together and returns the combined result as an Promise<array>.
// it rejects immidiatly whenever any one of them get rejected. 

// const combinedPromises = Promise.all([promise1, promise2]);

const transformData = function(data){
    console.log(new Date().getTime());
    let resStr = "";
    data.map((fileContent) => {
        resStr += " " + fileContent;
    });
    return resStr;
}

// combinedPromises
// .then(transformData)
// .then((data) => console.log(data));

// Poilyfill of Promise All 

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 1 resolve');
      resolve(1);
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 2 resolve');
      resolve(2);
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise 3 resolve');
      resolve(3);
    }, 5000);
  });

const myPromiseAll = function(inputPromises) {

    const resolvedPromises = [];

    return new Promise((res, rej) => {
        async function exec() {
            for (var i = 0; i < inputPromises.length; i++ ) {
                try {
                    const value = await inputPromises[i];
                    resolvedPromises.push(value);
                    // resolve the result array
                    if (i == inputPromises.length - 1) { 
                        // It is the last promise. 
                        res(resolvedPromises);
                    }
                } catch(err) {
                    rej(err);
                }
            }
        }        
        exec();
    });
}

// var myCombinedPromises = myPromiseAll([promise3, promise2, promise1]);
// myCombinedPromises
// .then(transformData)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

console.log(new Date());
var myCombinedPromises = myPromiseAll([promise3, promise2, promise1]);
myCombinedPromises.then((data) => {
    console.log(new Date());
    console.log("All resolved", data);
});



