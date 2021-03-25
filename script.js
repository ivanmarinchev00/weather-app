const apikey = "4f0c5f237b428cfe861db9dc06e5875a"

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherBycity(city){
const response = await fetch(url(city),{
    origin: "cors"
});
const responseData = await response.json();

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


console.log(responseData, KtoC(responseData.main.temp));

addWeatherToPage(responseData);
}

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML=`
    <small>It is</small>
    <h2>${temp}</h2>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
    `;

    main.innerHTML = "";

    main.appendChild(weather); 
}

function KtoC(K){
    return (K - 273.15).toFixed(2);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherBycity(city);
    }
})

