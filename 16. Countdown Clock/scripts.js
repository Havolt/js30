
const timeDisp = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

let currTime;
let startTime;
let endTime;
let timeLeft;
let inProgress = false;

function getCurrentTime() {
    currTime = new Date().getTime();
    if(inProgress) {
        showDispLeft(timeLeft);
    }
    setTimeout(() => {
        getCurrentTime();
    }, 1000);
}

function showDispLeft(time) {
    timeLeft -= 1000;
    if (timeLeft <= 0) {
        inProgress = false;
    }
    let leftHours = new Date(timeLeft).getHours() - 1;
    if(leftHours < 10) { leftHours = `0${leftHours}`};
    let leftMinutes = new Date(timeLeft).getMinutes();
    if(leftMinutes < 10) { leftMinutes = `0${leftMinutes}`};
    let leftSeconds = new Date(timeLeft).getSeconds();
    if(leftSeconds < 10) { leftSeconds = `0${leftSeconds}`};
    if(leftHours > 0) {
        document.querySelector('.display__time-left').innerHTML = `${leftHours}:${leftMinutes}:${leftSeconds}`;
    } else {
        document.querySelector('.display__time-left').innerHTML = `${leftMinutes}:${leftSeconds}`;
    }
}

function setTime(seconds) {
    startTime = currTime;
    endTime = currTime + (seconds * 1000);
    timeLeft = endTime - startTime;
    showDispEnd(endTime);
    showDispLeft(timeLeft);
};

function showDispEnd(time) {
    let endMinutes = new Date(time).getMinutes();
    let endHours = new Date(time).getHours();
    document.querySelector('.display__end-time').innerHTML = `Be back at ${endHours}:${endMinutes}`;
}

function customTime() {
    let custTime = window.location.search.split('').splice(9).join('');
    if(!isNaN(custTime)) {
        custTime = parseInt(custTime) ;
        custTime *= 60;
        inProgress = true;
        setTime(custTime);
    }
    
    
}

(function initApp() {
    for(let i = 0; i < document.querySelectorAll('.timer__button').length; i++) {
        document.querySelectorAll('.timer__button')[i].addEventListener('click', (e) => {
            inProgress = true;
            setTime(e.target.attributes['data-time'].value);
        })
    }
    getCurrentTime(currTime);
    customTime();
})();