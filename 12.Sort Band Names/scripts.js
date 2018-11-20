
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsCopy = [];

function sortNames(arr) {
    bands.map((el, ind) => {
        if(ind == 0 ) {
            bandsCopy.push(el);
        } else {
            let tmpEl = removeArticle(el)
            findAndPlaceEl(bandsCopy, tmpEl, el);
        }
    })
    //console.log(bandsCopy);
}

function removeArticle(el) {
    const articles = ['the ', 'a ', 'an ']
    el = el.split('');
    
    for(let i = 0; i < articles.length; i++){
        let notMatch = false;
        for(let j = 0; j < articles[i].length; j++) {
            if(el[j].toLowerCase() != articles[i][j]) {
                notMatch = true;
            }
        }
        if(!notMatch) {
            el.splice(0, articles[i].length);
            break; 
        }
    }
    return el.join('');
}



function findAndPlaceEl(arr, el, realEl) {
   // console.log(arr, el)
    for(let i = 0; i < arr.length; i++) {
        //Gets array item without article
        let tmpArrEl = removeArticle(arr[i]);
        //console.log(el);
        for(let j = 0; j < el.length; j++) {
            //console.log(j)
            if(tmpArrEl[j]) {
                getLowestCharCode(tmpArrEl[j], el[j]);
            } 
        }
    }
}

function getLowestCharCode(curr, newest) {
    //console.log(curr, newest)
    if(newest.toLowerCase().charCodeAt(0) < curr.toLowerCase().charCodeAt(0)) {
        console.log('its lower')
    }
    else if(newest.toLowerCase().charCodeAt(0) == curr.toLowerCase().charCodeAt(0)) {
        console.log('its the same')
    } else {
        console.log('it\'s higher')
    }
    // tmpArrEl.toLowerCase().charCodeAt(i)
}

(function initApp() {
    sortNames(bands);
})();