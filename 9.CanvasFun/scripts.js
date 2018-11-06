
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

function drawToCanvas() {

}

function evtListeners() {
    cnvInfo.el.addEventListener('mousedown', (evt) => {
        cnvInfo.el.onmousemove = () => {
            console.log(evt)
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