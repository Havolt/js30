
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
        console.log(el, ind)
    })
};

(function initApp() {
    compileArray(timeItems, timeArr);
    convertToNums(timeArr);
})();