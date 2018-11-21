
const navBar = document.querySelector('#main');
const navLoc = navBar.offsetTop;
let navFixed = false;
let notFirstScroll = false;


function checkScroll(e) {
    if((((window.scrollY > navLoc) && !navFixed) || ((window.scrollY <= navLoc) && navFixed)) && !notFirstScroll) {
        navBar.classList.toggle('relativeNav');
        navBar.classList.toggle('fixedNav');
        document.querySelector('.logo').classList.remove('logoHide');
        document.querySelector('.logo').classList.toggle('logoShow');
        navFixed = !navFixed;
        notFirstScroll = true;
    } else if(((window.scrollY > navLoc) && !navFixed) || ((window.scrollY <= navLoc) && navFixed)) {
        navBar.classList.toggle('relativeNav');
        navBar.classList.toggle('fixedNav');
        document.querySelector('.logo').classList.toggle('logoHideAn');
        document.querySelector('.logo').classList.toggle('logoShow');
        navFixed = !navFixed;
    }
}


(function initApp(){
    console.log(navBar);
    window.addEventListener('scroll', (e) => {
        checkScroll(e);
    })
})();