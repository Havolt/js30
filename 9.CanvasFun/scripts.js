
const cnvInfo = {
    el : document.querySelector('#cnv'),
    width: 800,
    height: 580,
    lastPos: {x: 0, y: 0}
}
const ctx = cnvInfo.el.getContext('2d');



function defineCanvas(cob) {
    cob.el.width = cob.width;
    cob.el.height = cob.height;
    cob.el.style.width = cob.width;
    cob.el.style.height = cob.height;
}

function drawToCanvas(x, y, rgb) {
    console.log(x, y, rgb)
    ctx.fillStyle=`rgb(${rgb.r},${rgb.g},${rgb.b})`;
    ctx.fillRect(x, y, 5, 5)
    // ctx.beginPath();
    // ctx.moveTo();
    // ctx.lineTo();
    // ctx.stroke();
    cnvInfo.lastPos.x = x;
    cnvInfo.lastPos.y = y;
}

function evtListeners() {
    cnvInfo.el.addEventListener('mousedown', () => {
        const rgb = {
            r: Math.floor(Math.random() * 220),
            g: Math.floor(Math.random() * 220),
            b: Math.floor(Math.random() * 220)
        }
        cnvInfo.el.onmousemove = (evt) => {
            drawToCanvas(evt.offsetX, evt.offsetY, rgb)
            console.log(evt);
        }
    })
    cnvInfo.el.addEventListener('mouseup', (evt) => {
        cnvInfo.el.onmousemove = null;
    })
    cnvInfo.el.addEventListener('mouseout', (evt) => {
        cnvInfo.el.onmousemove = null;
    })
}

(function initApp(){
    defineCanvas(cnvInfo);
    
    evtListeners();
})()