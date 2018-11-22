console.log('hi');

let mouseIsDown = false;


(function initApp() {
    document.querySelector('.items').addEventListener('mousedown', (e) => {
        mouseIsDown = true;
    })
    document.querySelector('.items').addEventListener('mouseup', (e) => {
        mouseIsDown = false;
    })
    document.querySelector('.items').addEventListener('mousemove', (e) => {
        if(mouseIsDown) {
            console.log(e);
        }
    })
})();