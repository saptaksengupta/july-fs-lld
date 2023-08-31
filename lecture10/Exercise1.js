const doubleAfterOneSec = function(number){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(number * 2);
            // reject("error");
        }, 1000);
    });
}

// 1. promise chain.
// 2. Async await.

// const calculateSum = async function() {
//     try {
//         var res1 = await doubleAfterOneSec(10);
//         var res2 = await doubleAfterOneSec(20); 
//         var res3 = await doubleAfterOneSec(40);
//         console.log(res1 + res2 + res3);
//     } catch(err) {
//         console.log(err);
//     }
// }
// calculateSum();

doubleAfterOneSec(10)
.then(function(a1) {
    return doubleAfterOneSec(a1).then(a2 => {
        return doubleAfterOneSec(a2).then(a3 => {
            console.log(a1 + a2 + a3); // 140
        })
    });
});

async function calculateSum(x) {
    const a = await doubleAfterOneSec(x);
    const a2 = await doubleAfterOneSec(a); 
    const a3 = await doubleAfterOneSec(a2);

    return a + a2 + a3;
}

calculateSum(10)
.then(function(resp){
    console.log(resp);
})
.catch(function(err) {
    console.log(err);
});







