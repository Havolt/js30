
function makeCheckboxes () {
    const checkText = [
        'This is an inbox layout', 'Check one item', 'Hold down your Shift key',
        'Check a lower item', 'Everything inbetween should also be set to checked', 
        'Try do it without and libraries', 'Just regular JavaScript', 'Good Luck!', 
        'Don\'t forget to tweet your results'     
    ]
    checkText.map((el) => {
        const newEl = document.createElement('div');
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
        document.querySelector('.checkArea').appendChild(newCheck);
        document.querySelector('.checkArea').appendChild(newText);
    })
}

function multipleSelect(e) {
    if(e.shiftKey) {
        console.log(e);
    }
   
}

(function initApp () {
    makeCheckboxes();
})()