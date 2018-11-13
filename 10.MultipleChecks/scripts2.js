
const listInfo = {
    shiftDown: false,
    listText: [
        'This is an inbox layout', 'Check one item', 'Hold down your Shift key',
        'Check a lower item', 'Everything inbetween should also be set to checked', 
        'Try do it without and libraries', 'Just regular JavaScript', 'Good Luck!', 
        'Don\'t forget to tweet your results'     
    ],
    listData : []
}


function createListData(lst) {
    lst.listText.map((el, num) => {
        const newOb = {};
        newOb.text = el;
        newOb.pos = num;
        newOb.selected = false;
        lst.listData.push(newOb);
    })
}

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
}

(function initApp() {
    evtListners();
    createListData(listInfo);
})()