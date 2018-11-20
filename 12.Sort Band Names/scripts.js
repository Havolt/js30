
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsCopy = [];

function sortNames(arr, arrCopy) {
    arr.map((el, ind) => {
        if(ind == 0 ) {
            arrCopy.push(el);
        } else {
            let tmpEl = removeArticle(el)
            findAndPlaceEl(arrCopy, tmpEl, el);
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
   let breakOut = false;
    for(let i = 0; i < arr.length; i++) {
        //Gets array item without article
        let tmpArrEl = removeArticle(arr[i]);
        //console.log(el);
        for(let j = 0; j < el.length; j++) {
            //console.log(j)
            if(tmpArrEl[j]) {
                const elLoc = getLowestCharCode(tmpArrEl[j], el[j]);
                if(elLoc == -1) {
                    arr.splice(i, 0, realEl);
                    breakOut = true;
                    break;
                } else if(elLoc == 1) {
                    break;
                }
            } 
        }
        if(i == arr.length-1) {
            arr.push(realEl);
            break;
        }
        if(breakOut) {
            break;
        }
    }
}

function getLowestCharCode(curr, newest) {
    //console.log(curr, newest)
    if(newest.toLowerCase().charCodeAt(0) < curr.toLowerCase().charCodeAt(0)) {
        console.log('its lower')
        return -1;
    }
    else if(newest.toLowerCase().charCodeAt(0) == curr.toLowerCase().charCodeAt(0)) {
        console.log('its the same')
        return 0;
    } else {
        console.log('it\'s higher')
        return 1;
    }
    // tmpArrEl.toLowerCase().charCodeAt(i)
}

(function initApp() {
    sortNames(bands, bandsCopy);
})();