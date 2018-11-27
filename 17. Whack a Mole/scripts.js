const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let gameTimer = 0;
let gameInProgress = false;

const molesPos = [0, 0, 0, 0, 0, 0];

function startGame() {
    gameInProgress = true;
    gameTimer = 10;
    gameEngine();
    setTimeout(() => {
        countDown();
    }, 1000)
    popUp(molesPos);
}

function gameEngine() {
    showMoles(molesPos);
    setTimeout(() => {
        gameEngine();
    }, 1000 / 100)
}

function showMoles(arr) {
    molesPos.map((el, ind) => {
        if(el == 1) {
            holes[ind].classList.add('up');
        }
    })
}

function popUp(arr) {
    const availPos = []
    molesPos.map((el, ind) => {
        if(el == 0) {
            availPos.push(ind);
        }
    });
    const rndNum = Math.floor(Math.random() * availPos.length);
    console.log(availPos);
    molesPos[availPos[rndNum]] = 1;
}

function countDown() {
    gameTimer -= 1;
    if(gameTimer == 0) {
        gameInProgress = false;
    }
    if(gameTimer > 0) {
        setTimeout(() => {
            countDown();
        }, 1000)
    } else {
        gameInProgress = false;
    }
}

(function initApp() {
    console.log(moles);
})()