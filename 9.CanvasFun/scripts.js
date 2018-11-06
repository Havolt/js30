
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
    ctx.strokeStyle=`rgb(${rgb.r},${rgb.g},${rgb.b})`;
    ctx.beginPath();
    ctx.moveTo(cnvInfo.lastPos.x, cnvInfo.lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    cnvInfo.lastPos.x = x;
    cnvInfo.lastPos.y = y;
}

function evtListeners() {
    cnvInfo.el.addEventListener('mousedown', (e) => {
        cnvInfo.lastPos.x = e.offsetX;
        cnvInfo.lastPos.y = e.offsetY;
        const rgb = {
            r: Math.floor(Math.random() * 220),
            g: Math.floor(Math.random() * 220),
            b: Math.floor(Math.random() * 220)
        }
        cnvInfo.el.onmousemove = (evt) => {
            drawToCanvas(evt.offsetX, evt.offsetY, rgb)
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