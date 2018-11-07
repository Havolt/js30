
const cnvInfo = {
    el : document.querySelector('#cnv'),
    width: 800,
    height: 580,
    lastPos: {x: 0, y: 0},
    touchCount: 0
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
    ctx.lineWidth = 10;
    ctx.lineCap="round";
    ctx.stroke();
    cnvInfo.lastPos.x = x;
    cnvInfo.lastPos.y = y;
}

function drawDot (x, y) {
    let rd = Math.floor(Math.random()*255);
    let bd = Math.floor(Math.random()*255);
    let gd = Math.floor(Math.random()*255);
    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);
    ctx.fillStyle=`rgb(${rd}, ${bd}, ${gd})`
    ctx.strokeStyle=`rgb(${rd}, ${bd}, ${gd})`
    ctx.fill();
    ctx.stroke();
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
            cnvInfo.touchCount++;
            drawToCanvas(evt.offsetX, evt.offsetY, rgb)
        }
    })
    cnvInfo.el.addEventListener('mouseup', (evt) => {
        console.log(cnvInfo.touchCount)
        if(cnvInfo.touchCount == 0) {
            drawDot(evt.offsetX, evt.offsetY);
        }
        cnvInfo.el.onmousemove = null;
        cnvInfo.lastPos.x = 0;
        cnvInfo.lastPos.y = 0;
        cnvInfo.touchCount = 0;
    })
    cnvInfo.el.addEventListener('mouseout', (evt) => {
        cnvInfo.el.onmousemove = null;
        cnvInfo.lastPos.x = 0;
        cnvInfo.lastPos.y = 0;
        cnvInfo.touchCount = 0;
    })
}

(function initApp(){
    defineCanvas(cnvInfo);
    
    evtListeners();
})()