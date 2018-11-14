
const listInfo = {
    shiftDown: false,
    listText: [
        'This is an inbox layout', 'Check one item', 'Hold down your Shift key',
        'Check a lower item', 'Everything inbetween should also be set to checked', 
        'Try do it without and libraries', 'Just regular JavaScript', 'Good Luck!', 
        'Don\'t forget to tweet your results'     
    ],
    listData : [],
    lastClicked: ''
}

function createList(arr) {
    arr.map((el) => {
        console.log(el);
        const checkContain = document.createElement('div');
        checkContain.classList.add('checkContain');
        const checkBox = document.createElement('input');
        checkBox.type="checkbox";
        checkBox.classList.add('checkBox');
        const checkText = document.createElement('div');
        checkText.innerHTML = el.text;
        checkText.classList.add('checkText');
        document.querySelector('.checkList').appendChild(checkContain);
        checkContain.appendChild(checkBox);
        checkContain.appendChild(checkText);
    })
};


function createListData(lst) {
    lst.listText.map((el, num) => {
        const newOb = {};
        newOb.text = el;
        newOb.pos = num;
        newOb.selected = false;
        lst.listData.push(newOb);
    })
};

function evtListners() {
    document.addEventListener('keydown', (e) => {
        if(e.keyCode == 16) {
            listInfo.shiftDown = true;
        }
    })
    document.addEventListener('keyup', (e) => {
        if(e.keyCode == 16) {
            listInfo.shiftDown = false;
        }
    })
};

(function initApp() {
    evtListners();
    createListData(listInfo);
    createList(listInfo.listData)
})()