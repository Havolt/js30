
const timeDisp = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

let currTime;
let startTime;
let endTime;
let timeLeft;

function getCurrentTime() {
    currTime = new Date().getTime();
    setTimeout(() => {
        getCurrentTime();
    }, 1000);
}

function setTime(seconds) {
    startTime = currTime;
    endTime = currTime + (seconds * 1000);
    timeLeft = (endTime - startTime) / 1000;
    console.log(timeLeft)
};

(function initApp() {
    for(let i = 0; i < document.querySelectorAll('.timer__button').length; i++) {
        
        document.querySelectorAll('.timer__button')[i].addEventListener('click', (e) => {
            setTime(e.target.attributes['data-time'].value);
        })
    }
    getCurrentTime(currTime);
})();