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
            return el;
        }
    })
    document.querySelector('.displayList').innerHTML = '';
    if(word !== '' && word !== ' '){
        makeList(filterCities)
    }
}

function makeList(arr) {
    let intervals = 10;
    if(arr.length < 10) { intervals = arr.length; }
    for(let i = 0; i < intervals; i++) {
        makeItem(arr[i]);
    }
}

function makeItem(item) {
    const dc = document.querySelector('.displayList')
    
    const dcBack = document.createElement('div');
    dcBack.classList.add('listCityBack')
    const dcCity = document.createElement('div');
    dcCity.innerHTML = item.city;
    dcCity.classList.add('listCityName');
    const dcPop = document.createElement('div');
    dcPop.innerHTML = item.population;
    dcPop.classList.add('listCityPop');
    
    dc.appendChild(dcBack);
    dcBack.appendChild(dcCity);
    dcBack.appendChild(dcPop);
    
    //dc.appendChild(dc);
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
    
