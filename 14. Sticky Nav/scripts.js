
const navBar = document.querySelector('#main');
const navLoc = navBar.offsetTop;
let navFixed = false;


function checkScroll(e) {
    if(((window.scrollY > navLoc) && !navFixed) || ((window.scrollY <= navLoc) && navFixed)) {
        navBar.classList.toggle('relativeNav');
        navBar.classList.toggle('fixedNav');
        navFixed = !navFixed;
    }
}


(function initApp(){
    console.log(navBar);
    window.addEventListener('scroll', (e) => {
        checkScroll(e);
    })
})();