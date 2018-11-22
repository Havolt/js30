


const items = document.querySelector('.items');
console.log(items)

let mouseIsDown = false;

let prevMouseX;
let currScrollLeft = 0;

function scrollItems(prevM, currM) {
    const diffM = currM - prevM;
    console.log(diffM + currScrollLeft);
    currScrollLeft -= diffM;
    console.log(currScrollLeft);
    if(currScrollLeft < 0) {
        currScrollLeft = 0;
    }
    else if (currScrollLeft > items.scrollWidth - window.innerWidth) {
        currScrollLeft = items.scrollWidth - window.innerWidth;
    }

    items.scrollTo(currScrollLeft, 0);
}

(function initApp() {
    items.addEventListener('mousedown', (e) => {
        mouseIsDown = true;
    })
    items.addEventListener('mouseup', (e) => {
        mouseIsDown = false;
        prevMouseX = 0;
    })
    items.addEventListener('mousemove', (e) => {
        if(mouseIsDown) {
            if(prevMouseX) {
                scrollItems(prevMouseX, e.clientX);
            }
            prevMouseX = e.clientX;
        }
    })
})();