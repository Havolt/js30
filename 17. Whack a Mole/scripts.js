const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let gameTimer = 0;
let gameInProgress = false;
let score = 0;

const molesPos = [0, 0, 0, 0, 0, 0];

function startGame() {
    if(!gameInProgress) {
        document.querySelector('.startButton').innerHTML = 'Playing..'
        document.querySelector('.startButton').classList.add('buttonDeactivate');
        score = 0;
        scoreBoard.innerHTML = score;
        gameInProgress = true;
        gameTimer = 10;
        gameEngine();
        setTimeout(() => {
            countDown();
        }, 1000)
        popUp(molesPos);
    }
};

function gameEngine() {
    showMoles(molesPos);
    if(gameInProgress){
        setTimeout(() => {
            gameEngine();
        }, 1000 / 100)
    }
};

function showMoles() {
    molesPos.map((el, ind) => {
        if(el == 1) {
            holes[ind].classList.add('up');
        }
        else {
            holes[ind].classList.remove('up');
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
    const rndTime = ((Math.ceil(Math.random() * 10)) * 180);
    const rndEnd = (((Math.ceil(Math.random() * 10)) * 100) + 220);
    setTimeout(() => {
        if(molesPos[availPos[rndNum]] == 1) {
            molesPos[availPos[rndNum]] = 0;
        }
    }, rndEnd)
    if(gameInProgress) {
        setTimeout(() => {
            popUp();
        }, rndTime)
    };
};

function countDown() {
    gameTimer -= 1;
    if(gameTimer > 0) {
        setTimeout(() => {
            countDown();
        }, 1000)
    } else {
        endGame(molesPos);
    }
};

function hitMole(e) {
    if(e.target.classList[0] == 'mole') {
        const moleNum = parseInt(e.target.parentElement.classList[1].split('').splice(4).join()) - 1;
        molesPos[moleNum] = 0;
        score++;
        scoreBoard.innerHTML = score;
    }
    
}

function endGame(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
    showMoles()
    gameInProgress = false;
    document.querySelector('.startButton').innerHTML = 'Start!';
}

function evtLstn () {
    holes.forEach((el) => {
        el.addEventListener('click', (e) => {
            hitMole(e);
        })
    })
};

(function initApp() {
    evtLstn();
})()