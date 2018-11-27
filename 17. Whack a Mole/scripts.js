const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let gameTimer = 0;
let gameInProgress = false;

const molesPos = [0, 0, 0, 0, 0, 0];

function startGame() {
    gameInProgress = true;
    gameTimer = 10;
    setTimeout(() => {
        gameEngine();
    }, 1000)
    popUp(molesPos);
}

function gameEngine() {
    countDown();
    if(gameTimer > 0) {
        setTimeout(() => {
            gameEngine();
        }, 1000)
    } else {
        gameInProgress = false;
    }
}

function popUp(arr) {

}

function countDown() {
    gameTimer -= 1;
    if(gameTimer == 0) {
        gameInProgress = false;
    }
}

(function initApp() {
    console.log(moles);
})()