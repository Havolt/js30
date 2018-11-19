
let userInput = [];

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];


function keyCheck(e) {
    let arrOkay = true;
    if(e.keyCode !== 116) {
        userInput.push(e.keyCode);
    }
    for(let i = 0; i < userInput.length; i++) {
        if(userInput[i] != konamiCode[i]) {
            userInput = [];
            arrOkay = false;
            break;
        }
    }
    
    fillCharacters();

}

function fillCharacters() {
    const els = document.querySelectorAll('.konSymbolEmpty');

    els.forEach((el, ind) => {
        if(userInput[ind]) {
            el.classList.add('konSymbol');
        }else {
            el.classList.remove('konSymbol');
        }
    });

    winState();
}

function winState() {
    
}

(function initApp() {
    document.addEventListener('keyup', (e) => {
        keyCheck(e);
    })
})()