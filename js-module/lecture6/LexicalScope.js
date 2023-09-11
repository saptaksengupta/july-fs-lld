var varName = 10; 
function b() {
    console.log("in function b", varName);
}

function c() {
    var varName = 20;
    b();
    console.log(varName);
}

c();

// Lexically means where the function is created.
// Here B is present in Global
// no matter from where it is being called. 

