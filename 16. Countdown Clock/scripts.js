
const timeDisp = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');

let startTime;
let endTime;

function setTime(seconds) {
    startTime = new Date();
    console.log(seconds);
};

(function initApp() {
    for(let i = 0; i < document.querySelectorAll('.timer__button').length; i++) {
        
        document.querySelectorAll('.timer__button')[i].addEventListener('click', (e) => {
            setTime(e.target.attributes['data-time'].value);
        })
    }
})();