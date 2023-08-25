"use strict"

var bird = {
    wings: 2,
    colours: ['red', 'yellow']
}
console.log(bird);
Object.defineProperty(bird, 'legs', {
    value: 2,
    writable: false,
    enumerable: false,
    configurable: false
});


Object.defineProperty(bird, 'head', {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: true
});


Object.defineProperty(bird, 'head', {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: false
});

// bird.legs = 3; // silently failing
// console.log(bird); 

for(let key in bird) {
    console.log(key);
}

// Object.preventExtensions(bird);
// bird.size = 'SM'; // silent fail in case of non strict mode

// [Seal] 
// Object.seal(..) creates a "sealed" object, 
// which means it takes an existing object and 
// essentially calls Object.preventExtensions(..) on it, 
// but also marks all its existing properties as `configurable:false`.
// So, not only can you not add any more properties, 
// but you also cannot reconfigure or delete any 
// existing properties (though you can still modify their values).
// Object.seal(bird);
// bird.size = 'SM'; // fail

// [Freeze]
// Object.freeze(..) creates a frozen object, 
// which means it takes an existing object and 
// essentially calls Object.seal(..) on it, 
// but it also marks all "data accessor" 
// properties as writable:false, so that their values cannot be changed.

// Object.freeze(bird);
// bird.wings = 4; // fails
// bird.colours.push('pink');
// console.log(bird);


var obj = {
    a: 10
};

Object.defineProperty(obj, "b", {
    get: function() {
        return this.a * 2;
    }
});

// console.log(obj);
// console.log(obj.a);
// obj.a = 100;
// console.log(obj.b);


var myObj = {
    get a(){
        return this._a_ + "Hi";
    },

    set a(val){
        this._a_ = val * 2;
    }
}

myObj.a = 2;
console.log(myObj.a) //? 
