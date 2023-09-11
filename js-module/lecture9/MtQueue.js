// const isEven = function(number) {
//     return new Promise(function(resolve, reject){
//         if (number % 2 === 0) {
//             resolve(number);
//         } else {
//             reject(number);
//         }
//     });
// }

// const resp = isEven(19);

// resp.then(function(number){
//     // if even
//     console.log("It's a even " + number);
// })
// .catch(function(number){
//     // if odd 
//     console.log("It not even!" + number);
// })


console.log("1");

const myPromise = function() {
    return new Promise((resolve, reject) => {
        resolve(123);
    });
}
const resp = myPromise(); 

setTimeout(function() { // CBQ
    console.log("2")
}, 0);

resp.then(function(res){ // MTQ
    console.log("3");
})

console.log("4");


