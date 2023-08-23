const obj = {
    B: 12,
    C: {
        P: 34,
        Q: {
            L: 78
        },
        O: [1, 2]
    },
    A: "10"
}

// {
//     A: 10,
//     B: 12,
//     "C.P": 34,
//     "C.Q.L": 78,
//     "C.O.0": 1,
//     "C.O.1": 2
// }

function flatternObject (object, parent) { 
    const flatObj = {};
    const generateFlatObj = (obj, parent) => {
        for (let key in obj) {
            const newParent = parent ? parent + "." + key : key; 
            const value = obj[key];
            if (typeof value === 'object' ) {
                generateFlatObj(value, newParent);
            } else {
                flatObj[newParent] = value;
            }
        }
    }
    generateFlatObj(obj, parent);
    return flatObj;
}

var res = flatternObject(obj, "");
console.log(res);