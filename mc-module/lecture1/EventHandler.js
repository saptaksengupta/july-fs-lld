const btn = document.getElementById("btn-click");


const onBtnClick = function() {
    alert("I am clicked!");
}

btn.addEventListener('click', onBtnClick);

window.addEventListener("load", function() {
    alert("Window Onload!");
});
