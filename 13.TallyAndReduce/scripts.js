
const timeItems = document.querySelectorAll('li');
const timeArr = [];
let totalMilliSeconds = 0;

//Gets time data from nodelist
function compileArray(arr, pushArr) {
    arr.forEach(el => {
        pushArr.push(el.attributes['data-time'].value)
    });
};

//converts time strings into array with hours/minutes/seconds
function convertToNums(arr){
    arr.map((el, ind) => {
        let tmpEl = [];
        let splitEl = el.split('');
        let tmpAdd = '';
        for(let i = 0; i < splitEl.length; i++) {
            if(i == splitEl.length -1) {
                tmpAdd += splitEl[i];
                tmpEl.push(tmpAdd);
                tmpAdd = '';
            } else if (splitEl[i] == ':') {
                tmpEl.push(tmpAdd);
                tmpAdd = '';
            } else {
                tmpAdd += splitEl[i];
            }
        }
        timeArr[ind] = tmpEl;
    })
};

//converts all times to seconds
function tallyNums(timeArr) {
    
    timeArr.map((el) =>{
        for(let i = el.length-1; i >= 0; i--) {
            if(i == el.length-1) {
                totalMilliSeconds += parseInt(el[i]);
            } else if(i == el.length-2) {
                totalMilliSeconds += parseInt(el[i] * 60);
            } else {
                totalMilliSeconds += parseInt((el[i] * 60) * 60);
            }
        }
    })
    
    totalMilliSeconds *= 1000;
    console.log(totalMilliSeconds);
}

function getTime(t) {
    const d = new Date(t);
    console.log(d.getSeconds());
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`);
}

(function initApp() {
    compileArray(timeItems, timeArr);
    convertToNums(timeArr);
    tallyNums(timeArr);
    getTime(totalMilliSeconds);
})();