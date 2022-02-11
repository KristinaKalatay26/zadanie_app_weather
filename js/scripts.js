'use strict';

const baseUrl = 'https://danepubliczne.imgw.pl/api/data/synop/station/';

const appSearch = document.querySelector('.app-search');

async function getWeather(city) {
    try {
        const response = await fetch(`${baseUrl}${city.toLowerCase()}`);

        const data = await response.json();

        return data;

    } catch (err) {
        console.log(`To jest ${err}`);
    }
}

function processWeather(city) {
    getWeather(city).then(data => {
        document.querySelector('.app-city').innerHTML = data.stacja;
        document.querySelector('.app-data').innerHTML = data.data_pomiaru;
        document.querySelector('.app-temperature').innerHTML = `${Math.round(data.temperatura)}<span>°c</span>`;
    });
}

function getResult(e) {
    if (e.key === 'Enter') {
        processWeather(appSearch.value);
    }    
}

appSearch.addEventListener('keypress', getResult);

processWeather('warszawa');

















