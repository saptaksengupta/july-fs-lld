let fs = require("fs");


// // then 

// let promise = fs.promises.readFile("f11.txt");

// /***then is an event listner (handler) for a promise when promise state changes to resolved***/

// promise.then(function (data) {
//     console.log("Hi the data is 15 " + data);
// })

// promise.then(function (data) {
//     console.log("buffer format is 20", data);
// })
// promise.then(function () {
//     console.log("I am not accepting");
// })

// /****catch is an event listenre (handler) for a promise when promise state changes to reject***/
// promise.catch(function (error) {
//     console.log("inside catch", error.message);
// })

// promise.catch(function (error) {
//     console.log("inside second catch", "no error message");
// })






/****
 * then takes two paramater -> both cb fns
 * first parameter -> is compulsary  and that is invoked when your promise is resolved
 * second parameter -> if present called when promise is rejected 
 * 
 * **/

// function scb(data) {
//     console.log("Hi the data is 15 " + data);
// }
// function fcb(error) {
//     console.log("inside catch", error.message);
// }

// function finallCB() {
//     console.log(" I will be called finally");
// }


// let promise = fs.promises.readFile("f11.txt");

// promise.catch(fcb);
// promise.then(scb, fcb);
// promise.finally(finallCB);
// promise.then(scb);
// promise.then(null, fcb);




// const promise = Promise.resolve("resolved value");
// promise.then(function (value) {
//     console.log("value", value);
// })



// Q1 



// const promise1 = Promise.reject("Some error");
// promise1.catch(function (err) {
//     console.log("78");
//     console.log("error", err);
// })

// promise1.then(function () {
//     console.log("83", err);
// }).catch(function (err) {
//     console.log("85", err);
// })


// promise1.then(function (data){
//     return "Resolved";
// }, function (err) {
//     console.log("90", err);
// }).then(function (err) {
//     console.log("92", err);
// })

// //  when you have a second then that is chained to the first then -> value promise
// //  recived by the second then is return value of the scb / fcb of the first then




/*************************Q2*********************/
// let promise = Promise.resolve(10);

// promise.then(function (data) {
//     console.log("92", data);
// }).then(function (firstThenVal) {
//     console.log("113", firstThenVal);
//     return 100
// }).then(function (secondThenVal) {
//     console.log("116", secondThenVal);
//     return fs.promises.readFile("f1.txt")
// }).then(function (thirdThen) {
//     console.log("120", thirdThen);
// })



/*************************Q3*********************/

// let promise = Promise.reject(10);
// promise
//     .catch(function (data) {
//         console.log("92", data);
//         return "hello";
//     }).then(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100;
//     }).then(function (secondThenVal) {
//         console.log("116", secondThenVal);
//         return fs.promises.readFile("f12.txt");
//     }).catch(function (thirdThen) {
//         console.log("120", thirdThen);
//         throw new Error("error");
//     }).then(function (firstThenVal) {
//         console.log("115", firstThenVal);
//         return 100
//     })
//     .catch(err=>{
//         console.log("150", err);
//     })


    /***
 * catch -> if it is reciving a rejected value/ error -> it will take it 
 * then -> then will completely ignored 
 * and vice versa 
   * /

/**
 * 1. Eventlistener -> then ,catch , finally
 * 2. Then -> resolved, catch -> reject, finally -> both individually
 * 2.2 -> catch will always accept -> rejection/error and  then -> always accept values/ promises
 * 3. CHaining then/catch -> rejection|Error -> catch/ everything else -> next then will be called 
 * 4. no catch code stops exceuting 
 * ***/ 

/*************************Q4*********************/

// let promise = Promise.resolve(10);
// promise
//     .then(function (data) {
//         console.log("92", data);
//         return "hello";
//     })
//     .finally(function(data){
//     console.log("117",data);
//      throw new Error("i am a error");
//     })
//     .catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100;
//     })
//     .finally(function(data){
//         console.log("118",data);
//     })
//     .then(function (secondThenVal) {
//         console.log("116", secondThenVal);
//         return fs.promises.readFile("f1.txt");
//     }).then(function (thirdThen) {
//         console.log("120", thirdThen);
//     }).catch(function (firstThenVal) {
//         console.log("113", firstThenVal);
//         return 100
//     })
//     .finally(function(data){
//         console.log("118",data);
//     })


    

    /**
 * 1.finally -> do not take anything 
 * 2.for values and promises -> it does not returns anything / and neither take anything
 * 3.Rejection -> goes to catch -> and give it the error/ rejection
 * 
 * **/ 