//  /****
//             *  DOM : It is an API that represents an HTML page
//             * 
//             *   DOM ->   document          object             model      -> generic n-ary Tree
//             * 
//             *             index.html       element/tags       structure 
//             * 
//             * 
//             * 
//             * 
//             * 
//             * 
//             * */ 


// returns the first element in DOM tree.
// var h1 = document.querySelector("h1");
// console.log(h1);

var h1List = document.querySelectorAll("h1");
console.log(h1List);

// console.log(h1List[1]);

// h1List.forEach((element) => {
//     console.log(element);
// });

// h1List.filter((element) => {
//     console.log(element);
// });

var mainCl = document.querySelector(".main"); // class selector
console.log(mainCl);

var mainCl = document.querySelectorAll(".main"); // list of elements with the matching class
console.log(mainCl);

var pass = document.querySelector("input[type=password]");
console.log(pass);

console.log(document.querySelectorAll("*")); // it will select all the elements.

// document.createElement() to create a new HTML element 
let div = document.createElement('div');

//  The innerHTML is a property of the Element 
//  that allows you to get or set the HTML markup 
//  contained within the element
div.innerHTML = '<p>CreateElement example</p>';


//  The appendChild() method allows you to add a node to 
//  the end of the list of child nodes of a specified parent node.
document.body.appendChild(div);


const menu = document.querySelector('#menu');
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));

function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}