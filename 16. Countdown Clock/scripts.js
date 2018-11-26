
const timeDisp = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

let currTime;
let startTime;
let endTime;
let timeLeft;
let inProgress = false;

function getCurrentTime() {
    currTime = new Date().getTime();
    setTimeout(() => {
        if(inProgress) {
            showDispLeft(timeLeft);
        }
        getCurrentTime();
    }, 1000);
}

function showDispLeft(time) {
    timeLeft -= 1000;
    if (timeLeft <= 0) {
        inProgress = false;
    }
    let leftMinutes = new Date(timeLeft).getMinutes();
    let leftSeconds = new Date(timeLeft).getSeconds();
    document.querySelector('.display__time-left').innerHTML = `${leftMinutes}:${leftSeconds}`;
}

function setTime(seconds) {
    startTime = currTime;
    endTime = currTime + (seconds * 1000);
    timeLeft = endTime - startTime;
    showDispEnd(endTime);
};

function showDispEnd(time) {
    let endMinutes = new Date(time).getMinutes();
    let endHours = new Date(time).getHours();
    document.querySelector('.display__end-time').innerHTML = `Be back at ${endHours}:${endMinutes}`;
}

(function initApp() {
    for(let i = 0; i < document.querySelectorAll('.timer__button').length; i++) {
        document.querySelectorAll('.timer__button')[i].addEventListener('click', (e) => {
            setTime(e.target.attributes['data-time'].value);
            inProgress = true;
        })
    }
    getCurrentTime(currTime);
})();