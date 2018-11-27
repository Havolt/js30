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
};

function gameEngine() {
    showMoles(molesPos);
    setTimeout(() => {
        gameEngine();
    }, 1000 / 100)
};

function showMoles(arr) {
    molesPos.map((el, ind) => {
        if(el == 1) {
            holes[ind].classList.add('up');
        }
    })
};

function popUp(arr) {
    const availPos = []
    molesPos.map((el, ind) => {
        if(el == 0) {
            availPos.push(ind);
        }
    });
    const rndNum = Math.floor(Math.random() * availPos.length);
    molesPos[availPos[rndNum]] = 1;
    const rndTime = ((Math.ceil(Math.random() * 10)) * 150);
    console.log(rndTime)
    setTimeout(() => {
        popUp();
    }, rndTime)
};

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
};

function hitMole(e) {
    const moleNum = parseInt(e.target.classList[1].split('').splice(4).join()) - 1;
    console.log(moleNum)
}

function evtLstn () {
    holes.forEach((el) => {
        el.addEventListener('click', (e) => {
            hitMole(e);
        })
    })
};

(function initApp() {
    console.log(moles);
    evtLstn();
})()