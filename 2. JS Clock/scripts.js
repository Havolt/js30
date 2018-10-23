
function getTime() {
    const time = new Date();
    const timeObj = {
        hours: ((time.getHours() /12) * 360) + 90,
        minutes: ((time.getMinutes() / 60) * 360) + 90,
        seconds: ((time.getSeconds() / 60) * 360) + 90
    }
    return timeObj;
};

function setTime(time) {

    document.querySelector('.hourHand').style.transform=`rotate(${time.hours}deg)`;
    document.querySelector('.minuteHand').style.transform=`rotate(${time.minutes}deg)`;
    document.querySelector('.secondHand').style.transform=`rotate(${time.seconds}deg)`;
    
    console.log(getTime());
    setTimeout(() => {
        setTime(getTime());
    }, 1000);
}

(function initApp(){
    setTime(getTime());
})()