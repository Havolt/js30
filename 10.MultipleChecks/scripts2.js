
const listInfo = {
    shiftDown: false,
    listText: [
        'This is an inbox layout', 'Check one item', 'Hold down your Shift key',
        'Check a lower item', 'Everything inbetween should also be set to checked', 
        'Try do it without and libraries', 'Just regular JavaScript', 'Good Luck!', 
        'Don\'t forget to tweet your results'     
    ],
    listData : [],
    lastClicked: '',
    direction: 1
}

function createList(arr) {
    document.querySelector('.checkList').innerHTML = '';
    arr.map((el) => {
        const checkContain = document.createElement('div');
        checkContain.classList.add('checkContain');
        const checkBox = document.createElement('input');
        checkBox.type="checkbox";
        checkBox.classList.add('checkBox');
        checkBox.name = el.pos;
        if(el.selected) {
            checkBox.checked = true;
        }
        checkBox.addEventListener('click', (e) => {
            e.preventDefault();
            toggleBox(e);
        })
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

function toggleBox(trg) {
    let trgNum = parseInt(trg.target.name);
    if(!listInfo.shiftDown) {
        listInfo.listData[trgNum].selected = !listInfo.listData[trgNum].selected;
        listInfo.lastClicked = parseInt(trgNum);
    }
    else {
        let isSelected = listInfo.listData[listInfo.lastClicked].selected;
        if(listInfo.lastClicked.length != 0) {
            if(listInfo.lastClicked > trgNum) {
                listInfo.direction = 1;
            } else {
                listInfo.direction = -1;
            }
            while(trgNum != listInfo.lastClicked) {
                listInfo.listData[trgNum].selected = isSelected;
                trgNum += listInfo.direction;
            }

        }
        listInfo.lastClicked = '';
    }
    createList(listInfo.listData);
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