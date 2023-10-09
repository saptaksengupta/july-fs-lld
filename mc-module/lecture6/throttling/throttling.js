const btn = document.getElementById("button");

function throttle(fn, delay = 500) {
    let intervalInProgress = false;

    return function () {
        console.log("Button is clicked");

        if (intervalInProgress) {
            console.log("Returning since interval is in proggress!");
            return;
        }

        intervalInProgress = true;
        fn();

        setTimeout(() => {
            intervalInProgress = false;
        }, delay);
    }
}


const throttledClicked = throttle(buttonClicked, 2000);

// btn.addEventListener("click", buttonClicked);
btn.addEventListener("click", throttledClicked);



function buttonClicked() {
    console.log("Making a network call!");
}

function fn() {
    let ax = bx = 110;
    ax++;
    console.log(ax, bx);
    // return ax;
}
fn()
console.log(typeof bx)
console.log(typeof ax)