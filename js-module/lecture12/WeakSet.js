const weakSetObject = new WeakSet();
const obj1 = {
    foo: "bar"
};

weakSetObject.add(obj1);

console.log(weakSetObject.has(obj1));