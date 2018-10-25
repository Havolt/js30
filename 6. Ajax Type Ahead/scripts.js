const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

function getData () {
    fetch(endpoint)
        .then((res) => {
            if(res.status !== 200) {
                console.log('Problem Occured');
                return;
            }
            res.json().then((data) => {
                data.map( el => {
                    cities.push(el);
                })
                console.log(cities);
            })
        .catch((err) => {
            console.log('Fetch Error');
        })
    })
}

function checkList(word) {
    
    const filterCities = cities.filter((el) => {
        if(el.city.toUpperCase().includes(word.toUpperCase())) {
            console.log(el.city)
        }
    })
    console.log(word);
}

function eventListeners() {
    document.querySelector('.cityInput').addEventListener('input', (e) => {
        checkList(document.querySelector('.cityInput').value);
    })
}

(function initApp() {
    getData();
    eventListeners();
})()
    
