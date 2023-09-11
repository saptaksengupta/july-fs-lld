var cap  = {
    name: "Steve",
    occupation: "Super Hero",
    age: "35"
};

console.log(JSON.stringify(cap));

// Hash Map ...
const personMap = new Map();

personMap.set('name', "Saptak");
personMap.set("age", 35);
personMap.set("occupation", 'Super Hero');

personMap.delete("age");
personMap.get('occupation');

// personMap.clear();
console.log(personMap);

personMap.forEach(function(val, key) {
    console.log(val, key);
});

console.log(JSON.stringify(personMap));


