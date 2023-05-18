const inputBox = document.querySelector('.input-inputBox');
const searchBtn = document.querySelector("#searchBTN");
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind-speed');


function checkweather(city) {
    const API = '371f1e77531ae1f46690a671d4eba994';
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}';

    const weather_data = await fetch('${URL}').then(Response => Response.json());

    if(weather_data === '404'){
        
        return;
    }


    temp.innerHTML = "${weather_data.main.temp}";
    description.innerHTML = "${weather_data.weather[0].description}";
    humidity.innerHTML = '${weather_data.main.humidity}%';
    wind_speed.innerHTML = '${weather_data.wind.speed}km/H';

    switch(weather_data.weather[0].main){
        case 'clouds':
        weather_img.src = "image/cloud.jpg";
        break;
        case 'clear':
        weather_img.src = "image/clear.jpg";
        break;

        case 'rain':
        weather_img.src = "image/rain.jpg";
        break;

        case 'mist':
        weather_img.src = "image/main.jpg";
        break;

        case 'snow':
        weather_img.src = "image/snow.jpg";
        break;

    }
}
searchBtn.addEventListener('click', () => {
    checkweather(inputBox.value);
});









































// console.log(tag);