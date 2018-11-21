
const timeItems = document.querySelectorAll('li');
const timeArr = [];

function compileArray(arr, pushArr) {
    arr.forEach(el => {
        pushArr.push(el.attributes['data-time'].value)
    });
};

function convertToNums(arr){
    console.log(arr);
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
        console.log(tmpEl);
    })
};

(function initApp() {
    compileArray(timeItems, timeArr);
    convertToNums(timeArr);
})();