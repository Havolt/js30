
const navBar = document.querySelector('#main');


function checkScroll(e) {
    if(window.scrollY > navBar.offsetTop) {
        console.log('yup');
    }
}


(function initApp(){
    console.log(navBar);
    window.addEventListener('scroll', (e) => {
        checkScroll(e);
    })
})();