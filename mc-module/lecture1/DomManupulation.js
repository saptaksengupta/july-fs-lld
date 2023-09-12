const div = document.querySelector('div');

console.log(div.innerHTML);
console.log(div.innerText);



// change style 
div.style.backgroundColor = "Pink";
div.style.color = "red";

const input = document.getElementById("btn");
input.setAttribute('type', 'email');
console.log(input.getAttribute('type'));

// add a content using JS
var container = document.getElementById("dynamic-content");
var content = document.createElement('div');
content.innerHTML = "<p> Some dynamic Content! </>";
container.appendChild(content);

