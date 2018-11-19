
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
    
    if(arrOkay) {
        fillCharacters();
    }
    
}

function fillCharacters() {
    console.log(userInput);
}

(function initApp() {
    document.addEventListener('keyup', (e) => {
        keyCheck(e);
    })
})()