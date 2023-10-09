// const btn = document.getElementById("btn");

// const getTheBall = () => {
//     console.log("Giving one Ball at a time!");
// }

// btn.addEventListener('click', getTheBall);


const search = document.getElementById("search");


function onInputChange(e) {
    console.log("making a network call to search with input", e.target.value);
}

const debouncedInputChange = debounce(onInputChange, 500);


function debounce(fn, delay = 500) {
    let timerId = null;

    return function (...params) {
        console.log("Input added");
        let context = this;

        if (timerId) {
            console.log("Clearing the previous time");
            clearTimeout(timerId);
        }

        console.log("Starting the Timer!")
        timerId = setTimeout(function () {
            fn.apply(this, params);
        }, delay);
    }

}

// search.addEventListener("input", onInputChange);
search.addEventListener("input", debouncedInputChange);