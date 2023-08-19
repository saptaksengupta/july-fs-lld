

// IIFE => Immidiately invoke function expression
// anonymus
var myApp = (function(dep1, dep2) {
    this.a = '100';
    function sum(a, b) {
        return a + b;
    }

    function _privateFunction(){
        console.log("I am Private Property!!");
    }

    return {
        sum: sum
    }
})();

console.log(myApp.sum());