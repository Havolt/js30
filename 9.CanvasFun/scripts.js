
const cnvInfo = {
    el : document.querySelector('#cnv'),
    width: 800,
    height: 580
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
    
}

function evtListeners() {
    cnvInfo.el.addEventListener('mousedown', () => {
        const rgb = {
            r: Math.floor(Math.random() * 220),
            g: Math.floor(Math.random() * 220),
            b: Math.floor(Math.random() * 220)
        }
        cnvInfo.el.onmousemove = (evt) => {
            drawToCanvas(evt.clientX, evt.clientY, rgb)
        }
    })
    cnvInfo.el.addEventListener('mouseup', (evt) => {
        cnvInfo.el.onmousemove = null;
    })
}

(function initApp(){
    defineCanvas(cnvInfo);
    
    evtListeners();
})()