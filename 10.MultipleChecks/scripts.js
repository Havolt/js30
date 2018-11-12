
const checkInfo = {
    lastClicked: {num: '', checked: ''},
    checkText : [
        'This is an inbox layout', 'Check one item', 'Hold down your Shift key',
        'Check a lower item', 'Everything inbetween should also be set to checked', 
        'Try do it without and libraries', 'Just regular JavaScript', 'Good Luck!', 
        'Don\'t forget to tweet your results'     
    ]
}

function makeCheckboxes () {
    
    checkInfo.checkText.map((el) => {
        const newEl = document.createElement('div');
        newEl.classList.add('checkContainer');
        const newCheck = document.createElement('input');
        newCheck.type="checkbox";
        newCheck.classList.add('checker')
        newCheck.addEventListener('click', function(evt) {
            multipleSelect(evt);
        })
        const newText = document.createElement('div');
        newText.innerHTML = el;
        newText.classList.add("checkText");
        document.querySelector('.checkArea').appendChild(newEl);
        newEl.appendChild(newCheck);
        newEl.appendChild(newText);
    })
}

function multipleSelect(e) {
    if(e.shiftKey) {
        /*
        console.log(e.target.parentElement.children[1].innerHTML);
        console.log(e.target.checked)
        */

        let currClick;
        let dir;
        for(let i = 0; i < checkInfo.checkText.length; i++) {
            if(checkInfo.checkText[i] == e.target.parentElement.children[1].innerHTML) {
                currClick = i;
                if(currClick > checkInfo.lastClicked.num) {
                    dir = -1;
                } else if(currClick < checkInfo.lastClicked.num) {
                    dir = 1;
                } else {
                    dir = 0;
                }
                break;
            }
        }

        if(dir != 0) {
            
            while( currClick != checkInfo.lastClicked.num) {
                currClick += dir;
                console.log(currClick);
            }
        }
        
    }

    for(let i = 0; i < checkInfo.checkText.length; i++) {
        if(checkInfo.checkText[i] == e.target.parentElement.children[1].innerHTML) {
            checkInfo.lastClicked.num = i;
            checkInfo.lastClicked.checked = e.target.checked;
        }
    }
   
}

(function initApp () {
    makeCheckboxes();
})()