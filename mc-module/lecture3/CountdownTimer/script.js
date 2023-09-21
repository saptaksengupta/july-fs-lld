var start = document.getElementById("start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");
var continueBtn = document.getElementById("continue");


var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("second");

var timerId;
var savedTimeLeft;

start.addEventListener('click', function () {


    let hour = h.value || 0;
    let minute = m.value || 0;
    let second = s.value || 0;


    hour = parseInt(hour);
    minute = parseInt(minute);
    second = parseInt(second);

    console.log(hour, minute, second);
    // validate inputs      
    const res = validateInputs(hour, minute, second);
    if (!res) {
        return;
    }

    // we are proceeding with the timer 
    const {
        tranformedHours,
        transformedMinutes,
        transformedSeconds
    } = transformInputs(hour, minute, second);

    // set the input values with the updated value first once.
    m.value = transformedMinutes;
    s.value = transformedSeconds;
    h.value = tranformedHours;
    
    // lets begin the coutdown;
    let countDownTime = tranformedHours * 3600 + transformedMinutes * 60 + transformedSeconds; // seconds
    timer(countDownTime);
    showHideActions(pause, start);
});

pause.addEventListener('click', function () {
    clearInterval(timerId);
    showHideActions(continueBtn, pause);
});

continueBtn.addEventListener('click', function () {
    timer(savedTimeLeft);
    showHideActions(pause, continueBtn);
});


reset.addEventListener("click", resetTimer);


function timer(countDownTime) {
    timerId = setInterval(function () {
        countDownTime--;
        savedTimeLeft = countDownTime;
        
        updateUi(countDownTime);
    }, 1000);
}


function updateUi(timeValueInSeconds) { 
    let hr = Math.floor(timeValueInSeconds / 3600);
    let mn = Math.floor((timeValueInSeconds % 3600) / 60);
    let se = timeValueInSeconds % 60;

    if (mn == 0 && se == 0 && hr == 0){
        clearInterval(timerId);
        return;
    }

    if (se > 0) {
        se--; 
        s.value = se;
        return;
    }

    if (mn > 0)  {
        mn--;
        s.value = 59;
        m.value = mn;
        return;
    }

    if (hr > 0) {
        hr--;
        m.value = 59;
        s.value = 59;
        h.value = hr;
    }
}

function validateInputs(h, m, s) {
    if (h < 0 || h > 24 || m < 0 || s < 0) {
        alert("Please check the values!");
        return false;
    }

    const { tranformedHours } = transformInputs(h, m, s);

    if (tranformedHours > 24) {
        alert("Hour value sould be < 24 and > 0");
    }

    return true;

}

function transformInputs(h, m, s) {

    if (s >= 60) { //0 : 80
        s = s - 60;
        m++;
    }

    if (m >= 60) {
        m = m - 60;
        h++;
    }

    if (s == 0 && m > 0) { // 2:00 > 1:59
        m--;
        s = 59;
    } else if (m == 0 && h > 1) {
        h--;
        m = 59;
        s = 59;
    }

    return {
        tranformedHours: h,
        transformedMinutes: m,
        transformedSeconds: s
    }
}

function resetTimer() {
    showHideActions(start, pause);
    showHideActions(start, continueBtn);
    setValuesToZero();
    stopInterval();
}

function setValuesToZero() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
}


function stopInterval() {
    clearInterval(timerId);
}

function showHideActions(btnToShow, btnToHide) {
    btnToShow.style.display = "block";
    btnToHide.style.display = "none";
}

// start.addEventListener("click", function() {

//     function startInterval() {
//         timerId = setInterval(function() {
//             updateUiTimer();
//         }, 1000);
//     }
//     startInterval();
// });

// reset.addEventListener("click", resetTimer);


// function updateUiTimer() {
//     if (h.value == 0 && m.value == 0 && s.value == 0) {
//         resetTimer();
//     } else if (s.value != 0) {
//         s.value--;
//     } else if ( m.value != 0 && s.value == 0){
//         s.value = 59;
//         m.value--;
//     } else if(h.value != 0 && m.value == 0) {
//         m.value = 59;
//         s.value = 59;
//         h.value--;
//     }
//     return;
// }   



