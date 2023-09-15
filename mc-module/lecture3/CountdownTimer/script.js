var start = document.getElementById("start");
var reset = document.getElementById("reset");


var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("second");

var timerId; 

start.addEventListener("click", function() {

    function startInterval() {
        timerId = setInterval(function() {
            updateUiTimer();
        }, 1000);
    }
    startInterval();
});

reset.addEventListener("click", resetTimer);

function resetTimer() {
    setValuesToZero();
    stopInterval();
}

function setValuesToZero() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
}

function updateUiTimer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        resetTimer();
    } else if (s.value != 0) {
        s.value--;
    } else if ( m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0) {
        m.value = 59;
        s.value = 59;
        h.value--;
    }
    return;
}   

function stopInterval() {
    clearInterval(timerId);
}

