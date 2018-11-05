
const canvasDetails = {
    el : document.querySelector('#cnv'),
    width: 800,
    height: 580
}
const ctx = canvasDetails.el.getContext('2d');



function defineCanvas(cob) {
    cob.el.width = cob.width;
    cob.el.height = cob.height;
    cob.el.style.width = cob.width;
    cob.el.style.height = cob.height;
}

function testDraw(cob) {
    ctx.fillStyle="black";
    ctx.fillRect(0, 0, cob.width, cob.height)
    ctx.fillStyle="white";
    ctx.font = "30px arial"
    ctx.fillText('Test Text', 100, 100)
};

(function initApp(){
    defineCanvas(canvasDetails);
    testDraw(canvasDetails)
})()