const boxHome  = document.querySelector('.Home')
const boxGuest = document.querySelector('.Guest')

// Results for both
let homeScore  = 0
let guestScore = 0
//   let progressBar = document.getElementById("progressbar-el")

// Home
function addOneHome() {
    homeScore += 1;
    boxHome.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    boxHome.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    boxHome.textContent = homeScore;
}

// Guest
function addOneGuest() {
    guestScore += 1;
    boxGuest.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    boxGuest.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    boxGuest.textContent = guestScore;
}
//Could not figure out how to make this reset the timer    
function resetGame() {
    homeScore  = 0
    boxHome.textContent = homeScore;
    guestScore = 0
    boxGuest.textContent = guestScore;
}
//Currently only counts down from 60 seconds  
function MyTimer(callback, val) {
    val = val || 60; 
    var timer=setInterval(function() { 
        callback(val);
        if(val-- <= 0) { 
            clearInterval(timer); 
        } 
    }, 1000);
}
//unsure how to make this work as a minute and second timer.
new MyTimer(function(val) {
    var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
    document.getElementById("timer").textContent = timerMsg; 
});