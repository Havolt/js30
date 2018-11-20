
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sortNames(arr) {
    const bandCopy = [];

    bands.map((el, ind) => {
        if(ind == 0) {
            bandCopy.push(el);
        } else {

            let tmpEl = removeArticle(el)
            console.log(tmpEl)

        }
    })

    console.log(bandCopy);

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

(function initApp() {
    sortNames(bands);
})();