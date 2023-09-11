// Suppose that you need to perform three asynchronous operations in the following sequence:

// Select a user from the database.
// Get services of the user from an API.
// Calculate the service cost based on the services from the server



// Mock API
function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if (userId === "123") {
                resolve({
                    id: 123, 
                    name: "Saptak",
                    age: 50,
                    gender: "M"
                });
            }
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if (user.name === "Saptak") {
                resolve(["Haircut", "BodyMassage"]);
            }
        }, 1000);
    });
}

function getServicesCost(services) { // 
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let cost = 0;
            if (services.includes("Haircut")) {
                cost += 100;
            } 

            if (services.includes("hairspa")) {
                cost += 250;
            }

            if (services.includes("BodyMassage")) {
                cost += 400;
            }

            if (services.includes("Shampoo")) {
                cost += 500;
            }

            resolve(cost);
        }, 1000);
    });
}


getUser("123")
.then((user) => getServices(user))
.then((services) => getServicesCost(services))
.then((totalCost) => console.log("The Cost is: " + totalCost));



async function getTotalCost(userId) {
    const user = await getUser(userId);
    const services = await getServices(user);
    const cost = await getServicesCost(services);

    return cost;
}

// getTotalCost("123").then(resp => console.log(resp)).catch(err => console.log(err)); 

async function printResult() {
    try {
        const cost = await getTotalCost("123");
        console.log(cost);
    } catch(err) {
        console.log(err);
    }
}

printResult();